import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navBg = { background: '#FCD421' };
const logoBox = { background: '#FFFFFF', marginBottom: '-65px' };
const iconColor = { color: '#191600' };
const mobilePanelStyle = {
  background: '#FCD421',
  maxHeight: 'calc(100vh - 80px)',
  overflowY: 'auto' as const,
  top: '70px',
};

export const CookiesPolicy: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-white">
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
              Cookies Policy
            </span>
          </div>
          <div className="hidden lg:flex items-end relative flex-shrink-0 ml-2 pb-1" />
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
              Cookies Policy
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10 text-gray-700 leading-relaxed">
          <header className="space-y-1 border-b border-gray-200 pb-6">
            {/* <h1 className="text-3xl font-bold text-gray-900">Cookies Policy</h1> */}
            <p className="text-sm text-gray-500">Effective Date: 13 August 2026</p>
            <p className="text-sm text-gray-500">Last Updated: 13 August 2026</p>
          </header>

          <p>
            At Aumyaa Consulting Services LLP ("Aumyaa" or "we" or "our"), we are committed to protecting
            your privacy and ensuring transparency about how we use cookies and similar technologies. This
            Cookie Policy outlines how cookies are deployed on our website, how you can manage them, and
            what that means for your experience.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are stored on your browser or device when you visit our
              website. They allow us to distinguish you from other users, helping us provide a seamless and
              tailored browsing experience.
            </p>
            <p>Cookies do not access data stored on your device or collect personal information unless you have explicitly provided it.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">2. Why We Use Cookies</h2>
            <p>We use cookies for a variety of purposes, including to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enable and maintain core website functionality</li>
              <li>Understand how visitors interact with our website</li>
              <li>Improve content, design, and usability</li>
              <li>Remember user preferences and settings</li>
              <li>Monitor website performance and troubleshoot issues</li>
            </ul>
            <p>We do not use cookies for behavioural profiling or for selling your information to third parties.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">3. Types of Cookies We Use</h2>

            <h3 className="text-base font-semibold text-gray-800">a) Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for the proper functioning and security of our website. They
              enable basic features such as page navigation, secure access, session management, and other
              essential website functions. Without these cookies, certain parts of the website may not
              function properly.
            </p>

            <h3 className="text-base font-semibold text-gray-800">b) Performance and Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors use our website and how the website performs.
              They may collect information such as pages visited, time spent on the website, and
              interactions with website features. This information helps us improve the website, its
              content, functionality, and overall user experience.
          </p>

            <h3 className="text-base font-semibold text-gray-800">c) Functionality Cookies</h3>
            <p>
              These cookies help remember user preferences and choices, such as language, region, or other
              settings. They are used to provide a more consistent and personalized browsing experience.
            </p>

            <h3 className="text-base font-semibold text-gray-800">d) Third-Party Cookies</h3>
            <p>
              Certain features, services, or content on our website may be provided by third-party service
              providers. These providers may use cookies or similar technologies on our website. The use of
              such cookies is subject to the respective third party's privacy and cookie policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">4. Managing Your Cookie Preferences</h2>
            <p>
              You have full control over your cookie preferences. Where available, you can manage your
              cookie preferences through the cookie consent mechanism on our website, including accepting,
              rejecting, or customizing non-essential cookies. You may also manage cookies through your
              browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>View and delete cookies</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when closing the browser</li>
              <li>Set preferences for certain websites</li>
            </ul>
            <p>Please note that disabling some cookies may impact your browsing experience or restrict certain functionalities on our website.</p>
            <p>To explore browser-specific settings:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Chrome:{' '}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#191600] font-medium underline"
                >
                  https://support.google.com/chrome/answer/95647
                </a>
              </li>
              <li>
                Firefox:{' '}
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#191600] font-medium underline"
                >
                  https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer
                </a>
              </li>
              <li>
                Edge:{' '}
                <a
                  href="https://support.microsoft.com/en-us/help/4027947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#191600] font-medium underline"
                >
                  https://support.microsoft.com/en-us/help/4027947
                </a>
              </li>
            </ul>
            <p>For more information about how we collect, use, store, and protect personal information, please refer to our Privacy Policy.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our website, the
              cookies and similar technologies we use, applicable legal or regulatory requirements, or our
              business practices.
            </p>
            <p>
              Any changes to this Cookie Policy will be published on this page, along with the revised
              "Last Updated" date. We encourage you to review this Cookie Policy periodically to stay
              informed about how we use cookies and similar technologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">6. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Cookie Policy or our use of
              cookies and similar technologies, you may contact us using the details provided below:
            </p>
            <p className="not-italic">
              Aumyaa Consulting and Services LLP
              <br />
              2414, 4th Floor, Express Trade Tower 2
              <br />
              B-36, Sector 132, Noida
              <br />
              Uttar Pradesh, India – 201301
              <br />
              Phone: 01204544295; +91-9818248133
            </p>
            <p>We will review and respond to your query in accordance with our applicable policies and requirements.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CookiesPolicy;