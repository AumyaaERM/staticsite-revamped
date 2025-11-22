import React from 'react';

export const GuidingPrinciple: React.FC = () => {
  return (
    <div className="bg-white py-8 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] leading-[20px] uppercase tracking-[0.04em]" style={{
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontWeight: 700
        }}>
          <span style={{ color: '#000000' }}>Our </span>
          <span style={{ color: '#FCD421' }}>Guiding principle</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and Image */}
          <div className="space-y-6">
            <div className="text-justify" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              lineHeight: '32px',
              letterSpacing: '0.06em',
              color: '#000000'
            }}>
              <p>
                At Aumyaa, simplicity, effectiveness, and seamless collaboration across diverse expertise empower us to navigate complexities, adapt globally, and deliver impactful results.
              </p>
            </div>
            <div className="rounded-[20px] overflow-hidden">
              <img
                  src="/images/about/team-collaboration.png"
                  alt="Team collaboration"
                  className="w-full h-[272px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Hexagonal Diagram Image */}
          <div className="flex items-center justify-center">
            <img
                src="/images/about/key-differentiators.png"
                alt="Aumyaa Key Differentiators"
                className="w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
