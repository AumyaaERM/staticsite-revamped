import React from 'react';
import { Link } from 'react-router-dom';

/** Shown for any URL that doesn't match a route. Netlify also returns HTTP 404 for these (see dist/_redirects). */
export const NotFound: React.FC = () => (
  <section className="px-4 sm:px-6 md:px-12 py-20 md:py-28 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
    <p className="m-0 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#B45309' }}>
      Error 404
    </p>
    <h1 className="mt-3 mb-4 font-bold" style={{ color: '#000000', fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: 1.15 }}>
      Sorry, we couldn&rsquo;t find that page
    </h1>
    <p className="mx-auto max-w-xl text-base md:text-lg" style={{ color: '#374151' }}>
      The page may have moved or no longer exists. Try one of these instead:
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {[
        { to: '/', label: 'Home' },
        { to: '/consulting/business-consulting', label: 'Consulting Services' },
        { to: '/executive-coaching', label: 'Executive Coaching' },
        { to: '/insights', label: 'Insights' },
        { to: '/contact', label: 'Contact Us' },
      ].map(({ to, label }, i) => (
        <Link
          key={to}
          to={to}
          className="inline-flex items-center rounded-full px-5 py-2.5 font-semibold transition-transform hover:-translate-y-0.5"
          style={{
            background: i === 0 ? '#FCD421' : '#FFFFFF',
            border: '2px solid #FCD421',
            color: '#000000',
            textDecoration: 'none',
          }}
        >
          {label}
        </Link>
      ))}
    </div>
  </section>
);

export default NotFound;
