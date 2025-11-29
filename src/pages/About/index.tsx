import React, { useEffect } from 'react';
import './About.css';
import { HeroSectionAbout } from './sections/HeroSectionAbout';
import { AboutContent } from './sections/AboutContent';
import { GuidingPrinciple } from './sections/GuidingPrinciple';
import { AIToolSection } from './sections/AIToolSection';
import { TrustedBySection } from './sections/TrustedBySection';
import { CompaniesSection } from './sections/CompaniesSection';
import { LeadersSection } from './sections/LeadersSection';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <HeroSectionAbout />
      <AboutContent />
      <GuidingPrinciple />
      <AIToolSection />
      <TrustedBySection />
      <CompaniesSection />
      <LeadersSection />
    </div>
  );
};

