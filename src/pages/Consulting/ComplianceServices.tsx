import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ServiceCard } from './components/ServiceCard';
import { Phone } from 'lucide-react';

const heroImage = '/images/consulting/compliance-services/comp1.png';

const expertiseAreas = [
  {
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate compliance risks across your organization.',
    icon: '/images/consulting/compliance-services/risk management.png'
  },
  {
    title: 'Documentation & Processes',
    description:
      'Detailed compliance documentation and standard operating procedures tailored to your industry.',
    icon: '/images/consulting/compliance-services/Documentation.png'
  },
  {
    title: 'Regulatory Experience',
    description:
      'Ongoing optimization of compliance programs for maximum effectiveness and efficiency.',
    icon: '/images/consulting/compliance-services/Improvement.png'
  }
];

const serviceCards = [
  {
    title: 'Compliance risk Assessment and Testing',
    bullets: [
      'Framing Compliance Policy',
      'Develop Compliance Testing Plan',
      'Assist with compliance testing and risk assessment per policy and plan',
      'Prepare and submit testing and assessment report',
      'Support implementation of compliance testing'
    ],
    image: '/images/consulting/compliance-services/comp2.png'
  },
  {
    title: 'Compliance Assessment Services',
    bullets: [
      'Review adequacy of compliance framework, policies, governance, and reporting.',
      'Identify applicable laws, regulations, circulars, and directions.',
      'Assess compliance monitoring process and tools used.',
      'Review tool management: access, changes, training, third-party control, archiving.',
      'Check compliance reporting to senior management.',
      'Verify timely submission of RBI returns.',
      'Review policies for alignment with RBI directions.',
      'Check committee composition, meetings, and minutes.',
      'Review statutory training programs.'
    ],
    image: '/images/consulting/compliance-services/comp3.png'
  },
  {
    title: 'Secretarial services',
    bullets: [
      'Review or prepare secretarial documents',
      'Assist with ROC filings.',
      'Prepare statutory agenda MIS as per RBI and MCA requirements.',
      'Manage or review transactions for issuing NCDs, Commercial Papers per SEBI/RBI/ROC rules.'
    ],
    image: '/images/consulting/compliance-services/comp4.png'
  },
  {
    title: 'Vendor or Third Party Management',
    bullets: [
      'Review third-party agreements per outsourcing guidelines.',
      'Perform vendor risk assessment.',
      'Ensure legal compliance during vendor onboarding and reviews.',
      'Periodic DD check or assist'
    ],
    image: '/images/consulting/compliance-services/comp5.png'
  },
  {
    title: 'Governance Guidelines of RBI',
    bullets: [
      'Frame internal corporate governance guidelines.',
      'Constitute committees as per RBI guidelines.',
      "Ensure directors/ KMP appointments and  'Fit and Proper' criteria check",
      'Follow RBI norms for KMP and senior management compensation.'
    ],
    image: '/images/consulting/compliance-services/comp6.png'
  },
  {
    title: 'Collection Agents Management',
    bullets: [
      'Check onboarding process of collection agents',
      "Review collection agents' agreements per outsourcing guidelines.",
      'Support onboarding and periodic review of agents.',
      'Help draft code of conduct for collection agents.',
      'Assist in training programs for collection agents.',
      'Check legal compliance by company and agents to protect customer interest.'
    ],
    image: '/images/consulting/compliance-services/comp7.png'
  },
  {
    title: 'RBI Inspection Preparation',
    bullets: [
      'Create MIS/checklist for RBI inspection points.',
      'Mock test as being RBI officer.',
      'Review compliance and secretarial data before submission to RBI.'
    ],
    image: '/images/consulting/compliance-services/comp8.png'
  },
  {
    title: 'Disclosure Requirement',
    bullets: [
      'Help company identify statutory premises and website disclosures.',
      'Assist in preparing comprehensive MIS for the same.',
      'Proving disclosure format for publication'
    ],
    image: '/images/consulting/compliance-services/comp9.png'
  },
  {
    title: 'Statutory Positions management',
    bullets: [
      'Help company fulfill statutory roles (Independent Director, CISO,  KMP etc.)'
    ],
    image: '/images/consulting/compliance-services/comp10.png'
  },
  {
    title: 'Policy Management',
    bullets: [
      'Prepare or review policies as per applicable law.',
      'Check company adherence to policies.',
      'Provide guidance on non-implemented statutory policies.',
      'Helping in implementation of non adherance of policy'
    ],
    image: '/images/consulting/compliance-services/comp2.png'
  },
  {
    title: 'Fair Practice code check',
    bullets: [
      'Process loan applications.',
      'Appraise loans and set terms; provide Key Facts Statement.',
      'Apply penal charges on loans.',
      'Disburse loans and manage term changes.',
      'Ensure responsible lending and release of property documents on repayment.',
      'Oversee BOD responsibilities.',
      'Follow RBI Integrated Ombudsman Scheme, 2021.',
      'Communicate Fair Practice Code clearly.',
      'Regulate complaints on excessive NBFC interest.',
      'Manage vehicle repossession by NBFCs.',
      'Provide loans to physically/visually challenged borrowers.'
    ],
    image: '/images/consulting/compliance-services/comp11.png'
  }
];

const frameworkIcon = '/images/consulting/compliance-services/image.png';

const frameworks = [
  { title: 'SOX (Sarbanes-Oxley)', description: 'Financial Compliance' },
  { title: 'GDPR', description: 'Data Privacy' },
  { title: 'CCPA', description: 'Data Privacy' },
  { title: 'PCI DSS', description: 'Payment Security' },
  { title: 'ISO 27001', description: 'Information Security' },
  { title: 'SOC 2', description: 'Security Controls' }
];


const ExpertiseCard: React.FC<
  (typeof expertiseAreas)[number] & { showDivider?: boolean }
> = ({ title, description, icon, showDivider = false }) => (
  <div className="relative flex flex-col items-center px-4 md:px-6">
    {showDivider && (
      <span className="hidden md:block absolute top-6 bottom-6 right-0 w-px bg-gradient-to-b from-[#fcd421] via-[#fcd421] to-transparent opacity-70" />
    )}
    <div className="text-black bg-white rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.08)] border border-[#f5edd1] p-8 text-center space-y-5 flex flex-col items-center">
      <div className="h-20 w-20 rounded-[26px] bg-gradient-to-b from-white via-[#fff6d4] to-[#ffe14d] border border-[#f7d352] shadow-[0_15px_30px_rgba(252,212,33,0.35)] flex items-center justify-center">
        {icon && <img src={icon} alt={title} className="h-12 w-12 object-contain" />}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const FrameworkCard: React.FC<(typeof frameworks)[number]> = ({ title, description }) => (
  <div className="bg-white border border-[#fdecb8] rounded-[28px] shadow-[0_18px_45px_rgba(0,0,0,0.08)] px-6 py-6 flex items-center justify-between gap-4">
    <div className='flex flex-col items-start'>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
    <div className="h-14 w-14 rounded-[18px] bg-[#fff8d6] border border-[#fbdc5c] shadow-[0_12px_20px_rgba(252,212,33,0.35)] flex items-center justify-center">
      <img src={frameworkIcon} alt="Framework icon" className="h-9 w-9 object-contain" />
    </div>
  </div>
);


export const ComplianceServices: React.FC = () => (
  <div className="bg-[#f7f5f0] min-h-screen">
    <Navbar />
    <section className="w-full my-8">
      <img src={heroImage} alt="Compliance hero" className="w-full max-h-[460px] object-cover" />
    </section>
    <section className="bg-[#fcd421] text-center py-12 px-4 space-y-6">
      <span className="uppercase text-sm font-semibold tracking-[0.35em] text-black/80">
        Trusted Compliance Partner
      </span>
      <h1 style={{fontFamily: 'Days One, sans-serif',}} className="text-3xl md:text-4xl font-bold text-black">
        Navigate Complex Compliance with Confidence
      </h1>
      <p className="max-w-3xl mx-auto text-black text-lg">
        Expert consulting services to ensure your organization meets regulatory requirements, mitigates
        risks, and maintains the highest standards of compliance across all operations
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/contact" className="bg-white px-8 py-3 rounded-[18px] font-semibold flex items-center gap-3 shadow-[0_12px_24px_rgba(0,0,0,0.25)] no-underline hover:opacity-90" style={{ color: '#f5c000' }}>
          Schedule Consultation <Phone className="h-5 w-5 text-[#fcd421]" />
        </Link>
        <button className="bg-white text-[#f5c000] px-8 py-3 rounded-[18px] font-semibold shadow-[0_12px_24px_rgba(255,255,255,0.6)] border border-white flex items-center gap-3">
          Download Compliance Guide
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f5c000">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v10m0 0l-4-4m4 4l4-4M5 19h14" />
          </svg>
        </button>
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-3">
        <h2 style={{fontFamily: 'Days One, sans-serif',}} className="text-4xl font-bold text-black">Our Areas of Expertise</h2>
        <p className="text-gray-600">
          Deep industry knowledge across multiple sectors and regulatory environments
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 md:gap-2">
        {expertiseAreas.map((area, index) => (
          <ExpertiseCard
            key={area.title}
            {...area}
            showDivider={index < expertiseAreas.length - 1}
          />
        ))}
      </div>
      <div className="space-4 text-center">
        <h2
          className="text-4xl font-bold text-black mt-2"
          style={{ fontFamily: 'Days One, sans-serif' }}
        >
          Our Services
        </h2>
        <p className="text-gray-600">
          From initial assessment to ongoing monitoring, we provide end-to-end compliance solutions tailored to your
          industry and organizational needs.
        </p>
      </div>
      <div className="grid gap-8">
        {serviceCards.map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            {...service}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
      <div className="space-y-4 text-center">
        <h2
          className="text-4xl font-bold text-black"
          style={{ fontFamily: 'Days One, sans-serif' }}
        >
          Regulatory Frameworks We Support
        </h2>
        <p className="text-gray-600">
          Comprehensive coverage of major regulatory standards and compliance frameworks
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {frameworks.map((framework) => (
            <FrameworkCard key={framework.title} {...framework} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);



