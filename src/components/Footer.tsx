import React from 'react';
import { Link } from 'react-router-dom';

// Footer Component
export const Footer: React.FC = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
    <footer className="bg-yellow-400 py-8 md:py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black" style={{ fontFamily: 'Days One, sans-serif' }}>Aumyaa Consulting Services LLP</h3>
            <p className="text-sm font-semibold mb-4 md:mb-6 text-black" style={{ fontFamily: 'Inter, sans-serif' }}>Our Certification Recognizes Quality and Competence</p>
              <div className="flex gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFF8B7] rounded-full flex items-center justify-center p-2 md:p-3">
                <img src="/images/home/iso.png" alt="ISO 27001" className="w-full h-full object-contain" />
                </div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFF8B7] rounded-full flex items-center justify-center p-2 md:p-3">
                <img src="/images/home/soc.png" alt="SOC 2" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
            
          {/* Services */}
            <div>
            <h4 className="font-bold text-lg mb-3 md:mb-4 text-black" style={{ fontFamily: 'Days One, sans-serif' }}>Services</h4>
              <ul className="space-y-2 text-sm">
              <li><Link to="/consulting/business-consulting" onClick={scrollToTop} style={{ color: '#000000' }} className="hover:underline">Business Consulting</Link></li>
              <li><Link to="/consulting/tech-consulting" onClick={scrollToTop} style={{ color: '#000000' }} className="hover:underline">Technology Consulting</Link></li>
              <li><Link to="/consulting/risk-consulting" onClick={scrollToTop} style={{ color: '#000000' }} className="hover:underline">Risk Advisory</Link></li>
              <li><Link to="/consulting/esg-consulting" onClick={scrollToTop} style={{ color: '#000000' }} className="hover:underline">ESG Consulting</Link></li>
              <li><Link to="/consulting/compliance-services" onClick={scrollToTop} style={{ color: '#000000' }} className="hover:underline">Compliance Support Solutions</Link></li>
              </ul>
            </div>
            
          {/* Company */}
            <div>
            <h4 className="font-bold text-lg mb-3 md:mb-4 text-black" style={{ fontFamily: 'Days One, sans-serif' }}>Company</h4>
              <ul className="space-y-2 text-sm">
              <li><Link to="/about" onClick={scrollToTop} style={{ color: '#000000' }} className="hover:underline">About Us</Link></li>
              <li><Link to="/executive-coaching" onClick={scrollToTop} style={{ color: '#000000' }} className="hover:underline">Executive Coaching</Link></li>
              <li><Link to="/careers" onClick={scrollToTop} style={{ color: '#000000' }} className="hover:underline">Career</Link></li>
              </ul>
            </div>
            
          {/* Contact */}
            <div>
            <h4 className="font-bold text-lg mb-3 md:mb-4 text-black" style={{ fontFamily: 'Days One, sans-serif' }}>Contact Us</h4>
              <ul className="space-y-2 text-sm">
              <li style={{ color: '#000000' }}>01204544295</li>
              <li><a style={{ color: '#000000' }} href="mailto:contact@aumyaa.com" className="hover:underline break-all">contact@aumyaa.com</a></li>
              <li><a style={{ color: '#000000' }} href="https://www.yuktiarora.in/" className="hover:underline">Blogs ↗</a></li>
              <li><a style={{ color: '#000000' }} href="https://www.instagram.com/aumyaa_training" className="hover:underline">Instagram ↗</a></li>
              <li><a style={{ color: '#000000' }} href="https://www.linkedin.com/company/aumyaaconsultingservicesllp/" className="hover:underline">LinkedIn ↗</a></li>
              </ul>
            </div>
            
          {/* Headquarter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-lg mb-3 md:mb-4 text-black" style={{ fontFamily: 'Days One, sans-serif' }}>Headquarter</h4>
            <p className="text-sm text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
              Aumyaa Consulting Services LLP<br />
              Corporate office:<br />
              2414, 4th floor, Express trade tower 2<br />
              B36, Sector 132, Noida<br />
              Uttar Pradesh, India- 201301<br /><br />
                10am—6pm
              </p>
            </div>
          </div>
          
        <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-black text-center sm:text-left" style={{ fontFamily: 'Arial' }}>
              © 2025 Aumyaa Consulting Services. All rights reserved. | Privacy | Cookies
            </div>
            
          <div className="flex gap-3 md:gap-4">
            <a href="https://www.linkedin.com/company/aumyaaconsultingservicesllp/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
              <span className="text-lg md:text-xl">in</span>
            </a>
            <a href="https://www.youtube.com/@aumyaaconsultingservices" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors group">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/aumyaa_training" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors group">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };