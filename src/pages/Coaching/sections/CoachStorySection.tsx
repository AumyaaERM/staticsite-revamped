import React from 'react';

export const CoachStorySection: React.FC = () => {
  return (
    <div className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-tight font-bold text-center mb-8 md:mb-12" style={{
          fontFamily: 'Inter, sans-serif',
          color: '#000000'
        }}>
          The Story of Manjula Banerji
        </h2>

        <div className="space-y-4 md:space-y-6 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-justify" style={{
          fontFamily: 'Inter, sans-serif',
          color: '#000000'
        }}>
          <p>
            Manjula Banerji is a seasoned transformation and leadership coach with{' '}
            <span style={{ color: '#FCD421', fontWeight: 600 }}>
              more than four decades
            </span>{' '}
            of corporate excellence behind her distinguished tenure as Former Audit & Assurance Partner and Board Member of Deloitte Haskins & Sells LLP, India.
          </p>

          <p>
            A Fellow Chartered Accountant and a certified FCC coach accredited by the International Coaching Federation (ICF), Ms. Banerji delivered over{' '}
            <span style={{ color: '#FCD421', fontWeight: 600 }}>1000+ hours of coaching</span>, empowering leaders to navigate{' '}
            <span style={{ color: '#FCD421', fontWeight: 600 }}>critical transitions</span> with confidence and clarity. She has worked with professionals through her proprietary{' '}
            <span style={{ color: '#FCD421', fontWeight: 600 }}>Transformative Transitions Framework™</span>.
          </p>

          <p>
            Her coaching focuses on corporate women with empathy and purpose, focusing on mindset shifts, leadership presence, and strategic growth. She is also the author of{' '}
            <span style={{ fontWeight: 600, fontStyle: 'italic' }}>"The Coaching Advantage in the New-Age Workplaces"</span>, which explores how intentional coaching builds resilient and adaptive leaders.
          </p>

          <p>
            Beyond the corporate world, Manjula Banerji actively contributes to social impact volunteering her time to coach 15 professionals and students in NGOs like Udayan Care and NSG to support education for under served communities.
          </p>
        </div>
      </div>
    </div>
  );
};

