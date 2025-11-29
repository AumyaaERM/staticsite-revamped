import React, { useEffect } from 'react';
import { ContactHeroSection } from './sections/ContactHeroSection';
import { ContactFormSection } from './sections/ContactFormSection';

export const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
};

