import React from 'react';

export const TrustedBySection: React.FC = () => {
  const industries = [
    {
      title: "Manufacturing & Industrial Consulting",
      description: "We partner with Maharatna PSUs and global manufacturing enterprises to optimize IT infrastructure, strengthen operational compliance, and drive sustainable growth through innovative risk and technology consulting solutions.",
      image: "/images/about/manufacturing.png"
    },
    {
      title: "BFSI — Banking, Financial Services & Insurance Consulting",
      description: "Serving top-tier banks, financial institutions, and global insurance providers, we deliver robust risk management frameworks, credit risk advisory, and regulatory compliance consulting to elevate governance and operational efficiency.",
      image: "/images/about/office-modern.png"
    },
    {
      title: "Technology & IT Risk Consulting",
      description: "Partnering with leading technology companies across 140+ countries, we design scalable SOD frameworks, AI governance models, and IT risk management consulting solutions tailored to complex global operations.",
      image: "/images/about/technology-laptop.png"
    },
    {
      title: "Risk & Compliance Consulting",
      description: "We support leading global and national consulting firms with expert guidance in IT General Controls (ITGC), audit trail management, and regulatory compliance consulting — helping firms deliver sharper, more compliant client outcomes.",
      image: "/images/about/team-collaboration.png"
    },
    {
      title: "ESG & Sustainability Consulting",
      description: "We empower top-performing organizations and global enterprises to embed sustainability into their core business strategies through expert ESG consulting services, carbon footprint advisory, and comprehensive ESG training programs.",
      image: "/images/about/renewable-energy.png"
    },
    {
      title: "Executive Coaching &amp; Leadership Development",
      description: "Working with senior leaders and C-suite executives from Fortune 500 companies and global enterprises, we deliver customized executive coaching programs and leadership advisory services to drive organizational excellence and measurable personal growth.",
      image: "/images/about/consulting-workspace.png"
    }
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="w-full">
        <h2 className="text-[24px] sm:text-[32px] md:text-[40px] leading-[130%] md:leading-[58px] mb-6 md:mb-12 capitalize tracking-[0.04em] md:tracking-[0.06em]"
            style={{
              fontFamily: 'Days One, sans-serif',
              fontWeight: 400,
              color: '#000000'
            }}>
          Trusted <span style={{color: '#FCD421'}}>Business Consulting & Risk Advisory Partner</span>
          <span style={{color: '#000000'}}> — Serving Enterprises Worldwide</span>
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
