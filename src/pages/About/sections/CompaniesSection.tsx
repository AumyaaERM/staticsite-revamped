import React from 'react';

export const CompaniesSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Decorative lines and title */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px" style={{ background: '#D0D0C8', maxWidth: '445px' }}></div>
          <h3 className="text-[36px] leading-[122%] mx-8 tracking-[0.01em] text-right" style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            color: '#5E5B49'
          }}>
            Companies
          </h3>
          <div className="flex-1 h-px" style={{ background: '#D0D0C8', maxWidth: '445px' }}></div>
        </div>
        
        {/* Single Companies Image */}
        <div className="flex items-center justify-center">
          <img 
            src="/images/about/companies-logos.png" 
            alt="Companies we work with"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
