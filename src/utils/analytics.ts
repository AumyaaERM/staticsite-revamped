import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics Tracking ID - Replace with your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // e.g., 'G-ABC123XYZ'

// Initialize Google Analytics
export const initGA = () => {
  // Check if user has consented to cookies
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (cookieConsent === 'accepted') {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
      anonymize_ip: true, // GDPR compliance
    });

    // Make gtag globally available
    (window as any).gtag = gtag;

    console.log('Google Analytics initialized');
  }
};

// Hook to track page views
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (cookieConsent === 'accepted' && (window as any).gtag) {
      (window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
      console.log('Page view tracked:', location.pathname);
    }
  }, [location]);
};

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (cookieConsent === 'accepted' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
    console.log('Event tracked:', eventName, eventParams);
  }
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
