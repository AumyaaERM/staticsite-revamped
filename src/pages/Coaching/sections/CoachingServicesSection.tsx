import React from 'react';
import { Check } from 'lucide-react';

export const CoachingServicesSection: React.FC = () => {
  const services = [
    'Holistic coaching for women in leadership',
    'Elevating Leadership Competencies',
    'Identity Transition & Career Pivoting',
    'One-on-One & team Coaching',
    'Career Exploration & Goal Setting',
    'Networking & Mentorship Program',
    'Empowerment & Resilience Support',
    'Customized Retreat'
  ];

  return (
    <div className="py-16 px-12" style={{ background: '#FFF8E1' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[48px] leading-tight font-bold mb-12" style={{
          fontFamily: 'Inter, sans-serif',
          color: '#000000'
        }}>
          Coaching Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{
                background: '#FCD421'
              }}>
                <Check className="w-5 h-5" style={{ color: '#000000' }} />
              </div>
              <span className="text-[18px]" style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#000000'
              }}>
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

