import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

// Navbar Component
export const Navbar: React.FC = () => {
  const location = useLocation();
  const [showConsultingDropdown, setShowConsultingDropdown] = useState(false);
  const [showCoachingDropdown, setShowCoachingDropdown] = useState(false);
  const timer1 = useRef<number | null>(null);
  const timer2 = useRef<number | null>(null);

  const open = (setter: any, timer: any) => {
    if (timer.current) clearTimeout(timer.current);
    setter(true);
  };

  const close = (setter: any, timer: any) => {
    timer.current = window.setTimeout(() => setter(false), 250);
  };

  
  return (
    <nav className="px-6 py-4 relative" style={{ background: '#FCD421' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex flex-col items-end rounded-t-[10px] px-4 pt-1 py-5" style={{
            background: '#FFFFFF',
            marginBottom: '-30px'
          }}>
            {/* Logo Image */}
            <img 
              src="/images/logo.png"
              alt="Aumyaa Logo" 
              className="h-8"
            />
            {/* Company Name */}
            <div className="text-2xl font-bold leading-none" style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.02em'
            }}>
              <span style={{ color: '#000000' }}>AUMYAA</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-[16px] leading-[150%] uppercase pb-1" 
            style={{
              fontFamily: 'Days One, sans-serif',
              fontWeight: 400,
              color: '#191600',
              borderBottom: location.pathname === '/' ? '2px solid #000000' : 'none'
            }}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className="text-[16px] leading-[150%] uppercase pb-1" 
            style={{
              fontFamily: 'Days One, sans-serif',
              fontWeight: 400,
              color: '#191600',
              borderBottom: location.pathname === '/about' ? '2px solid #000000' : 'none'
            }}
          >
            ABOUT US
          </Link>
            {/* CONSULTING SERVICES --------------------------- */}
            <div
            className="relative text-black"
            onMouseEnter={() => open(setShowConsultingDropdown, timer1)}
            onMouseLeave={() => close(setShowConsultingDropdown, timer1)}
          >
            <div
              className="text-[16px] uppercase pb-1 cursor-pointer"
              style={{
                fontFamily: 'Days One',
                borderBottom:
                  location.pathname.startsWith('/consulting')
                    ? '2px solid black'
                    : 'none'
              }}
            >
              CONSULTING SERVICES
            </div>

            {showConsultingDropdown && (
              <div
                className="absolute top-full left-0 mt-2 shadow-lg z-50"
                style={{ background: '#FCD421', minWidth: '260px' }}
              >
                {[
                  ['business-consulting', 'Business Consulting'],
                  ['tech-consulting', 'Tech Consulting'],
                  ['risk-consulting', 'Risk Consulting'],
                  ['esg-consulting', 'ESG Consulting'],
                  ['compliance-services', 'Compliance Services']
                ].map(([path, text]) => (
                  <Link
                    key={path}
                    to={`/consulting/${path}`}  
                    className="block px-6 py-3"
                    style={{
                      fontFamily: 'Days One',
                      borderBottom: '1px dotted #000',
                      color: '#000'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#000';
                      e.currentTarget.style.color = '#FCD421';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#000';
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* COACHING & WORKSHOP --------------------------- */}
          <div
            className="relative text-black"
            onMouseEnter={() => open(setShowCoachingDropdown, timer2)}
            onMouseLeave={() => close(setShowCoachingDropdown, timer2)}
          >
            <div
              className="text-[16px] uppercase pb-1 cursor-pointer"
              style={{
                fontFamily: 'Days One',
                borderBottom:
                  location.pathname.startsWith('/coaching')
                    ? '2px solid black'
                    : 'none'
              }}
            >
              COACHING & <br/>WORKSHOP
            </div>

            {showCoachingDropdown && (
              <div
              className="absolute top-full left-0 mt-2 shadow-lg z-50"
              style={{ background: '#FCD421', minWidth: '260px' }}
              >
                <Link
                  to="/executive-coaching"
                  className="block px-6 py-3"
                  style={{
                    fontFamily: 'Days One',
                    borderBottom: '1px dotted #000',
                    color: '#000'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000';
                    e.currentTarget.style.color = '#FCD421';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#000';
                  }}
                >
                  Executive Coaching
                </Link>

                <Link
                  to="/training"
                  className="block px-6 py-3"
                  style={{
                    fontFamily: 'Days One',
                    borderBottom: '1px dotted #000',
                    color: '#000'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000';
                    e.currentTarget.style.color = '#FCD421';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#000';
                  }}
                >
                  Register For Training
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/careers" 
            className="text-[16px] leading-[150%] uppercase pb-1"
            style={{
              fontFamily: 'Days One, sans-serif',
              fontWeight: 400,
              color: '#191600',
              borderBottom: location.pathname === '/careers' ? '2px solid #000000' : 'none'
            }}
          >
            CAREERS
          </Link>
          <Link 
            to="/contact" 
            className="text-[16px] leading-[150%] uppercase pb-1"
            style={{
              fontFamily: 'Days One, sans-serif',
              fontWeight: 400,
              color: '#191600',
              borderBottom: location.pathname === '/contact' ? '2px solid #000000' : 'none'
            }}
          >
            CONTACT US
          </Link>
          
           {/* Search Box */}
          <div className="flex items-center gap-2 border-l pl-4 rounded-[70px] px-4 py-3" style={{
            border: '1px solid rgba(25, 22, 0, 0.12)',
            borderRadius: '70px'
          }}>
            <Search className="w-5 h-5" style={{ color: '#191600' }} />
            <input 
              type="text" 
              placeholder="Search services" 
              className="bg-transparent border-none outline-none w-32 text-[16px] leading-[150%] tracking-[0.01em]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#191600'
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
