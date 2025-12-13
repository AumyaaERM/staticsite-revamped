import React from 'react';
import { ChevronRight } from 'lucide-react';

export function CoachingSection() {
  return (
    <div className="bg-[#fafafa] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 h-[650px] lg:grid-cols-2 gap-8 text-black">
          {/* Learning Academy Card */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
              alt="Learning Academy"
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <span className="font-semibold text-sm">Skill Up</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Days One, sans-serif' }}>
                Aumyaa Learning Academy
              </h3>
              
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                Empower yourself and your organization with 'Aumyaa Learning Academy' - where learning meets excellence!
              </p>
              
              <p className="font-semibold mb-3 text-sm">Why Choose Aumyaa Learning Academy?</p>
              
              <div className="space-y-2 mb-6">
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
              
              <button style={{background:"#fcd421"}} className=" bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-colors text-sm">
                View all details
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Executive Coaching Card */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop" 
              alt="Executive Coaching"
              className="w-full h-[350px] object-cover "
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <span className="font-semibold text-sm">TRANSFORMATIVE TRANSITIONS</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Days One, sans-serif' }}>
                Executive Coaching
              </h3>
              
              <p className="text-[#fcd421] text-xs font-semibold mb-3">
                Attention : CHROs & L&D Leaders of Professional Service Firms, MNCs, and Listed Companies!
              </p>
              
              <p className="font-bold mb-3 text-xs">
                ARE THE SENIOR PROFESSIONALS IN YOUR ORGANIZATION STRIVING TO ACHIEVE :
              </p>
              
              <div className="space-y-2 mb-4">
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
              
              <button style={{background:"#fcd421"}} className="text-black bg-[#fcd421] text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors text-sm">
                View all details
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}