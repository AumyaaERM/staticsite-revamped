import React from 'react';
import { Phone } from 'lucide-react';
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


// Chat Button Component
const ChatButton: React.FC = () => {
  return (
    <button className="fixed bottom-8 right-8 bg-black text-yellow-400 font-bold px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:bg-gray-800 transition-all hover:scale-105 z-50">
      Chat With Us
      <Phone className="w-5 h-5" />
    </button>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
      <ChatButton />
    </div>
  );
};

export default Home;