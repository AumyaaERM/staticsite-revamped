// Footer Component
export const Footer: React.FC = () => {
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
              <li><a href="#" style={{ color: '#000000' }} className="hover:underline">Business Consulting</a></li>
              <li><a href="#" style={{ color: '#000000' }} className="hover:underline">Technology Consulting</a></li>
              <li><a href="#" style={{ color: '#000000' }} className="hover:underline">Risk Advisory</a></li>
              <li><a href="#" style={{ color: '#000000' }} className="hover:underline">ESG Consulting</a></li>
              <li><a href="#" style={{ color: '#000000' }} className="hover:underline">Compliance Support Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-3 md:mb-4 text-black" style={{ fontFamily: 'Days One, sans-serif' }}>Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" style={{ color: '#000000' }} className="hover:underline">About Us</a></li>
              <li><a href="#" style={{ color: '#000000' }} className="hover:underline">Executive Coaching</a></li>
              <li><a href="#" style={{ color: '#000000' }} className="hover:underline">Career</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-3 md:mb-4 text-black" style={{ fontFamily: 'Days One, sans-serif' }}>Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li style={{ color: '#000000' }}>01204544295</li>
              <li><a style={{ color: '#000000' }} href="mailto:contact@aumyaa.com" className="hover:underline break-all">contact@aumyaa.com</a></li>
              <li><a style={{ color: '#000000' }} href="#" className="hover:underline">Blogs ↗</a></li>
              <li><a style={{ color: '#000000' }} href="#" className="hover:underline">Instagram ↗</a></li>
              <li><a style={{ color: '#000000' }} href="#" className="hover:underline">LinkedIn ↗</a></li>
            </ul>
          </div>

          {/* Headquarter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-lg mb-3 md:mb-4 text-black" style={{ fontFamily: 'Days One, sans-serif' }}>Headquarter</h4>
            <p className="text-sm text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
              Aumyaa consulting services LLP<br />
              Corporate office:<br />
              2414, 4th floor, Express trade tower 2<br />
              B36, Sector 132, Noida<br />
              Uttar Pradesh, India- 201301<br /><br />
              10am—6pm
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-black text-center sm:text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 Aumyaa Consulting Services. All rights reserved. | Privacy | Cookies
          </div>

          <div className="flex gap-3 md:gap-4">
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
              <span className="text-lg md:text-xl">✈</span>
            </button>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
              <span className="text-lg md:text-xl">f</span>
            </button>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
              <span className="text-lg md:text-xl">▶</span>
            </button>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
              <span className="text-lg md:text-xl">📷</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};