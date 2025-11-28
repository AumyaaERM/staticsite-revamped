import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { HeroSection } from './components/HeroSection';
import { ServiceCard } from './components/ServiceCard';
import { ConsultingTestimonials } from './components/ConsultingTestimonials';

const heroContent = {
  title: 'Technology Consulting',
  subtitle: 'Pioneering digital transformation for businesses like yours',
  description: 'We partner with you to convert bold ideas into connected, intelligent enterprises.',
  image: '/images/consulting/technology-consulting/tc1.png'
};

const serviceGroups = [
  {
    title: 'Process Design & Automation',
    description:
      'We drive process improvement initiatives based on business value and organizational readiness. We drive process optimization, process performance improvement, process rules management and automation with emerging technologies.',
    bullets: [
      'Business Process Re-engineering & Re-design',
      'Business process management',
      'Workflows automation',
      'Low code/No-code automation',
      'Robotics Process Automation (RPA)'
    ],
    image: '/images/consulting/technology-consulting/tc2.png'
  },
  {
    title: 'Automation Management Services',
    description:
      'We support every stage of your automation journey right from automation assessment to process understanding to automation support and overall automation program management.',
    bullets: [
      'Project management of custom applications, products, ERP.',
      'IT Vendor evaluation',
      'Product Management',
      'Software Development Methodologies',
      'Selection and application',
      'Workflow Designs, Testing Services'
    ],
    image: '/images/consulting/technology-consulting/tc3.png'
  },
  {
    title: 'IT Strategy',
    description:
      'We work with leadership and IT teams to identify the roles of technology in a business strategy, the capabilities IT can provide and how the IT organization needs to be managed to deliver its commitments. We work with our clients to understand ROI that can be leveraged from current and leading technologies.',
    bullets: [
      'Business & IT alignment',
      'IT Leadership & Management',
      'IT Transformation',
      'Transition to newer optimal Solutions'
    ],
    image: '/images/consulting/technology-consulting/tc4.png'
  },
  {
    title: 'Data Management',
    description:
      'We work with business and IT to harness your data to drive business insights, automation, process improvement and innovation.',
    bullets: [
      'Data Governance',
      'Data Privacy',
      'Data Analytics',
      'Masters Management',
      'Data Migration'
    ],
    image: '/images/consulting/technology-consulting/tc5.png'
  },
  {
    title: 'Digital Transformation',
    description:
      'We work with business and IT to enable foundational change in how an organization delivers value to its customers. This includes radical rethinking of how an organization uses technology, people and processes to fundamentally change business performance.',
    bullets: ['Digital Strategy', 'Digital Journey Mapping', 'Analytics'],
    image: '/images/consulting/technology-consulting/tc6.png'
  },
  {
    title: 'Enterprise Collaboration',
    description:
      'We work with business leadership and IT to define and implement a holistic strategy to provide a strong foundation for creating a modern digital workplace – enabling team members to work together better.',
    bullets: [],
    image: '/images/consulting/technology-consulting/tc7.png'
  }
];

const technologyTestimonials = {
  backgroundImage: '/images/testimonialbg.png',
  testimonials: [
    {
      quote:
        'Aumyaa’s diverse team demonstrated a deep understanding of our complex business processes, designing and implementing a comprehensive SOD rule book for 40 applications.',
      author: 'VP',
      role: 'Application, Largest Technology Company in India',
      openQuoteIcon: '❝',
      closeQuoteIcon: '❞'
    },
    {
      quote:
        'Aumyaa’s proactive approach and technical expertise have been invaluable in improving our operational resilience and compliance readiness.',
      author: 'Senior Manager',
      role: 'BFSI Sector',
      openQuoteIcon: '❝',
      closeQuoteIcon: '❞'
    }
  ]
};

export const TechnologyConsulting: React.FC = () => (
  <div className="bg-[#f9f7f2] min-h-screen">
    <Navbar />
    <HeroSection heroContent={heroContent} />
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black mt-2" style={{ fontFamily: 'Days One, sans-serif' }}>
          Our Services
        </h2>
      </div>
      <div className="space-y-12">
        {serviceGroups.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
    <ConsultingTestimonials {...technologyTestimonials} />
    <Footer />
  </div>
);



