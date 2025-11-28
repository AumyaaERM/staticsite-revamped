import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { HeroSection } from './components/HeroSection';
import { ServiceCard } from './components/ServiceCard';

const heroContent = {
  title: 'Business Consulting',
  subtitle: 'Empowering your vision, elevating your business',
  description: 'Explore how we help you navigate change and thrive.',
  image: '/images/consulting/business-consulting/bc1.png'
};

const services = [
  {
    title: 'Customer Journey Mapping-in the Digital World',
    description:
      'Customer journey mapping has proven to be a great exercise to assess customer touch points and experiences from a their point of view. These incredibly insightful maps provide a baseline by which improvement strategies are identified, prioritized and implemented.',
    bullets: [
      'Journey Definition / Scoping',
      'Persona Development',
      'Initial Map Creation',
      'Brainstorming / Idea Generation',
      'Evaluation and Exploration',
      'New Experience Design'
    ],
    image: '/images/consulting/business-consulting/bc2.png'
  },
  {
    title: 'Program & Project Management',
    description:
      'Our Program & Project Management services focus on driving effective governance of strategic initiatives and delivery of programs and projects in a high quality and efficient manner.',
    bullets: [
      'Enterprise Program Management',
      'EPM Strategy, Portfolio Management, PMO and PgMO, Met..',
      'Complex and large program management',
      'Project Management',
      'Recovery of programs and projects',
      'New Experience Design'
    ],
    image: '/images/consulting/business-consulting/bc3.png'
  },
  {
    title: 'Operational Excellence',
    description:
      "Business processes are fundamental to a company's ability to perform at a high level and win in the marketplace. Technology can help. The right people are critical. Proper supporting structures are necessary. It's the processes that are the key mechanism by which businesses deliver value.",
    bullets: [
      'Process Capability Assessment',
      'Business Process Improvement',
      'Performance Measurement'
    ],
    image: '/images/consulting/business-consulting/bc4.png'
  },
  {
    title: 'Vendor Management',
    description:
      'Third party vendor play a significant role in current business environment. Effective Vendor management mechanism can result in overall growth of business by building competitive edge and bringing differentiated business solution. Vendor management from due diligence to monitoring aspect enable business to work successfully with extended enterprise and win in the marketplace. The right people ,process and effective technology are critical so as to get full value from third party vendor relationship.',
    bullets: [
      'Vendor assessment',
      'Vendor selection and onboarding',
      'Vendor Contract',
      'SLA monitoring and Audit',
      'Recovery of programs and projects',
      'New Experience Design'
    ],
    image: '/images/consulting/business-consulting/bc5.png'
  }
];



export const BusinessConsulting: React.FC = () => (
  <div className="bg-[#f7f5f2] min-h-screen">
    <Navbar />
    <HeroSection heroContent={heroContent}/>
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
      <div className="text-center">
        {/* <p className="text-yellow-500 uppercase tracking-[0.4em] text-sm">Empowering your business with clarity</p> */}
        <h2 className="text-4xl font-bold text-black mt-2" style={{fontFamily: 'Days One, sans-serif',}}>Our Services</h2>
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
    {/* <TestimonialsSection /> */}
    <Footer />
  </div>
);


