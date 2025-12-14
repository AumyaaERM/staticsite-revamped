import React, { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { TestimonialsSection } from '../../TestimonialsSection';
import { ClientsSection } from './sections/ClientsSection';
import { CoachingSection } from './sections/CoachingSection';
import { CoreValues } from './sections/CoreValues';
import { HeroSectionHome } from './sections/HeroSectionHome';
import { InFocusSection } from './sections/InFocusSection';
import { InsightsDownloads } from './sections/InsightsDownload';
import { ServicesSection } from './sections/ServicesSection';
import { WhoWeAreHome } from './sections/WhoWeAreHome';



const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-6 bg-white"></div>
      <HeroSectionHome />
      <WhoWeAreHome />
      <CoreValues />
      <ServicesSection />
      <InFocusSection />
      <CoachingSection />
      <InsightsDownloads />
      <ClientsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;