import React from 'react';

export const ConsultingCtaSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 pb-14 md:pb-20">
      <div className="bg-[#FCD421] rounded-2xl px-6 md:px-12 py-10 md:py-14 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
          Need hands-on help implementing a regulation?
        </h2>
        <p className="text-black/70 text-sm sm:text-base mb-6">
          RegHub is powered by Aumyaa's Consulting, Risk &amp; Compliance advisory team.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-[#FCD421] font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-900 transition-colors"
        >
          Book a Consulting Engagement
        </a>
      </div>
    </section>
  );
};
