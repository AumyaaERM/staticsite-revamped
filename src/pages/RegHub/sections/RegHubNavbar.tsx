import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { RegHubLogo } from '../RegHubLogo';

const NAV_LINKS = [
  { label: 'Home', href: '/reghub' },
  { label: 'Regulatory News', href: '/reghub#regulatory-news' },
  { label: 'Action Centre', href: '/reghub#action-centre' },
  { label: 'AI Chat', href: '/reghub#ai-chat' },
  { label: 'Checklist Generator', href: '/reghub#checklist-generator' },
];

export const RegHubNavbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
        <Link to="/reghub" className="flex items-center">
          <RegHubLogo height={36} />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-800">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-black uppercase tracking-wide text-xs">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#sign-in" className="text-xs font-semibold uppercase tracking-wide text-gray-800 hover:text-black">
            Sign In
          </a>
          <a
            href="#get-started"
            className="bg-black text-white text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-gray-900 transition-colors"
          >
            Get Started
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden flex flex-col gap-1 px-4 pb-4 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-sm font-semibold uppercase tracking-wide text-gray-800"
            >
              {link.label}
            </a>
          ))}
          <a href="#sign-in" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Sign In
          </a>
          <a
            href="#get-started"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-black text-white text-center text-sm font-semibold uppercase tracking-wide px-5 py-2.5 rounded-full"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
};
