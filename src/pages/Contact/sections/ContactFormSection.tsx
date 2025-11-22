import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    services: [] as string[],
    description: ''
  });

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const services = [
    { label: 'Business Consulting', value: 'business-consulting' },
    { label: 'Technology Consulting', value: 'technology-consulting' },
    { label: 'Risk Advisory', value: 'risk-advisory' },
    { label: 'ESG Consulting', value: 'esg-consulting' },
    { label: 'Collaboration', value: 'collaboration' },
    { label: 'Tool Utilisation', value: 'tool-utilisation' },
    { label: 'Executive Coaching', value: 'executive-coaching' },
    { label: 'Other reasons to connect', value: 'other' }
  ];

  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            <h2 className="text-[48px] leading-tight" style={{
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
                  fontWeight: 400
                }}
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
                  fontWeight: 400
                }}
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
                  fontWeight: 400
                }}
              />

              {/* Services Checkboxes */}
              <div className="space-y-8 py-4">
                <label className="text-[16px] font-medium" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000'
                }}>
                  Which services do you want to avail ?
                </label>
                
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  {services.map((service, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.value)}
                        onChange={() => handleServiceToggle(service.value)}
                        className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 accent-yellow-400"
                        style={{
                          backgroundColor: '#FFFFFF',
                          cursor: 'pointer'
                        }}
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
              </div>

              {/* Description */}
              <div className="relative">
                <textarea
                  placeholder="Brief description of your requirement"
                  value={formData.description}
                  onChange={(e) => {
                    if (e.target.value.length <= 240) {
                      setFormData({ ...formData, description: e.target.value });
                    }
                  }}
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 border-0 rounded-lg text-[16px] outline-none focus:ring-2 focus:ring-yellow-400 resize-none placeholder-gray-500"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400
                  }}
                />
                <div className="absolute bottom-4 right-6 text-[14px]" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#999999'
                }}>
                  {formData.description.length}/240
                </div>
              </div>

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
              <button 
                className="flex items-center gap-3 px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: '#25D366',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  borderRadius: '30px',
                  fontSize: '18px',
                  color: '#FFFFFF'
                }}
              >
              Start a Chat
              <MessageCircle className="w-6 h-6" fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

