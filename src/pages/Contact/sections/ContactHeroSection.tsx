import React from 'react';
import { AtSign, Smartphone, MapPin, Mail } from 'lucide-react';

export const ContactHeroSection: React.FC = () => {
  return (
    <div className="relative bg-black py-24 px-12 overflow-hidden">
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
        <div className="flex items-center justify-center gap-16">
          {/* Contact Icons */}
          <div className="flex items-center gap-12">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <AtSign className="w-16 h-16 text-white/80" strokeWidth={1.5} />
            </div>
            
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-white/80" strokeWidth={1.5} />
            </div>
            
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <MapPin className="w-16 h-16 text-white/80" strokeWidth={1.5} />
            </div>
            
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Mail className="w-16 h-16 text-white/80" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

