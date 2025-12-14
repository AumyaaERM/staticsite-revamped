import React from 'react';

export const CoachHeroSection: React.FC = () => {
  const credentials = [
    'Former Big 4 Partner',
    'ICF PCC Coach',
    'Author'
  ];

  return (
    <div className="relative py-10 md:py-16 px-4 sm:px-6 md:px-12 overflow-hidden" style={{ background: '#FCD421' }}>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left Side - Coach Image */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src="/images/coaching/coach-hero.png" 
              alt="Manjula Banerji - Leadership Coach"
              className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-sm h-auto"
            />
          </div>

          {/* Center - Content */}
          <div className="lg:col-span-6 text-center space-y-4 md:space-y-6 order-1 lg:order-2">
            <h1 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[64px] leading-tight font-bold" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000'
            }}>
              Transforming Leaders<br />for Tomorrow
            </h1>

            <p className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#000000'
            }}>
              Four decades of corporate excellence meets transformative coaching methodology
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-4 md:mt-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full" style={{ background: '#FFFFFF' }}></div>
                  <span className="text-[14px] sm:text-[16px] md:text-[20px] font-medium" style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#000000'
                  }}>
                    {credential}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Goal/Target Image */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end order-3">
            <img 
              src="/images/coaching/goal.png" 
              alt="Goal and roadmap to success"
              className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-sm h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

