import React, { useState, useEffect } from 'react';

interface Insight {
  title: string;
  date: string;
}

// Insights and Downloads Section
export const InsightsDownloads: React.FC = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Google Sheets CSV URL - Automatically fetches from your Google Sheet
  const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJz9QKNP238g471r8-ZEBAHbtu3CdK5RKrLMKxfC52v4dszroe5oeylwXedjJQOUXnShWaNTcinUaW/pub?output=csv';

  useEffect(() => {
    const fetchInsights = async () => {

      try {
        console.log('Fetching insights from:', GOOGLE_SHEETS_CSV_URL);
        const response = await fetch(GOOGLE_SHEETS_CSV_URL);
        
        if (!response.ok) {
          console.error('Fetch failed with status:', response.status);
          throw new Error(`Failed to fetch insights: ${response.status}`);
        }

        const csvText = await response.text();
        console.log('CSV data received:', csvText.substring(0, 200)); // Log first 200 chars
        
        const rows = csvText.split('\n').slice(1); // Skip header row
        console.log('Number of rows found:', rows.length);
        
        const fetchedInsights: Insight[] = rows
          .filter(row => row.trim()) // Remove empty rows
          .map((row, index) => {
            // Split by comma, but handle quoted fields properly
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
            // Push the last column
            columns.push(current.trim().replace(/^"|"$/g, ''));
            
            const title = columns[0] || '';
            const date = columns[1] || '';
            
            console.log(`Row ${index + 2}:`, { title, date });
            return { title, date };
          })
          .filter(insight => insight.title && insight.date); // Only valid entries

        console.log('Parsed insights:', fetchedInsights);
        
        if (fetchedInsights.length > 0) {
          setInsights(fetchedInsights);
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
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6 md:px-12 py-10 md:py-16 bg-gray-50">
      <div className="lg:col-span-2 bg-[#fcd421] p-6 sm:p-8 md:p-12 rounded-2xl">
        <h2
          style={{ fontFamily: "Days One, sans-serif" }}
          className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 pb-4 border-b-2 border-black">Insights</h2>
          
        <div className="flex flex-col md:flex-row gap-6 text-black">
          {/* Big image on left */}
          <div className="md:w-2/5 flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=250&fit=crop" 
              alt="Insights"
              className="w-full h-48 md:h-full object-cover rounded-lg"
            />
          </div>
          
          {/* All insights on right - Auto-scrolling */}
          <div className="md:w-3/5 relative overflow-hidden max-h-[400px]">
            {insights.length > 0 ? (
              <div className="space-y-3 animate-scroll">
                {/* Original content */}
                {insights.map((insight, index) => (
                  <div 
                    key={`original-${index}`} 
                    className="border-b border-dotted border-gray-600 pb-3"
                  >
                    <h3 className="text-xs sm:text-sm font-bold mb-1">{insight.title}</h3>
                    <p className="text-xs text-gray-700">{insight.date}</p>
                  </div>
                ))}
                {/* Duplicate content for seamless loop */}
                {insights.map((insight, index) => (
                  <div 
                    key={`duplicate-${index}`} 
                    className="border-b border-dotted border-gray-600 pb-3"
                  >
                    <h3 className="text-xs sm:text-sm font-bold mb-1">{insight.title}</h3>
                    <p className="text-xs text-gray-700">{insight.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-sm text-gray-700 italic">
                  {isLoading ? 'Loading insights...' : error ? error : 'No insights available at the moment.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
        
      <div className="bg-[#fcd421] p-6 sm:p-8 rounded-2xl">
        <h2
          style={{ fontFamily: "Days One, sans-serif" }}
          className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 pb-4 border-b-2 border-black">Downloads</h2>
          
        <div className="space-y-3 md:space-y-4">
          <a 
            href="https://aumyaaconsulting-my.sharepoint.com/personal/pranati_aumyaa_com/Documents/NewsLetter/JULY%20NEWSLETTER%202024.pdf?CT=1765799086359&OR=ItemsView"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors"
            style={{ textDecoration: 'none', color: '#fcd421' }}
          >
            <img
              src="/images/home/download-icon.png"
              alt="Download"
              className="w-5 h-5"
            />
            Newsletter
          </a>
            
          <a 
            href="https://aumyaaconsulting-my.sharepoint.com/personal/pranati_aumyaa_com/Documents/Profile%20downloads/Aumyaa%20Profile_2025%20(2).pdf?CT=1765799149057&OR=ItemsView"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors"
            style={{ textDecoration: 'none', color: '#fcd421' }}
          >
            <img
              src="/images/home/download-icon.png"
              alt="Download"
              className="w-5 h-5"
            />
            Firm Profile
          </a>
            
          <a
              href="https://aumyaaconsulting-my.sharepoint.com/personal/pranati_aumyaa_com/Documents/Survey%20report/survey%20report%202024-2025.pdf?CT=1765946645795&OR=ItemsView"
             target="_blank"
             rel="noopener noreferrer"
              className="w-full bg-white font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors"
              style={{ textDecoration: 'none', color: '#fcd421' }}>
              <img
                src="/images/home/download-icon.png"
                alt="Download"
                className="w-5 h-5"
              />
              Survey Reports
            </a>
            
          <button className="w-full bg-black text-[#fcd421] font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors">
          <img
    src="/images/home/download-icon.png"
    alt="Download"
    className="w-5 h-5"
  />
              Other Publication
            </button>
          </div>
        </div>
      </div>

      {/* CSS for auto-scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};