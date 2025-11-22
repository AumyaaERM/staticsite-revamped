// Footer Component
export const Footer: React.FC = () => {
    return (
      <footer className="bg-yellow-400 py-12 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Aumyaa Consulting Services LLP</h3>
              <p className="text-sm font-semibold mb-6">Our Certification Recognizes Quality and Competence</p>
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">ISO<br/>27001</span>
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">SOC 2</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Business Consulting</a></li>
                <li><a href="#" className="hover:underline">Technology Consulting</a></li>
                <li><a href="#" className="hover:underline">Risk Advisory</a></li>
                <li><a href="#" className="hover:underline">ESG Consulting</a></li>
                <li><a href="#" className="hover:underline">Compliance Support Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Executive Coaching</a></li>
                <li><a href="#" className="hover:underline">Career</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>01204544295</li>
                <li><a href="mailto:contact@aumyaa.com" className="hover:underline">contact@aumyaa.com</a></li>
                <li><a href="#" className="hover:underline">Blogs ↗</a></li>
                <li><a href="#" className="hover:underline">Instagram ↗</a></li>
                <li><a href="#" className="hover:underline">LinkedIn ↗</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Headquarter</h4>
              <p className="text-sm">
                Aumyaa consulting services LLP<br/>
                Corporate office:<br/>
                2414, 4th floor, Express trade tower 2<br/>
                B36, Sector 132, Noida<br/>
                Uttar Pradesh, India- 201301<br/><br/>
                10am—6pm
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-6 flex justify-between items-center">
            <div className="text-sm">
              © 2025 Aumyaa Consulting Services. All rights reserved. | Privacy | Cookies
            </div>
            
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
                <span className="text-xl">✈</span>
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
                <span className="text-xl">f</span>
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
                <span className="text-xl">▶</span>
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors">
                <span className="text-xl">📷</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  };