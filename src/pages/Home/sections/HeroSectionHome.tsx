import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "../../../components/OptimizedImage";

interface Slide {
  image: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  isDPDP?: boolean;
  duration?: number;
}

// ─── Style consts ─────────────────────────────────────────────────────────────
const headingFont = { fontFamily: "Days One, sans-serif" };
const btnDownload = { fontFamily: "Days One, sans-serif", color: "#000000" };
const btnLink = {
  fontFamily: "Days One, sans-serif",
  color: "black",
  textDecoration: "none",
};
const mobileTimerBox = { background: "rgba(255,255,255,0.12)" };
const desktopTimerBox = { background: "rgba(255,255,255,0.08)" };
const countdownCard = {
  background: "rgba(30,30,30,0.85)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.1)",
};
const slideBg = (image: string) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

// ─── DPDP Countdown Card ──────────────────────────────────────────────────────
const DPDPSlideContent: React.FC = () => {
  const TARGET_DATE = new Date("2027-05-13T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const timerUnits = [
    { value: pad(timeLeft.days), label: "Days" },
    { value: pad(timeLeft.hours), label: "Hours" },
    { value: pad(timeLeft.mins), label: "Mins" },
    { value: pad(timeLeft.secs), label: "Secs" },
  ];

  // ─── Download icon (reused in both layouts) ────────────────────────────────
  const DownloadIcon = ({ size }: { size: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} shrink-0`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    // On mobile this is RELATIVE (normal flow) so the hero grows to fit the
    // content and can never clip the "Take Assessment" button on any phone.
    // On md+ it returns to the original ABSOLUTE overlay behaviour.
    <div className="relative md:absolute md:inset-0 z-10 flex flex-col md:px-8 lg:px-12 md:py-6 lg:py-10">
      {/* =================================================================
          MOBILE LAYOUT  (< md)
          Content-driven height: the hero uses min-h, and this block flows
          normally with its own min-h so short content stays vertically
          centered while taller content simply makes the banner grow
          instead of being clipped. pt-20 reserves space for the floating
          WhatsApp + Quick Enquiry CTAs (z-20) so nothing overlaps them.
         ================================================================= */}
      <div className="flex flex-col md:hidden justify-center gap-5 px-4 sm:px-6 pt-20 pb-8 min-h-[520px] sm:min-h-[560px]">
        {/* Tagline + heading (kept tight together) */}
        <div className="flex flex-col gap-1.5">
          <p
            className="text-[#fcd421] text-[9px] font-semibold tracking-widest uppercase"
            style={headingFont}
          >
            Digital Personal Data Protection Act, 2023
          </p>
          <h1
            className="text-white text-[1.05rem] sm:text-[1.2rem] font-extrabold leading-snug"
            style={headingFont}
          >
            Become DPDP-ready before the deadline – with India's{" "}
            <span className="text-[#fcd421]">privacy governance</span>{" "}
            specialists
          </h1>
        </div>

        {/* CTA buttons — natural-width pills, left aligned on one row */}
        <div className="flex flex-row flex-wrap items-center gap-2">
          <a
            href="/website-DPDPA Service Offerings.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#fcd421] font-bold text-[10px] px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
            style={btnDownload}
          >
            <DownloadIcon size="h-3 w-3" />
            <span className="leading-none">Offerings &amp; Approach</span>
          </a>
          <Link
            to="/consulting/dpdp-compliance"
            className="flex shrink-0 items-center gap-1 bg-[#fcd421] font-bold text-[10px] px-3 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            style={btnLink}
          >
            Services <ArrowRight className="h-3 w-3 shrink-0" />
          </Link>
        </div>

        {/* Countdown */}
        <div>
          <p
            className="text-gray-300 text-[9px] font-semibold tracking-widest uppercase mb-2"
            style={headingFont}
          >
            Countdown to compliance
          </p>
          <div className="grid grid-cols-4 gap-2 mb-2.5">
            {timerUnits.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-xl py-2"
                style={mobileTimerBox}
              >
                <span
                  className="text-white text-lg font-extrabold leading-none"
                  style={headingFont}
                >
                  {value}
                </span>
                <span className="text-gray-400 text-[8px] mt-0.5">{label}</span>
              </div>
            ))}
          </div>
          <Link
            to="/consulting/dpdp-compliance/assessment"
            className="flex items-center justify-between w-full bg-[#fcd421] font-bold text-[11px] px-3 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            style={btnLink}
          >
            Take Assessment
            <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0">
              <ArrowRight className="h-2.5 w-2.5 text-[#fcd421]" />
            </span>
          </Link>
        </div>
      </div>

      {/* =================================================================
          TABLET + DESKTOP LAYOUT  (md and up)

          TABLET  (md → lg, ~768px–~1023px):
            • 2-column flex-row — no stacking, keeps content in hero height
            • Heading smaller (1.35rem) so it doesn't wrap to 5+ lines
            • Description hidden — only visible on lg+
            • Card narrower (w-52) with tighter padding
            • Button labels shortened on tablet

          DESKTOP (lg+):
            • Full heading (2.6rem), description visible, card w-80
         ================================================================= */}
      <div className="hidden md:flex flex-row items-center justify-between gap-6 lg:gap-10 mt-4 lg:mt-8 flex-1">
        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <p
            className="text-[#fcd421] text-[10px] lg:text-sm font-semibold tracking-widest uppercase mb-2 lg:mb-3"
            style={headingFont}
          >
            Digital Personal Data Protection Act, 2023
          </p>
          <h1
            className="text-white text-[1.35rem] lg:text-[2.6rem] font-extrabold leading-tight mb-3 lg:mb-4"
            style={headingFont}
          >
            Become DPDP-ready before the deadline – with India's{" "}
            <span className="text-[#fcd421]">privacy governance</span>{" "}
            specialists
          </h1>
          {/* Description — hidden on tablet, shown on desktop */}
          <p className="hidden lg:block text-gray-200 text-base leading-relaxed mb-6 max-w-lg">
            Aumyaa helps organisations assess, implement and maintain DPDP
            compliance through privacy governance, data protection processes, IT
            risk controls, vendor governance and audit-ready documentation.
          </p>
          {/* CTA buttons — always one row; download shrinks text before
              ever pushing Services onto a new line */}
          <div className="flex flex-row flex-nowrap items-center gap-2 lg:gap-3">
            <a
              href="/website-DPDPA Service Offerings.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 lg:gap-2 min-w-0 bg-[#fcd421] font-bold text-[11px] md:text-xs lg:text-base px-3 md:px-4 lg:px-5 py-2 lg:py-3 rounded-lg hover:opacity-90 transition-opacity"
              style={btnDownload}
            >
              <DownloadIcon size="h-3 w-3 lg:h-4 lg:w-4" />
              {/* Short label on tablet, full label on desktop */}
              <span className="md:hidden lg:inline leading-snug">
                DPDPA Support Offerings and Implementation Approach
              </span>
              <span className="hidden md:inline lg:hidden leading-snug">
                Offerings &amp; Implementation
              </span>
            </a>
            <Link
              to="/consulting/dpdp-compliance"
              className="flex shrink-0 items-center gap-1.5 lg:gap-2 bg-[#fcd421] font-bold text-[11px] md:text-xs lg:text-base px-3 md:px-4 lg:px-5 py-2 lg:py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              style={btnLink}
            >
              Services <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 shrink-0" />
            </Link>
          </div>
        </div>

        {/* RIGHT: Countdown Card */}
        <div
          className="w-48 md:w-52 lg:w-80 flex-shrink-0 rounded-2xl p-3 lg:p-6"
          style={countdownCard}
        >
          <h3
            className="text-white font-bold text-sm lg:text-lg mb-0.5 lg:mb-1"
            style={headingFont}
          >
            Countdown to compliance
          </h3>
          {/* Subtitle hidden on tablet to save vertical space */}
          <p className="hidden lg:block text-gray-400 text-sm mb-5 leading-snug">
            Indicative time to align with upcoming DPDP regulatory obligations
          </p>
          <div className="grid grid-cols-4 gap-1 lg:gap-2 mt-2 lg:mt-0 mb-2 lg:mb-5">
            {timerUnits.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-lg lg:rounded-xl py-2 lg:py-3 px-0.5 lg:px-1"
                style={desktopTimerBox}
              >
                <span
                  className="text-white text-sm lg:text-2xl font-extrabold leading-none"
                  style={headingFont}
                >
                  {value}
                </span>
                <span className="text-gray-400 text-[8px] lg:text-xs mt-0.5 lg:mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <Link
            to="/consulting/dpdp-compliance/assessment"
            className="flex items-center justify-between w-full bg-[#fcd421] font-bold text-[10px] lg:text-base px-2 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl hover:opacity-90 transition-opacity"
            style={btnLink}
          >
            Take Assessment
            <span className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0">
              <ArrowRight className="h-2.5 w-2.5 lg:h-4 lg:w-4 text-[#fcd421]" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── Main Hero Component ──────────────────────────────────────────────────────
export const HeroSectionHome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: "/images/home/dpdp.png",
      text: "",
      buttonText: "",
      buttonLink: "",
      isDPDP: true,
      duration: 12000,
    },
    {
      image: "/images/home/tc1.png",
      text: "Tech That Transforms. Strategy That Scales",
      buttonText: "Technology Consulting",
      buttonLink: "/consulting/tech-consulting",
    },
    {
      image: "/images/consulting/risk-consulting/ra1.png",
      text: "Navigate Risk with Foresight and Precision",
      buttonText: "Risk Advisory",
      buttonLink: "/consulting/risk-consulting",
    },
    {
      image: "/images/home/bc1.png",
      text: "Strategies That Spark Transformation",
      buttonText: "Business Consulting",
      buttonLink: "/consulting/business-consulting",
    },
    {
      image: "/images/home/esg1.png",
      text: "Accelerating Growth with Purpose and Responsibility",
      buttonText: "ESG Consulting",
      buttonLink: "/consulting/esg-consulting",
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
    // Mobile/sm use min-h so the DPDP content (in normal flow) can grow the
    // hero instead of being clipped. md+ keep the original fixed heights.
    <div className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[560px] md:h-[600px] lg:h-[650px]">
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={slideBg(slide.image)}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* WhatsApp + Quick Enquiry */}
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
          style={btnLink}
          className="py-2 px-3 md:py-[10px] md:px-[15px] bg-[#fcd421] text-black no-underline font-bold flex items-center justify-center text-center text-xs md:text-sm rounded md:rounded-none"
        >
          Quick Enquiry
        </Link>
      </div>

      {/* DPDP slide content */}
      {currentIsDPDP && <DPDPSlideContent />}

      {/* Standard bottom bar */}
      {!currentIsDPDP && (
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 px-0 sm:px-2 md:px-0 md:mr-9">
          <div className="flex w-full flex-row items-stretch gap-2 sm:gap-3 md:gap-4">
            <div
              style={headingFont}
              className="bg-[#FCD421] text-black font-bold text-xs sm:text-base md:text-lg lg:text-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-r-2xl flex min-w-0 flex-1 items-center"
            >
              {slides[currentSlide].text}
            </div>
            <Link
              to={slides[currentSlide].buttonLink}
              style={btnLink}
              className="bg-[#FCD421] flex shrink-0 items-center justify-center gap-1 sm:gap-2 text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-2xl whitespace-nowrap"
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