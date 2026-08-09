import React from 'react';
import { CalendarDays, FileSearch, Users, RotateCcw, GitCompareArrows } from 'lucide-react';

const UTILITIES = [
  {
    icon: CalendarDays,
    title: 'Compliance Calendar Generator',
    description: 'NBFC type → annual compliance calendar',
  },
  {
    icon: FileSearch,
    title: 'Policy Applicability Checker',
    description: '"I am a CIC" → applicable policies',
  },
  {
    icon: Users,
    title: 'Committee Applicability',
    description: 'Company type → mandatory committees',
  },
  {
    icon: RotateCcw,
    title: 'RBI Return Finder',
    description: 'Entity → applicable returns, frequency, authority',
  },
  {
    icon: GitCompareArrows,
    title: 'Circular Difference Checker',
    description: 'Compare old vs new circular → identify key changes',
  },
];

export const AiUtilitiesSection: React.FC = () => {
  return (
    <section id="action-centre" className="bg-[#FCD421] px-4 sm:px-6 md:px-10 py-12 md:py-16">
      <div className="flex justify-center mb-5">
        <span className="bg-black text-[#FCD421] text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
          AI Utilities · Subscription
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-2">
        The tools that make you come back
      </h2>
      <p className="text-black/70 text-center text-sm sm:text-base mb-10">
        Purpose-built AI utilities for compliance teams, not generic chat.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {UTILITIES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white rounded-2xl p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-[#FCD421]/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-black" />
            </div>
            <h3 className="font-bold text-black text-sm leading-snug">{title}</h3>
            <p className="text-xs text-gray-500 leading-snug">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
