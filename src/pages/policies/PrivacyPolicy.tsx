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

export const PrivacyPolicy: React.FC = () => {
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
              Privacy Policy
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
              Privacy Policy
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10 text-gray-700 leading-relaxed">
          <header className="space-y-1 border-b border-gray-200 pb-6">
            {/* <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1> */}
            <p className="text-sm text-gray-500">Effective Date: 13 August 2026</p>
            <p className="text-sm text-gray-500">Last Updated: 13 August 2026</p>
          </header>

          <p>
            At Aumyaa Consulting Services LLP ("Aumyaa", "we", "our", or "us"), we are committed to
            protecting your privacy and ensuring that your personal data is handled in a safe and
            responsible manner. This Privacy Policy explains how we collect, use, disclose, and protect
            your information when you visit our website, use our services, or interact with us.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
            <p>
              We may collect and process personal information that you provide to us or that is generated
              when you interact with our website, services, or other communication channels. The
              information we collect may include:
            </p>

            <h3 className="text-base font-semibold text-gray-800">a. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, phone number, company/organisation name, job title, and other professional or contact information.</li>
              <li>Information submitted through our website, including contact, service enquiry, collaboration, career, subscription, or other forms.</li>
              <li>Information provided when you communicate with us regarding our consulting, advisory, training, coaching, technology, compliance, ESG, or other services.</li>
              <li>Information included in documents, resumes, enquiries, or other materials that you voluntarily submit to us.</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-800">b. Information Automatically Collected</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address and general technical information.</li>
              <li>Browser type, device type, operating system, and related technical information.</li>
              <li>Information about how you interact with our website, including pages visited, browsing activity, and time spent on the website.</li>
              <li>Cookies and similar technologies, as described in our Cookie Policy.</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-800">c. Information from Other Sources</h3>
            <p>
              Where applicable, we may receive information from publicly available sources, professional
              networks, referrals, business partners, or other legitimate sources in connection with our
              business activities and service engagements.
            </p>
            <p>
              We collect information only to the extent reasonably necessary for the purposes described in
              this Privacy Policy and applicable legal or regulatory requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
            <p>We may use the personal information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your enquiries, requests, and communications.</li>
              <li>To provide, manage, and support the services or solutions you request from us.</li>
              <li>To understand your requirements and communicate with you regarding our consulting, advisory, training, coaching, technology, compliance, ESG, and other services.</li>
              <li>To process and respond to career-related enquiries and applications, where applicable.</li>
              <li>To improve, maintain, personalize, and enhance our website, services, content, and user experience.</li>
              <li>To analyse website usage, performance, and trends.</li>
              <li>To send newsletters, updates, service-related communications, or marketing communications where permitted and, where required, with your consent.</li>
              <li>To comply with applicable legal, regulatory, contractual, and professional obligations.</li>
              <li>To protect the security, integrity, and proper functioning of our website, systems, and services.</li>
              <li>To establish, exercise, or defend our legal rights and interests, where necessary.</li>
            </ul>
            <p>
              We will use personal information only for legitimate and relevant purposes and in accordance
              with applicable laws and this Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Legal Basis for Processing</h2>
            <p>We process personal information on the following legal bases, as applicable:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium text-gray-900">Consent: </span>
                Where you have provided consent for a specific purpose, such as receiving marketing
                communications or where consent is otherwise required.
              </li>
              <li>
                <span className="font-medium text-gray-900">Contractual Necessity: </span>
                Where processing is necessary to provide services, respond to your requests, or perform
                obligations arising from an agreement with you.
              </li>
              <li>
                <span className="font-medium text-gray-900">Legitimate Interests: </span>
                Where processing is necessary for our legitimate business interests, such as improving our
                services, maintaining website security, preventing misuse, and managing our business
                operations, provided that such interests are not overridden by your applicable rights and
                interests.
              </li>
              <li>
                <span className="font-medium text-gray-900">Legal and Regulatory Obligations: </span>
                Where processing is necessary to comply with applicable laws, regulations, legal
                proceedings, or regulatory requirements.
              </li>
            </ul>
            <p>
              Where we rely on consent, you may withdraw your consent at any time, subject to applicable
              legal or contractual limitations. Withdrawal of consent will not affect the lawfulness of
              processing carried out before the withdrawal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
            <p>
              Our website uses cookies and similar technologies to support website functionality,
              understand website usage, improve user experience, and, where applicable, provide relevant
              content.
            </p>
            <p>The types of cookies we use and how you can manage your cookie preferences are explained in our Cookie Policy.</p>
            <p>
              You can manage or change your cookie preferences through the cookie consent mechanism
              available on our website, where applicable. You may also manage cookies through your browser
              settings.
            </p>
            <p>For more information, please refer to our Cookie Policy.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Data Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal information to third parties.</p>
            <p>
              We may disclose or share personal information where necessary for legitimate business
              purposes or to comply with applicable legal, regulatory, or professional requirements,
              including with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Legal, regulatory, governmental, or law-enforcement authorities, where required or permitted by applicable law.</li>
              <li>Professional advisors, such as legal, accounting, audit, or other professional advisors, where reasonably necessary.</li>
              <li>Other parties where disclosure is necessary to protect our legal rights, security, or interests, or where otherwise permitted by applicable law.</li>
            </ul>
            <p>
              Where personal information is shared with any third party, we take reasonable measures to
              ensure that it is handled appropriately and only for the intended purpose.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Data Security</h2>
            <p>
              We implement reasonable technical and organisational measures designed to protect personal
              information against unauthorised access, use, alteration, disclosure, loss, or destruction.
            </p>
            <p>
              We take appropriate measures based on the nature of the information and the risks associated
              with its processing. However, no method of transmission over the internet or method of
              electronic storage can be guaranteed to be completely secure.
            </p>
            <p>
              In the event of a security incident involving personal information, we will take appropriate
              steps in accordance with applicable legal and regulatory requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Data Retention</h2>
            <p>
              We retain personal information only for as long as reasonably necessary to fulfil the
              purposes for which it was collected, provide our services, maintain appropriate business and
              legal records, or comply with applicable legal, regulatory, contractual, or professional
              requirements.
            </p>
            <p>
              When personal information is no longer required for these purposes, we will take reasonable
              steps to securely delete, destroy, or anonymise it, subject to applicable legal or regulatory
              requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
            <p>
              Depending on your location, applicable laws, and the circumstances of the processing, you may
              have certain rights in relation to your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The right to request access to personal information we hold about you.</li>
              <li>The right to request correction or updating of inaccurate or incomplete information.</li>
              <li>The right to request deletion of your personal information, subject to applicable legal or regulatory requirements.</li>
              <li>The right to request restriction of or object to certain processing activities, where applicable.</li>
              <li>The right to data portability, where applicable.</li>
              <li>The right to withdraw consent where processing is based on your consent.</li>
            </ul>
            <p>
              To exercise any applicable rights or raise a privacy-related concern, please contact us at:{' '}
              <a href="mailto:security@aumyaa.com" className="text-[#191600] font-medium underline">
                security@aumyaa.com
              </a>
            </p>
            <p>
              We may need to verify your identity before processing certain requests. We will respond to
              requests in accordance with applicable laws and within the applicable timeframes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our website,
              services, business practices, data-processing activities, or applicable legal and regulatory
              requirements.
            </p>
            <p>
              Any updates will be published on this page, and the revised "Last Updated" date will be
              displayed accordingly. Where changes are material, we will take reasonable steps to
              communicate them through appropriate channels.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to remain informed about how we
              collect, use, disclose, and protect personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              handling of personal information, please contact us:
            </p>
            <p className="not-italic">
              Aumyaa Consulting Services LLP
              <br />
              2414, 4th Floor, Express Trade Tower 2
              <br />
              B-36, Sector 132, Noida
              <br />
              Uttar Pradesh, India – 201301
              <br />
              Email:{' '}
              <a href="mailto:security@aumyaa.com" className="text-[#191600] font-medium underline">
                security@aumyaa.com
              </a>
              <br />
              Phone: 01204544295; +91-9818248133
            </p>
            <p>We will review and respond to privacy-related requests in accordance with applicable laws and regulatory requirements.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;