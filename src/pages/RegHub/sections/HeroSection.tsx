import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SUGGESTED_TAGS = ['IT Governance Directive', 'DPDP Act', 'SEBI LODR', 'Interim Dividend', 'Master Direction KYC'];

export const HeroSection: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <section className="relative bg-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(252,212,33,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(252,212,33,0.15), transparent 45%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 py-16 md:py-24">
        <span className="inline-block bg-white/10 border border-[#FCD421]/60 text-[#FCD421] text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full mb-6">
          AI-Powered Regulatory Intelligence
        </span>

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Stay updated. Understand regulations.
          <br />
          Implement compliance faster.
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
          One home for RBI, SEBI and MCA updates — with AI that reads circulars,
          explains impact, and builds your compliance checklist automatically.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-stretch bg-white rounded-full p-1.5 max-w-xl mx-auto shadow-lg mb-6"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for regulations - e.g. Governance regulation, DPDP..."
            className="flex-1 bg-transparent px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none min-w-0"
          />
          <button
            type="submit"
            className="bg-[#FCD421] text-black font-semibold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 flex-shrink-0 hover:brightness-95 transition-all"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {SUGGESTED_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setQuery(tag)}
              className="bg-white/10 border border-white/20 text-gray-200 text-xs px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
