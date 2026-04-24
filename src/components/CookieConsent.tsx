import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { initGA } from '../utils/analytics';

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    } else if (hasConsented === 'accepted') {
      // User already accepted, initialize GA
      initGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Initialize Google Analytics when user accepts
    initGA();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie consent banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-slide-up">
        <div 
          className="w-full rounded-2xl shadow-2xl relative"
          style={{
            background: '#000000',
            border: '2px solid #FCD421'
          }}
        >
          {/* Close button */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 p-2 rounded-full transition-colors"
            style={{
              background: '#FCD421'
            }}
            aria-label="Close"
          >
            <X className="w-5 h-5" style={{ color: '#000000' }} />
          </button>

          <div className="p-6 md:p-8 pr-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#FCD421' }}
                  >
                    <span className="text-xl">🍪</span>
                  </div>
                  <h3 
                    className="text-xl md:text-2xl font-bold"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#FFFFFF'
                    }}
                  >
                    We use cookies
                  </h3>
                </div>
                <p 
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#CCCCCC'
                  }}
                >
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                  You can manage your preferences or learn more in our{' '}
                  <a 
                    href="https://drive.google.com/file/d/1FaYSm6AgZ3EgZJIGkdYSKT4Bh6oq8_15/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                    style={{ color: '#FCD421', fontWeight: 600 }}
                  >
                    Privacy Policy
                  </a>.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-800 border-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#FFFFFF',
                    borderColor: '#FCD421',
                    background: 'transparent'
                  }}
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: '#FCD421',
                    color: '#000000'
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
};
