import React from 'react';

export const AIToolSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[48px] leading-[58px] mb-12 capitalize tracking-[0.06em]" style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          color: '#191600'
        }}>
          Our <span style={{ color: '#FCD421' }}>AI Tool</span> For Service Delivery Management
        </h2>
        
        {/* AI Tools Screenshot */}
        <div className="rounded-[30px] overflow-hidden border-[10px] border-white" style={{
          boxShadow: '-4px 29px 43px -10px rgba(25, 22, 0, 0.12)'
        }}>
          <img 
            src="/images/about/ai-tools-screenshot.png" 
            alt="Aumyaa AI Tools Dashboard"
            className="w-full"
          />
        </div>
        
        {/* Bottom Description */}
        <div className="mt-12">
          <div className="flex items-center gap-5 px-8 py-6">
            <div className="flex-shrink-0 w-[100px] h-[100px] rounded-full flex items-center justify-center border border-black/10" style={{
              background: '#FFFFFF'
            }}>
              <span className="text-4xl">💎</span>
            </div>
            <div className="flex-1">
              <p className="uppercase tracking-[0.06em] mb-3" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                lineHeight: '22px',
                color: '#191600',
                fontWeight: 400
              }}>
                DATA DRIVEN DECISIONS
              </p>
              <p className="leading-[125%] tracking-[-0.01em]" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '24px',
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

