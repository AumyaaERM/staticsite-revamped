/**
 * Build-time SEO for the Netlify deployment (runs after `vite build`).
 *
 * For every page in src/config/seo.ts (+ every published Insight article) it writes:
 *   • dist/<page>.html   – a copy of index.html whose <head> already contains the right
 *                          title, description, canonical, Open Graph and JSON-LD, so
 *                          Google, Bing, LinkedIn, WhatsApp etc. see them without running JS
 *   • dist/sitemap.xml   – generated from the same list (no hand-maintained sitemap)
 *   • dist/_redirects    – maps each page to its HTML file, keeps the SPA working, and
 *                          returns a real HTTP 404 for unknown URLs (no "soft 404s")
 *
 * The React app itself is unchanged: every HTML file loads the same JS bundle.
 */
import fs from 'node:fs';
import path from 'node:path';
import Papa from 'papaparse';
import type { Plugin } from 'vite';
import {
  DEFAULT_OG_IMAGE,
  ROUTE_META,
  SITE_NAME,
  absoluteUrl,
  buildJsonLd,
  canonicalUrl,
  insightDateToIso,
  slugify,
} from '../src/config/seo';
import type { ArticleInput, PageMeta } from '../src/config/seo';

// Same published Google Sheet used by src/hooks/useInsights.ts
const INSIGHTS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwqNxyLeHbnD0sSvPgH1SlioMibYo0S5rEillup4eOtd4oCU0xB2oQKj__L8yvt4HgV9tgX1HEWw3n/pub?gid=877398146&single=true&output=csv';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** JSON for an inline <script> block: escape "<" so content can never close the tag. */
const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

const headTags = (pagePath: string, meta: PageMeta, article?: ArticleInput) => {
  const url = canonicalUrl(pagePath);
  const img = absoluteUrl(meta.image || DEFAULT_OG_IMAGE);
  const ld = buildJsonLd(pagePath, meta, article);
  const robots = meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:type" content="${article ? 'article' : 'website'}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    ld ? `<script type="application/ld+json" id="seo-jsonld">${safeJson(ld)}</script>` : '',
  ]
    .filter(Boolean)
    .map((t) => `    ${t}`)
    .join('\n');
};

interface InsightRow extends ArticleInput {
  slug: string;
}

const fetchInsights = async (): Promise<InsightRow[]> => {
  try {
    let csv = '';
    for (let attempt = 1; ; attempt++) {
      try {
        const res = await fetch(INSIGHTS_CSV_URL, { signal: AbortSignal.timeout(20000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        csv = await res.text();
        break;
      } catch (e) {
        if (attempt >= 3) throw e;
        await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
    }
    const { data } = Papa.parse<Record<string, string>>(csv, {
      header: true,
      skipEmptyLines: 'greedy',
      transformHeader: (h) => h.replace(/^\uFEFF/, '').trim().toLowerCase(),
    });
    return data
      .map((r) => ({
        title: (r['title'] ?? '').trim(),
        description: (r['description'] ?? '').trim(),
        image: (r['cover image url'] ?? '').trim() || undefined,
        date: (r['date'] ?? '').trim(),
        status: (r['status'] ?? '').trim().toLowerCase(),
      }))
      .filter((r) => r.title && r.status === 'published')
      .map((r) => ({ title: r.title, description: r.description, image: r.image, date: r.date, slug: slugify(r.title) }));
  } catch (err) {
    console.warn(`[seo] Could not load Insights sheet (${(err as Error).message}${(err as { cause?: { code?: string } }).cause?.code ? ` – ${(err as { cause?: { code?: string } }).cause?.code}` : ""}) – article pages will use defaults.`);
    return [];
  }
};

export default function seoPlugin(): Plugin {
  let outDir = 'dist';
  return {
    name: 'aumyaa-seo',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const templatePath = path.join(outDir, 'index.html');
      if (!fs.existsSync(templatePath)) return;
      const template = fs.readFileSync(templatePath, 'utf8');
      const marker = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;
      if (!marker.test(template)) throw new Error('[seo] index.html is missing the <!-- seo:start --> … <!-- seo:end --> block');

      const render = (pagePath: string, meta: PageMeta, article?: ArticleInput) => {
        let html = template.replace(marker, () => headTags(pagePath, meta, article).trimStart());
        // The hero image preload only helps the homepage.
        if (pagePath !== '/') html = html.replace(/\s*<link rel="preload" as="image" href="\/images\/home\/[^"]+" \/>/, '');
        return html;
      };
      const write = (file: string, html: string) => {
        const target = path.join(outDir, file);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, html);
      };

      // 1. Static pages
      const rules: string[] = [];
      for (const [route, meta] of Object.entries(ROUTE_META)) {
        if (route === '/') {
          write('index.html', render('/', meta));
          continue;
        }
        const file = `${route.slice(1)}.html`;
        write(file, render(route, meta));
        rules.push(`${route}  /${file}  200`);
      }

      // 2. Insight articles (best effort – the sheet is fetched live at build time)
      const insights = await fetchInsights();
      const seen = new Set<string>();
      for (const a of insights) {
        if (!a.slug || seen.has(a.slug)) continue;
        seen.add(a.slug);
        const route = `/insights/${a.slug}`;
        const meta: PageMeta = {
          title: `${a.title} | Aumyaa Insights`,
          description: a.description || 'Insight from Aumyaa Consulting.',
          image: a.image,
        };
        write(`insights/${a.slug}.html`, render(route, meta, a));
        rules.push(`${route}  /insights/${a.slug}.html  200`);
      }

      // 3. Neutral SPA fallback (no canonical/description) for articles published after this
      //    deploy, the admin area and 404s — the app sets the right tags once it loads.
      write(
        'spa-fallback.html',
        template
          .replace(marker, () => `<title>${esc(SITE_NAME)}</title>`)
          .replace(/\s*<link rel="preload" as="image" href="\/images\/home\/[^"]+" \/>/, ''),
      );

      // 4. Netlify _redirects (first match wins; real files such as /images/* are always served first)
      write(
        '_redirects',
        [
          '# Generated by scripts/vite-plugin-seo.ts — do not edit dist/_redirects by hand.',
          ...rules,
          '# Articles published after the last deploy, and the admin area: plain SPA',
          '/insights/*  /spa-fallback.html  200',
          '/admin  /spa-fallback.html  200',
          '/admin/*  /spa-fallback.html  200',
          '# Everything else is a real 404 (the React app shows the "Page not found" screen)',
          '/*  /spa-fallback.html  404',
          '',
        ].join('\n'),
      );

      // 5. sitemap.xml
      const today = new Date().toISOString().slice(0, 10);
      const urls = [
        ...Object.entries(ROUTE_META)
          .filter(([, m]) => !m.noindex && m.priority !== undefined)
          .sort(([, a], [, b]) => (b.priority ?? 0) - (a.priority ?? 0))
          .map(([route, m]) => ({ loc: canonicalUrl(route), lastmod: today, priority: m.priority as number })),
        ...insights
          .filter((a, i, arr) => a.slug && arr.findIndex((b) => b.slug === a.slug) === i)
          .map((a) => ({
            loc: canonicalUrl(`/insights/${a.slug}`),
            lastmod: (a.date && insightDateToIso(a.date)) || today,
            priority: 0.6,
          })),
      ];
      write(
        'sitemap.xml',
        [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls.map(
            (u) => `  <url><loc>${esc(u.loc)}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority.toFixed(1)}</priority></url>`,
          ),
          '</urlset>',
          '',
        ].join('\n'),
      );

      console.log(`[seo] Wrote ${rules.length + 1} page heads, ${urls.length} sitemap URLs (${seen.size} insights), _redirects.`);
    },
  };
}
