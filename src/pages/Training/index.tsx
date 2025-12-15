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
  const [errors, setErrors] = useState({ phoneNumber: '', email: '' });

  // Validation functions
  const validatePhoneNumber = (phone: string): boolean => {
    // Allow only digits, spaces, +, -, () and minimum 10 digits
    const phoneRegex = /^[\d\s+\-()]+$/;
    const digitsOnly = phone.replace(/\D/g, '');
    return phoneRegex.test(phone) && digitsOnly.length >= 10;
  };

  const validateEmail = (email: string): boolean => {
    // Email should be valid format and end with .com
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/i;
    return emailRegex.test(email);
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
    if (value && !validatePhoneNumber(value)) {
      setErrors(prev => ({ ...prev, phoneNumber: 'Please enter a valid phone number (minimum 10 digits)' }));
    } else {
      setErrors(prev => ({ ...prev, phoneNumber: '' }));
    }
  };

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value });
    if (value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email ending with .com' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBanner({ show: false, message: '', type: '' });

    // Validate phone number
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setBanner({ show: true, message: '❌ Please enter a valid phone number (minimum 10 digits).', type: 'error' });
      setTimeout(() => setBanner({ show: false, message: '', type: '' }), 5000);
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      setBanner({ show: true, message: '❌ Please enter a valid email address ending with .com', type: 'error' });
      setTimeout(() => setBanner({ show: false, message: '', type: '' }), 5000);
      return;
    }

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
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Training Card */}
        <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-10 md:mb-16" style={{
          border: '2px solid #E5E7EB',
          background: '#FFFFFF'
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Side - Image */}
            <div className="relative p-4 md:p-6" style={{ minHeight: '280px' }}>
              <img 
                src="/images/training/training-session.png"
                alt="Training Session"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="p-5 sm:p-8 md:p-12 flex flex-col justify-center">
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
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] leading-tight font-bold mb-3 md:mb-4" style={{
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000000',
              lineHeight: '1.15'
            }}>
              Fill the form to register<br className="hidden sm:block" />
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

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  required
                  className="w-full px-6 py-4 rounded-xl text-[16px] focus:outline-none placeholder-gray-500"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: '#F9FAFB',
                    border: errors.email ? '2px solid #f87171' : '1px solid #E5E7EB',
                    color: '#000000'
                  }}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                  className="w-full px-6 py-4 rounded-xl text-[16px] focus:outline-none placeholder-gray-500"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: '#F9FAFB',
                    border: errors.phoneNumber ? '2px solid #f87171' : '1px solid #E5E7EB',
                    color: '#000000'
                  }}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

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

