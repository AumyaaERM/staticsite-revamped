import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

// Navbar Component
export const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="px-6 py-4" style={{ background: '#FCD421' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center rounded-[10px] px-3 py-2" style={{ background: '#FFFFFF' }}>
            <div className="text-2xl font-bold">
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
          <Link 
            to="/coaching" 
            className="text-[16px] leading-[150%] uppercase pb-1"
            style={{
              fontFamily: 'Days One, sans-serif',
              fontWeight: 400,
              color: '#191600',
              borderBottom: location.pathname === '/coaching' ? '2px solid #000000' : 'none'
            }}
          >
            COACHING & WORKSHOP
          </Link>
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
