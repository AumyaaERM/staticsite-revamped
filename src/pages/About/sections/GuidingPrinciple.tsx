import React from 'react';

export const GuidingPrinciple: React.FC = () => {
  return (
    <div className="bg-white py-6 md:py-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[20px] sm:text-[26px] md:text-[32px] leading-[130%] md:leading-[20px] uppercase tracking-[0.04em] mb-6 md:mb-0" style={{
          fontFamily: 'Days One, sans-serif',
          fontWeight: 400
        }}>
          <span style={{ color: '#000000' }}>Our </span>
          <span style={{ color: '#FCD421' }}>Guiding principle</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text and Image */}
          <div className="space-y-4 md:space-y-6">
            <div className="text-justify" style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.06em',
              color: '#000000'
            }}>
              <p className="text-base md:text-xl leading-[160%] md:leading-[32px]">
                At Aumyaa, simplicity, effectiveness, and seamless collaboration across diverse expertise empower us to navigate complexities, adapt globally, and deliver impactful results.
              </p>
            </div>
            <div className="rounded-[15px] md:rounded-[20px] overflow-hidden">
              <img
                  src="/images/about/team-collaboration.png"
                  alt="Team collaboration"
                  className="w-full h-[180px] sm:h-[220px] md:h-[272px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Hexagonal Diagram Image */}
          <div className="flex items-center justify-center mt-4 lg:mt-0">
            <img
                src="/images/about/key-differentiators.png"
                alt="Aumyaa Key Differentiators"
                className="w-full max-w-md lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
