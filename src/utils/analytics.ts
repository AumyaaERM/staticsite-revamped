import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const GA_MEASUREMENT_ID = 'G-TBDNTEW5S3';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getGtag(): typeof window.gtag | undefined {
  return typeof window !== 'undefined' ? window.gtag : undefined;
}

export const initGA = () => {
  getGtag();
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const gtag = getGtag();
    if (!gtag) {
      return;
    }
    const path = `${location.pathname}${location.search}`;
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: document.title,
    });
  }, [location]);
};

export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }
  gtag('event', eventName, eventParams ?? {});
};
