import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ReadyToTransform: React.FC = () => {
  return (
    <div className="py-12 px-12" style={{ background: '#FFF8E1' }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[42px] leading-tight font-bold mb-6" style={{
          fontFamily: 'Inter, sans-serif',
          color: '#000000'
        }}>
          Ready to Transform Your Leadership Journey?
        </h2>

        <p className="text-[18px] mb-8" style={{
          fontFamily: 'Inter, sans-serif',
          color: '#666666'
        }}>
          Discover how the Transformative Transitions Framework™ can unlock your potential
        </p>

        <button 
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
          style={{
            background: '#FCD421',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '18px',
            color: '#000000'
          }}
        >
          Schedule Your Discovery Call
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <ArrowRight className="w-5 h-5" style={{ color: '#000000' }} />
          </div>
        </button>
      </div>
    </div>
  );
};

