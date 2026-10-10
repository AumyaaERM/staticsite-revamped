import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl, canonicalUrl } from '../config/seo';
import type { PageMeta } from '../config/seo';

/** Create (or reuse) a tag in <head> so tags are never duplicated. */
const upsert = (selector: string, create: () => HTMLElement) => {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMeta = (key: 'name' | 'property', id: string, content: string) =>
  upsert(`meta[${key}="${id}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(key, id);
    return m;
  }).setAttribute('content', content);

/**
 * Apply page metadata to <head>: title, description, canonical, robots,
 * Open Graph, Twitter and JSON-LD structured data.
 * Pass `null` to do nothing (e.g. while an article is still loading).
 */
export const usePageMeta = (meta: PageMeta | null, jsonLd?: object | null) => {
  const { pathname } = useLocation();
  const title = meta?.title;
  const description = meta?.description;
  const noindex = !!meta?.noindex;
  const image = meta?.image;
  const ldString = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    if (!title || !description) return;

    const url = canonicalUrl(pathname);
    const img = absoluteUrl(image || DEFAULT_OG_IMAGE);

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');

    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    });
    canonical.setAttribute('href', url);

    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', img);

    // Structured data (JSON-LD data blocks are not executed, so the site's CSP is unaffected).
    const ld = upsert('script#seo-jsonld', () => {
      const s = document.createElement('script');
      s.id = 'seo-jsonld';
      s.type = 'application/ld+json';
      return s;
    });
    if (ldString) ld.textContent = ldString;
    else ld.remove();
  }, [pathname, title, description, noindex, image, ldString]);
};
