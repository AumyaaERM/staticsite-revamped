import React from 'react';
import { Landmark, LineChart, MessageCircle, ClipboardList, Sparkles } from 'lucide-react';

const STATS = [
  { icon: Landmark, title: 'Latest RBI Updates', subtitle: '128 circulars tracked' },
  { icon: LineChart, title: 'Latest SEBI Updates', subtitle: '64 circulars tracked' },
  { icon: MessageCircle, title: 'AI Compliance Chat', subtitle: 'Ask a question now' },
  { icon: ClipboardList, title: 'Compliance Checklists', subtitle: 'Generate in 30 secs' },
  { icon: Sparkles, title: 'AI Utilities', subtitle: 'Calendar, gap check & more' },
];

export const QuickStatsSection: React.FC = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {STATS.map(({ icon: Icon, title, subtitle }) => (
          <div
            key={title}
            className="border border-gray-200 rounded-2xl p-4 flex flex-col gap-3 hover:border-[#FCD421] hover:shadow-md transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-[#FCD421]/15 flex items-center justify-center">
              <Icon className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="text-sm font-bold text-black leading-tight">{title}</p>
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
