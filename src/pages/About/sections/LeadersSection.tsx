import React, { useState } from 'react';

export const LeadersSection: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const leaders = [
    {
      name: "Yukti Arora",
      title: "Founder and CEO",
      image: "/images/about/yukti-arora.png",
      credentials: "CA, CISA, DISA, ISO 27001 Lead Auditor",
      email: "yukti.arora@aumyaa.com",
      expertise: "Process, Control, and Technology Risk Advisory, ERP Implementation, Cyber Security and Privacy Framework, Process Automation, SOX Implementation, RPA, Blockchain, Internal Audit, ERM Implementation, SAP GRC Access Control",
      experience: "Over 2 Decades",
      memberships: "ICAI, ISACA, IIA, IOD"
    },
    {
      name: "Jyoti Singh",
      title: "Business Partner",
      image: "/images/about/jyoti-singh.png",
      credentials: "B.Com, CA, DISA, Certificate Course on BRSR, GRI Certified, TCFD Certified",
      email: "jyoti.singh@aumyaa.com",
      expertise: "ESG, Sustainability reporting, Sustainability Assurance, Integrated reporting, Circular Economy, Assurance, Corporate governance, Internal Controls, and Risk management.",
      experience: "Over 2 Decades",
      memberships: ""
    },
    {
      name: "Manjula Banerji",
      title: "Transformation & Leadership coach",
      image: "/images/about/maula-ramoju.png",
      credentials: "Former Audit & Assurance Partner and Board member of Deloitte Haskins & Sells LLP (India), ICF-accredited Executive Coach & Chartered Accountant,",
      email: "mbanerji1301@gmail.com",
      expertise: "1000+ hours of coaching, Mentored numerous professionals.",
      experience: "40+ Years",
      memberships: ""
    }
  ];

  const toggleFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[48px] leading-[58px] mb-12 capitalize tracking-[0.06em]" style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          color: '#000000'
        }}>
          Our <span style={{ color: '#000000' }}>Leaders</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="relative rounded-[10px] overflow-hidden"
              style={{ 
                height: '563px',
                perspective: '1000px'
              }}
            >
              {/* Card Inner Container */}
              <div 
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 rounded-[10px]"
                  style={{ 
                    background: '#FCD421',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="p-8 flex flex-col items-center h-full">
                    {/* Circular Photo */}
                    <div 
                      className="w-[285px] h-[285px] rounded-full overflow-hidden mb-6 mt-8"
                      style={{ 
                        backgroundImage: `url(${leader.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    
                    {/* Name and Title */}
                    <h3 className="text-[24px] leading-[29px] mb-2 text-center tracking-[0.01em]" style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      color: '#000000'
                    }}>
                      {leader.name}
                    </h3>
                    <p className="text-[20px] leading-[24px] mb-6 text-center tracking-[0.01em] italic" style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      color: '#000000'
                    }}>
                      {leader.title}
                    </p>
                    
                    {/* Flip Button */}
                    <button 
                      onClick={() => toggleFlip(index)}
                      className="flex items-center justify-center px-6 py-[18px] rounded mt-auto"
                      style={{
                        background: '#191600',
                        border: '1px solid rgba(222, 202, 73, 0.5)'
                      }}
                    >
                      <span className="text-[18px] leading-[150%] text-center" style={{
                        fontFamily: 'Be Vietnam Pro, sans-serif',
                        fontWeight: 500,
                        color: '#FFFFFF'
                      }}>
                        Flip For Details
                      </span>
                    </button>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 rounded-[10px] p-8"
                  style={{ 
                    background: '#FFFFFF',
                    border: '3px solid #FCD421',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="flex flex-col h-full justify-between">
                    {/* Name and Title */}
                    <div>
                      <h3 className="text-[32px] leading-[39px] mb-4 text-center tracking-[0.01em]" style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        color: '#000000'
                      }}>
                        {leader.name}
                      </h3>
                      <p className="text-[20px] leading-[24px] mb-6 text-center tracking-[0.01em] italic" style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        color: '#000000'
                      }}>
                        {leader.title}
                      </p>

                      {/* Details */}
                      <div className="space-y-4 text-[16px] leading-[19px] tracking-[0.01em]" style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        color: '#000000'
                      }}>
                        <p>{leader.credentials}</p>
                        
                        <p><strong>Email:</strong> {leader.email}</p>
                        
                        <p><strong>Expertise:</strong> {leader.expertise}</p>
                        
                        <p><strong>Years of Experience:</strong> {leader.experience}</p>
                        
                        {leader.memberships && (
                          <p><strong>Memberships:</strong> {leader.memberships}</p>
                        )}
                      </div>
                    </div>

                    {/* Go Back Button */}
                    <button 
                      onClick={() => toggleFlip(index)}
                      className="flex items-center justify-center px-6 py-[18px] rounded self-center"
                      style={{
                        background: '#FCD421',
                        border: '1px solid rgba(222, 202, 73, 0.5)'
                      }}
                    >
                      <span className="text-[18px] leading-[150%] text-center" style={{
                        fontFamily: 'Be Vietnam Pro, sans-serif',
                        fontWeight: 500,
                        color: '#000000'
                      }}>
                        Go Back
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
