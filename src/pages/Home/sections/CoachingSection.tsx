import { ChevronRight } from 'lucide-react';
import {Link} from "react-router-dom";

export function CoachingSection() {
    return (
    <div className="bg-[#fafafa] py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 text-black">
          {/* Learning Academy Card */}
          <div className="flex-1 flex flex-col bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
              <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Learning Academy"
              className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover"
              />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <span className="font-semibold text-sm">Skill Up</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3" style={{ fontFamily: 'Days One, sans-serif' }}>
                Aumyaa Learning Academy
              </h3>
              
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                Empower yourself and your organization with 'Aumyaa Learning Academy' - where learning meets excellence!
              </p>
              
              <p className="font-semibold mb-3 text-sm">Why Choose Aumyaa Learning Academy?</p>
              
              <div className="space-y-2 flex-grow">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg flex-shrink-0">💎</span>
                  <p className="text-xs">
                    <strong>Diverse Courses</strong> – Learn Cybersecurity, AI, Risk Management, Ethics, and more.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg flex-shrink-0">💎</span>
                  <p className="text-xs">
                    <strong>Hands-On Learning</strong> – Experience real-world simulations and case studies.
                  </p>
                  </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg flex-shrink-0">💎</span>
                  <p className="text-xs">
                    <strong>Certified Excellence</strong> – Earn globally recognized industry credentials.
                  </p>
                  </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg flex-shrink-0">💎</span>
                  <p className="text-xs">
                    <strong>Future-Ready Skills</strong> – Stay ahead with industry-focused training.
                  </p>
                </div>
              </div>
              
              <Link to="/executive-coaching" style={{background:"#fcd421", textDecoration: 'none', color: '#000000'}} className="bg-yellow-400 font-semibold px-6 py-3 rounded-full flex items-center justify-between hover:bg-yellow-500 transition-colors text-sm md:text-base mt-auto">
                  View all details
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center ml-2 md:ml-4">
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                </Link>
              </div>
            </div>

          {/* Executive Coaching Card */}
          <div className="flex-1 flex flex-col bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
              <img
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop"
                alt="Executive Coaching"
              className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover"
              />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <span className="font-semibold text-sm">TRANSFORMATIVE TRANSITIONS</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Days One, sans-serif' }}>
                Executive Coaching
              </h3>
              
              <p className="text-[#fcd421] text-xs font-semibold mb-3">
                Attention : CHROs & L&D Leaders of Professional Service Firms, MNCs, and Listed Companies!
              </p>
              
              <p className="font-bold mb-3 text-xs">
                ARE THE SENIOR PROFESSIONALS IN YOUR ORGANIZATION STRIVING TO ACHIEVE :
              </p>
              
              <div className="space-y-2 flex-grow">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg flex-shrink-0">💎</span>
                  <p className="text-xs">
                    <strong>Awakening Awareness</strong> – Elevate their strategic mindset
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg flex-shrink-0">💎</span>
                  <p className="text-xs">
                    <strong>Exponential Growth</strong> – Propel their careers to new heights
                  </p>
                  </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg flex-shrink-0">💎</span>
                  <p className="text-xs">
                    <strong>High-Value Deals</strong> – Master the art of impactful negotiations
                  </p>
                  </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg flex-shrink-0">💎</span>
                  <p className="text-xs">
                    <strong>Dream Plans</strong> – Turn aspirations into reality
                  </p>
                </div>
              </div>
              
              <p className="text-xs italic mb-3">Your Search Ends Here!</p>
              
                <p className="text-[#fcd421] text-xs font-semibold mb-3">
                  Grow your senior professionals' productivity by 2X in the next 90 days.
                </p>
              
              <p className="font-bold text-xs mb-4 underline">Click Here to Get Started</p>

              <Link to="/executive-coaching" style={{background:"#fcd421", textDecoration: 'none', color: '#000000'}} className="bg-[#fcd421] font-semibold px-6 py-3 rounded-full flex items-center justify-between transition-colors text-sm md:text-base mt-auto">
                  View all details
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center ml-2 md:ml-4">
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}