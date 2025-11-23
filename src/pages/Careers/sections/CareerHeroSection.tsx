import React from 'react';
import { ArrowRight, Sparkles, FileText } from 'lucide-react';

export const CareerHeroSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <h1 className="text-[64px] leading-tight" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#000000'
            }}>
              Join our <span style={{ color: '#FCD421' }}>workforce</span>
            </h1>

            {/* Description */}
            <p className="text-[20px] leading-relaxed" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#000000'
            }}>
              We offer work opportunities to professionals matching up with their flexible needs.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#FCD421' }} />
                <p className="text-[18px] leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#000000'
                }}>
                  Do you wish to work full time, part time, on contract or on demand?
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#FCD421' }} />
                <p className="text-[18px] leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#000000'
                }}>
                  Do you wish to create collaborative value with brilliance?
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="flex items-start gap-4 py-6">
              <FileText className="w-8 h-8 flex-shrink-0" style={{ color: '#FCD421' }} />
              <p className="text-[18px] leading-relaxed" style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#000000'
              }}>
                Submit your profile, and we'll reach out when a suitable opportunity arises.
              </p>
            </div>

            {/* Upload Resume Button */}
            <button 
              className="w-full flex items-center justify-between px-9 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: '#FCD421',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                borderRadius: '50px',
                color: '#000000'
              }}
            >
              Upload resume
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="w-5 h-5" style={{ color: '#000000' }} />
              </div>
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/careers/careers.png"
                alt="Join our workforce"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

