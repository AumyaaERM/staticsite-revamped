import React from 'react';
import { CoachHeroSection } from './sections/CoachHeroSection';
import { CoachStorySection } from './sections/CoachStorySection';
import { CoachStatsSection } from './sections/CoachStatsSection';
import { TransformativeFramework } from './sections/TransformativeFramework';
import { CoachingAdvantageSection } from './sections/CoachingAdvantageSection';
import { CoachingServicesSection } from './sections/CoachingServicesSection';

export const Coaching: React.FC = () => {
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

