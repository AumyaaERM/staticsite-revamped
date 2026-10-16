import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BatteryLow,
  BrainCog,
  CalendarDays,
  Cog,
  Crosshair,
  Feather,
  FingerprintPattern,
  Mail,
  Settings,
  Sprout,
  Target,
  UserStar,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

/* ------------------------------------------------------------------ */
/*  PBGA – Personal Brand Growth Architecture                           */
/*  Shared promo section used on:                                       */
/*   • Home page            -> <PBGASection variant="compact" />        */
/*   • Executive Coaching   -> <PBGASection variant="full" />           */
/* ------------------------------------------------------------------ */

const BRAND = {
  red: '#E11D2E',
  redDark: '#B91524',
  redSoft: '#FDECEE',
  navy: '#0B1739',
  navyMid: '#1E3A8A',
  ink: '#0A0F24',
  slate: '#475569',
  yellow: '#FCD421',
};

const FONT = 'Inter, system-ui, sans-serif';
const HERO_IMAGE = '/images/coaching/pbga-hero.webp';
const CONTACT_EMAIL = 'pranati@aumyaa.com';
const CALL = { name: 'PBGA Exploration Call', duration: '30 Minutes', price: '₹999' };

const AUDIENCE = ['Professional Services Firms', 'MNCs', 'Corporates'];
const JOURNEY = ['Awareness', 'Alignment', 'Action', 'Lasting Impact'];

type Item = { icon: LucideIcon; title: string; text: string };

const COSTS: Item[] = [
  { icon: BrainCog, title: 'Outdated Patterns', text: 'Growth opportunities get missed.' },
  { icon: UsersRound, title: 'Role-driven Teams', text: 'Trust and collaboration suffer.' },
  { icon: UserStar, title: 'Position-dependent Influence', text: 'Leadership impact becomes fragile.' },
  { icon: BatteryLow, title: "Leadership That Doesn't Scale", text: 'Burnout and inconsistency follow.' },
];

const HELPS: Item[] = [
  { icon: Crosshair, title: 'Break autopilot patterns', text: '' },
  { icon: Sprout, title: 'Build clarity & alignment', text: '' },
  { icon: Cog, title: 'Turn intent into consistent action', text: '' },
  { icon: Target, title: 'Create sustainable impact', text: '' },
];

const EDGE: Item[] = [
  { icon: FingerprintPattern, title: 'Identity', text: 'Who you are becoming as a leader.' },
  { icon: Settings, title: 'Practice', text: 'Daily practices that create change.' },
  { icon: Feather, title: 'Ownership', text: 'The capacity to lead from within.' },
  { icon: UsersRound, title: 'Ripple Effect', text: 'Leadership that elevates people and performance around you.' },
];

// Shades for the 4 journey steps – they deepen as the leader progresses.
const STEP_STYLES = [
  { bg: '#FDECEE', fg: BRAND.red },
  { bg: '#F9C9CF', fg: BRAND.redDark },
  { bg: '#F07C88', fg: '#FFFFFF' },
  { bg: BRAND.red, fg: '#FFFFFF' },
];

/* ----------------------------- helpers ----------------------------- */

const track = (location: string) => () =>
  trackEvent('pbga_cta_click', { cta_location: location, program: 'PBGA' });

/** Primary red CTA – always routes to the Contact page. */
const BookCallButton: React.FC<{ location: string; className?: string; label?: string }> = ({
  location,
  className = '',
  label = 'Book Your PBGA Exploration Call',
}) => (
  <Link
    to="/contact"
    onClick={track(location)}
    className={`group inline-flex items-center justify-center gap-3 text-center sm:whitespace-nowrap rounded-full px-6 md:px-8 py-3.5 md:py-4 text-[15px] md:text-base font-semibold tracking-wide shadow-[0_10px_30px_-10px_rgba(225,29,46,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-10px_rgba(225,29,46,0.8)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 ${className}`}
    style={{ background: BRAND.red, color: '#FFFFFF', textDecoration: 'none', fontFamily: FONT }}
  >
    <span>{label}</span>
    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
  </Link>
);

const Divider: React.FC<{ items: string[]; color: string }> = ({ items, color }) => (
  <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 list-none p-0 m-0">
    {items.map((item, i) => (
      <li key={item} className="flex items-center gap-3">
        {i > 0 && <span aria-hidden className="inline-block w-px h-4" style={{ background: BRAND.red }} />}
        <span style={{ color }}>{item}</span>
      </li>
    ))}
  </ul>
);

/** Chevron journey: Awareness → Alignment → Action → Lasting Impact */
const Journey: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'md' }) => {
  const notch = size === 'sm' ? 12 : 18;
  return (
    <ol
      className="grid grid-cols-2 sm:flex sm:flex-nowrap gap-2 sm:gap-0 list-none p-0 m-0"
      aria-label="PBGA journey: Awareness, Alignment, Action, Lasting Impact"
    >
      {JOURNEY.map((step, i) => {
        const first = i === 0;
        const last = i === JOURNEY.length - 1;
        const clip = `polygon(0 0, ${last ? '100%' : `calc(100% - ${notch}px)`} 0, 100% 50%, ${
          last ? '100%' : `calc(100% - ${notch}px)`
        } 100%, 0 100%, ${first ? '0' : `${notch}px`} 50%)`;
        return (
          <li key={step} className={`sm:flex-1 ${first ? '' : 'sm:-ml-1.5'}`}>
            {/* mobile pill */}
            <div
              className="sm:hidden flex items-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-bold uppercase tracking-wide"
              style={{ background: STEP_STYLES[i].bg, color: STEP_STYLES[i].fg }}
            >
              <span className="opacity-70">0{i + 1}</span>
              {step}
            </div>
            {/* desktop chevron */}
            <div
              className={`hidden sm:flex items-center justify-center text-center font-bold uppercase tracking-wide ${
                size === 'sm' ? 'h-11 text-[11px] lg:text-[12px] px-4' : 'h-14 text-[12px] lg:text-[14px] px-6'
              }`}
              style={{ background: STEP_STYLES[i].bg, color: STEP_STYLES[i].fg, clipPath: clip }}
            >
              {step}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

/** The 30-min / ₹999 booking card */
const BookingCard: React.FC<{ location: string }> = ({ location }) => (
  <div
    className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-[0_30px_60px_-30px_rgba(11,23,57,0.45)]"
    style={{ border: '1px solid #E5E7EB' }}
  >
    <div aria-hidden className="absolute -right-16 -top-16 w-56 h-56 rounded-full" style={{ background: BRAND.redSoft }} />
    <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
      <div className="flex items-center gap-5 flex-1">
        <div
          className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
          style={{ background: BRAND.redSoft }}
        >
          <CalendarDays className="w-8 h-8 md:w-10 md:h-10" style={{ color: BRAND.red }} aria-hidden />
        </div>
        <div>
          <p className="m-0 text-[13px] md:text-sm font-bold uppercase tracking-[0.18em]" style={{ color: BRAND.ink }}>
            {CALL.name}
          </p>
          <p className="m-0 mt-1 flex items-center gap-3 text-2xl md:text-3xl font-semibold" style={{ color: BRAND.navyMid }}>
            <span>{CALL.duration}</span>
            <span aria-hidden className="inline-block w-px h-7" style={{ background: BRAND.red }} />
            <span>{CALL.price}</span>
          </p>
          <p className="m-0 mt-2 text-sm" style={{ color: BRAND.slate }}>
            A focused 1:1 conversation to explore where PBGA can take your leadership.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-stretch sm:items-start lg:items-center gap-3">
        <BookCallButton location={location} />
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('PBGA Exploration Call')}`}
          onClick={track(`${location}_email`)}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium hover:underline"
          style={{ color: BRAND.navyMid, textDecoration: 'none' }}
        >
          <Mail className="w-4 h-4" aria-hidden />
          or write to {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  </div>
);

const Tagline: React.FC<{ dark?: boolean }> = ({ dark }) => (
  <div className="flex items-center gap-4 md:gap-6">
    <span aria-hidden className="hidden sm:block flex-1 h-px" style={{ background: BRAND.red }} />
    <p
      className="m-0 text-center italic text-[15px] md:text-lg"
      style={{ color: dark ? '#CBD5E1' : BRAND.navyMid, fontFamily: 'Georgia, serif' }}
    >
      For leaders ready to move from knowing… to becoming… to creating lasting impact.
    </p>
    <span aria-hidden className="hidden sm:block flex-1 h-px" style={{ background: BRAND.red }} />
  </div>
);

/* ------------------------------------------------------------------ */
/*  COMPACT – homepage feature banner                                   */
/* ------------------------------------------------------------------ */

const PBGACompact: React.FC = () => (
  <section
    aria-labelledby="pbga-home-title"
    className="py-12 md:py-20 px-4 sm:px-6 md:px-12"
    style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FB 100%)', fontFamily: FONT }}
  >
    <div className="w-full max-w-7xl mx-auto">
      <div
        className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-40px_rgba(11,23,57,0.45)]"
        style={{ border: '1px solid #E5E7EB' }}
      >
        {/* Content */}
        <div className="order-2 lg:order-1 p-6 sm:p-10 lg:p-14 flex flex-col">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em]"
              style={{ background: BRAND.redSoft, color: BRAND.red }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 motion-safe:animate-ping" style={{ background: BRAND.red }} />
                <span className="relative inline-flex w-2 h-2 rounded-full" style={{ background: BRAND.red }} />
              </span>
              New Programme
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: BRAND.slate }}>
              An invitation to senior leaders
            </span>
          </div>

          <h2
            id="pbga-home-title"
            className="m-0 text-[30px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.08] tracking-tight"
            style={{ color: BRAND.ink }}
          >
            <span className="block font-normal text-[22px] sm:text-[26px] lg:text-[30px] mb-1" style={{ color: BRAND.navyMid }}>
              Is it time to
            </span>
            Transform the Way You&nbsp;Lead?
          </h2>

          <p className="mt-5 mb-0 text-[15px] md:text-[17px] leading-relaxed" style={{ color: BRAND.slate }}>
            Introducing <strong style={{ color: BRAND.ink }}>PBGA — Personal Brand Growth Architecture</strong> by{' '}
            <strong style={{ color: BRAND.ink }}>Manjula Banerji</strong>: a pragmatic framework for leaders in professional
            services firms, MNCs and corporates who are ready to move from:
          </p>

          <div className="mt-5">
            <Journey size="sm" />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-6 gap-y-4">
            <BookCallButton location="home_pbga_banner" />
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: BRAND.redSoft }}>
                <CalendarDays className="w-5 h-5" style={{ color: BRAND.red }} aria-hidden />
              </span>
              <p className="m-0 leading-tight">
                <span className="block text-[15px] font-bold" style={{ color: BRAND.ink }}>
                  {CALL.duration} <span style={{ color: BRAND.red }}>|</span> {CALL.price}
                </span>
                <span className="text-[13px]" style={{ color: BRAND.slate }}>Exploration call</span>
              </p>
            </div>
          </div>

          <Link
            to="/executive-coaching#pbga"
            onClick={track('home_pbga_learn_more')}
            className="group mt-6 inline-flex w-fit items-center gap-2 text-[15px] font-semibold"
            style={{ color: BRAND.navyMid, textDecoration: 'none' }}
          >
            Discover the PBGA framework
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        {/* Visual */}
        <div className="order-1 lg:order-2 relative min-h-[240px] sm:min-h-[320px] lg:min-h-full">
          <img
            src={HERO_IMAGE}
            alt="Executive boardroom overlooking a city skyline at sunrise"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full object-cover object-[70%_center]"
            style={{ height: '100%' }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(11,23,57,0) 35%, rgba(11,23,57,0.75) 100%)' }}
          />
          <p
            className="absolute top-5 right-5 m-0 rounded-full bg-white/85 backdrop-blur px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em]"
            style={{ color: BRAND.ink }}
          >
            Lead <span style={{ color: BRAND.red }}>|</span> Grow <span style={{ color: BRAND.red }}>|</span> Create Impact
          </p>
          <div className="absolute left-5 right-5 bottom-5 sm:left-8 sm:right-8 sm:bottom-8">
            <p className="m-0 text-white/80 text-[12px] font-semibold uppercase tracking-[0.2em]">The PBGA Edge</p>
            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 list-none p-0 m-0">
              {EDGE.map(({ icon: Icon, title }) => (
                <li
                  key={title}
                  className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md px-3 py-2 text-white text-[13px] font-semibold"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#FF8A94' }} aria-hidden />
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  FULL – Executive Coaching page                                      */
/* ------------------------------------------------------------------ */

const PBGAFull: React.FC = () => (
  <section id="pbga" aria-labelledby="pbga-title" className="scroll-mt-28 bg-white" style={{ fontFamily: FONT }}>
    {/* 1. Invitation hero */}
    <div className="relative overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full object-cover object-[75%_center]"
        style={{ height: '100%' }}
      />
      {/* readability overlays: vertical on mobile, horizontal on desktop */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.75) 100%)' }}
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.97) 38%, rgba(255,255,255,0.65) 62%, rgba(255,255,255,0.05) 100%)',
        }}
      />
      <div aria-hidden className="absolute bottom-0 inset-x-0 h-24" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em]"
              style={{ background: BRAND.redSoft, color: BRAND.red }}
            >
              New Programme
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-[0.25em]" style={{ color: BRAND.ink }}>
              Lead <span style={{ color: BRAND.red }}>|</span> Grow <span style={{ color: BRAND.red }}>|</span> Create Impact
            </span>
          </div>

          <p className="m-0 text-[26px] sm:text-[34px] md:text-[42px] font-light leading-tight" style={{ color: BRAND.ink }}>
            An Invitation to
          </p>
          <h2
            id="pbga-title"
            className="m-0 text-[46px] sm:text-[64px] md:text-[80px] font-extrabold leading-[0.95] tracking-[-0.03em]"
            style={{ color: BRAND.ink }}
          >
            Senior Leaders
          </h2>

          <div className="mt-5 text-[15px] sm:text-lg md:text-xl font-medium">
            <Divider items={AUDIENCE} color={BRAND.navyMid} />
          </div>

          <div className="mt-10 md:mt-12 pl-5 md:pl-6" style={{ borderLeft: `4px solid ${BRAND.red}` }}>
            <p className="m-0 text-[22px] sm:text-[28px] md:text-[34px] font-normal leading-tight" style={{ color: BRAND.navyMid }}>
              Is It Time to
            </p>
            <p
              className="m-0 text-[32px] sm:text-[44px] md:text-[54px] font-extrabold leading-[1.02] tracking-tight"
              style={{ color: BRAND.ink }}
            >
              Transform the Way You Lead?
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <BookCallButton location="exec_pbga_hero" />
            <span className="text-sm font-medium" style={{ color: BRAND.slate }}>
              {CALL.duration} &nbsp;·&nbsp; {CALL.price}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* 2. The cost */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
      <h3 className="m-0 text-[26px] sm:text-[34px] md:text-[42px] font-extrabold leading-[1.1] tracking-tight" style={{ color: BRAND.ink }}>
        When leadership doesn&rsquo;t transform,
        <span className="block font-normal" style={{ color: BRAND.navyMid }}>
          the cost can be:
        </span>
      </h3>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0">
        {COSTS.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="group relative flex items-start gap-4 sm:block rounded-2xl bg-white p-5 sm:p-6 md:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(11,23,57,0.35)]"
            style={{ border: '1px solid #EEF0F4' }}
          >
            <span
              aria-hidden
              className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ background: BRAND.red }}
            />
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center sm:mb-5" style={{ background: BRAND.redSoft }}>
              <Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: BRAND.red }} strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h4 className="m-0 text-lg md:text-xl font-bold leading-snug" style={{ color: BRAND.navy }}>
                {title}
              </h4>
              <p className="mt-1 sm:mt-2 mb-0 text-[15px] leading-relaxed" style={{ color: BRAND.slate }}>
                {text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* 3. Introducing PBGA */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 md:pb-20">
      <div
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-10 lg:gap-14 rounded-3xl p-6 sm:p-10 md:p-12"
        style={{ background: '#F7F8FB' }}
      >
        <div>
          <p className="m-0 text-xl md:text-2xl" style={{ color: BRAND.navyMid }}>
            Introducing
          </p>
          <p className="m-0 text-[72px] md:text-[96px] font-black leading-none tracking-[-0.04em]" style={{ color: BRAND.ink }}>
            PBGA
          </p>
          <p className="mt-2 mb-0 text-xl md:text-2xl font-medium leading-snug" style={{ color: BRAND.ink }}>
            Personal Brand Growth Architecture
          </p>
          <p className="mt-5 mb-0 text-lg italic" style={{ color: BRAND.navyMid }}>
            By Manjula Banerji
          </p>
          <p className="m-0 text-[15px]" style={{ color: BRAND.slate }}>
            Personal Growth and Leadership Coach
          </p>
          <span aria-hidden className="mt-5 block w-24 h-[3px] rounded-full" style={{ background: BRAND.red }} />
        </div>

        <div className="lg:pl-10 lg:border-l-2" style={{ borderColor: 'rgba(225,29,46,0.35)' }}>
          <p className="m-0 text-base md:text-lg font-medium" style={{ color: BRAND.navyMid }}>
            A pragmatic framework for leaders ready to move from:
          </p>
          <div className="mt-5">
            <Journey />
          </div>

          <div className="mt-10 flex items-center gap-4">
            <h4 className="m-0 text-lg md:text-xl font-extrabold uppercase tracking-wide whitespace-nowrap" style={{ color: BRAND.ink }}>
              PBGA helps you:
            </h4>
            <span aria-hidden className="flex-1 h-px" style={{ background: 'rgba(225,29,46,0.35)' }} />
          </div>

          <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 list-none p-0 m-0">
            {HELPS.map(({ icon: Icon, title }) => (
              <li
                key={title}
                className="flex flex-col items-center text-center gap-3 rounded-2xl bg-white px-3 py-5 transition-shadow hover:shadow-md"
              >
                <Icon className="w-9 h-9" style={{ color: BRAND.red }} strokeWidth={1.75} aria-hidden />
                <span className="text-[14px] md:text-[15px] font-medium leading-snug" style={{ color: BRAND.navyMid }}>
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* 4. The PBGA Edge + booking */}
    <div className="relative overflow-hidden" style={{ background: BRAND.navy }}>
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: BRAND.red }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <h3 className="m-0 text-[26px] md:text-[34px] font-extrabold uppercase tracking-wide text-white">The PBGA Edge</h3>
          <span aria-hidden className="hidden md:block w-10 h-[2px]" style={{ background: BRAND.red }} />
          <p className="m-0 italic text-[15px] md:text-lg" style={{ color: '#CBD5E1' }}>
            Transformation that goes deeper than behaviour.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0">
          {EDGE.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl p-5 md:p-6 transition-colors duration-200 hover:bg-white/10"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(225,29,46,0.15)' }}>
                <Icon className="w-7 h-7" style={{ color: '#FF6B78' }} strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <h4 className="m-0 text-[15px] font-bold uppercase tracking-[0.12em] text-white">{title}</h4>
                <p className="mt-1.5 mb-0 text-[14px] leading-relaxed" style={{ color: '#CBD5E1' }}>
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 md:mt-16">
          <BookingCard location="exec_pbga_booking" />
        </div>

        <div className="mt-10 md:mt-12">
          <Tagline dark />
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */

export const PBGASection: React.FC<{ variant?: 'compact' | 'full' }> = ({ variant = 'full' }) =>
  variant === 'compact' ? <PBGACompact /> : <PBGAFull />;

export default PBGASection;
