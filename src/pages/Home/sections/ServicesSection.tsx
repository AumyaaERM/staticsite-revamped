import React from 'react';
import { ChevronRight, Download, Phone } from 'lucide-react';

// Services Section


export const ServicesSection: React.FC = () => {
    const services = [
      {
        title: "Business Consulting",
        description: "Aumyaa's Business Consulting services enhance performance through customer journey mapping, program and project management, operational excellence, and vendor management.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
      },
      {
        title: "Technology Consulting",
        description: "Aumyaa's technology Consulting Services enhance business performance through process optimization, automation, IT strategy development, data management, digital transformation, and enterprise collaboration.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
      },
      {
        title: "Risk Advisory",
        description: "Aumyaa's Risk Advisory services help businesses manage uncertainty, enhance resilience, and create value through optimized internal controls, business continuity planning, and continuous control monitoring.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
      },
      {
        title: "ESG Consulting",
        description: "Aumyaa's ESG Consulting services assist organizations in integrating effective Environmental, Social, and Governance (ESG) practices to enhance operational efficiency, sustainable value creation, and strengthen stakeholder relationships.",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop"
      }
    ];
    
    return (
      <div className="bg-white py-16 px-12 text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-yellow-400 text-xl mb-12">Explore how we help you navigate change and thrive</p>
          
          <div className="grid grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-colors">
                    View all details
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };