import React from "react";

export const ClientsSection: React.FC = () => {
  return (
    <div className="bg-white py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl text-black font-bold text-center mb-8 md:mb-12"
          style={{ fontFamily: "Days One, sans-serif" }}
        >
          Our esteemed Clients
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-max"
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {/* Image 1 */}
          <img
            src="/images/home/clientList.png"
            alt="Client List"
            className="h-20 sm:h-28 md:h-40 object-contain mr-8 md:mr-16"
          />

          {/* Image 2 (duplicate) */}
          <img
            src="/images/home/clientList.png"
            alt="Client List"
            className="h-20 sm:h-28 md:h-40 object-contain mr-8 md:mr-16"
          />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
