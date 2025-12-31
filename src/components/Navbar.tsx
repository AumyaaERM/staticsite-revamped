import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

// Services data for search
const allServices = [
  { name: 'Business Consulting', path: '/consulting/business-consulting' },
  { name: 'Technology Consulting', path: '/consulting/tech-consulting' },
  { name: 'Risk Consulting', path: '/consulting/risk-consulting' },
  { name: 'ESG Consulting', path: '/consulting/esg-consulting' },
  { name: 'Compliance Services', path: '/consulting/compliance-services' },
  { name: 'Executive Coaching', path: '/executive-coaching' },
  { name: 'Training', path: '/training' },
  { name: 'About Us', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

// Navbar Component
export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showConsultingDropdown, setShowConsultingDropdown] = useState(false);
  const [showCoachingDropdown, setShowCoachingDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileConsultingOpen, setMobileConsultingOpen] = useState(false);
  const [mobileCoachingOpen, setMobileCoachingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const timer1 = useRef<number | null>(null);
  const timer2 = useRef<number | null>(null);
  
  // Filter services based on search query
  const filteredServices = searchQuery.trim() 
    ? allServices.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Handle search result click
  const handleSearchResultClick = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const open = (setter: any, timer: any) => {
    if (timer.current) clearTimeout(timer.current);
    setter(true);
  };

  const close = (setter: any, timer: any) => {
    timer.current = window.setTimeout(() => setter(false), 250);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    setMobileConsultingOpen(false);
    setMobileCoachingOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinkStyle = {
    fontFamily: 'Days One, sans-serif',
    fontWeight: 400,
    color: '#191600'
  };
  
  return (
    <nav className="px-4 md:px-6 lg:px-8 relative" style={{ background: '#FCD421' }}>
      <div className="w-full flex items-end justify-between py-2">
        {/* Logo */}
        <div className="flex items-end flex-shrink-0 mr-2 lg:mr-4 xl:mr-6">
          <Link to="/" className="flex flex-col items-center rounded-t-[6px] px-2 py-1" style={{
            background: '#FFFFFF',
            marginBottom: '-10px'
          }}>
            <img 
              src="/images/logo.png"
              alt="Aumyaa Logo" 
              className="h-8 md:h-10"
            />
            <div className="text-xl md:text-l font-bold leading-none" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}>
              <span style={{ color: '#000000' }}>AUMYAA</span>
            </div>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-yellow-500 transition-colors self-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" style={{ color: '#191600' }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: '#191600' }} />
          )}
        </button>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-10">
          <Link 
            to="/" 
            className="text-[12px] lg:text-[13px] xl:text-[16px] leading-[140%] uppercase pb-1 whitespace-nowrap"
            style={{
              ...navLinkStyle,
              borderBottom: location.pathname === '/' ? '2px solid #000000' : 'none'
            }}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className="text-[12px] lg:text-[13px] xl:text-[16px] leading-[140%] uppercase pb-1 whitespace-nowrap"
            style={{
              ...navLinkStyle,
              borderBottom: location.pathname === '/about' ? '2px solid #000000' : 'none'
            }}
          >
            ABOUT US
          </Link>
          
          {/* CONSULTING SERVICES - Desktop */}
            <div
            className="relative text-black"
            onMouseEnter={() => open(setShowConsultingDropdown, timer1)}
            onMouseLeave={() => close(setShowConsultingDropdown, timer1)}
          >
            <div
              className="text-[12px] lg:text-[13px] xl:text-[16px] uppercase pb-1 cursor-pointer whitespace-nowrap"
              style={{
                fontFamily: 'Days One',
                borderBottom: location.pathname.startsWith('/consulting') ? '2px solid black' : 'none'
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

          {/* COACHING & WORKSHOP - Desktop */}
          <div
            className="relative text-black"
            onMouseEnter={() => open(setShowCoachingDropdown, timer2)}
            onMouseLeave={() => close(setShowCoachingDropdown, timer2)}
          >
            <div
              className="text-[12px] lg:text-[13px] xl:text-[16px] uppercase pb-1 cursor-pointer whitespace-nowrap"
              style={{
                fontFamily: 'Days One',
                borderBottom: location.pathname.startsWith('/coaching') || location.pathname === '/executive-coaching' || location.pathname === '/training' ? '2px solid black' : 'none'
              }}
            >
              COACHING & WORKSHOP
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
            className="text-[12px] lg:text-[13px] xl:text-[16px] leading-[140%] uppercase pb-1 whitespace-nowrap"
            style={{
              ...navLinkStyle,
              borderBottom: location.pathname === '/careers' ? '2px solid #000000' : 'none'
            }}
          >
            CAREERS
          </Link>
          <Link 
            to="/contact" 
            className="text-[12px] lg:text-[13px] xl:text-[16px] leading-[140%] uppercase pb-1 whitespace-nowrap"
            style={{
              ...navLinkStyle,
              borderBottom: location.pathname === '/contact' ? '2px solid #000000' : 'none'
            }}
          >
            CONTACT US
          </Link>
        </div>
          
        {/* Search Box - Desktop */}
        <div className="hidden lg:flex items-end relative flex-shrink-0 ml-2 pb-1" ref={searchRef}>
          <div className="flex items-center gap-1.5 rounded-[70px] px-2.5 py-1.5 bg-white/30" style={{
            border: '1px solid rgba(25, 22, 0, 0.12)',
            borderRadius: '70px'
          }}>
            <Search className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#191600' }} />
            <input 
              type="text" 
              placeholder="Search services..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(e.target.value.trim().length > 0);
              }}
              onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
              className="bg-transparent border-none outline-none w-24 lg:w-28 xl:w-32 2xl:w-40 text-[11px] lg:text-[12px] xl:text-[13px] leading-[140%] tracking-[0.01em]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#191600'
              }}
            />
          </div>
          
          {/* Search Results Dropdown */}
          {showSearchResults && filteredServices.length > 0 && (
            <div 
              className="absolute top-full right-0 mt-2 w-64 rounded-lg shadow-lg z-50 overflow-hidden"
              style={{ background: '#FCD421' }}
            >
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleSearchResultClick(service.path)}
                  className="px-4 py-3 cursor-pointer transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#191600',
                    borderBottom: index < filteredServices.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000';
                    e.currentTarget.style.color = '#FCD421';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#191600';
                  }}
                >
                  {service.name}
                </div>
              ))}
            </div>
          )}
          
          {/* No results message */}
          {showSearchResults && searchQuery.trim() && filteredServices.length === 0 && (
            <div 
              className="absolute top-full right-0 mt-2 w-64 rounded-lg shadow-lg z-50 px-4 py-3"
              style={{ background: '#FCD421', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#191600' }}
            >
              No services found
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`lg:hidden fixed left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        style={{ background: '#FCD421', maxHeight: 'calc(100vh - 80px)', overflowY: 'auto', top: '70px' }}
      >
        <div className="px-6 py-4 space-y-1">
          {/* Search Box - Mobile */}
          <div className="flex items-center gap-2 rounded-full px-4 py-3 mb-4" style={{
            border: '1px solid rgba(25, 22, 0, 0.12)',
            background: 'rgba(255,255,255,0.5)'
          }}>
            <Search className="w-5 h-5" style={{ color: '#191600' }} />
            <input 
              type="text" 
              placeholder="Search services" 
              className="bg-transparent border-none outline-none flex-1 text-[16px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#191600'
              }}
            />
          </div>

          <Link 
            to="/" 
            className="block py-3 text-[16px] uppercase border-b border-black/10" 
            style={navLinkStyle}
          >
            HOME
          </Link>
          
          <Link 
            to="/about" 
            className="block py-3 text-[16px] uppercase border-b border-black/10" 
            style={navLinkStyle}
          >
            ABOUT US
          </Link>
          
          {/* CONSULTING SERVICES - Mobile */}
          <div className="border-b border-black/10">
            <div
              onClick={() => setMobileConsultingOpen(!mobileConsultingOpen)}
              className="w-full flex items-center justify-between py-3 text-[16px] uppercase cursor-pointer"
              style={navLinkStyle}
            >
              CONSULTING SERVICES
              {mobileConsultingOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            
            {mobileConsultingOpen && (
              <div className="pl-4 pb-3 space-y-1">
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
                    className="block py-2 text-[14px]"
                    style={{ fontFamily: 'Days One', color: '#191600' }}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* COACHING & WORKSHOP - Mobile */}
          <div className="border-b border-black/10">
            <div
              onClick={() => setMobileCoachingOpen(!mobileCoachingOpen)}
              className="w-full flex items-center justify-between py-3 text-[16px] uppercase cursor-pointer"
              style={navLinkStyle}
            >
              COACHING & WORKSHOP
              {mobileCoachingOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            
            {mobileCoachingOpen && (
              <div className="pl-4 pb-3 space-y-1">
                <Link
                  to="/executive-coaching"
                  className="block py-2 text-[14px]"
                  style={{ fontFamily: 'Days One', color: '#191600' }}
                >
                  Executive Coaching
                </Link>
                <Link
                  to="/training"
                  className="block py-2 text-[14px]"
                  style={{ fontFamily: 'Days One', color: '#191600' }}
                >
                  Register For Training
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/careers" 
            className="block py-3 text-[16px] uppercase border-b border-black/10"
            style={navLinkStyle}
          >
            CAREERS
          </Link>
          
          <Link 
            to="/contact" 
            className="block py-3 text-[16px] uppercase"
            style={navLinkStyle}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};
