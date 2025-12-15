import React from 'react';

export const AIToolSection: React.FC = () => {
  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[24px] sm:text-[32px] md:text-[48px] leading-[130%] md:leading-[58px] mb-6 md:mb-12 capitalize tracking-[0.04em] md:tracking-[0.06em]" style={{
          fontFamily: 'Days One, sans-serif',
          fontWeight: 400,
          color: '#191600'
        }}>
          Our <span style={{ color: '#FCD421' }}>AI Tool</span> For Service Delivery Management
        </h2>
        
        {/* AI Tools Screenshot */}
        <div className="rounded-[15px] md:rounded-[30px] overflow-hidden border-[5px] md:border-[10px] border-white" style={{
          boxShadow: '-4px 29px 43px -10px rgba(25, 22, 0, 0.12)'
        }}>
          <img 
            src="/images/about/ai-tools-screenshot.png" 
            alt="Aumyaa AI Tools Dashboard"
            className="w-full"
          />
        </div>
        
        {/* Bottom Description */}
        <div className="mt-6 md:mt-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 px-4 md:px-8 py-4 md:py-6">
            <div className="flex-shrink-0 w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center border border-black/10" style={{
              background: '#FFFFFF'
            }}>
              <span className="text-2xl md:text-4xl">💎</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="uppercase tracking-[0.06em] mb-2 md:mb-3" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: '18px',
                color: '#191600',
                fontWeight: 400
              }}>
                DATA DRIVEN DECISIONS
              </p>
              <p className="leading-[140%] md:leading-[125%] tracking-[-0.01em] text-sm sm:text-base md:text-2xl" style={{
                fontFamily: 'Inter, sans-serif',
                color: '#191600',
                fontWeight: 400
              }}>
                Unlock insights with ease. Our database tool streamlines data management, amplifying smarter decisions. Effortless data management for powerful consulting outcomes. Efficiency starts here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

