import React from 'react';

export const AboutContent: React.FC = () => {
  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="w-full">
        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] leading-[130%] md:leading-[150%] text-center mb-8 md:mb-12" style={{
          fontFamily: 'Days One, sans-serif',
          fontWeight: 400,
          color: '#000000'
        }}>
          About Us
        </h2>
        
        <div className="space-y-4 md:space-y-6 text-justify" style={{
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.01em',
          color: '#000000'
        }}>
          <p className="text-base sm:text-lg md:text-2xl leading-[140%] md:leading-[132%]">
          AUMYAA is a women-led, AI-enabled business consulting firm delivering high-impact Technology Consulting, Risk Advisory services, and ESG consulting solutions to businesses worldwide. Founded in 2020, Aumyaa combines deep industry expertise with forward thinking innovation to help organizations navigate complexity, drive digital transformation, and achieve sustainable growth.
          </p>
          
          <p className="text-base sm:text-lg md:text-2xl leading-[140%] md:leading-[132%]">
          Our leadership team brings a proven track record from Big 4 consulting firms and Fortune 500 companies. With experience serving multinationals, listed companies, privately held enterprises, and family-owned businesses, our experts deliver world-class Risk Advisory and Technology Consulting across diverse industries.
          </p>
          
          <p className="text-base sm:text-lg md:text-2xl leading-[140%] md:leading-[132%]">
          At Aumyaa, we specialize in: Business Consulting Services, IT & Technology Consulting, Risk Advisory & Enterprise Risk Management, Compliance Support & GRC Solutions, ESG Consulting Services and DPDP Compliance Services — helping organizations build resilience, drive growth, and stay ahead of evolving regulations.
          </p>
          
          <p className="text-base sm:text-lg md:text-2xl leading-[140%] md:leading-[132%]">
          With a strong foundation in values and deep domain expertise, Aumyaa is committed to empowering clients across India and globally through actionable insights, responsible innovation, and unwavering integrity.
          </p>
        </div>
      </div>
    </div>
  );
};

