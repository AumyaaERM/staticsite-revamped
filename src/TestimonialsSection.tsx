// Testimonials Section
export const TestimonialsSection: React.FC = () => {
    return (
      <div className="bg-gray-50 py-16 px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Explore Testimonials</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-gray-600 italic mb-6">
                "Their consulting approach helped us identify key ESG gaps and implement measures that 
                significantly improved our sustainability metrics."
              </p>
              <p className="text-sm font-semibold">- Client, ESG Consulting Engagement</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-gray-600 italic mb-6">
                "Aumyaa's diverse team demonstrated a deep understanding of our complex business 
                processes, designing and implementing a comprehensive SOD rule book for 40 applications."
              </p>
              <p className="text-sm font-semibold">- VP - Applications, Largest Technology Company in India</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-gray-600 italic mb-6">
                "Our partnership with Aumyaa's Business Services group has enhanced our operational capabilities..."
              </p>
              <p className="text-sm font-semibold">- Partner, Leading Global Consulting Firm</p>
            </div>
          </div>
        </div>
      </div>
    );
  };