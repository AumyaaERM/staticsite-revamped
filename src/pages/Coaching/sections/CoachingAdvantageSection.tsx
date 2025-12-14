import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export const CoachingAdvantageSection: React.FC = () => {
  const insights = [
    {
      title: 'Strategic Leadership in the New-Age Workplace',
      subtitle: 'Cultivating leadership agility to thrive in evolving business landscapes.'
    },
    {
      title: 'Empowering Teams Through Transformational Coaching',
      subtitle: 'Building high-performing, resilient teams with clarity and purpose.'
    },
    {
      title: 'Navigating Career & Life Transitions with Confidence',
      subtitle: 'Leveraging self-awareness and guided action for growth and fulfillment.'
    },
    {
      title: 'Fostering Purpose-Driven Professional Development',
      subtitle: 'Aligning personal values with career aspirations to unlock true potential.'
    },
    {
      title: 'Driving Sustainable Change Across Organizations',
      subtitle: 'Embedding coaching mindsets to fuel lasting impact and innovation.'
    }
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Book Cover */}
          <div className="flex items-start justify-center lg:justify-start">
            <div className="relative max-w-md">
              <img 
                src="/images/coaching/book-cover.png" 
                alt="The Coaching Advantage Book"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Right Side - Title, Subtitle, Key Insights, Button */}
          <div>
            {/* Title */}
            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] font-bold mb-2" style={{
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2'
            }}>
              <span style={{ color: '#FCD421' }}>The Coaching </span>
              <span style={{ color: '#FCD421', fontStyle: 'italic' }}>Advantage</span>
              <br />
              <span style={{ color: '#000000' }}>in the New-</span>
              <span style={{ color: '#000000', fontStyle: 'italic' }}>Age</span>
              <span style={{ color: '#000000' }}> Workplace</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[16px] mb-6" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000',
              lineHeight: '1.4'
            }}>
              Explore how intentional coaching builds resilient, purpose-driven leaders in today's rapidly evolving business landscape.
            </p>

            {/* Key Insights */}
            <h3 className="text-[20px] font-bold mb-4" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000'
            }}>
              Key Insights:
            </h3>

            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star 
                    className="w-5 h-5 flex-shrink-0 mt-0.5" 
                    style={{ color: '#FCD421', fill: '#FCD421' }} 
                  />
                  <div>
                    <h4 className="text-[15px] font-bold mb-0.5" style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000'
                    }}>
                      {insight.title}
                    </h4>
                    <p className="text-[14px]" style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000',
                      lineHeight: '1.3'
                    }}>
                      {insight.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: '#FCD421',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                color: '#000000'
              }}
            >
              Get Your Copy
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

