import React from "react";


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
    </div>
    </div>
    </div>
  );
};
