import React, { useState, useEffect } from 'react';

interface Insight {
  title: string;
  date: string;
  image?: string;
  description?: string;
  category?: string;
}

export const InsightsDownloads: React.FC = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  //   col 0 → title      (required)
  //   col 1 → date       (required)
  //   col 2 → image      (optional)
  //   col 3 → description(optional)
  //   col 4 → category   (optional — defaults to "Insight")
  const GOOGLE_SHEETS_CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJz9QKNP238g471r8-ZEBAHbtu3CdK5RKrLMKxfC52v4dszroe5oeylwXedjJQOUXnShWaNTcinUaW/pub?output=csv';

  const fallbackImages = [
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
  ];

  const parseCSVRow = (row: string): string[] => {
    const columns: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        columns.push(current.trim().replace(/^"|"$/g, ''));
        current = '';
      } else {
        current += char;
      }
    }
    columns.push(current.trim().replace(/^"|"$/g, ''));
    return columns;
  };

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch(GOOGLE_SHEETS_CSV_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const csvText = await response.text();
        const rows = csvText.split('\n').slice(1); 

        const fetchedInsights: Insight[] = rows
          .filter((row) => row.trim())
          .map((row, index) => {
            const cols = parseCSVRow(row);
            const image = cols[2] && cols[2].trim() !== ''
              ? cols[2].trim()
              : fallbackImages[index % fallbackImages.length];

            return {
              title:       cols[0] || '',
              date:        cols[1] || '',
              image,
              description: cols[3] || '',
              category:    cols[4] || 'Insight',
            };
          })
          .filter((insight) => insight.title && insight.date); 

        if (fetchedInsights.length > 0) {
          setInsights(fetchedInsights.slice(0, 3)); // show only 3 insights
        }
      } catch (err) {
        console.error('Error fetching insights:', err);
        setError('Failed to load insights');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInsights();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 px-4 sm:px-6 md:px-12 py-10 md:py-16 bg-white">

      {/* ════════════════════════════════════════
          INSIGHTS SECTION
      ════════════════════════════════════════ */}
      <div className="bg-white border border-[#fcd421] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2
            style={{ fontFamily: 'Days One, sans-serif' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight"
          >
            Insights
          </h2>
          <a
            href="/insights"
            className="bg-[#fcd421] text-black font-semibold text-sm sm:text-base px-5 sm:px-7 py-3 rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap"
            style={{ fontFamily: 'Days One, sans-serif', color: '#000000' }}
          >
            View all insights
          </a>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-sm text-gray-500">Loading insights…</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-sm text-red-500">{error}</p>
          </div>
        ) : insights.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-sm text-gray-500 italic">No insights available at the moment.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="flex gap-4 items-stretch group cursor-pointer"
              >
                {/* Insight card */}
                <div className="flex-1 border border-gray-200 rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-[#fcd421] transition-colors">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14">
                    <img
                      src="/images/home/insight_logo.png"
                      alt="insight icon"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-black text-sm sm:text-base leading-snug mb-1 line-clamp-2">
                      {insight.title}
                    </h3>
                    {insight.description && (
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
                        {insight.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between gap-2 flex-wrap mt-2">
                      <span className="bg-[#fcd421] text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                        {insight.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Thumbnail image */}
                <div className="hidden sm:flex flex-shrink-0 w-36 md:w-44 lg:w-52 rounded-xl overflow-hidden self-stretch">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ════════════════════════════════════════
          DOWNLOADS SECTION (unchanged)
      ════════════════════════════════════════ */}
      <div className="bg-[#fcd421] p-6 sm:p-8 md:p-10 rounded-2xl">
        <h2
          style={{ fontFamily: "Days One, sans-serif" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-6 md:mb-8 pb-4 border-b-2 border-black"
        >
          Downloads
        </h2>
        
        <div className="space-y-4">
          <a 
            href="https://aumyaaconsulting-my.sharepoint.com/personal/pranati_aumyaa_com/Documents/NewsLetter/JULY%20NEWSLETTER%202024.pdf?CT=1765799086359&OR=ItemsView"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-black text-[#fcd421] font-bold py-4 px-5 rounded-lg flex items-center gap-4 hover:bg-gray-900 transition-all hover:scale-[1.02] group"
            style={{ color: '#ffffff' }}
          >
            <span className="w-10 h-10 bg-[#fcd421] text-black rounded flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm sm:text-base">Newsletter</span>
          </a>

          <a
            href="https://aumyaaconsulting-my.sharepoint.com/personal/pranati_aumyaa_com/Documents/Profile%20downloads/Aumyaa%20Profile_2025%20(2).pdf?CT=1765799149057&OR=ItemsView"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-black text-[#fcd421] font-bold py-4 px-5 rounded-lg flex items-center gap-4 hover:bg-gray-900 transition-all hover:scale-[1.02] group"
            style={{ color: '#ffffff' }}
          >
            <span className="w-10 h-10 bg-[#fcd421] text-black rounded flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm sm:text-base">Firm Profile</span>
          </a>

          <a
            href="https://aumyaaconsulting-my.sharepoint.com/personal/pranati_aumyaa_com/Documents/Survey%20report/survey%20report%202024-2025.pdf?CT=1765946645795&OR=ItemsView"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-black text-[#fcd421] font-bold py-4 px-5 rounded-lg flex items-center gap-4 hover:bg-gray-900 transition-all hover:scale-[1.02] group"
            style={{ color: '#ffffff' }}
          >
            <span className="w-10 h-10 bg-[#fcd421] text-black rounded flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm sm:text-base">Survey Reports</span>
          </a>

          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-black text-[#fcd421] font-bold py-4 px-5 rounded-lg flex items-center gap-4 hover:bg-gray-900 transition-all hover:scale-[1.02] group"
            style={{ color: '#ffffff' }}
          >
            <span className="w-10 h-10 bg-[#fcd421] text-black rounded flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm sm:text-base">Other Publication</span>
          </a> */}
        </div>
      </div>

    </div>
  );
};