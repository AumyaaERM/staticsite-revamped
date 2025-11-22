
import { ChevronRight } from 'lucide-react';
// Coaching Cards Section
export const CoachingSection: React.FC = () => {
    return (
      <div className="bg-white py-16 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop" 
                alt="Learning Academy"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span>📚</span>
                  <span className="font-semibold">Skill Up</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Aumyaa Learning Academy</h3>
                <p className="text-gray-700 mb-6">
                  Empower yourself and your organization with 'Aumyaa Learning Academy' - where learning meets excellence!
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">💎</span>
                    <p className="text-sm"><strong>Diverse Courses</strong> – Learn Cybersecurity, AI, Risk Management, Ethics, and more.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">💎</span>
                    <p className="text-sm"><strong>Hands-On Learning</strong> – Experience real-world simulations and case studies.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">💎</span>
                    <p className="text-sm"><strong>Certified Excellence</strong> – Earn globally recognized industry credentials.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">💎</span>
                    <p className="text-sm"><strong>Future-Ready Skills</strong> – Stay ahead with industry-focused training.</p>
                  </div>
                </div>
                <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-colors">
                  View all details
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&h=300&fit=crop" 
                alt="Executive Coaching"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-start gap-2 mb-4 text-sm">
                  <span>🔄</span>
                  <span className="font-semibold">TRANSFORMATIVE TRANSITIONS</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Executive Coaching</h3>
                <p className="text-yellow-400 text-sm font-semibold mb-4">
                  Attention : CHROs & L&D Leaders of Professional Service Firms, MNCs, and Listed Companies!
                </p>
                <p className="font-bold mb-4">ARE THE SENIOR PROFESSIONALS IN YOUR ORGANIZATION STRIVING TO ACHIEVE :</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">💎</span>
                    <p className="text-sm"><strong>Awakening Awareness</strong> - Elevate their strategic mindset</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">💎</span>
                    <p className="text-sm"><strong>Exponential Growth</strong> - Propel their careers to new heights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">💎</span>
                    <p className="text-sm"><strong>High-Value Deals</strong> - Master the art of impactful negotiations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">💎</span>
                    <p className="text-sm"><strong>Dream Plans</strong> - Turn aspirations into reality</p>
                  </div>
                </div>
                <p className="text-sm italic mb-4">Your Search Ends Here!</p>
                <p className="text-yellow-400 text-sm font-semibold mb-6">
                  Grow your senior professionals' productivity by 2X in the next 90 days.
                </p>
                <p className="font-bold text-sm mb-6">Click Here to Get Started</p>
                <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-colors">
                  View all details
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };