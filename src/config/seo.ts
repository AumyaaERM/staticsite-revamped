/**
 * Single source of truth for SEO across the site.
 *
 *  • Page titles / descriptions (approved copy — change wording only with sign-off)
 *  • Structured data (JSON-LD) that tells Google who Aumyaa is and what each page is
 *  • The list of pages that go into sitemap.xml
 *
 * Used in the browser (src/components/SEO.tsx) AND at build time
 * (scripts/vite-plugin-seo.ts), which writes per-page HTML, sitemap.xml and
 * Netlify _redirects. Keep this file free of browser-only or Node-only APIs.
 *
 * ➜ When you add a new public page in App.tsx, add it to ROUTE_META below.
 */

/** The live, primary domain. www.aumyaa.com 301-redirects here, so all canonicals must use this. */
export const SITE_URL = 'https://aumyaa.com';
export const SITE_NAME = 'Aumyaa Consulting';
export const LEGAL_NAME = 'Aumyaa Consulting Services LLP';
export const DEFAULT_OG_IMAGE = '/images/seo/og-default.jpg';
export const LOGO_IMAGE = '/images/seo/aumyaa-logo-512.png';

type SchemaKind = 'home' | 'about' | 'contact' | 'service' | 'person' | 'collection' | 'page';

export interface PageMeta {
  /** Page name in Google results and browser tabs (aim for ≤ 60 characters). */
  title: string;
  /** Grey snippet under the title in Google (aim for 120–160 characters). */
  description: string;
  /** true = keep out of Google (admin, login, redirects, 404). */
  noindex?: boolean;
  /** Social-share image (absolute or site-relative URL). */
  image?: string;
  /** Short label used in breadcrumbs / structured data. */
  name?: string;
  /** What kind of page this is, for structured data. */
  schema?: SchemaKind;
  /** Service type for consulting / coaching / training pages. */
  serviceType?: string;
  /** Sitemap priority (0–1). Pages without it are left out of the sitemap. */
  priority?: number;
}

export const DEFAULT_META: PageMeta = {
  title: 'Aumyaa Consulting | AI-Enabled Business Consulting & Risk Advisory',
  description:
    'Aumyaa Consulting Services LLP is an AI-enabled business consulting and risk advisory firm in India offering technology, risk, ESG, compliance and DPDP advisory, executive coaching and training.',
  name: 'Home',
  schema: 'home',
  priority: 1.0,
};

export const NOT_FOUND_META: PageMeta = {
  title: 'Page Not Found | Aumyaa Consulting',
  description: 'The page you are looking for does not exist or has moved.',
  noindex: true,
};

export const ROUTE_META: Record<string, PageMeta> = {
  '/': DEFAULT_META,
  '/about': {
    title: 'About Us | Aumyaa Consulting',
    description:
      'Meet Aumyaa Consulting Services LLP — an AI-enabled business consulting and risk advisory firm in India. Our story, leadership team, guiding principles and clients.',
    name: 'About Us',
    schema: 'about',
    priority: 0.8,
  },
  '/careers': {
    title: 'Careers | Aumyaa Consulting',
    description:
      'Work with Aumyaa full time, part time, on contract or on demand. Submit your profile and we will reach out when a suitable opportunity arises.',
    name: 'Careers',
    priority: 0.6,
  },
  '/contact': {
    title: 'Contact Us | Aumyaa Consulting',
    description:
      'Get in touch with Aumyaa Consulting for business, technology, risk, ESG and compliance consulting, executive coaching or training enquiries.',
    name: 'Contact Us',
    schema: 'contact',
    priority: 0.8,
  },
  '/coaching': {
    title: 'Coaching with Manjula Banerji | Aumyaa',
    description:
      'Four decades of corporate excellence meets transformative coaching. Leadership and personal growth coaching with Manjula Banerji, ICF-PCC certified coach.',
    name: 'Coaching with Manjula Banerji',
    schema: 'person',
    priority: 0.7,
  },
  '/executive-coaching': {
    title: 'Executive Coaching & PBGA Programme | Aumyaa',
    description:
      'Executive coaching for senior leaders in professional services firms, MNCs and corporates. Book a 30-minute PBGA (Personal Brand Growth Architecture) exploration call.',
    name: 'Executive Coaching',
    schema: 'service',
    serviceType: 'Executive coaching',
    priority: 0.8,
  },
  '/training': {
    title: 'Training & Webinars | Aumyaa Learning Academy',
    description:
      'Aumyaa Learning Academy — professional training and webinar series in AI consulting, cybersecurity, risk management, compliance and business ethics.',
    name: 'Training & Webinars',
    schema: 'service',
    serviceType: 'Professional training',
    priority: 0.7,
  },
  '/consulting/business-consulting': {
    title: 'Business Consulting | Aumyaa Consulting',
    description:
      'Empowering your vision, elevating your business. Aumyaa business consulting helps you navigate change, sharpen strategy and grow with clarity.',
    name: 'Business Consulting',
    schema: 'service',
    serviceType: 'Business consulting',
    priority: 0.9,
  },
  '/consulting/tech-consulting': {
    title: 'IT & Technology Consulting | Aumyaa Consulting',
    description:
      'Digital transformation, AI consulting, cloud and automation services that convert bold ideas into connected, intelligent enterprises.',
    name: 'IT & Technology Consulting',
    schema: 'service',
    serviceType: 'IT and technology consulting',
    priority: 0.9,
  },
  '/consulting/risk-consulting': {
    title: 'Risk Advisory & Internal Controls | Aumyaa Consulting',
    description:
      'Proactive risk advisory, internal controls and internal audit services that pair smart planning with pragmatic controls so you can scale with confidence.',
    name: 'Risk Advisory',
    schema: 'service',
    serviceType: 'Risk advisory',
    priority: 0.9,
  },
  '/consulting/esg-consulting': {
    title: 'ESG Consulting & Sustainability | Aumyaa Consulting',
    description:
      'Greener practices, sustainable growth. ESG strategy, materiality assessment, reporting and net-zero / climate-risk consulting for Indian businesses.',
    name: 'ESG Consulting',
    schema: 'service',
    serviceType: 'ESG and sustainability consulting',
    priority: 0.9,
  },
  '/consulting/compliance-services': {
    title: 'Compliance Services | Aumyaa Consulting',
    description:
      'Navigate complex compliance with confidence. Expert consulting to meet regulatory requirements, mitigate risk and maintain the highest compliance standards.',
    name: 'Compliance Services',
    schema: 'service',
    serviceType: 'Regulatory compliance consulting',
    priority: 0.9,
  },
  '/consulting/dpdp-compliance': {
    title: 'DPDP Act Compliance & Privacy Advisory | Aumyaa',
    description:
      'Digital Personal Data Protection Act, 2023 compliance and privacy advisory. Take the free DPDP self-assessment and find the right service for your organisation.',
    name: 'DPDP Compliance',
    schema: 'service',
    serviceType: 'Data privacy (DPDP Act) compliance consulting',
    priority: 0.9,
  },
  '/consulting/dpdp-compliance/assessment': {
    title: 'DPDP Self-Assessment | Aumyaa',
    description: 'Redirecting to the Aumyaa DPDP compliance self-assessment.',
    noindex: true,
  },
  '/insights': {
    title: 'Insights: GRC, ESG & Cyber Resilience | Aumyaa',
    description:
      "Stay ahead with Aumyaa's expert analysis on the latest developments in GRC, ESG, cyber resilience and regulatory landscapes.",
    name: 'Insights',
    schema: 'collection',
    priority: 0.7,
  },
  '/downloads': {
    title: 'Downloads: Reports & Newsletters | Aumyaa',
    description:
      'Company profiles, industry newsletters and survey reports with expert insights on cybersecurity, DPDPA, ITGC, audit, risk, ESG and compliance.',
    name: 'Downloads',
    schema: 'collection',
    priority: 0.6,
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Aumyaa Consulting',
    description: 'How Aumyaa Consulting Services LLP collects, uses and protects your personal data.',
    name: 'Privacy Policy',
    priority: 0.2,
  },
  '/terms-of-use': {
    title: 'Terms of Use | Aumyaa Consulting',
    description: 'Terms and conditions for using the Aumyaa Consulting website.',
    name: 'Terms of Use',
    priority: 0.2,
  },
  '/cookies-policy': {
    title: 'Cookies Policy | Aumyaa Consulting',
    description: 'How the Aumyaa Consulting website uses cookies and how you can manage your preferences.',
    name: 'Cookies Policy',
    priority: 0.2,
  },
  '/login': {
    title: 'Login | Aumyaa',
    description: 'Aumyaa staff login.',
    noindex: true,
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

export const normalizePath = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, '') || '/' : '/';

export const absoluteUrl = (url: string) =>
  /^https?:\/\//.test(url) ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;

export const canonicalUrl = (pathname: string) => {
  const path = normalizePath(pathname);
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
};

/** Metadata for any pathname, including dynamic, private and unknown routes. */
export const getRouteMeta = (pathname: string): PageMeta => {
  const path = normalizePath(pathname);
  if (ROUTE_META[path]) return ROUTE_META[path];
  if (path === '/admin' || path.startsWith('/admin/')) {
    return { title: 'Admin | Aumyaa', description: 'Aumyaa admin area.', noindex: true };
  }
  // Individual articles refine this once loaded (see InsightDetailPage).
  if (path.startsWith('/insights/')) return { ...ROUTE_META['/insights'], priority: undefined };
  return NOT_FOUND_META;
};

/** Same slug rules as src/hooks/useInsights.ts — keep them in sync. */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

/** Insight sheet dates are DD/MM/YYYY → ISO YYYY-MM-DD (undefined if unparseable). */
export const insightDateToIso = (date: string): string | undefined => {
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(date.trim());
  if (!m) return undefined;
  return `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
};

/* ------------------------------------------------------------------ */
/*  Structured data (JSON-LD)                                           */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const ORGANIZATION = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: LEGAL_NAME,
  alternateName: ['Aumyaa Consulting', 'Aumyaa'],
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: absoluteUrl(LOGO_IMAGE), width: 512, height: 512 },
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  description: DEFAULT_META.description,
  email: 'contact@aumyaa.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2414, 4th Floor, Express Trade Tower 2, B36, Sector 132',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201301',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@aumyaa.com',
    areaServed: 'IN',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/aumyaaconsultingservicesllp/',
    'https://www.youtube.com/@aumyaalearningacademy5425',
    'https://www.instagram.com/aumyaa_training',
  ],
};

const WEBSITE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: ['Aumyaa', LEGAL_NAME],
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-IN',
};

const MANJULA = {
  '@type': 'Person',
  '@id': `${SITE_URL}/coaching#manjula-banerji`,
  name: 'Manjula Banerji',
  jobTitle: 'Executive Coach (ICF-PCC)',
  description:
    'Professionally certified executive coach (ICF-PCC) with over 40 years of corporate experience, Fellow Member of the Institute of Chartered Accountants of India, former Audit & Assurance Partner and Board Member at Deloitte Haskins & Sells LLP, and author of The Coaching Advantages in the New-Age Workplace.',
  worksFor: { '@id': ORG_ID },
  knowsAbout: ['Executive coaching', 'Leadership development', 'Career transitions'],
  url: `${SITE_URL}/coaching`,
};

const breadcrumb = (path: string, name: string) => ({
  '@type': 'BreadcrumbList',
  '@id': `${canonicalUrl(path)}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name, item: canonicalUrl(path) },
  ],
});

const PAGE_TYPE: Record<SchemaKind, string> = {
  home: 'WebPage',
  about: 'AboutPage',
  contact: 'ContactPage',
  service: 'WebPage',
  person: 'ProfilePage',
  collection: 'CollectionPage',
  page: 'WebPage',
};

export interface ArticleInput {
  title: string;
  description: string;
  image?: string;
  date?: string;
}

/** JSON-LD @graph for a page. Returns null for noindex pages. */
export const buildJsonLd = (pathname: string, meta: PageMeta, article?: ArticleInput) => {
  if (meta.noindex) return null;
  const path = normalizePath(pathname);
  const url = canonicalUrl(path);
  const kind: SchemaKind = meta.schema ?? 'page';
  const isHome = path === '/';
  const graph: Record<string, unknown>[] = [ORGANIZATION, WEBSITE];

  const webPage: Record<string, unknown> = {
    '@type': article ? 'WebPage' : PAGE_TYPE[kind],
    '@id': `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  };

  if (!isHome) {
    const label = article?.title ?? meta.name ?? meta.title.split('|')[0].trim();
    graph.push(breadcrumb(path, label));
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` };
  }

  if (kind === 'service' && !article) {
    const service: Record<string, unknown> = {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: meta.name,
      serviceType: meta.serviceType ?? meta.name,
      description: meta.description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'India' },
    };
    // TODO(PBGA PR): when the PBGA section is live on /executive-coaching, uncomment this so
    // Google can show the ₹999 exploration call. Structured data must match visible page content,
    // so it stays off until that section is merged.
    // if (path === '/executive-coaching') {
    //   service.offers = {
    //     '@type': 'Offer',
    //     name: 'PBGA Exploration Call (30 minutes)',
    //     price: '999',
    //     priceCurrency: 'INR',
    //     url,
    //     availability: 'https://schema.org/InStock',
    //   };
    // }
    graph.push(service);
    webPage.mainEntity = { '@id': `${url}#service` };
  }

  if (kind === 'person' && !article) {
    graph.push(MANJULA);
    webPage.mainEntity = { '@id': MANJULA['@id'] };
  }

  if (article) {
    const iso = article.date ? insightDateToIso(article.date) : undefined;
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: article.title.slice(0, 110),
      description: article.description,
      image: article.image ? [absoluteUrl(article.image)] : [absoluteUrl(DEFAULT_OG_IMAGE)],
      ...(iso ? { datePublished: iso, dateModified: iso } : {}),
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      inLanguage: 'en-IN',
    });
  }

  graph.push(webPage);
  return { '@context': 'https://schema.org', '@graph': graph };
};
