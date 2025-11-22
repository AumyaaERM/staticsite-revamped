import React from 'react';
import { Search } from 'lucide-react';

// Navbar Component
export const Navbar: React.FC = () => {
  return (
    <nav className="bg-yellow-400 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-yellow-500">∞</span>
            <span className="ml-1">AUMYAA</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#home" className="font-semibold text-black border-b-2 border-black pb-1">HOME</a>
          <a href="#about" className="font-semibold text-black hover:border-b-2 hover:border-black pb-1">ABOUT US</a>
          <a href="#consulting" className="font-semibold text-black hover:border-b-2 hover:border-black pb-1">CONSULTING SERVICES</a>
          <a href="#coaching" className="font-semibold text-black hover:border-b-2 hover:border-black pb-1">COACHING & WORKSHOP</a>
          <a href="#careers" className="font-semibold text-black hover:border-b-2 hover:border-black pb-1">CAREERS</a>
          <a href="#contact" className="font-semibold text-black hover:border-b-2 hover:border-black pb-1">CONTACT US</a>
          
          <div className="flex items-center gap-2 border-l pl-4 border-gray-400">
            <Search className="w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search services" 
              className="bg-transparent border-none outline-none placeholder-gray-700 w-32"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};