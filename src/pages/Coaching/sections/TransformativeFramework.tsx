import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export const TransformativeFramework: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="w-10 h-10" style={{ color: '#F5B700' }} />,
      title: 'Clarity',
      description: 'Define your authentic leadership vision and identify core values that drive meaningful change.'
    },
    {
      icon: <Lightbulb className="w-10 h-10" style={{ color: '#F5B700' }} />,
      title: 'Confidence',
      description: 'Build unshakable self-belief through mindset transformation and leadership presence development.'
    },
    {
      icon: <TrendingUp className="w-10 h-10" style={{ color: '#F5B700' }} />,
      title: 'Transition',
      description: 'Execute strategic career moves with purpose-driven action plans and sustainable growth strategies.'
    }
  ];

  return (
    <div style={{ background: '#FFF9E6' }}>
      {/* Framework Section */}
      <div className="py-16 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] leading-tight font-bold text-center mb-4" style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000'
          }}>
            The Transformative Transitions Framework™
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] md:text-[18px] text-center mb-12 max-w-4xl mx-auto" style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000',
            lineHeight: '1.6'
          }}>
            A proprietary methodology developed through decades of corporate leadership and refined through hundreds of successful coaching engagements
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="rounded-lg p-8 text-left shadow-md"
                style={{
                  background: '#FFFFFF'
                }}
              >
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center" style={{
                  background: '#FFF4CC'
                }}>
                  {pillar.icon}
                </div>

                <h3 className="text-[24px] font-bold mb-3" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000'
                }}>
                  {pillar.title}
                </h3>

                <p className="text-[15px] leading-relaxed" style={{
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

      {/* CTA Section */}
      <div className="mx-8 md:mx-12 pb-16">
        <div className="max-w-7xl mx-auto rounded-2xl p-12 text-center" style={{
          background: '#F5C542'
        }}>
          <h2 className="text-[32px] md:text-[40px] font-bold mb-4" style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000'
          }}>
            Ready to Transform Your Leadership Journey?
          </h2>

          <p className="text-[16px] md:text-[18px] mb-8 max-w-3xl mx-auto" style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000'
          }}>
            Discover how the Transformative Transitions Framework™ can unlock your potential
          </p>

          <Link 
            to="/contact"
            className="inline-block px-8 py-4 rounded-lg text-[16px] font-semibold transition-all hover:scale-105" 
            style={{
              fontFamily: 'Inter, sans-serif',
              background: '#FFF8E1',
              color: '#000000',
              textDecoration: 'none'
            }}
          >
            Schedule Your Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
};

