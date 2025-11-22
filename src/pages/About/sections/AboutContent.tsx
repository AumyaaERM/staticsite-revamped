import React from 'react';

export const AboutContent: React.FC = () => {
  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[50px] leading-[150%] text-center mb-12" style={{
          fontFamily: 'Days One, sans-serif',
          fontWeight: 400,
          color: '#000000'
        }}>
          About Us
        </h2>
        
        <div className="space-y-6 text-justify" style={{
          fontFamily: 'Inria Serif, serif',
          fontSize: '24px',
          lineHeight: '132%',
          letterSpacing: '-0.01em',
          color: '#000000'
        }}>
          <p>
            AUMYAA is a women-led, AI-enabled consulting firm delivering high-impact Technology, Risk Advisory and ESG solutions to businesses worldwide. Founded in 2020, Aumyaa brings together deep industry experience and forward-thinking innovation to help organizations navigate complexity, embrace transformation, and achieve sustainable growth.
          </p>
          
          <p>
            Our leadership team is self-made and driven, with a proven track record in Big 4 firms and Fortune 500 companies. They have served a diverse global clientele—including multinationals, listed companies, privately held enterprises, and family-owned businesses—across domains of Risk and Technology Consulting.
          </p>
          
          <p>
            At Aumyaa, we specialize in: Business Consulting, Technology Consulting, Risk Advisory, Compliance Support Solutions & Environmental, Social, and Governance (ESG) Services.
          </p>
          
          <p>
            With a strong foundation in values and expertise, we are committed to empowering our clients through insights, innovation, and integrity.
          </p>
        </div>
      </div>
    </div>
  );
};

