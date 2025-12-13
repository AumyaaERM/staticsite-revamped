import React from "react";

// Chat Button Component
const ChatButton: React.FC = () => {
  return (
    <button className="float-right bottom-8 right-8 bg-[#1a1a1a] text-[#FFD700] font-bold px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_8px_0_0_#FFD700] hover:shadow-[0_10px_0_0_#FFD700] hover:translate-y-[-2px] transition-all z-50">
      Chat With Us
      <div className="bg-[#FFD700] rounded-full p-2">
        <svg className="w-6 h-6" fill="#1a1a1a" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.98 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </div>
    </button>
  );
};
export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Their consulting approach helped us identify key ESG gaps and implement measures that significantly improved our sustainability metrics.",
      author: "Client",
      role: "ESG Consulting Engagement",
    },
    {
      quote:
        "Aumyaa's diverse team demonstrated a deep understanding of our complex business processes, designing and implementing a comprehensive SOD rule book for 40 applications.",
      author: "VP – Applications",
      role: "Largest Technology Company in India",
    },
    {
      quote:
        "Our partnership with Aumyaa Consulting Services has significantly strengthened our capabilities in ITGC and audit trail solutions.",
      author: "Partner",
      role: "Business Advisory Services, Leading Global Consulting Firm",
    },
    {
      quote:
        "Aumyaa’s expertise has strengthened our compliance posture and operational effectiveness.",
      author: "Controller",
      role: "Leading Manufacturing Company in India",
    },
    {
      quote:
        "Aumyaa’s proactive approach and technical expertise have been invaluable in improving our operational resilience and compliance readiness.",
      author: "Senior Manager",
      role: "BFSI Sector",
    },
    {
      quote:
        "The ESG training conducted by Aumyaa Consulting Services was insightful and practical.",
      author: "Training Participant",
      role: "ESG Awareness Session",
    },
    {
      quote:
        "The coaching sessions by Aumyaa Consulting Services transformed my approach to leadership. The guidance was practical, personalized, and highly impactful.",
      author: "Coaching Client",
      role: "",
    },
  ];

  return (
    <div className="bg-[#fafafa] py-20">
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      {/* Header */}
      <h2
        className="text-4xl md:text-5xl mb-10 font-bold text-center text-black"
        style={{ fontFamily: "Days One, sans-serif" }}
      >
        Explore Testimonials
      </h2>
    <div
      className="
        overflow-x-auto
        scroll-smooth
        snap-x snap-mandatory
        cursor-grab active:cursor-grabbing
        select-none
      "
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      onMouseDown={(e) => {
        const slider = e.currentTarget;
        slider.style.cursor = 'grabbing';
        let startX = e.pageX - slider.offsetLeft;
        let scrollLeft = slider.scrollLeft;

        const handleMouseMove = (e: MouseEvent) => {
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 2;
          slider.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
          slider.style.cursor = 'grab';
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }}
    >
      <style>
        {`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="flex gap-10 px-4 md:px-12 pb-8 min-w-max scrollbar-none">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="
              w-[420px]
              flex-shrink-0
              snap-center
              bg-white
              rounded-[28px]
              p-10
            "
            style={{
              boxShadow:
                "0px 20px 40px rgba(0, 0, 0, 0.06), 0px 2px 8px rgba(0, 0, 0, 0.04)",
            }}
          >
            <p className="text-gray-600 italic leading-relaxed mb-8">
              "{t.quote}"
            </p>

            <p className="text-sm font-medium text-black">
              – {t.author}
              {t.role && (
                <span className="text-gray-500">, {t.role}</span>
              )}
            </p>
          </div>
        ))}
      </div>
      <ChatButton></ChatButton>
    </div>
    </div>
    </div>
  );
};
