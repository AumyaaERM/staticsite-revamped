import React from 'react';

export const TrustedBySection: React.FC = () => {
  const industries = [
    {
      title: "Manufacturing",
      description: "We collaborate with leading Maharatna PSUs and top global manufacturing enterprises to optimize IT infrastructure, enhance operational compliance, and drive sustainable growth through innovative solutions.",
      image: "/images/about/manufacturing.png"
    },
    {
      title: "BFSI",
      description: "Serving top-tier banks, financial institutions, and global insurance providers, we deliver robust risk management frameworks and regulatory compliance solutions to elevate governance and operational efficiency.",
      image: "/images/about/office-modern.png"
    },
    {
      title: "Technology",
      description: "Partnering with the largest technology companies operating in over 140 countries, we design scalable SOD frameworks and risk management solutions tailored to complex global operations.",
      image: "/images/about/technology-laptop.png"
    },
    {
      title: "Consulting",
      description: "Supporting leading global and national consulting firms, we enhance their service delivery through expert guidance in ITGC, Audit trails, and regulatory compliance to meet evolving client needs.",
      image: "/images/about/team-collaboration.png"
    },
    {
      title: "ESG",
      description: "We empower top-performing organizations and global enterprises to embed sustainability into their core strategies through expert ESG consulting and comprehensive training programs.",
      image: "/images/about/renewable-energy.png"
    },
    {
      title: "Coaching & Leadership",
      description: "Working with senior leaders and executives from Fortune 500 companies and global enterprises, we provide customized coaching programs to drive leadership excellence and personal growth.",
      image: "/images/about/consulting-workspace.png"
    }
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[16px] sm:text-[22px] md:text-[32px] lg:text-[42px] xl:text-[48px] leading-[130%] md:leading-[58px] text-left mb-8 md:mb-16 capitalize tracking-[0.01em] sm:tracking-[0.02em] md:tracking-[0.04em] whitespace-nowrap"
            style={{
              fontFamily: 'Days One, sans-serif',
              fontWeight: 400,
              color: '#000000'
            }}>
          Aumyaa trusted by <span style={{color: '#FCD421'}}>businesses worldwide</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="rounded-[5px] overflow-hidden flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(242, 213, 27, 0.2)',
                boxShadow: '-4px 29px 43px -10px rgba(25, 24, 17, 0.12)',
                backdropFilter: 'blur(2px)'
              }}
            >
              <div className="p-6 flex-shrink-0">
                <h3 className="text-[20px] leading-[122%] mb-4 text-justify tracking-[0.01em]" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  color: '#000000'
                }}>
                  {industry.title}
                </h3>
                <p className="text-[13px] md:text-[15px] leading-[140%] md:leading-[122%] mb-3 md:mb-4 text-justify tracking-[0.01em]" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#000000'
                }}>
                  {industry.description}
                </p>
              </div>
              <div className="px-4 md:px-6 pb-4 md:pb-6 flex-1 flex flex-col min-h-0">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full flex-1 object-cover rounded-[5px]"
                  style={{ minHeight: '180px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
