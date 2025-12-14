import React from 'react';
import { AtSign, Smartphone, MapPin, Mail } from 'lucide-react';

export const ContactHeroSection: React.FC = () => {
  return (
    <div className="relative bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/images/contact/hero-bg.png"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Contact Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <AtSign className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/80" strokeWidth={1.5} />
            </div>
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/80" strokeWidth={1.5} />
            </div>
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/80" strokeWidth={1.5} />
            </div>
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/80" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

