import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Download, Mail, BarChart3, Building2 } from 'lucide-react';
import { useDownloads, type DownloadDoc, type DownloadCategory } from '../../hooks/useDownloads';

type FilterOption = 'All' | DownloadCategory;

const headingFont = { fontFamily: 'Days One, sans-serif' };
const bannerStyle = {
  backgroundImage: 'url(/images/downloads-banner.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

/* Cloudinary force-download: insert fl_attachment so the file downloads
   instead of opening (the <a download> attr is ignored cross-origin). */
const toDownloadUrl = (url: string, name: string): string => {
  if (!url.includes('/upload/')) return url;
  const safe = name.replace(/[^\w.-]+/g, '_');
  return url.replace('/upload/', `/upload/fl_attachment:${encodeURIComponent(safe)}/`);
};

/* ── Category → icon (top-right of card) ── */
const categoryIcon: Record<DownloadCategory, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Newsletter: Mail,
  'Firm Profile': Building2,
  'Survey Reports': BarChart3,
};

const CATEGORY_ORDER: DownloadCategory[] = ['Newsletter', 'Firm Profile', 'Survey Reports'];

/* ── Filter bar (same pill UI as Insights) ── */
const FilterBar: React.FC<{
  active: FilterOption;
  onChange: (f: FilterOption) => void;
  available: DownloadCategory[];
}> = ({ active, onChange, available }) => {
  const visibleFilters = [
    'All',
    ...CATEGORY_ORDER.filter((c) => available.includes(c)),
  ] as FilterOption[];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {visibleFilters.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer border-none outline-none
              ${isActive ? 'bg-black text-[#fcd421]' : 'bg-[#fcd421] text-black hover:bg-yellow-400'}`}
            style={headingFont}
          >
            {filter === 'All' ? 'All Documents' : filter}
          </button>
        );
      })}
    </div>
  );
};

/* ── Download card ── */
const DownloadCard: React.FC<{ item: DownloadDoc }> = ({ item }) => {
  const Icon = categoryIcon[item.category];
  return (
    <div
      onClick={() => window.open(item.pdfUrl, '_blank')}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 cursor-pointer"
    >
      {/* top row: badge + category icon */}
      <div className="flex items-start justify-between mb-5">
        <span
          className="inline-block bg-[#fcd421] text-black text-sm px-4 py-2 rounded-lg font-bold"
          style={headingFont}
        >
          {item.category}
        </span>
        <Icon className="w-7 h-7 text-[#fcd421]" strokeWidth={2.5} />
      </div>

      {/* title */}
      <h3 className="text-black text-base sm:text-lg font-bold leading-snug mb-3" style={headingFont}>
        {item.title}
      </h3>

      {/* description */}
      <p className="text-gray-600 text-sm leading-relaxed text-justify mb-6 flex-1">
        {item.description}
      </p>

      {/* dashed divider */}
      <div className="border-t border-dashed border-[#fcd421] mb-4" />

      {/* bottom row: date (left) + download icon (right) */}
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">{item.date}</span>
        <a
          href={toDownloadUrl(item.pdfUrl, item.title)}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Download ${item.title}`}
          className="flex items-center justify-center w-9 h-9 rounded-full"
        >
          <Download className="w-6 h-6 text-yellow-500" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
};

/* ── Page ── */
export const DownloadsPage: React.FC = () => {
  const { downloads, loading, error } = useDownloads();
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  const filtered =
    activeFilter === 'All'
      ? downloads
      : downloads.filter((d) => d.category === activeFilter);

  const availableCategories = Array.from(
    new Set(downloads.map((d) => d.category)),
  ) as DownloadCategory[];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden" style={bannerStyle}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-sm sm:text-base tracking-widest mb-3">Resources</p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4" style={headingFont}>
            Downloads
          </h1>
          <p className="text-[#fcd421] text-sm sm:text-base font-semibold max-w-3xl leading-relaxed">
            Access company profiles, industry newsletters, and survey reports with expert insights
            on cybersecurity, DPDPA, ITGC, audit, risk, ESG, and compliance.
          </p>
        </div>
      </section>

      {/* ── FILTER + CARDS ── */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 py-10 md:py-14">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 text-sm italic">Loading downloads…</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-red-400 text-sm italic">{error}</p>
          </div>
        ) : (
          <>
            {downloads.length > 0 && (
              <div className="mb-8">
                <FilterBar active={activeFilter} onChange={setActiveFilter} available={availableCategories} />
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-400 text-sm italic">
                  No {activeFilter === 'All' ? '' : activeFilter} documents available yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item, i) => (
                  <DownloadCard key={i} item={item} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};