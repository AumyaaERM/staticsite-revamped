import React from 'react';
import { Send, Facebook, Linkedin, Instagram } from 'lucide-react';
import { RegHubLogo } from '../RegHubLogo';

export const RegHubFooter: React.FC = () => {
  return (
    <footer className="bg-[#FCD421] px-4 sm:px-6 md:px-12 py-10 md:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <RegHubLogo height={42} />
          <p className="text-xs text-black/70 mt-3">An AI-assisted information service</p>
        </div>

        <FooterColumn title="Services">
          <FooterLink href="#regulatory-news">Regulatory News</FooterLink>
          <FooterLink href="#ai-chat">AI Chat</FooterLink>
          <FooterLink href="#action-centre">Risk Advisory</FooterLink>
          <FooterLink href="#checklist-generator">Checklist Generator</FooterLink>
        </FooterColumn>

        <FooterColumn title="Company">
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/careers">Career</FooterLink>
        </FooterColumn>

        <FooterColumn title="Contact Us">
          <li className="text-sm text-black/80">01204544295</li>
          <li>
            <a href="mailto:contact@aumyaa.com" className="text-sm text-black/80 hover:underline">
              contact@aumyaa.com
            </a>
          </li>
          <FooterLink href="https://www.yuktiarora.in/" external>
            Blogs ↗
          </FooterLink>
          <FooterLink href="https://www.instagram.com/aumyaa_training" external>
            Instagram ↗
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/company/aumyaaconsultingservicesllp/" external>
            LinkedIn ↗
          </FooterLink>
        </FooterColumn>

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="font-bold text-sm mb-3 text-black">Headquarter</h4>
          <p className="text-sm text-black/80 leading-relaxed">
            Aumyaa consulting services LLP
            <br />
            Corporate office:
            <br />
            2414, 4th floor, Express trade tower 2
            <br />
            B36, Sector 132, Noida
            <br />
            Uttar Pradesh, India- 201301
          </p>
          <p className="text-sm text-black/80 mt-2">10am—6pm</p>
        </div>
      </div>

      <div className="border-t border-black/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs sm:text-sm text-black/80 text-center sm:text-left">
          © 2025 Aumyaa RegHub. All rights reserved. | Privacy | Cookies
        </p>

        <div className="flex gap-3">
          <SocialIcon href="https://t.me/">
            <Send className="w-4 h-4" />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/">
            <Facebook className="w-4 h-4" />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/company/aumyaaconsultingservicesllp/">
            <Linkedin className="w-4 h-4" />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/aumyaa_training">
            <Instagram className="w-4 h-4" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h4 className="font-bold text-sm mb-3 text-black">{title}</h4>
    <ul className="space-y-2">{children}</ul>
  </div>
);

const FooterLink: React.FC<{ href: string; external?: boolean; children: React.ReactNode }> = ({
  href,
  external,
  children,
}) => (
  <li>
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-sm text-black/80 hover:underline"
    >
      {children}
    </a>
  </li>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-[#FCD421] transition-colors"
  >
    {children}
  </a>
);
