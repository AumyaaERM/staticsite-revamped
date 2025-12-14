import React from 'react';

export const CompaniesSection: React.FC = () => {
  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Decorative lines and title */}
        <div className="flex items-center justify-center mb-8 md:mb-12">
          <div className="flex-1 h-px hidden sm:block" style={{ background: '#D0D0C8', maxWidth: '445px' }}></div>
          <h3 className="text-[24px] sm:text-[30px] md:text-[36px] leading-[122%] mx-4 md:mx-8 tracking-[0.01em] text-center sm:text-right" style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            color: '#5E5B49'
          }}>
            Companies
          </h3>
          <div className="flex-1 h-px hidden sm:block" style={{ background: '#D0D0C8', maxWidth: '445px' }}></div>
        </div>
        
        {/* Single Companies Image */}
        <div className="flex items-center justify-center overflow-x-auto">
          <img 
            src="/images/about/companies-logos.png" 
            alt="Companies we work with"
            className="max-w-full md:max-w-none h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
