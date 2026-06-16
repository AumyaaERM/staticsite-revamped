import React from 'react';
import { Link } from 'react-router-dom';
import type { Insight } from '../../types/insight';

interface InsightCardProps {
  insight: Insight;
}

export const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  return (
    <Link
      to={`/insights/${insight.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#fcd421] hover:shadow-lg transition-all duration-300 flex flex-col no-underline"
    >

       {/* Badges row — category left, serviceCategory right */}
       <div className="px-5 pt-4 pb-5 flex items-center justify-between mt-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#fcd421] text-black">
            {insight.category}
          </span>
          {insight.serviceCategory && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-black text-white">
              {insight.serviceCategory}
            </span>
          )}
        </div>

      {/* Image */}
      <div className="px-5 pt-2">
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1 ">

        {/* Title */}
        <h3 className="font-bold text-black text-base leading-snug mb-2 text-justify">
          {insight.title}
        </h3>

        {/* Description */}
        {insight.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1 text-justify">
            {insight.description}
          </p>
        )}

        {/* Yellow dashed divider */}
        <div className="w-full border-t-2 border-dashed border-[#fcd421] mb-3" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs sm:text-sm">{insight.date}</span>
          <span className="text-black text-xs sm:text-sm font-semibold group-hover:text-[#b8960e] transition-colors">
            Read insight
          </span>
        </div>

      </div>
    </Link>
  );
};