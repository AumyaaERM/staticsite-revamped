import React from 'react';
import { Target } from 'lucide-react';

export const CoachHeroSection: React.FC = () => {
  return (
    <div className="relative py-20 px-12 overflow-hidden" style={{ background: '#FCD421' }}>
      {/* Curved Road Background Pattern */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
        <svg viewBox="0 0 500 500" className="h-full w-full">
          <path 
            d="M 0 250 Q 125 100, 250 250 T 500 250" 
            stroke="black" 
            strokeWidth="40" 
            fill="none"
            strokeDasharray="20,10"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/coaching/coach-hero.png" 
              alt="Manjula Banerji - Leadership Coach"
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h1 className="text-[64px] leading-tight font-bold" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000'
            }}>
              Transforming Leaders for Tomorrow
            </h1>

            <p className="text-[20px] leading-relaxed" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#000000'
            }}>
              Four decades of corporate excellence meets transformation coaching methodology
            </p>

            {/* Target Icon */}
            <div className="absolute right-20 top-20">
              <div className="relative w-32 h-32">
                <Target className="w-full h-full text-red-500" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

