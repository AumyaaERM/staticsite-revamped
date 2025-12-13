import { Download } from 'lucide-react';
// Insights and Downloads Section
export const InsightsDownloads: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-8 px-12 py-16 bg-gray-50">
      <div className="col-span-2 bg-[#fcd421] p-12 rounded-2xl">
        <h2
          style={{ fontFamily: "Days One, sans-serif" }}
          className="text-3xl font-bold text-center mb-8 pb-4 border-b-2 border-black">Insights</h2>

        <div className="grid grid-cols-2 gap-8 text-black">
          <div className="border-r-2 border-dotted border-gray-600 pr-6">
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=250&fit=crop"
              alt="Insight"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-sm font-bold mb-2">UAE's tech industry set to achieve record growth in 2025</h3>
            <p className="text-xs text-gray-700">February 12, 2025</p>
          </div>

          <div className="space-y-6">
            <div className="border-b border-dotted border-gray-600 pb-4">
              <h3 className="text-sm font-bold mb-2">Perplexity AI looks to expand in India, seeks new talent for strategic growth</h3>
              <p className="text-xs text-gray-700">February 15, 2025</p>
            </div>

            <div className="border-b border-dotted border-gray-600 pb-4">
              <h3 className="text-sm font-bold mb-2">Google's experimental AI Mode can now analyse and answer questions about images.</h3>
              <p className="text-xs text-gray-700">April 8, 2025</p>
            </div>
          </div>

          <div className="border-r-2 border-dotted border-gray-600 pr-6">
            <h3 className="text-sm font-bold mb-2">Cruise lines are going greener, but some are under fire for greenwashing</h3>
            <p className="text-xs text-gray-700">February 25, 2025</p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-2">OpenAI plans to acquire Jony Ive's AI hardware startup for $500 million.</h3>
            <p className="text-xs text-gray-700">April 8, 2025</p>
          </div>
        </div>
      </div>

      <div className="bg-[#fcd421] p-8 rounded-2xl">
        <h2
          style={{ fontFamily: "Days One, sans-serif" }}
          className="text-3xl font-bold text-center mb-8 pb-4 border-b-2 border-black">Downloads</h2>

        <div className="space-y-4">
        <button className="w-full bg-black text-[#fcd421] font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors">
  <img
    src="/images/home/download-icon.png"
    alt="Download"
    className="w-5 h-5"
  />
  Newsletter
</button>

          <button className="w-full bg-black text-[#fcd421] font-semibold py-4 px-6 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors">
          <img
    src="/images/home/download-icon.png"
    alt="Download"
    className="w-5 h-5"
  />
            Firm Profile
          </button>

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