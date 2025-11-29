import React, { useEffect } from 'react';
import { CareerHeroSection } from './sections/CareerHeroSection';

export const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page">
      <CareerHeroSection />
    </div>
  );
};

