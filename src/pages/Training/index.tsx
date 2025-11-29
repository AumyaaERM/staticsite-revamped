import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const Training: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    qualification: '',
    organization: ''
  });

  const [banner, setBanner] = useState({ show: false, message: '', type: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBanner({ show: false, message: '', type: '' });

    // Create FormData for Google Forms submission
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.2092238618', formData.fullName);
    formDataToSubmit.append('entry.1556369182', formData.email);
    formDataToSubmit.append('entry.144821333', formData.phoneNumber);
    formDataToSubmit.append('entry.1437870189', formData.qualification);
    formDataToSubmit.append('entry.479301265', formData.organization);

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfYez1KICO2P1lOWMUE8PIDfQ6QyN_wWSNhcW9HmiWuqbKRtw/formResponse', {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      });

      setBanner({ show: true, message: '✅ Form submitted successfully!', type: 'success' });
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        qualification: '',
        organization: ''
      });

      // Hide banner after 7 seconds
      setTimeout(() => {
        setBanner({ show: false, message: '', type: '' });
      }, 7000);
    } catch (error) {
      setBanner({ show: true, message: '❌ Failed to submit the form. Please try again.', type: 'error' });
      
      // Hide banner after 7 seconds
      setTimeout(() => {
        setBanner({ show: false, message: '', type: '' });
      }, 7000);
    }
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
                  border: '1px solid #E5E7EB',
                  color: '#000000'
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
                  border: '1px solid #E5E7EB',
                  color: '#000000'
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
                  border: '1px solid #E5E7EB',
                  color: '#000000'
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
                  border: '1px solid #E5E7EB',
                  color: '#000000'
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
                  border: '1px solid #E5E7EB',
                  color: '#000000'
                }}
              />

              {/* Success/Error Banner */}
              {banner.show && (
                <div 
                  className="p-3 rounded-lg border"
                  style={{
                    display: 'block',
                    color: banner.type === 'success' ? 'green' : 'red',
                    backgroundColor: banner.type === 'success' ? '#e0f9e0' : '#f9e0e0',
                    border: `1px solid ${banner.type === 'success' ? 'green' : 'red'}`,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  {banner.message}
                </div>
              )}

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

