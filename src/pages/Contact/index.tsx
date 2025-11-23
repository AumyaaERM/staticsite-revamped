import React from 'react';
import { ContactHeroSection } from './sections/ContactHeroSection';
import { ContactFormSection } from './sections/ContactFormSection';

export const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
};

