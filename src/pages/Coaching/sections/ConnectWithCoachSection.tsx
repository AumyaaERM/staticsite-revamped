import React from 'react';
import { Mail, Linkedin, BookOpen } from 'lucide-react';

export const ConnectWithCoachSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-[48px] leading-tight font-bold mb-8" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000'
            }}>
              Connect With Manjula Banerji
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                  background: '#FCD421'
                }}>
                  <Mail className="w-6 h-6" style={{ color: '#000000' }} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold uppercase" style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666'
                  }}>
                    Email
                  </p>
                  <a 
                    href="mailto:mbanerji1301@gmail.com"
                    className="text-[18px] hover:underline" 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000'
                    }}
                  >
                    mbanerji1301@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                  background: '#FCD421'
                }}>
                  <Linkedin className="w-6 h-6" style={{ color: '#000000' }} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold uppercase" style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666'
                  }}>
                    LinkedIn Profile
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/manjulabanerji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] hover:underline" 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000'
                    }}
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Book */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                  background: '#FCD421'
                }}>
                  <BookOpen className="w-6 h-6" style={{ color: '#000000' }} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold uppercase" style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666'
                  }}>
                    Book An Appointment
                  </p>
                  <a 
                    href="#"
                    className="text-[18px] hover:underline" 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000'
                    }}
                  >
                    Schedule a Session
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/coaching/connect.png"
              alt="Connect with coach"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

