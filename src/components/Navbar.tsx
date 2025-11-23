import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

// Navbar Component
export const Navbar: React.FC = () => {
  const location = useLocation();
  const [showCoachingDropdown, setShowCoachingDropdown] = useState(false);
  const dropdownTimerRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setShowCoachingDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setShowCoachingDropdown(false);
    }, 300); 
  };
  
  return (
    <nav className="px-6 py-4 relative" style={{ background: '#FCD421' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-end">
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
          <a 
            href="#consulting" 
            className="text-[16px] leading-[150%] uppercase hover:border-b-2 hover:border-black pb-1"
            style={{
              fontFamily: 'Days One, sans-serif',
              fontWeight: 400,
              color: '#191600'
            }}
          >
            CONSULTING SERVICES
          </a>
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              to="/executive-coaching" 
              className="text-[16px] leading-[120%] uppercase pb-1 text-center"
              style={{
                fontFamily: 'Days One, sans-serif',
                fontWeight: 400,
                color: '#191600',
                borderBottom: location.pathname === '/executive-coaching' ? '2px solid #000000' : 'none'
              }}
            >
              COACHING &<br/>WORKSHOP
            </Link>
            
            {/* Dropdown Menu */}
            {showCoachingDropdown && (
              <div 
                className="absolute top-full left-0 mt-1 shadow-lg overflow-hidden z-50"
                style={{ 
                  minWidth: '250px',
                  background: '#FCD421'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/executive-coaching"
                  className="block px-6 py-3 transition-colors"
                  style={{
                    fontFamily: 'Days One, sans-serif',
                    fontSize: '16px',
                    color: '#000000',
                    borderBottom: '1px dotted #000000'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000000';
                    e.currentTarget.style.color = '#FCD421';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#000000';
                  }}
                >
                  Executive Coaching
                </Link>
                <Link
                  to="/training"
                  className="block px-6 py-3 transition-colors"
                  style={{
                    fontFamily: 'Days One, sans-serif',
                    fontSize: '16px',
                    color: '#000000'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000000';
                    e.currentTarget.style.color = '#FCD421';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#000000';
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
