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

export const TermsOfUse: React.FC = () => {
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
              Terms of Use
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
              Terms of Use
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10 text-gray-700 leading-relaxed">
          <header className="space-y-1 border-b border-gray-200 pb-6">
            {/* <h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1> */}
            <p className="text-sm text-gray-500">Effective Date: 13 August 2026</p>
            <p className="text-sm text-gray-500">Last Updated: 13 August 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Welcome to Aumyaa</h2>
            <p>
              These Terms of Use ("Terms") outline the rules and conditions for accessing and using the
              website [aumyaa.com], mobile application, and associated services (collectively referred to
              as the "Platform") operated by Aumyaa Consulting Services LLP ("Aumyaa," "we," "us," or
              "our"). Aumyaa is a women-led, AI-enabled consulting firm offering high-impact advisory
              services in technology, risk, ESG, compliance, and sustainability, along with leadership
              training and coaching.
            </p>
            <p>
              Our registered office is located at:
              <br />
              2414, 4th Floor, Express Trade Tower 2, B-36, Sector 132, Noida, Uttar Pradesh, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Acceptance of Terms</h2>
            <p>
              By accessing or using our Platform, you acknowledge that you have read, understood, and agree
              to be bound by these Terms of Use and any applicable policies referenced in these Terms. If
              you do not agree with these Terms, please refrain from accessing or using the Platform.
            </p>
            <p>
              Where required, we may seek your express acceptance of updated Terms before you continue
              using certain services or features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Related Policies</h2>
            <p>Your use of the Platform may also be subject to the following policies, as applicable:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Privacy Policy – Explains how we collect, use, process, and protect personal information.</li>
              <li>Cookie Policy – Describes how we use cookies and similar technologies on our Platform.</li>
              <li>Acceptable Use Policy – Defines permitted and prohibited uses of the Platform and its services.</li>
            </ul>
            <p>
              These policies are available on our website and form part of these Terms of Use to the extent
              applicable to your use of the Platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Updates and Modifications</h2>
            <p>
              We may update or modify these Terms of Use from time to time to reflect changes in our
              Platform, services, business practices, or applicable legal or regulatory requirements.
            </p>
            <p>
              Where changes are material, we will take reasonable steps to communicate the updated Terms
              through appropriate means, such as publishing the revised Terms on the Platform or providing
              notice through available communication channels.
            </p>
            <p>
              The revised Terms will indicate the updated "Last Updated" date. We encourage you to review
              these Terms periodically to remain informed about any changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Use of Content</h2>
            <p>
              Content available on the Platform is provided for general informational purposes and does not
              constitute professional advice. Subject to these Terms, you may access, download, or share
              content for personal, educational, or informational purposes, provided that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The content is not marked as restricted or confidential.</li>
              <li>The content is not used for commercial purposes without prior written permission from Aumyaa.</li>
              <li>All copyright, trademark, attribution, and proprietary notices are retained.</li>
              <li>Your use of the content complies with applicable laws and these Terms.</li>
            </ul>
            <p>
              No ownership or other intellectual property rights in the content are transferred to you by
              accessing, downloading, or using such content.
            </p>
            <p>
              Any modification, reproduction, distribution, public display, or commercial use of the content
              beyond the permissions stated above requires prior written consent from Aumyaa.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Restrictions on Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Copy, reproduce, modify, distribute, or reverse-engineer any software, proprietary methods,
                or materials made available through the Platform, except as expressly permitted under these
                Terms.
              </li>
              <li>Use the Platform or its content for any unlawful, fraudulent, or unauthorized purpose.</li>
              <li>Attempt to gain unauthorized access to the Platform, its systems, accounts, networks, or data.</li>
              <li>Introduce or transmit any malicious code, virus, malware, or other harmful material through the Platform.</li>
              <li>Interfere with or disrupt the security, operation, or availability of the Platform.</li>
              <li>Misuse, exploit, or attempt to circumvent any security or access controls implemented on the Platform.</li>
              <li>Use automated tools, bots, scrapers, or similar technologies to access or extract content from the Platform without prior written permission.</li>
              <li>Use the Platform in a manner that infringes the rights of Aumyaa or any third party.</li>
            </ul>
            <p>We reserve the right to take appropriate action where these restrictions are violated.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Intellectual Property</h2>
            <p>
              All content, materials, text, graphics, designs, software, trademarks, logos, service marks,
              and other intellectual property made available through the Platform are owned by or licensed
              to Aumyaa Consulting and Services LLP, its affiliates, or applicable third parties, unless
              otherwise stated.
            </p>
            <p>
              Nothing in these Terms grants you any ownership or other proprietary rights in the Platform or
              its content. Any rights not expressly granted under these Terms are reserved by Aumyaa or the
              respective rights holder.
            </p>
            <p>
              The Aumyaa name, logo, trademarks, and related branding may not be copied, modified,
              reproduced, distributed, or used without prior written permission from Aumyaa.
            </p>
            <p>
              References to third-party trademarks, logos, or brand names are for identification purposes
              only and do not imply endorsement, sponsorship, or affiliation unless expressly stated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Privacy and Data Protection</h2>
            <p>
              We are committed to protecting the privacy and security of personal information handled
              through the Platform. Our collection, use, processing, storage, and protection of personal
              information are governed by our Privacy Policy.
            </p>
            <p>
              By using the Platform, you acknowledge that your personal information may be handled in
              accordance with our Privacy Policy and applicable laws and regulations.
            </p>
            <p>
              For more information about how we handle personal information and your applicable privacy
              rights, please refer to our Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Termination of Access</h2>
            <p>
              Aumyaa may suspend, restrict, or terminate your access to the Platform, in whole or in part,
              where reasonably necessary, including where you:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Breach these Terms or any applicable policy;</li>
              <li>Engage in unlawful, fraudulent, abusive, or unauthorized activities;</li>
              <li>Create a security risk or otherwise interfere with the operation or security of the Platform; or</li>
              <li>Use the Platform in a manner that may harm Aumyaa, its users, or third parties.</li>
            </ul>
            <p>
              Where reasonably practicable, Aumyaa may provide notice before suspending or terminating
              access. However, immediate suspension or termination may be taken where necessary to protect
              the security, integrity, or availability of the Platform or to comply with applicable law.
            </p>
            <p>
              Termination or suspension of access will not affect any rights or obligations that are
              intended to survive termination.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">External Links</h2>
            <p>
              The Platform may contain links to websites, applications, or resources operated by third
              parties. These links are provided for convenience and informational purposes only.
            </p>
            <p>
              Aumyaa does not control or endorse third-party websites or resources and is not responsible
              for their content, availability, accuracy, security, or privacy practices. Your access to and
              use of any third-party website or resource is subject to the applicable terms and policies of
              that third party.
            </p>
            <p>
              We recommend reviewing the relevant terms of use and privacy policies before using any
              third-party website or resource.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Disclaimer and Limitation of Liability</h2>
            <p>
              The Platform and its content are provided on an "as is" and "as available" basis. To the
              maximum extent permitted by applicable law, Aumyaa does not warrant that the Platform or its
              content will always be accurate, complete, reliable, available, secure, or free from errors
              or interruptions.
            </p>
            <p>
              The content available on the Platform is provided for general informational purposes and
              should not be considered professional, legal, financial, tax, investment, or other specialized
              advice unless expressly stated otherwise.
            </p>
            <p>
              To the maximum extent permitted by applicable law, Aumyaa disclaims all warranties, express or
              implied, including warranties of merchantability, fitness for a particular purpose,
              non-infringement, title, and availability.
            </p>
            <p>
              To the maximum extent permitted by applicable law, Aumyaa will not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or for any loss of data, profits,
              revenue, business, or goodwill arising from or related to your access to or use of the
              Platform.
            </p>
            <p>
              Nothing in these Terms is intended to exclude or limit any liability that cannot be excluded
              or limited under applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Legal Validity</h2>
            <p>
              If any provision of these Terms is determined to be invalid, illegal, or unenforceable under
              applicable law, that provision shall be modified or limited to the minimum extent necessary to
              make it enforceable, where permitted by law. The remaining provisions of these Terms will
              continue in full force and effect.
            </p>
            <p>These Terms shall be governed by and interpreted in accordance with the applicable laws of India.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
