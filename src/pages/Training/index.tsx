import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const Training: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    qualification: '',
    organization: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white py-16 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Training Card */}
        <div className="rounded-3xl overflow-hidden mb-16" style={{
          border: '2px solid #E5E7EB',
          background: '#FFFFFF'
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Side - Image */}
            <div className="relative p-6" style={{ minHeight: '500px' }}>
              <img 
                src="/images/training/training-session.png"
                alt="Training Session"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 flex items-center justify-center rounded bg-black">
                  <Calendar className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                </div>
                <span className="text-[12px] font-semibold uppercase tracking-wider" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000'
                }}>
                  REGISTER FOR TRAINING
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[36px] md:text-[48px] leading-tight font-bold mb-4" style={{
                fontFamily: 'Inter, sans-serif',
                color: '#000000',
                lineHeight: '1.2'
              }}>
                Risk Webinar Series
              </h1>

              {/* Description */}
              <p className="text-[15px] leading-relaxed mb-8" style={{
                fontFamily: 'Inter, sans-serif',
                color: '#000000',
                lineHeight: '1.6'
              }}>
                In today's rapidly evolving business landscape, understanding and managing risk is more critical than ever. Our Risk Webinar Series is designed to empower professionals, business leaders, and entrepreneurs with actionable insights and strategies to navigate uncertainties confidently and build resilience in their operations.
              </p>

              {/* Training Schedule */}
              <div>
                <h3 className="text-[12px] font-semibold uppercase tracking-wider mb-4" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#6B7280'
                }}>
                  TRAINING SCHEDULE
                </h3>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{
                    background: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                  }}>
                    <span className="text-[14px] font-bold" style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000'
                    }}>
                      TO :
                    </span>
                    <span className="text-[14px]" style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000'
                    }}>
                      23rd September 2024
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{
                    background: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                  }}>
                    <span className="text-[14px] font-bold" style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000'
                    }}>
                      FROM :
                    </span>
                    <span className="text-[14px]" style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#000000'
                    }}>
                      28th September 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-[44px] md:text-[52px] font-bold" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000',
              lineHeight: '1.15'
            }}>
              Fill the form to register<br />
              for the <span style={{ color: '#FCD421' }}>webinar</span>
            </h2>
          </div>

          {/* Right Side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-[16px] focus:outline-none focus:border-gray-300 placeholder-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB'
                }}
              />

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-[16px] focus:outline-none focus:border-gray-300 placeholder-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB'
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-[16px] focus:outline-none focus:border-gray-300 placeholder-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB'
                }}
              />

              <input
                type="text"
                name="qualification"
                placeholder="Educational Qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-[16px] focus:outline-none focus:border-gray-300 placeholder-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB'
                }}
              />

              <input
                type="text"
                name="organization"
                placeholder="Organization/Institution"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-[16px] focus:outline-none focus:border-gray-300 placeholder-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB'
                }}
              />

              <button
                type="submit"
                className="w-full px-8 py-4 flex items-center justify-between transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: '#FCD421',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  borderRadius: '50px',
                  fontSize: '17px',
                  color: '#000000'
                }}
              >
                <span>Submit details</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

