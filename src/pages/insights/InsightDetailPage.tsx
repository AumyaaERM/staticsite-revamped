import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useInsights } from '../../hooks/useInsights';
import type { Insight } from '../../types/insight';

const markdownFiles = import.meta.glob(
  '/src/content/insights/*.md',
  { query: '?raw', import: 'default' }
);

const categoryColors: Record<string, string> = {
  'Blog':          'bg-[#fcd421] text-black',
  'Newsletter':    'bg-black text-white',
  'Case Study':    'bg-gray-800 text-white',
  'Podcast':       'bg-purple-600 text-white',
  'Survey Report': 'bg-blue-600 text-white',
  'Insight':       'bg-[#fcd421] text-black',
};

const headingFont = { fontFamily: 'Days One, sans-serif' };

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { insights, isLoading: insightsLoading } = useInsights();

  const [insight, setInsight] = useState<Insight | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [contentLoading, setContentLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (insightsLoading) return;
    const found = insights.find((i) => i.slug === slug);
    if (!found) {
      setNotFound(true);
      setContentLoading(false);
      return;
    }
    setInsight(found);
  }, [slug, insights, insightsLoading]);

  useEffect(() => {
    if (!insight) return;
    const filePath = `/src/content/insights/${insight.contentFile}.md`;
    const loader = markdownFiles[filePath];
    if (!loader) {
      setContentLoading(false);
      return;
    }
    loader()
      .then((content) => setMarkdownContent(content as string))
      .catch(() => setMarkdownContent(''))
      .finally(() => setContentLoading(false));
  }, [insight]);

  if (insightsLoading || contentLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="h-6 bg-white" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Loading…</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !insight) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="h-6 bg-white" />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
          <p className="text-gray-500 text-lg text-center">Insight not found.</p>
          <Link
            to="/insights"
            className="bg-[#fcd421] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Back to Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const badgeClass = categoryColors[insight.category] ?? 'bg-[#fcd421] text-black';

  // Hero background — image fills the container, text drives the height
  const heroStyle = {
    backgroundImage: `url(${insight.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="h-6 bg-white" />

      {/* ── HERO ──
          Background image fills this div.
          Height is driven by the content (text) inside.
          Gradient ensures text is always readable.
      */}
      <div className="relative w-full" style={heroStyle}>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

        {/* Content sits on top of the image */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-8 sm:pb-12">

         {/* Back button */}
<button
  onClick={() => navigate('/insights')}
  className="inline-flex items-center gap-2 bg-[#fcd421] text-black font-bold px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors text-xs sm:text-sm mb-6 sm:mb-8 group"
  style={{ fontFamily: 'Days One, sans-serif', backgroundColor: '#fcd421', color: '#000000' }}
>
  <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
  Back to Insights
</button>

          {/* Category badge */}
          <div className="mb-3">
            <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full ${badgeClass}`}>
              {insight.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl"
            style={headingFont}
          >
            {insight.title}
          </h1>

          {/* Date · Category */}
          <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
            <span>{insight.date}</span>
            <span>·</span>
            <span>{insight.category}</span>
          </div>

        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">

        {markdownContent ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2
                  className="text-xl sm:text-2xl font-bold text-black mt-10 mb-4"
                  style={headingFont}
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base sm:text-lg font-bold text-black mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 text-justify">
                  {children}
                </p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#fcd421] bg-yellow-50 px-4 sm:px-6 py-4 my-6 rounded-r-xl">
                  <div className="text-gray-800 text-sm sm:text-base font-medium italic leading-relaxed">
                    {children}
                  </div>
                </blockquote>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-black">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic text-gray-600">{children}</em>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-outside pl-5 sm:pl-6 mb-5 space-y-2 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside pl-5 sm:pl-6 mb-5 space-y-2 text-gray-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-sm sm:text-base leading-relaxed">{children}</li>
              ),
              hr: () => (
                <div className="w-full border-t-2 border-dashed border-[#fcd421] my-8" />
              ),
              // Full image, no cropping, slightly reduced width
              img: ({ src, alt }) => (
                <div className="my-8 max-w-[70%] mx-auto rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={src}
                    alt={alt ?? ''}
                    className="w-full h-auto block"
                  />
                  {alt && (
                    <p className="text-center text-xs text-gray-400 mt-2 pb-1 italic">
                      {alt}
                    </p>
                  )}
                </div>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold underline decoration-[#fcd421] underline-offset-2 hover:text-[#b8960e] transition-colors break-words"
                >
                  {children}
                </a>
              ),
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        ) : (
          <p className="text-gray-400 italic">Content coming soon.</p>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex justify-center sm:justify-start">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 bg-[#fcd421] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors text-sm sm:text-base"
            style={{ fontFamily: 'Days One, sans-serif', textDecoration: 'none', color: '#000000' }}
          >
            ← Back to all insights
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
};