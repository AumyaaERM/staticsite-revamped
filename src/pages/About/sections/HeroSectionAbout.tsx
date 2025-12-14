import React from 'react';

export const HeroSectionAbout: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="h-[250px] sm:h-[350px] md:h-[433px] bg-cover bg-center relative overflow-hidden">
        <img 
          src="/images/about/about-main.png"
          alt="Business meeting"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Yellow Banner */}
      <div className="py-4 md:py-6" style={{ background: '#FCD421' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[55px] leading-[130%] md:leading-[150%] text-center" style={{ 
            fontFamily: 'Days One, sans-serif',
            color: '#191600',
            fontWeight: 400
          }}>
            Aumyaa Consulting Services LLP
          </h1>
        </div>
      </div>
    </div>
  );
};

