import React, { useState } from 'react';

const FILTERS = ['All', 'RBI', 'SEBI', 'MCA', 'IRDAI', 'ROC', 'IBBI', 'MeitY', 'PFRDA'];

interface NewsItem {
  agency: string;
  date: string;
  title: string;
  description: string;
  affects: string;
}

const NEWS: NewsItem[] = [
  {
    agency: 'RBI',
    date: 'May 4, 2025',
    title: 'Master Direction – IT Governance, Risk, Controls and Assurance Practices',
    description:
      'Board oversight, IT Strategy Committee and independent IT assurance audits for regulated entities.',
    affects: 'Affects: NBFCs, Banks, UCBs',
  },
  {
    agency: 'SEBI',
    date: 'May 4, 2025',
    title: 'SEBI (LODR) (Third Amendment) Regulations, 2024',
    description: 'Revised related-party transaction thresholds and disclosure timelines for listed entities.',
    affects: 'Affects: Listed Companies',
  },
  {
    agency: 'RBI',
    date: 'May 4, 2025',
    title: 'Master Direction on KYC (Amendment), 2024',
    description: 'Revised periodic KYC update timelines and simplified re-KYC for low-risk customers.',
    affects: 'Affects: Banks, NBFCs',
  },
];

const UPCOMING_DATES = [
  { label: 'ITSC constitution deadline', date: '31 Mar' },
  { label: 'Board action plan filing', date: '30 Jun' },
  { label: 'First IT assurance audit', date: '30 Sep' },
  { label: 'Annual KYC refresh', date: '31 Dec' },
];

const TRENDING = ['IT Governance Master Direction', 'SEBI LODR Amendment', 'KYC Master Direction Update', 'CERT-In Incident Reporting'];

const MOST_DOWNLOADED = ['NBFC Middle Layer — IT Governance', 'CIC — Compliance Checklist', 'HFC — Annual Returns', 'Bank — KYC Refresh'];

export const RegulatoryNewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section id="regulatory-news" className="bg-white px-4 sm:px-6 md:px-10 py-10 md:py-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-1">Regulatory News</h2>
      <p className="text-[#C9A400] text-sm sm:text-base mb-6">
        Fresh circulars and notifications, summarized the moment they're issued.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border transition-colors ${
              activeFilter === filter
                ? 'bg-[#FCD421] border-[#FCD421] text-black'
                : 'bg-white border-gray-300 text-gray-700 hover:border-black'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {NEWS.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded-2xl p-5 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#FCD421] text-black text-xs font-bold px-3 py-1 rounded-full">{item.agency}</span>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
            <h3 className="font-bold text-black text-base mb-2 leading-snug">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-snug mb-4 flex-1">{item.description}</p>
            <p className="text-xs text-gray-400 border-t border-dashed border-gray-200 pt-3">{item.affects}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <InfoCard title="Upcoming Compliance Dates">
          {UPCOMING_DATES.map((d) => (
            <li key={d.label} className="flex items-center justify-between py-2 border-b border-dashed border-gray-200 last:border-0">
              <span className="text-sm text-gray-700">{d.label}</span>
              <span className="text-sm font-semibold text-black">{d.date}</span>
            </li>
          ))}
        </InfoCard>

        <InfoCard title="Trending Circulars">
          {TRENDING.map((t) => (
            <li key={t} className="py-2 border-b border-dashed border-gray-200 last:border-0 text-sm text-gray-700">
              {t}
            </li>
          ))}
        </InfoCard>

        <InfoCard title="Most Downloaded Checklists">
          {MOST_DOWNLOADED.map((t) => (
            <li key={t} className="py-2 border-b border-dashed border-gray-200 last:border-0 text-sm text-gray-700">
              {t}
            </li>
          ))}
        </InfoCard>
      </div>
    </section>
  );
};

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border border-gray-200 rounded-2xl p-5">
    <h4 className="font-bold text-black text-base mb-2">{title}</h4>
    <ul>{children}</ul>
  </div>
);
