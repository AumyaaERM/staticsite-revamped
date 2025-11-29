import React, { useEffect } from 'react';
import { CoachHeroSection } from './sections/CoachHeroSection';
import { CoachStorySection } from './sections/CoachStorySection';
import { CoachStatsSection } from './sections/CoachStatsSection';
import { TransformativeFramework } from './sections/TransformativeFramework';
import { CoachingAdvantageSection } from './sections/CoachingAdvantageSection';
import { CoachingServicesSection } from './sections/CoachingServicesSection';

export const Coaching: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="coaching-page">
      <CoachHeroSection />
      <CoachStorySection />
      <CoachStatsSection />
      <TransformativeFramework />
      <CoachingAdvantageSection />
      <CoachingServicesSection />
    </div>
  );
};

