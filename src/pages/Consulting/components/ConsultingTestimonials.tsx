import type { FC } from 'react';

interface ConsultingTestimonial {
  quote: string;
  author: string;
  role: string;
  openQuoteIcon?: string;
  closeQuoteIcon?: string;
}

interface ConsultingTestimonialsProps {
  title?: string;
  backgroundImage: string;
  testimonials: ConsultingTestimonial[];
}

export const ConsultingTestimonials: FC<ConsultingTestimonialsProps> = ({
  title = 'Testimonials',
  backgroundImage,
  testimonials
}) => (
  <section
    className="relative py-10 md:py-20 px-4 sm:px-6"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-black/55" />
    <div className="relative max-w-5xl mx-auto text-center text-white space-y-8 md:space-y-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif drop-shadow-lg">{title}</h2>
      <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
        {testimonials.map(
          ({ quote, author, role, openQuoteIcon = '"', closeQuoteIcon = '"' }) => (
            <div
              key={`${author}-${role}`}
              className="border border-dashed border-[#FCD421] rounded-[20px] md:rounded-[32px] p-3 md:p-6 bg-black/30 backdrop-blur"
            >
              <article className="bg-[#FCD421] rounded-[16px] md:rounded-[24px] p-5 md:p-8 flex flex-col min-h-[220px] md:min-h-[260px] text-black shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
                <div className="text-left text-2xl md:text-4xl text-black mb-2 md:mb-4" aria-hidden="true">
                  {openQuoteIcon}
                </div>
                <p className="text-sm md:text-lg text-black leading-relaxed font-serif italic text-center px-1 md:px-2 flex-1 flex items-center justify-center">
                  {quote}
                </p>
                <div className="text-right text-2xl md:text-4xl text-black mt-2 md:mt-4" aria-hidden="true">
                  {closeQuoteIcon}
                </div>
                <div className="mt-3 md:mt-4 text-center space-y-1">
                  <p className="font-semibold text-sm md:text-base">{author}</p>
                  <p className="text-xs md:text-sm">{role}</p>
                </div>
              </article>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

