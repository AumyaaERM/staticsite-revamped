import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  LogOut,
  Pencil,
  Table,
  Play,
  ShieldCheck,
  CalendarDays,
  Mail,
  Briefcase,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const navBg = { background: '#FCD421' };
const logoBox = { background: '#FFFFFF', marginBottom: '-65px' };
const iconColor = { color: '#191600' };
const mobilePanelStyle = {
  background: '#FCD421',
  maxHeight: 'calc(100vh - 80px)',
  overflowY: 'auto' as const,
  top: '70px',
};

type Tile = {
  label: string;
  icon: LucideIcon;
  to?: string;
  href?: string;
};

type Section = {
  title: string;
  tiles: Tile[];
};

const SECTIONS: Section[] = [
  {
    title: 'Insights',
    tiles: [
      { label: 'Post an Insight', icon: Pencil, to: '/admin/post-insight' },
      { label: 'Edit Insights', icon: Table, href: 'https://docs.google.com/spreadsheets/d/1YyI1-K70oRhVvo0JmMflauOepxULcs8zvo71MqNK5vw/edit?usp=sharing' },
      { label: 'How to post an Insight?', icon: Play, href: '' },
    ],
  },
  {
    title: 'DPDP',
    tiles: [
      { label: 'DPDP Form', icon: ShieldCheck, href: '' },
      { label: 'DPDP Responses', icon: Table, href: '' },
    ],
  },
  {
    title: 'General Forms',
    tiles: [
      { label: 'Risk Webinar', icon: CalendarDays, href: 'https://docs.google.com/forms/d/1W9K4DB65aVDQdwtliiixP7RfGO7mOnFb5kAccpKb6Wc/edit' },
      { label: 'Contact Us', icon: Mail, href: 'https://docs.google.com/forms/d/1YqgHuJTiFY6IMcB434GlliKMgzQZOolRxBv3AnyUWa0/edit' },
      { label: 'Careers', icon: Briefcase, href: 'https://docs.google.com/forms/d/13X5w0JwxFLiq23hVHlTLACPXfrmINuWqSLwwD0IVVcE/edit' },
    ],
  },
  {
    title: 'Website Development',
    tiles: [
      { label: 'BRD', icon: CalendarDays, href: 'https://docs.google.com/spreadsheets/d/13wbWMsy56-GxwmPT3pXt8MHuUkDXLOx7/edit?usp=sharing&ouid=106736692049274378689&rtpof=true&sd=true' },
    ],
  },
];

const tileClass =
  'group flex flex-col items-center justify-center gap-2 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fcd421] hover:-translate-y-0.5 transition-all p-3 text-center';

const TileInner: React.FC<{ tile: Tile }> = ({ tile }) => {
  const Icon = tile.icon;
  return (
    <>
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#fcd421]/20 group-hover:bg-[#fcd421] transition-colors">
        <Icon className="w-5 h-5 text-black" strokeWidth={1.8} />
      </span>
      <span className="text-[11px] font-semibold text-gray-700 leading-tight">
        {tile.label}
      </span>
    </>
  );
};

const TileButton: React.FC<{ tile: Tile }> = ({ tile }) => {
  if (tile.to) {
    return (
      <Link to={tile.to} className={tileClass}>
        <TileInner tile={tile} />
      </Link>
    );
  }
  if (tile.href) {
    return (
      <a
        href={tile.href}
        target="_blank"
        rel="noopener noreferrer"
        className={tileClass}
      >
        <TileInner tile={tile} />
      </a>
    );
  }
  return (
    <div className={tileClass + ' opacity-50 cursor-not-allowed'}>
      <TileInner tile={tile} />
    </div>
  );
};

export const Admin: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinkStyle = {
    fontFamily: 'Days One, sans-serif',
    fontWeight: 400,
    color: '#191600',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="px-4 md:px-6 lg:px-8 relative" style={navBg}>
        <div className="w-full flex items-end justify-between py-2">
          <div className="flex flex-shrink-0 mr-2 lg:mr-4 xl:mr-0 scale-50 mt-[-15px] ml-[-80px]">
            <Link
              to="/"
              className="flex flex-col items-center rounded-t-[12px] px-2"
              style={logoBox}
            >
              <img
                src="/images/aumyaalogo.png"
                alt="Aumyaa Logo"
                className="h-8 md:h-10 mb-[-15px]"
              />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-yellow-500 transition-colors self-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={iconColor} />
            ) : (
              <Menu className="w-6 h-6" style={iconColor} />
            )}
          </button>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-10">
            <span
              className="text-[20px] lg:text-[24px] xl:text-[28px] uppercase whitespace-nowrap"
              style={navLinkStyle}
            >
              Admin Panel
            </span>
          </div>

          <div className="hidden lg:flex items-end relative flex-shrink-0 ml-2 pb-1">
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-[70px] px-3 py-1.5 bg-black/90 hover:bg-black transition-colors text-[11px] lg:text-[12px] xl:text-[13px] uppercase tracking-wide text-[#FCD421]"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        <div
          className={`lg:hidden fixed left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
          style={mobilePanelStyle}
        >
          <div className="px-6 py-4 space-y-1">
            <div
              className="py-3 text-[16px] uppercase border-b border-black/10"
              style={navLinkStyle}
            >
              Admin Panel
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-2 py-3 text-[16px] uppercase"
              style={navLinkStyle}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                {section.title}
              </h2>
              <div className="flex flex-wrap gap-4">
                {section.tiles.map((tile) => (
                  <TileButton key={tile.label} tile={tile} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Admin;