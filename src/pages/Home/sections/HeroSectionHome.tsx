import React from 'react';
import { Search, MessageCircle, ArrowRight, ChevronRight, Download, Phone } from 'lucide-react';
// Hero Section Component
export const HeroSectionHome: React.FC = () => {
    return (
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=400&fit=crop')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        
        <div className="absolute top-8 right-8 flex items-center gap-3">
          <MessageCircle className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          <button className="bg-yellow-400 text-black font-bold px-6 py-3 text-lg">
            Quick Inquiry
          </button>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1535850452537-b57c3c79f5e7?w=300&h=300&fit=crop" 
            alt="Light bulb with plant"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 px-12 flex gap-4">
          <div className="bg-yellow-400 text-black font-bold text-2xl px-8 py-4 flex-1">
            Accelerating Growth With Purpose And Responsibility
          </div>
          <button className="bg-yellow-400 text-black font-bold px-8 py-4 flex items-center gap-2">
            ESG Consulting
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };