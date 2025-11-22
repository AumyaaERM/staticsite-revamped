import React from 'react';

// Who We Are Section
export const WhoWeAreHome: React.FC = () => {
  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-16 items-start">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-yellow-400">Who</span> <span className="text-black">We Are</span>
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-gray-700 text-lg leading-relaxed">
              We are a team of seasoned professionals from Fortune 100 and Big 4 firms, 
              dedicated to driving business success. We specialize in Business Consulting, 
              Technology Consulting, Risk Advisory, and ESG, empowering organizations to 
              navigate challenges, drive transformation, and achieve sustainable growth.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="bg-yellow-400 rounded-3xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-center mb-4">Vision</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=250&fit=crop" 
              alt="Vision"
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div className="bg-yellow-400 rounded-3xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-center mb-4">Mission</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop" 
              alt="Mission"
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div className="bg-white border-2 border-yellow-400 rounded-3xl p-6">
            <div className="bg-yellow-400 text-black font-bold text-xl px-6 py-3 rounded-full inline-block mb-6">
              What's New
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm">SEBI Releases BRSR core Assessment/Assurance</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                The Securities and Exchange Board of India (SEBI) has introduced BRSR Core, a focused 
                ESG reporting framework designed for Indian and emerging markets. With enhanced KPIs 
                covering areas like job creation, gender pay equity, and global comparability...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};