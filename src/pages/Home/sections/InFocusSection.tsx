import { OptimizedImage } from '../../../components/OptimizedImage';

// In Focus Section
export const InFocusSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[800px] lg:min-h-[900px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <OptimizedImage
          src="/images/home/videophoto.png"
          alt="In Focus Background"
          className="w-full h-full object-cover object-center"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 h-full min-h-[600px] md:min-h-[800px] lg:min-h-[900px]">
        
        {/* Heading */}
        <div className="pt-8 md:pt-16 lg:pt-20 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12"
            style={{ fontFamily: "Days One, sans-serif" }}
          >
            In Focus
          </h2>
        </div>

        {/* Content Container - Vertically centered */}
        <div className="flex items-center md:scale-110 justify-center mb-12 md:mt-[90px] md:px-5" style={{ minHeight: 'calc(100% - 120px)' }}>
          <div className="w-full max-w-5xl mx-auto border-2 md:border-4 border-[#fcd421] rounded-xl md:rounded-2xl p-2 md:p-4">
            
            {/* MAIN YELLOW CARD */}
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl md:rounded-2xl overflow-hidden">

              {/* LEFT: VIDEO */}
              <div className="bg-[#fcd421] p-4 sm:p-6 md:p-8 flex items-center justify-center">
                <div className="w-full aspect-video">
                  <iframe
                    className="w-full h-full rounded"
                    src="https://www.youtube.com/embed/a081_W5U_SY?"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* RIGHT: TEXT + BUTTON */}
              <div className="bg-[#fcd421] p-6 sm:p-8 md:p-10 text-black flex flex-col justify-center">
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                  style={{ fontFamily: "Days One, sans-serif" }}
                >
                  Navigating Net Zero: <span className="italic">A</span> Sustainable
                  Business Transformation
                </h3>

                <p className="text-sm sm:text-base mb-6 md:mb-10 leading-relaxed">
                  Embark on a transformative journey towards net-zero emissions with
                  our comprehensive guide! 🚀 From assessing your current standing to
                  setting ambitious targets aligned with global standards, we explore
                  each step of the Net Zero Roadmap.
                </p>

                <a
                  href="https://youtu.be/a081_W5U_SY?si=qwJbzgzxMhmMgh36"
                  className="bg-black text-white no-underline hover:text-white font-bold px-6 md:px-10 py-3 md:py-4 w-fit hover:bg-gray-800 transition-colors text-sm md:text-base rounded inline-block"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Watch More
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};