import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../../components/OptimizedImage';

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
      image: '/images/consulting/risk-consulting/ra1.png',
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
    <div className="relative w-full overflow-hidden h-[450px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}
        
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-2 right-2 md:top-4 md:right-4 flex items-center gap-2 md:gap-3 z-10">
        <a
          href="https://wa.me/9818248133"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        >
          <OptimizedImage
            src="/images/home/whatsapp.png"
            alt="WhatsApp"
            className="w-full h-full object-contain"
            width={48}
            height={48}
          />
        </a>
        <Link
          to="/contact"
          style={{ fontFamily: 'Days One, sans-serif', textDecoration: 'none', color: "black" }}
          className="py-2 px-3 md:py-[10px] md:px-[15px] bg-[#fcd421] text-black no-underline font-bold flex items-center justify-center text-center text-xs md:text-sm rounded md:rounded-none"
        >
          Quick Enquiry
        </Link>
          </div>

      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 px-3 sm:px-2 md:px-0 md:mr-9">
        <div className="flex w-full flex-row items-stretch gap-2 sm:gap-3 md:gap-4">
          <div
            style={{ fontFamily: 'Days One, sans-serif' }}
            className="bg-[#FCD421] text-black font-bold text-xs sm:text-base md:text-lg lg:text-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-r-2xl flex min-w-0 flex-1 items-center"
          >
            {slides[currentSlide].text}
          </div>
          <Link
            to={slides[currentSlide].buttonLink}
            style={{ fontFamily: 'Days One, sans-serif', color: 'black', textDecoration: 'none' }}
            className="bg-[#FCD421] flex shrink-0 items-center justify-center gap-1 sm:gap-2 text-black font-bold
              text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-2xl whitespace-nowrap"
          >
            <span>{slides[currentSlide].buttonText}</span>
            <ArrowRight className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};