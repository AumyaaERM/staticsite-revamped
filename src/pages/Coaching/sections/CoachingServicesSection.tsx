import React from 'react';
import { Smile, Mail, Linkedin } from 'lucide-react';

export const CoachingServicesSection: React.FC = () => {
  const services = [
    'Personal Development',
    'Elevating Leadership Competencies',
    'Workshops & Webinars',
    'One-on-One & Team Coaching',
    'Career Exploration & Goal Setting',
    'Work-Life Balance Strategies',
    'Empowerment & Resilience Support',
    'Building Personal Brand'
  ];

  return (
    <div className="py-16 px-8 md:px-12" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto rounded-2xl py-12 px-8 md:px-12" style={{ background: '#F5C542' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Coaching Services */}
          <div>
            <h2 className="text-[32px] md:text-[40px] leading-tight font-bold mb-8" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000'
            }}>
              Coaching Services
            </h2>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4"
                >
                  <Smile className="w-6 h-6 flex-shrink-0" style={{ color: '#000000' }} />
                  <span className="text-[16px] md:text-[18px]" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#000000'
                  }}>
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Connect Section */}
          <div className="relative">
            <h2 className="text-[32px] md:text-[40px] leading-tight font-bold mb-6" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000'
            }}>
              Connect With Manjula Banerji
            </h2>

            <div className="space-y-4 mb-6">
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" style={{ color: '#000000' }} />
                <a 
                  href="mailto:majulacoaching@gmail.com"
                  className="text-[16px] md:text-[18px] hover:underline"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#000000'
                  }}
                >
                  majulacoaching@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3">
                <Linkedin className="w-6 h-6" style={{ color: '#000000' }} />
                <a 
                  href="#"
                  className="text-[16px] md:text-[18px] hover:underline"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#000000'
                  }}
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Book Appointment Button */}
            <button 
              className="px-8 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg mb-8"
              style={{
                background: '#FFF8E1',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                color: '#000000'
              }}
            >
              Book An Appointment
            </button>

            {/* Illustration */}
            <div className="flex justify-end">
              <img 
                src="/images/coaching/connect.png"
                alt="People climbing steps"
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

