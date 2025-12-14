import React from 'react';
import { Award, Users, BookOpen, Heart } from 'lucide-react';

export const CoachStatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-12 h-12" style={{ color: '#000000' }} />,
      value: '40+ Years',
      label: 'Corporate Excellence'
    },
    {
      icon: <Users className="w-12 h-12" style={{ color: '#000000' }} />,
      value: '1000+ Hours',
      label: 'Coaching Delivered'
    },
    {
      icon: <BookOpen className="w-12 h-12" style={{ color: '#000000' }} />,
      value: 'Published Author',
      label: 'Leadership Expert'
    },
    {
      icon: <Heart className="w-12 h-12" style={{ color: '#000000' }} />,
      value: 'Social Impact',
      label: 'Community Service'
    }
  ];

  return (
    <div className="bg-gray-50 py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6" style={{
                background: '#FCD421'
              }}>
                <div className="scale-75 md:scale-100">
                  {stat.icon}
                </div>
              </div>
              
              <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold mb-1 md:mb-2" style={{
                fontFamily: 'Inter, sans-serif',
                color: '#000000'
              }}>
                {stat.value}
              </h3>
              
              <p className="text-[14px] md:text-[16px]" style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: '#666666'
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

