import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { InsightCard } from '../../components/insights/InsightCard';
import { InsightFilterBar } from '../../components/insights/InsightFilterBar';
import { useInsights } from '../../hooks/useInsights';
import type { InsightCategory } from '../../types/insight';

type FilterOption = 'All' | InsightCategory;

const headingFont = { fontFamily: 'Days One, sans-serif' };

export const InsightsPage: React.FC = () => {
  const { insights, loading, error } = useInsights();
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  const filtered =
    activeFilter === 'All'
      ? insights
      : insights.filter((i) => i.category === activeFilter);

  const availableCategories = Array.from(
    new Set(insights.map((i) => i.category)),
  ) as InsightCategory[];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section
        className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/insights/banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-sm sm:text-base tracking-widest mb-3">
            Intelligence · Analysis · Perspective
          </p>
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={headingFont}
          >
            News Insights
          </h1>
          <p className="text-[#fcd421] text-sm sm:text-base font-semibold max-w-2xl leading-relaxed">
            Stay ahead with Aumyaa's expert analysis on the latest developments
            in GRC, ESG, cyber resilience, and regulatory landscapes.
          </p>
        </div>
      </section>

      {/* ── FILTER + CARDS ── */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 py-10 md:py-14">

        {/* Filter bar — only when at least one insight exists */}
        {!loading && !error && insights.length > 0 && (
          <div className="mb-8">
            <InsightFilterBar
              active={activeFilter}
              onChange={setActiveFilter}
              available={availableCategories}
            />
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 text-sm">Loading insights…</p>
          </div>

        /* Error */
        ) : error ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-red-500 text-sm">{error}</p>
          </div>

        /* No results */
        ) : filtered.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 text-sm italic">
              No {activeFilter === 'All' ? '' : activeFilter} insights available yet.
            </p>
          </div>

        /* Card grid */
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((insight, i) => (
              <InsightCard key={i} insight={insight} />
            ))}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};