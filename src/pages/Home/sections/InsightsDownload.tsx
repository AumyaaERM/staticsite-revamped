import React, { useState, useEffect } from 'react';

interface Insight {
  title: string;
  date: string;
  image?: string;
}

// Insights and Downloads Section
export const InsightsDownloads: React.FC = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Google Sheets CSV URL
  const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJz9QKNP238g471r8-ZEBAHbtu3CdK5RKrLMKxfC52v4dszroe5oeylwXedjJQOUXnShWaNTcinUaW/pub?output=csv';

  // Fallback images for insights
  const fallbackImages = [
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
  ];

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch(GOOGLE_SHEETS_CSV_URL);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch insights: ${response.status}`);
        }

        const csvText = await response.text();
        const rows = csvText.split('\n').slice(1); // Skip header row

        const fetchedInsights: Insight[] = rows
          .filter(row => row.trim())
          .map((row, index) => {
            const columns = [];
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
            
            const title = columns[0] || '';
            const date = columns[1] || '';
            const image = columns[2] || fallbackImages[index % fallbackImages.length];
            
            return { title, date, image };
          })
          .filter(insight => insight.title && insight.date);

        if (fetchedInsights.length > 0) {
          setInsights(fetchedInsights.slice(0, 5));
          console.log('Successfully loaded', fetchedInsights.length, 'insights from Google Sheets');
        } else {
          console.warn('No valid insights found in CSV');
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching insights:', err);
        setError('Failed to load insights');
        setIsLoading(false);
      }
    };

    fetchInsights();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 px-4 sm:px-6 md:px-12 py-10 md:py-16 bg-white">
      {/* Insights Section */}
      <div className="bg-[#fcd421] p-6 sm:p-8 md:p-12 rounded-2xl">
        <h2
          style={{ fontFamily: "Days One, sans-serif" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-6 md:mb-8 pb-4 border-b-2 border-black"
        >
          Insights
        </h2>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-sm text-gray-700">Loading insights...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        ) : insights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6">
            {/* LEFT: Main Featured News - Vertically Centered */}
            <div className="flex flex-col justify-center cursor-pointer">
              {insights[0] && (
                <>
                  <img 
                    src={insights[0].image} 
                    alt={insights[0].title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg mb-4"
                  />
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-2 text-black leading-tight">
                      {insights[0].title}
                    </h3>
                    <p className="text-sm text-black">{insights[0].date}</p>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT: 2x2 Grid of smaller news items */}
            <div className="grid grid-cols-1 gap-6">
              {/* Row 1: Two items side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                {/* Dotted vertical separator */}
                <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 border-l-2 border-dotted border-black transform -translate-x-1/2"></div>
                
                {/* Item 1 */}
                {insights[1] && (
                  <div className="flex flex-col cursor-pointer">
                    <img 
                      src={insights[1].image} 
                      alt={insights[1].title}
                      className="w-full h-32 sm:h-36 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-xs sm:text-sm font-bold mb-1 text-black leading-tight line-clamp-3">
                      {insights[1].title}
                    </h3>
                    <p className="text-xs text-black">{insights[1].date}</p>
                  </div>
                )}

                {/* Item 2 */}
                {insights[2] && (
                  <div className="flex flex-col cursor-pointer">
                    <img 
                      src={insights[2].image} 
                      alt={insights[2].title}
                      className="w-full h-32 sm:h-36 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-xs sm:text-sm font-bold mb-1 text-black leading-tight line-clamp-3">
                      {insights[2].title}
                    </h3>
                    <p className="text-xs text-black">{insights[2].date}</p>
                  </div>
                )}
              </div>

              {/* Dotted horizontal separator */}
              <div className="border-t-2 border-dotted border-black"></div>

              {/* Row 2: Two items side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                {/* Dotted vertical separator */}
                <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 border-l-2 border-dotted border-black transform -translate-x-1/2"></div>
                
                {/* Item 3 */}
                {insights[3] && (
                  <div className="flex flex-col cursor-pointer">
                    <img 
                      src={insights[3].image} 
                      alt={insights[3].title}
                      className="w-full h-32 sm:h-36 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-xs sm:text-sm font-bold mb-1 text-black leading-tight line-clamp-3">
                      {insights[3].title}
                    </h3>
                    <p className="text-xs text-black">{insights[3].date}</p>
                  </div>
                )}

                {/* Item 4 */}
                {insights[4] && (
                  <div className="flex flex-col cursor-pointer">
                    <img 
                      src={insights[4].image} 
                      alt={insights[4].title}
                      className="w-full h-32 sm:h-36 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-xs sm:text-sm font-bold mb-1 text-black leading-tight line-clamp-3">
                      {insights[4].title}
                    </h3>
                    <p className="text-xs text-black">{insights[4].date}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-sm text-gray-700 italic">
              No insights available at the moment.
            </p>
          </div>
        )}
      </div>
      
      {/* Downloads Section */}
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

          <a
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
          </a>
        </div>
      </div>
    </div>
  );
};