import React from 'react';
export const CoreValues: React.FC = () => {
    const values = [
      { icon: "⚖️", label: "INTEGRITY" },
      { icon: "👥", label: "CLIENT-CENTRIC" },
      { icon: "🤝", label: "TRUST" },
      { icon: "⚙️", label: "QUALITY" },
      { icon: "💡", label: "INNOVATION" },
      { icon: "🌱", label: "SUSTAINABILITY" }
    ];
    
    return (
      <div className="bg-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-12">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white font-bold text-2xl">Core</div>
                <div className="text-white font-bold text-2xl">Values</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center w-full px-16">
              {values.map((value, idx) => (
                <div key={idx} className="text-center flex flex-col items-center gap-2">
                  <div className="text-4xl">{value.icon}</div>
                  <div className="font-bold text-sm">{value.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };