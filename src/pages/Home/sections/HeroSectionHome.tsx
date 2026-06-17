import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../../components/OptimizedImage';

interface Slide {
  image: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  isDPDP?: boolean;
  duration?: number; 
}

// ─── DPDP Countdown Card ───────────────────────────────────────────
const DPDPSlideContent: React.FC = () => {
  // Target Date for DPDP compliance
  const TARGET_DATE = new Date('2027-05-13T00:00:00');

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTimeLeft({
        days:  Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins:  Math.floor((diff / (1000 * 60)) % 60),
        secs:  Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  const timerUnits = [
    { value: pad(timeLeft.days),  label: 'Days' },
    { value: pad(timeLeft.hours), label: 'Hours' },
    { value: pad(timeLeft.mins),  label: 'Mins' },
    { value: pad(timeLeft.secs),  label: 'Secs' },
  ];

  return (
    <div className="absolute inset-0 z-10 flex flex-col px-4 sm:px-6 md:px-12 py-4 md:py-10">

      {/* ═══════════════════════════════════════════════════
          MOBILE LAYOUT 
      ═══════════════════════════════════════════════════ */}
      <div className="flex flex-col md:hidden flex-1 mt-10 gap-2.5">

        {/* Tagline */}
        <p
          className="text-[#fcd421] text-[10px] font-semibold tracking-widest uppercase"
          style={{ fontFamily: 'Days One, sans-serif' }}
        >
          Digital Personal Data Protection Act, 2023
        </p>

        {/* Heading */}
        <h1
          className="text-white text-[1.25rem] font-extrabold leading-snug"
          style={{ fontFamily: 'Days One, sans-serif' }}
        >
          Become DPDP-ready before the deadline – with India's{' '}
          <span className="text-[#fcd421]">privacy governance</span>{' '}
          specialists
        </h1>

        {/* CTA buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href="/DPDP compliance roadmap.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#fcd421] text-black font-bold text-[11px] px-3 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
            style={{ fontFamily: 'Days One, sans-serif', color: '#000000' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Readiness Checklist
          </a>
          <Link
            to="/consulting/dpdp-compliance"
            className="flex items-center gap-1.5 bg-[#fcd421] text-black font-bold text-[11px] px-3 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
            style={{ fontFamily: 'Days One, sans-serif', color: 'black', textDecoration: 'none' }}
          >
            Services <ArrowRight className="h-3 w-3 shrink-0" />
          </Link>
        </div>

        {/* Compact countdown */}
        <div className="mt-auto">
          <p
            className="text-gray-300 text-[10px] font-semibold tracking-widest uppercase mb-2"
            style={{ fontFamily: 'Days One, sans-serif' }}
          >
            Countdown to compliance
          </p>

          {/* 4 timer boxes */}
          <div className="grid grid-cols-4 gap-2 mb-2.5">
            {timerUnits.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-xl py-2"
                style={{ background: 'rgba(255,255,255,0.10)' }}
              >
                <span
                  className="text-white text-lg font-extrabold leading-none"
                  style={{ fontFamily: 'Days One, sans-serif' }}
                >
                  {value}
                </span>
                <span className="text-gray-400 text-[9px] mt-0.5">{label}</span>
              </div>
            ))}
          </div>

          {/* Take Assessment */}
          <Link
            to="/consulting/dpdp-compliance/assessment"
            className="flex items-center justify-between w-full bg-[#fcd421] text-black font-bold text-xs px-3 py-2.5 rounded-xl hover:bg-yellow-300 transition-colors"
            style={{ fontFamily: 'Days One, sans-serif', color: 'black', textDecoration: 'none' }}
          >
            Take Assessment
            <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
              <ArrowRight className="h-3 w-3 text-[#fcd421]" />
            </span>
          </Link>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════
          DESKTOP LAYOUT 
      ═══════════════════════════════════════════════════ */}
      <div className="hidden md:flex flex-row items-center justify-between gap-10 mt-8 flex-1">

        {/* LEFT: full text block */}
        <div className="flex-1 max-w-2xl">
          <p
            className="text-[#fcd421] text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: 'Days One, sans-serif' }}
          >
            Digital Personal Data Protection Act, 2023
          </p>

          <h1
            className="text-white text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-tight mb-4"
            style={{ fontFamily: 'Days One, sans-serif' }}
          >
            Become DPDP-ready before the deadline – with India's{' '}
            <span className="text-[#fcd421]">privacy governance</span>{' '}
            specialists
          </h1>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
            Aumyaa helps organisations assess, implement and maintain DPDP
            compliance through privacy governance, data protection processes,
            IT risk controls, vendor governance and audit-ready documentation.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/DPDP compliance roadmap.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#fcd421] text-black font-bold text-sm md:text-base px-5 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
              style={{ fontFamily: 'Days One, sans-serif', color: '#000000' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download DPDP Readiness Checklist
            </a>
            <Link
              to="/consulting/dpdp-compliance"
              className="flex items-center gap-2 bg-[#fcd421] text-black font-bold text-sm md:text-base px-5 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
              style={{ fontFamily: 'Days One, sans-serif', color: 'black', textDecoration: 'none' }}
            >
              Services <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>

        {/* RIGHT: Countdown Card */}
        <div
          className="w-72 lg:w-80 rounded-2xl p-5 lg:p-6 flex-shrink-0"
          style={{
            background: 'rgba(40, 40, 40, 0.80)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h3
            className="text-white font-bold text-base lg:text-lg mb-1"
            style={{ fontFamily: 'Days One, sans-serif' }}
          >
            Countdown to compliance
          </h3>
          <p className="text-gray-400 text-xs lg:text-sm mb-5 leading-snug">
            Indicative time to align with upcoming DPDP regulatory obligations
          </p>

          <div className="grid grid-cols-4 gap-2 mb-5">
            {timerUnits.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-xl py-3 px-1"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <span
                  className="text-white text-xl lg:text-2xl font-extrabold leading-none"
                  style={{ fontFamily: 'Days One, sans-serif' }}
                >
                  {value}
                </span>
                <span className="text-gray-400 text-[10px] lg:text-xs mt-1">{label}</span>
              </div>
            ))}
          </div>

          <Link
            to="/consulting/dpdp-compliance/assessment"
            className="flex items-center justify-between w-full bg-[#fcd421] text-black font-bold text-sm lg:text-base px-4 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
            style={{ fontFamily: 'Days One, sans-serif', color: 'black', textDecoration: 'none' }}
          >
            Take Assessment
            <span className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0">
              <ArrowRight className="h-4 w-4 text-[#fcd421]" />
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};

// ─── Main Hero Component ───────────────────────────────────────────
export const HeroSectionHome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: '/images/home/dpdp.png',
      text: '',
      buttonText: '',
      buttonLink: '',
      isDPDP: true,
      duration: 12000, // 12s 
    },
    {
      image: '/images/home/tc1.png',
      text: 'Tech That Transforms. Strategy That Scales',
      buttonText: 'Technology Consulting',
      buttonLink: '/consulting/tech-consulting',
    },
    {
      image: '/images/consulting/risk-consulting/ra1.png',
      text: 'Navigate Risk with Foresight and Precision',
      buttonText: 'Risk Advisory',
      buttonLink: '/consulting/risk-consulting',
    },
    {
      image: '/images/home/bc1.png',
      text: 'Strategies That Spark Transformation',
      buttonText: 'Business Consulting',
      buttonLink: '/consulting/business-consulting',
    },
    {
      image: '/images/home/esg1.png',
      text: 'Accelerating Growth with Purpose and Responsibility',
      buttonText: 'ESG Consulting',
      buttonLink: '/consulting/esg-consulting',
    },
  ];

  useEffect(() => {
    const duration = slides[currentSlide].duration ?? 4000;
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => clearTimeout(timeout);
  }, [currentSlide, slides.length]);

  const currentIsDPDP = slides[currentSlide].isDPDP === true;

  return (
    <div className="relative w-full overflow-hidden h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">

      {/* ── Background images ── */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ── WhatsApp + Quick Enquiry ── */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 flex items-center gap-2 md:gap-3 z-20">
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
          style={{ fontFamily: 'Days One, sans-serif', textDecoration: 'none', color: 'black' }}
          className="py-2 px-3 md:py-[10px] md:px-[15px] bg-[#fcd421] text-black no-underline font-bold flex items-center justify-center text-center text-xs md:text-sm rounded md:rounded-none"
        >
          Quick Enquiry
        </Link>
      </div>

      {/* ── DPDP slide content ── */}
      {currentIsDPDP && <DPDPSlideContent />}

      {/* ── Standard bottom bar  */}
      {!currentIsDPDP && (
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 px-0 sm:px-2 md:px-0 md:mr-9">
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
      )}

    </div>
  );
};