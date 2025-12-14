import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  image: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export const HeroSectionHome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: '/images/home/tc1.png',
      text: 'Tech That Transforms. Strategy That Scales',
      buttonText: 'Technology Consulting',
      buttonLink: '/consulting/tech-consulting'
    },
    {
      image: '/images/home/attachment (1) 3-1.svg',
      text: 'Navigate Risk with Foresight and Precision',
      buttonText: 'Risk Advisory',
      buttonLink: '/consulting/risk-consulting'
    },
    {
      image: '/images/home/bc1.png',
      text: 'Strategies That Spark Transformation',
      buttonText: 'Business Consulting',
      buttonLink: '/consulting/business-consulting'
    },
    {
      image: '/images/home/esg1.png',
      text: 'Accelerating Growth with Purpose and Responsibility',
      buttonText: 'ESG Consulting',
      buttonLink: '/consulting/esg-consulting'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img 
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
        
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-0 right-0 flex items-center gap-3 z-10">
        <a
          href="https://wa.me/9818248133"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center"
        >
          <img
            src="/images/home/whatsapp.png"
            alt="WhatsApp"
            className="w-full h-full object-contain"
          />
        </a>
        <a
          href="/contact-us.html"
          style={{ fontFamily: 'Days One, sans-serif', textDecoration: 'none', color: "white" }}

          className=" py-[10px] px-[15px] bg-[#fcd421] text-white no-underline font-bold flex items-center justify-center text-center"
        >
          Quick Enquiry
        </a>
          </div>

      <div className="absolute bottom-4 md:bottom-8 left-0 right-4 md:right-8 z-10">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-2 md:gap-4">
          <label style={{ fontFamily: 'Days One, sans-serif' }}
            className="bg-[#FCD421] text-black font-bold text-base sm:text-xl md:text-2xl lg:text-3xl w-full px-4 sm:px-6 py-3 md:py-4 rounded-r-xl md:rounded-r-2xl inline-block">
            {slides[currentSlide].text}
          </label>
          <Link
            to={slides[currentSlide].buttonLink}
            style={{ fontFamily: 'Days One, sans-serif', color: "black", textDecoration: 'none' }}
            className="bg-[#FCD421] flex items-center gap-2 whitespace-nowrap text-black font-bold 
             text-sm sm:text-lg md:text-2xl lg:text-3xl px-4 sm:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl inline-flex justify-center cursor-pointer"
          >
            <span>{slides[currentSlide].buttonText}</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
        </div>
      </div>
    );
  };