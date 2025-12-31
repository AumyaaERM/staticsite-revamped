import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
  const [errors, setErrors] = useState({ phoneNumber: '', emailAddress: '' });

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
    setFormData({ ...formData, emailAddress: value });
    if (value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, emailAddress: 'Please enter a valid email ending with .com' }));
    } else {
      setErrors(prev => ({ ...prev, emailAddress: '' }));
    }
  };

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

    // Validate phone number
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setBanner({ show: true, message: '❌ Please enter a valid phone number (minimum 10 digits).', type: 'error' });
      setTimeout(() => setBanner({ show: false, message: '', type: '' }), 5000);
      return;
    }

    // Validate email
    if (!validateEmail(formData.emailAddress)) {
      setBanner({ show: true, message: '❌ Please enter a valid email address ending with .com', type: 'error' });
      setTimeout(() => setBanner({ show: false, message: '', type: '' }), 5000);
      return;
    }

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
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-lg text-[16px] outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500 ${errors.phoneNumber ? 'border-red-400' : 'border-transparent'}`}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#000000'
                  }}
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-lg text-[16px] outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500 ${errors.emailAddress ? 'border-red-400' : 'border-transparent'}`}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#000000'
                  }}
                  required
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              {/* Services Radio Buttons */}
              <div className="border border-gray-200 rounded-xl p-5 sm:p-6 space-y-5">
                <label className="text-[16px] font-medium block" style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000'
                }}>
                  Which services do you want to avail?
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-4 sm:gap-y-5">
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
              <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

