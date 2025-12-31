import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
        "Aumyaa’s Compliance services support organizations in building strong compliance frameworks, reducing regulatory risks, and staying aligned with evolving laws. We help drive ethical practices and operational integrity, enabling confident and compliant business growth.",
      image: '/images/home/service5.png',
      link: '/consulting/compliance-services'
    }
  ];
  const carouselRef = useRef(null);

  useEffect(() => {
    const slider:any = carouselRef.current;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
  
    const onMouseDown = (e: { pageX: number; }) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
  
    const onMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };
  
    const onMouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };
  
    const onMouseMove = (e: { preventDefault: () => void; pageX: number; }) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.3; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };
  
    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);
  
    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  
  return (
    <div className="bg-white overflow-x-hidden py-10 md:py-16 px-4 sm:px-6 md:px-12 text-black">
      <div className="max-w-7xl overflow-x-hidden mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-yellow-500 text-base sm:text-lg md:text-xl mb-8 md:mb-12">
          Explore how we help you navigate change and thrive
        </p>

        {/* CAROUSEL */}
        <div ref={carouselRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide 
          cursor-grab active:cursor-grabbing select-none items-stretch"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="min-w-[320px] sm:min-w-[340px] md:min-w-[360px] lg:min-w-[320px] bg-white rounded-2xl border-2 border-[#FCD421] 
              overflow-hidden transition-shadow snap-start flex flex-col p-4"
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[160px] object-cover rounded-xl flex-shrink-0"
              />

              {/* TEXT CONTENT */}
              <div className="pt-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mt-2 mb-4">
                  {service.description}
                </p>

                {/* BUTTON - pushed to bottom for alignment */}
                <button
                  onClick={() => navigate(service.link)}
                  style={{ backgroundColor: '#FCD421', borderRadius: '9999px' }}
                  className="text-black font-semibold pl-6 pr-2 py-2.5 items-center flex justify-between hover:brightness-95 transition-all w-full text-sm mt-auto"
                >
                  <span>View all details</span>
                  <span className="bg-white rounded-full p-2 flex items-center justify-center shadow-sm">
                    <ChevronRight className="w-5 h-5 text-black" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
