import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { OptimizedImage } from '../../../components/OptimizedImage';

export const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Business Consulting',
      description:
        "Aumyaa's Business Consulting services enhance performance through customer journey mapping, program and project management, operational excellence, and vendor management.",
      image: '/images/home/servoice1.png',
      link: '/consulting/business-consulting'
    },
    {
      title: 'Technology Consulting',
      description:
        "Aumyaa's technology Consulting Services enhance business performance through process optimization, automation, IT strategy development, data management, digital transformation, and enterprise collaboration.",
      image: '/images/home/service2.png',
      link: '/consulting/tech-consulting'
    },
    {
      title: 'Risk Advisory',
      description:
        "Aumyaa's Risk Advisory services help businesses manage uncertainty, enhance resilience, and create value through optimized internal controls, business continuity planning, and continuous control monitoring.",
      image: '/images/home/service3.png',
      link: '/consulting/risk-consulting'
    },
    {
      title: 'ESG Consulting',
      description:
        "Aumyaa's ESG Consulting services assist organizations in integrating effective Environmental, Social, and Governance (ESG) practices to enhance operational efficiency, sustainable value creation, and strengthen stakeholder relationships.",
      image: '/images/home/service4.png',
      link: '/consulting/esg-consulting'
    },
    {
      title: 'Compliance Support Solutions',
      description:
        "Aumyaa's Compliance services support organizations in building strong compliance frameworks, reducing regulatory risks, and staying aligned with evolving laws. We help drive ethical practices and operational integrity, enabling confident and compliant business growth.",
      image: '/images/home/service5.png',
      link: '/consulting/compliance-services'
    }
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12 text-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
      <p className="text-yellow-500 text-base sm:text-lg md:text-xl mb-8 md:mb-12">
        Explore how we help you navigate change and thrive
      </p>

      {/* Responsive Layout: one row on desktop, scroll on mobile/tablet */}
      <div className="flex overflow-x-auto lg:overflow-visible gap-4 md:gap-5 pb-4 lg:pb-0">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="w-[280px] sm:w-[300px] lg:w-1/5 flex-shrink-0 lg:flex-shrink bg-white rounded-2xl border-2 border-[#FCD421] overflow-hidden transition-all hover:shadow-lg hover:scale-105 duration-300 flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative w-full pt-[56.25%]">
              <OptimizedImage
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="p-3 md:p-4 flex-1 flex flex-col mt-[-20px]">
              <h3 className="text-base md:text-lg font-bold mb-1.5 line-clamp-2 min-h-[2.5rem]">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 leading-snug mb-3 mt-[-6px]">
                {service.description}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => navigate(service.link)}
                style={{ backgroundColor: '#FCD421', borderRadius: '9999px' }}
                className="text-black font-semibold pl-4 pr-1.5 py-1.5 flex items-center justify-between hover:brightness-95 transition-all w-full text-xs md:text-sm mt-auto"
              >
                <span>View all details</span>
                <span className="bg-white rounded-full p-1.5 flex items-center justify-center shadow-sm">
                  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};