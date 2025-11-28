import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Coaching } from './pages/Coaching';
import { Training } from './pages/Training';
import { ExecutiveCoaching } from './pages/ExecutiveCoaching';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BusinessConsulting } from './pages/Consulting/BusinessConsulting';
import { TechnologyConsulting } from './pages/Consulting/TechnologyConsulting';
import { RiskAdvisory } from './pages/Consulting/RiskAdvisory';
import { ESGConsulting } from './pages/Consulting/ESGConsulting';
import { ComplianceServices } from './pages/Consulting/ComplianceServices';

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="h-6 bg-white"></div>
            <main className="flex-1">
              <About />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/careers" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="h-6 bg-white"></div>
            <main className="flex-1">
              <Careers />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="h-6 bg-white"></div>
            <main className="flex-1">
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/coaching" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="h-6 bg-white"></div>
            <main className="flex-1">
              <Coaching />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/training" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="h-6 bg-white"></div>
            <main className="flex-1">
              <Training />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/executive-coaching" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="h-6 bg-white"></div>
            <main className="flex-1">
              <ExecutiveCoaching />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/consulting/business-consulting" element={<BusinessConsulting />} />
        <Route path="/consulting/tech-consulting" element={<TechnologyConsulting />} />
        <Route path="/consulting/risk-consulting" element={<RiskAdvisory />} />
        <Route path="/consulting/esg-consulting" element={<ESGConsulting />} />
        <Route path="/consulting/compliance-services" element={<ComplianceServices />} />
      </Routes>
    </Router>
  );
};

export default App;