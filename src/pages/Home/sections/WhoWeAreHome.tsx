import React from 'react';

export const WhoWeAreHome: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-0 items-center mb-16">
          <div className="mr-[5%] text-center md:text-left">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Days One, sans-serif' }}
            >
              <span className="text-[#FCD421]">Who</span>{' '}
              <span className="text-black">We Are</span>
            </h2>
          </div>

          <div className="flex-1">
            <p className="text-gray-700 text-xl leading-relaxed text-center md:text-left">
              We are a team of seasoned professionals from Fortune 100 and Big 4 firms, dedicated to
              driving business success. We specialize in Business Consulting, Technology Consulting, Risk
              Advisory, and ESG, empowering organizations to navigate challenges, drive transformation, and
              achieve sustainable growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.7fr] gap-6">
        <div className="vision-tile bg-[#FCD421] rounded-3xl overflow-hidden relative flex flex-col h-full">
            <div className="bg-[#FCD421] px-6 py-4 flex-shrink-0">
              <h3 
              style={{ fontFamily: 'Days One, sans-serif' }}
              className="text-2xl font-bold text-center text-black">Vision</h3>
            </div>
            <div className="relative flex-1 bg-white min-h-[256px]">
              <img
                src="/images/home/vision.jpg"
                alt="Vision"
                className="forward-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="backward-img absolute inset-0 w-full h-full bg-white p-6 flex items-center justify-center">
                <p className="font-bold text-xl text-black italic text-base leading-relaxed text-left">
                  Empowering our clients and professionals. by creating value with perfection in work through
                  collaboration of the best minds and technology.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-tile bg-[#FCD421] rounded-3xl overflow-hidden relative flex flex-col h-full">
            <div className="bg-[#FCD421] px-6 py-4 flex-shrink-0">
              <h3 
              style={{ fontFamily: 'Days One, sans-serif' }}
              className="text-2xl font-bold text-center text-black">Mission</h3>
            </div>
            <div className="relative flex-1 bg-white min-h-[256px]">
              <img
                src="/images/home/mission.jpg"
                alt="Mission"
                className="forward-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="backward-img absolute inset-0 w-full h-full bg-white p-6 flex items-center justify-center">
                <p className="font-bold text-xl  text-black italic text-base leading-relaxed text-left">
                  To be the best in the field of consulting and training, delivering through niche knowledge,
                  technology, experience and customised methodologies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#FCD421] rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="bg-[#FCD421] px-6 py-4 flex-shrink-0">
              <h3 className="text-2xl font-bold text-center text-black">What's New</h3>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-start">
              <h4 className="font-bold text-sm mb-3 text-black">
                SEBI Releases BRSR core Assessment/ Assurance
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                The Securities and Exchange Board of India (SEBI) has introduced BRSR Core, a focused ESG
                reporting framework designed for Indian and emerging markets. With enhanced KPIs covering
                areas like job creation, gender pay equity, and global comparability, this marks a major
                step toward standardized, credible, and transparent sustainability reporting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vision-tile,
        .mission-tile {
          position: relative;
          overflow: hidden;
        }

        .forward-img,
        .backward-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease;
        }

        .backward-img {
          opacity: 0;
        }

        .vision-tile:hover .backward-img,
        .mission-tile:hover .backward-img {
          opacity: 1;
        }

        .vision-tile:hover .forward-img,
        .mission-tile:hover .forward-img {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};