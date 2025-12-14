import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    service: '',
    otherService: '',
    description: ''
  });

  const [showOtherInput, setShowOtherInput] = useState(false);
  const [banner, setBanner] = useState({ show: false, message: '', type: '' });

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      service: service,
      otherService: service === '__other_option__' ? prev.otherService : ''
    }));
    setShowOtherInput(service === '__other_option__');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBanner({ show: false, message: '', type: '' });

    // Create FormData for Google Forms submission
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.485428648', formData.fullName);
    formDataToSubmit.append('entry.1524248316', formData.phoneNumber);
    formDataToSubmit.append('entry.879531967', formData.emailAddress);
    
    // Handle service selection
    if (formData.service === '__other_option__' && formData.otherService) {
      formDataToSubmit.append('entry.1591633300', '__other_option__');
      formDataToSubmit.append('entry.1591633300.other_option_response', formData.otherService);
    } else {
      formDataToSubmit.append('entry.1591633300', formData.service);
    }
    
    formDataToSubmit.append('entry.326955045', formData.description);

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe1DGCRFzAD5l3uUf3Nt6vG5olYdCLaHjWMbMh389rb61B9Bw/formResponse', {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      });

      setBanner({ show: true, message: '✅ Form submitted successfully!', type: 'success' });
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        service: '',
        otherService: '',
        description: ''
      });
      setShowOtherInput(false);

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

  const services = [
    { label: 'Business Consulting', value: 'Business Consulting' },
    { label: 'Technology Consulting', value: 'Technology Consulting' },
    { label: 'Risk Advisory', value: 'Risk Advisory' },
    { label: 'ESG Consulting', value: 'ESG Consulting' },
    { label: 'Collaboration', value: 'Collaboration' },
    { label: 'Tool Utilisation', value: 'Tool Utilisation' },
    { label: 'Executive Coaching', value: 'Executive Coaching' },
    { label: 'Other reasons to connect', value: '__other_option__' }
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Form */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2" style={{ color: '#000000' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[14px] uppercase tracking-wider" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600
                }}>
                  CONTACT US
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-tight" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#000000'
            }}>
              Let's make a difference <span style={{ color: '#FCD421' }}>together.</span>
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-6 py-4 bg-gray-50 border-0 rounded-lg text-[16px] outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#000000'
                }}
                required
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-6 py-4 bg-gray-50 border-0 rounded-lg text-[16px] outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#000000'
                }}
                required
              />

              {/* Email Address */}
              <input
                type="email"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                className="w-full px-6 py-4 bg-gray-50 border-0 rounded-lg text-[16px] outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#000000'
                }}
                required
              />

              {/* Services Radio Buttons */}
              <div className="space-y-8 py-4">
                <label className="text-[16px] font-medium" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000'
                }}>
                  Which services do you want to avail?
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-4 sm:gap-y-6">
                  {services.map((service, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="service"
                        value={service.value}
                        checked={formData.service === service.value}
                        onChange={() => handleServiceChange(service.value)}
                        className="w-5 h-5 border-gray-300 text-yellow-400 focus:ring-yellow-400 accent-yellow-400"
                        style={{
                          cursor: 'pointer'
                        }}
                        required
                      />
                      <span className="text-[14px]" style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        color: '#666666'
                      }}>
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Other Service Input (shows when "Other" is selected) */}
                {showOtherInput && (
                  <input
                    type="text"
                    placeholder="If other, please specify"
                    value={formData.otherService}
                    onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-50 border-0 rounded-lg text-[16px] outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      marginTop: '10px',
                      color: '#000000'
                    }}
                    required
                  />
                )}
              </div>

              {/* Description */}
              <div className="relative">
                <textarea
                  placeholder="Brief description"
                  value={formData.description}
                  onChange={(e) => {
                    if (e.target.value.length <= 240) {
                      setFormData({ ...formData, description: e.target.value });
                    }
                  }}
                  maxLength={240}
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 border-0 rounded-lg text-[16px] outline-none focus:ring-2 focus:ring-yellow-400 resize-none placeholder-gray-500"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#000000'
                  }}
                />
                <div className="absolute bottom-4 right-6 text-[14px]" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#999999'
                }}>
                  {formData.description.length}/240
                </div>
              </div>

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

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full flex items-center justify-between px-9 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: '#FCD421',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  borderRadius: '30px',
                  fontSize: '18px',
                  color: '#000000'
                }}
              >
                Submit details
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" style={{ color: '#000000' }} />
                </div>
              </button>
            </form>
          </div>

          {/* Right Side - Image and WhatsApp Button */}
          <div className="flex flex-col items-center gap-8">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/contact/phone-hand.png"
                alt="Contact us"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Start a Chat Button */}
            <a 
              href="https://wa.me/9818248133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: '#25D366',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                borderRadius: '30px',
                fontSize: '18px',
                color: '#FFFFFF',
                textDecoration: 'none'
              }}
            >
              Start a Chat
              <MessageCircle className="w-6 h-6" fill="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

