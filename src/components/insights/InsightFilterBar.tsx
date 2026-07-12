import React from 'react';
import type { InsightCategory } from '../../types/insight';

type FilterOption = 'All' | InsightCategory;

interface InsightFilterBarProps {
  active: FilterOption;
  onChange: (category: FilterOption) => void;
}

const filters: FilterOption[] = [
  'All',
  'Blog',
  'Bulletin',
  'Case Study',
  'Podcast',
  'Survey Report',
];

export const InsightFilterBar: React.FC<InsightFilterBarProps> = ({ active, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer border-none outline-none
              ${isActive
                ? 'bg-black text-[#fcd421]'
                : 'bg-[#fcd421] text-black hover:bg-yellow-400'
              }`}
            style={{ fontFamily: 'Days One, sans-serif' }} 
          >
            {filter === 'All' ? 'All Topics' : filter}
          </button>
        );
      })}
    </div>
  );
};