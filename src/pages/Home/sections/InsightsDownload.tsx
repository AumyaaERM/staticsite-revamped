import React from 'react';

// Insights and Downloads Section
export const InsightsDownloads: React.FC = () => {
  // Ordered by date (newest first)
  const insights = [
    {
      title: "Google's experimental AI Mode can now analyse and answer questions about images.",
      date: "April 8, 2025"
    },
    {
      title: "OpenAI plans to acquire Jony Ive's AI hardware startup for $500 million.",
      date: "April 8, 2025"
    },
    {
      title: "Cruise lines are going greener, but some are under fire for greenwashing",
      date: "February 25, 2025"
    },
    {
      title: "Perplexity AI looks to expand in India, seeks new talent for strategic growth",
      date: "February 15, 2025"
    },
    {
      title: "UAE's tech industry set to achieve record growth in 2025",
      date: "February 12, 2025"
    }
  ];

  return (
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
          
          {/* All insights on right */}
          <div className="md:w-3/5 space-y-3">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className={`${index !== insights.length - 1 ? 'border-b border-dotted border-gray-600 pb-3' : ''}`}
              >
                <h3 className="text-xs sm:text-sm font-bold mb-1">{insight.title}</h3>
                <p className="text-xs text-gray-700">{insight.date}</p>
              </div>
            ))}
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
            className="w-full bg-white text-[#fcd421] font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors"
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
            className="w-full bg-white text-[#fcd421] font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors"
          >
            <img
              src="/images/home/download-icon.png"
              alt="Download"
              className="w-5 h-5"
            />
            Firm Profile
          </a>
            
          <button className="w-full bg-black text-[#fcd421] font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors">
          <img
    src="/images/home/download-icon.png"
    alt="Download"
    className="w-5 h-5"
  />
              Survey Reports
            </button>
            
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
    );
  };