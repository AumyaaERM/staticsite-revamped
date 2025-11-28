import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { HeroSection } from './components/HeroSection';
import { ServiceCard } from './components/ServiceCard';
import { ConsultingTestimonials } from './components/ConsultingTestimonials';

const heroContent = {
  title: 'Risk Advisory',
  subtitle: 'Proactive solutions for a risk-free journey',
  description: 'We pair smart planning with pragmatic controls so you can scale with confidence.',
  image: '/images/consulting/risk-consulting/ra1.png'
};

const services = [
  {
    title: 'Internal Controls',
    description:
      'We work with business and IT to manage uncertainty, enhance resilience and create value SOC, SOX & IT audit.',
    bullets: [
      'Control optimization and Automation',
      'Agile and smart Process and control design and Implementation',
      'Control compliance and reporting.',
      'Integrated control management design',
      'Implementation and monitoring support.'
    ],
    image: '/images/consulting/risk-consulting/ra2.png'
  },
  {
    title: 'Business Continuity & Resilience Advisory',
    description:
      'We work with our clients to implement an integrated comprehensive crisis management system with effective and responsive mechanisms to maintain performance, stability and sustenance of business.',
    bullets: [
      'Strategy and solution design through leverage of technology',
      'Project management of resilience programme',
      'Supporting execution of resilience programme',
      'Monitoring and audit'
    ],
    image: '/images/consulting/risk-consulting/ra3.png'
  },
  {
    title: 'Continuous Control Monitoring',
    description:
      'We provide advisory for continuous risk management and enable transformation with continuous control monitoring solutions aligned with business strategy. We work with client to neutralize risks through effective control mechanisms of day to day operations, IT solutions and cyber security.',
    bullets: ['Continuous control framework design', 'Continuous control monitoring'],
    image: '/images/consulting/risk-consulting/attachment (1) 3-1.svg'
  }
];

const riskTestimonials = {
  backgroundImage: '/images/testimonialbg.png',
  testimonials: [
    {
      quote:
        'Our partnership with Aumyaa Consulting Services has significantly strengthened our capabilities in ITGC and audit trail solutions.',
      author: 'Partner',
      role: 'Business Advisory Services, Leading Global Consulting Firm',
      openQuoteIcon: '“',
      closeQuoteIcon: '”'
    },
    {
      quote:
        'Aumyaa’s expertise has strengthened our compliance posture and operational effective.',
      author: 'Controller',
      role: 'Leading Manufacturing Company in India',
      openQuoteIcon: '❝',
      closeQuoteIcon: '❞'
    }
  ]
};

export const RiskAdvisory: React.FC = () => (
  <div className="bg-[#f7f5f2] min-h-screen">
    <Navbar />
    <HeroSection heroContent={heroContent} />
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <div className="text-center">
        <h2
          className="text-4xl font-bold text-black mt-2"
          style={{ fontFamily: 'Days One, sans-serif' }}
        >
          Our Services
        </h2>
      </div>
      <div className="space-y-12">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
    <ConsultingTestimonials {...riskTestimonials} />
    <Footer />
  </div>
);



