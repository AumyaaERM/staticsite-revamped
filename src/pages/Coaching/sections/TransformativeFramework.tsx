import React from 'react';
import { Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

export const TransformativeFramework: React.FC = () => {
  const pillars = [
    {
      icon: <Lightbulb className="w-12 h-12" style={{ color: '#FCD421' }} />,
      title: 'Clarity',
      description: 'Define your authentic leadership identity, explore your values, and identify the one meaningful change.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" style={{ color: '#FCD421' }} />,
      title: 'Confidence',
      description: 'Build unshakable self-belief through guided reflection and leadership presence development.'
    },
    {
      icon: <ArrowRight className="w-12 h-12" style={{ color: '#FCD421' }} />,
      title: 'Transition',
      description: 'Execute strategic career moves through actionable next steps and sustainable growth strategies.'
    }
  ];

  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[48px] leading-tight font-bold text-center mb-6" style={{
          fontFamily: 'Inter, sans-serif',
          color: '#000000'
        }}>
          The Transformative Transitions Framework™
        </h2>

        {/* Subtitle */}
        <p className="text-[18px] text-center mb-12 max-w-4xl mx-auto" style={{
          fontFamily: 'Inter, sans-serif',
          color: '#666666'
        }}>
          A proprietary methodology developed through decades of corporate leadership and refined through hundreds of successful coaching engagements.
        </p>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="rounded-2xl p-8 text-center"
              style={{
                background: index === 1 ? '#FCD421' : '#FFF8E1'
              }}
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{
                background: index === 1 ? '#FFFFFF' : '#FCD421'
              }}>
                {pillar.icon}
              </div>

              <h3 className="text-[28px] font-bold mb-4" style={{
                fontFamily: 'Inter, sans-serif',
                color: '#000000'
              }}>
                {pillar.title}
              </h3>

              <p className="text-[16px] leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif',
                color: '#000000'
              }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

