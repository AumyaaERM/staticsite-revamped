import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTM_CONTAINER_ID = 'GTM-P4LN9HTS';
let hasInitializedGTM = false;

export const initGA = () => {
  if (hasInitializedGTM) {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  const hasScript = Array.from(document.scripts).some((script) => script.src.includes(`googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`));
  if (!hasScript) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
    document.head.appendChild(script);
  }
  hasInitializedGTM = true;
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_path: `${location.pathname}${location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  initGA();
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
};

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}
