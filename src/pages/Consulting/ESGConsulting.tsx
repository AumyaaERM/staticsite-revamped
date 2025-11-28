import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ServiceCard } from './components/ServiceCard';
import { ConsultingTestimonials } from './components/ConsultingTestimonials';

const heroImages = {
  topImage: '/images/consulting/esg-consulting/esg header.png',
  overlayImage: '/images/consulting/esg-consulting/esgtop1.png'
};

const services = [
  {
    title: 'Strategy',
    description: '',
    bullets: [
      'Developing ESG strategy with specific goals, KPIs, business plans, timelines.',
      'Strategize ESG data aggregation, analysis and monitoring.',
      'Develop and introduce sustainability brand to engage both internal and external stakeholders.',
      'Assessing maturity of the business in its ESG journey through gap analysis.',
      'Framing ESG policies and procedures.'
    ],
    image: '/images/consulting/esg-consulting/ess1.png'
  },
  {
    title: 'Materiality Assessment & Data Collection',
    description: '',
    bullets: [
      'Performance of materiality assessment.',
      "Mapping of materiality assessment to organization's strategy, targets, incentives, risk assessments and business opportunities.",
      'Setting out methodology and frequency for gathering data',
      'Assessing maturity of the business in its ESG journey through gap analysis.',
      'Integrate ESG data as a part of annual reporting cycle.'
    ],
    image: '/images/consulting/esg-consulting/ess2.png'
  },
  {
    title: 'Disclosure',
    description: '',
    bullets: [
      'Sustainability disclosures using an efficient reporting system with globally adopted sustainability standards such as, GRI, TCFD, SASB, CDP, etc.',
      'Business Responsibility and Sustainability Reporting (BRSR) preparation support and certification.',
      'Tool based sustainability reporting and analysis.'
    ],
    image: '/images/consulting/esg-consulting/ess3.png'
  },
  {
    title: 'Performance Improvement',
    description: '',
    bullets: [
      'Benchmarking using international indices such as DJSI, MSCI, FTSE Russell and Eco Vadis.',
      'Improvements through Life cycle Assessments',
      'Corporate environmental footprint.',
      'Product Environmental footprint.',
      'Value Chain Carbon Accounting.'
    ],
    image: '/images/consulting/esg-consulting/ess4.png'
  },
  {
    title: 'CSR Impact Assessment',
    description:
      'Corporate Social Responsibility (CSR) Impact Assessment helps the companies to understand tangible and intangible benefits of their CSR projects on the causes that they support. Aumyaa’s expertise in CSR and sustainability enables companies to operate responsibly, benefiting society and the environment. Aumyaa’s experienced consultants offer customized CSR Impact Assessment services, creating long-term partnerships and successful CSR initiatives that enhances sustainability and corporate reputation.',
    
    image: '/images/consulting/esg-consulting/ess5.png'
  }
];

const esgIntroCopy = [
  'ESG reporting is gaining momentum and organizations are adopting it mandatorily as well as voluntarily. Adopting ESG represents a practical and far-sighted approach to risk management and governance. Acting now represents an investment that will likely increase operational efficiency, long term value creation, enhance brand value, higher return on investment and strengthen relationships with stakeholders. organizations can drive strategic action based on better ESG intelligence, and capture new opportunities.',
  'We at Aumyaa, with unique combination of consulting, technology and software, are dedicated towards enabling organizations to adopt effective systems to mainstream ESG practices based on international frameworks/ standards. Our diverse ESG offerings range from sustainability strategy, reporting, risk assessment, assurance, low carbon footprint, sustainable supply chain, etc.'
];

const esgTestimonials = {
  backgroundImage: '/images/testimonialbg.png',
  testimonials: [
    {
      quote:
        'Their consulting approach helped us identify key ESG gaps and implement measures that significantly improved our sustainability metrics',
      author: 'Client',
      role: 'ESG Consulting Engagement',
      openQuoteIcon: '“',
      closeQuoteIcon: '”'
    },
    {
      quote:
        'The ESG training conducted by Aumyaa Consulting Services was insightful and practical',
      author: 'Training Participant',
      role: 'ESG Awareness Session',
      openQuoteIcon: '❝',
      closeQuoteIcon: '❞'
    }
  ]
};

export const ESGConsulting: React.FC = () => (
  <div className="bg-[#f6f5f1] min-h-screen">
    <Navbar />
    <section className="w-full my-5">
      <img src={heroImages.topImage} alt="ESG bulb" className="w-full max-h-[480px] object-cover" />
    </section>
    <section
      className="relative py-16 px-4 text-white"
      style={{
        backgroundImage: `url(${heroImages.overlayImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-6xl mx-auto space-y-6 ">
        <div className='text-center'>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FCD421]" style={{fontFamily: 'Days One, sans-serif',}}>ESG Consulting</h1>
          <p className="text-2xl md:text-3xl text-[#a5d68f] mt-2">Greener Practices, Sustainable Growth</p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed">
          {esgIntroCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
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
    <ConsultingTestimonials {...esgTestimonials} />
    <Footer />
  </div>
);



