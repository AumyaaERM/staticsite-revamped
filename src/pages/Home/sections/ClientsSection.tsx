import React from "react";

export const ClientsSection: React.FC = () => {
  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <h2
          className="text-4xl text-black md:text-5xl font-bold text-center mb-12"
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
            className="h-32 md:h-40 object-contain mr-16"
          />

          {/* Image 2 (duplicate) */}
          <img
            src="/images/home/clientList.png"
            alt="Client List"
            className="h-32 md:h-40 object-contain mr-16"
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
