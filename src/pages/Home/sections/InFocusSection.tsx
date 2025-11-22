
// In Focus Section
export const InFocusSection: React.FC = () => {
    return (
      <div className="relative bg-cover bg-center py-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop')"
      }}>
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative max-w-6xl mx-auto px-12">
          <h2 className="text-5xl font-bold text-white text-center mb-12">In Focus</h2>
          
          <div className="border-4 border-yellow-400 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 bg-white">
              <div className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=400&fit=crop" 
                  alt="Net Zero"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              <div className="bg-yellow-400 p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">
                  Navigating Net Zero: <span className="italic">A</span> Sustainable Business Transformation
                </h3>
                <p className="text-lg mb-8 leading-relaxed">
                  Embark on a transformative journey towards net-zero emissions with our comprehensive guide! 🌱 
                  From assessing your current standing to setting ambitious targets aligned with global standards, 
                  we explore each step of the Net Zero Roadmap.
                </p>
                <button className="bg-black text-white font-bold px-8 py-4 w-fit hover:bg-gray-800 transition-colors">
                  Watch More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };