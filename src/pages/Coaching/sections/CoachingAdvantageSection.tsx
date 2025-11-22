import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const CoachingAdvantageSection: React.FC = () => {
  const highlights = [
    'Strategic Leadership in the New-Age Workplaces',
    'Cultivating authentic agility in today\'s evolving business landscape',
    'Empowering Values Through Transformational Coaching',
    'Intentional learning as a key driver of personal and organizational progress',
    'Leadership and succession and guided action for growth and fulfillment',
    'Helping leaders overcome the fear of Failure and cultivate Resilience',
    'Driving Sustainable Change Across Organizations',
    'Bringing real value to business life with lasting impact and transformation'
  ];

  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[48px] leading-tight font-bold mb-12" style={{
          fontFamily: 'Inter, sans-serif',
          color: '#FCD421'
        }}>
          The Coaching Advantage<br />
          <span style={{ color: '#000000' }}>in the New-Age Workplace</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Book Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full flex items-center justify-center" style={{
                background: '#FCD421'
              }}>
                <span className="text-[48px]">📖</span>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/images/coaching/book-cover.png" 
                  alt="The Coaching Advantage Book"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Key Highlights */}
          <div>
            <h3 className="text-[32px] font-bold mb-8" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000'
            }}>
              Key Highlights:
            </h3>

            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                    background: '#FCD421'
                  }}>
                    <Check className="w-4 h-4" style={{ color: '#000000' }} />
                  </div>
                  <span className="text-[16px] leading-relaxed" style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#000000'
                  }}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            <button 
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: '#FCD421',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                color: '#000000'
              }}
            >
              Get Your Copy
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

