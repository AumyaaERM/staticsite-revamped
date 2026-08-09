import React, { useEffect } from 'react';
import { RegHubNavbar } from './sections/RegHubNavbar';
import { HeroSection } from './sections/HeroSection';
import { QuickStatsSection } from './sections/QuickStatsSection';
import { RegulatoryNewsSection } from './sections/RegulatoryNewsSection';
import { AiUtilitiesSection } from './sections/AiUtilitiesSection';
import { PricingSection } from './sections/PricingSection';
import { ConsultingCtaSection } from './sections/ConsultingCtaSection';
import { RegHubFooter } from './sections/RegHubFooter';

const RegHub: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <RegHubNavbar />
      <HeroSection />
      <QuickStatsSection />
      <RegulatoryNewsSection />
      <AiUtilitiesSection />
      <PricingSection />
      <ConsultingCtaSection />
      <RegHubFooter />
    </div>
  );
};

export default RegHub;
