import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description?: string;
  bullets?: string[];
  image: string;
  imagePosition?: 'left' | 'right';
}

export const ServiceCard = ({
  title,
  description = '',
  bullets = [],
  image,
  imagePosition = 'left'
}: ServiceCardProps) => {
  const isImageRight = imagePosition === 'right';
  const hasBullets = bullets.length > 0;
  const hasDescription = description?.trim().length > 0;
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  const imageAnimationClasses = hasAnimated
    ? 'opacity-100 translate-x-0'
    : isImageRight
      ? 'opacity-0 translate-x-10'
      : 'opacity-0 -translate-x-10';

  const contentAnimationClasses = hasAnimated
    ? 'opacity-100 translate-x-0'
    : isImageRight
      ? 'opacity-0 -translate-x-10'
      : 'opacity-0 translate-x-10';

  const titleAnimationClasses = hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4';

  return (
    <article
      ref={cardRef}
      className="rounded-[32px] overflow-hidden bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] border border-[#efe6d9]"
    >
      <div className="bg-black text-white text-center px-6 py-6 transition-all duration-700 ease-out">
        <h3
          style={{ fontFamily: 'Days One, sans-serif' }}
          className={`text-2xl md:text-3xl font-semibold tracking-tight transition-all duration-700 ease-out ${titleAnimationClasses}`}
        >
          {title}
        </h3>
      </div>
      <div
        className={`flex flex-col md:flex-row ${isImageRight ? 'md:flex-row-reverse' : ''} items-stretch gap-2`}
      >
        <div
          className={`md:w-1/2 bg-white flex items-center justify-center p-6 md:p-8 transition-all duration-700 ease-out ${imageAnimationClasses}`}
        >
          <div className="w-full h-full rounded-3xl bg-[#f7f5ef] overflow-hidden shadow-inner">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-[24px] min-h-[260px]"
            />
          </div>
        </div>
        <div
          className={`md:w-1/2 p-8 flex flex-col transition-all duration-700 ease-out ${contentAnimationClasses} ${
            hasBullets ? 'justify-start gap-4' : 'justify-center min-h-[260px] gap-6'
          }`}
        >
          {hasDescription && <p className="text-gray-700 leading-relaxed text-lg">{description}</p>}
          {hasBullets && (
            <>
              {hasDescription&&<div className="border-t border-dashed border-[#FCD421] my-6" />}
              <p className="text-sm font-semibold tracking-[0.3em] text-[#FCD421] uppercase mb-3">
                Services include :
              </p>
              <ul className="space-y-2 text-gray-900 list-disc pl-5">
                {bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          <Link
            to="/contact"
            className="mt-8 self-start bg-[#FCD421] font-semibold px-6 py-3 rounded-full transition hover:bg-black hover:text-white no-underline"
            style={{ background: '#FCD421', color: '#000000' }}
          >
            Connect with us
          </Link>
        </div>
      </div>
    </article>
  );
};