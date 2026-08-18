import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Coaching } from './pages/Coaching';
import { Training } from './pages/Training';
import { ExecutiveCoaching } from './pages/ExecutiveCoaching';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { CookiesPolicy } from './pages/policies/CookiesPolicy';
import { PrivacyPolicy } from './pages/policies/PrivacyPolicy';
import { TermsOfUse } from './pages/policies/TermsOfUse';
import { BusinessConsulting } from './pages/Consulting/BusinessConsulting';
import { TechnologyConsulting } from './pages/Consulting/TechnologyConsulting';
import { RiskAdvisory } from './pages/Consulting/RiskAdvisory';
import { ESGConsulting } from './pages/Consulting/ESGConsulting';
import { ComplianceServices } from './pages/Consulting/ComplianceServices';
import { InsightsPage } from './pages/insights/InsightsPage';
import { InsightDetailPage } from './pages/insights/InsightDetailPage';
import { DownloadsPage } from './pages/downloads/DownloadsPage';
import { initGA, usePageTracking } from './utils/analytics';
import DpdpCompliancePage from './pages/Consulting/DpdpCompliancePage';
import { Login } from './pages/Login';
import { Admin } from './pages/admin';
import AdminPostInsight from './pages/admin/AdminPostInsight';
import { AdminPostDownload } from './pages/admin/AdminPostDownload';
import { RequireAuth } from './components/RequireAuth';
import { DPDP_FORM_URL, IS_DPDP_FORM_CONFIGURED } from './config/dpdpForm';

// Main App Component
const App: React.FC = () => {
  // Initialize Google Analytics on app load
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <PageTracker />
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
        <Route path="/consulting/dpdp-compliance" element={<DpdpCompliancePage />} />
        <Route path="/consulting/dpdp-compliance/assessment" element={<DpdpAssessmentRedirect />} />
        {/* ── INSIGHTS ── */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightDetailPage />} />
        {/* ── LOGIN ── */}
        <Route path="/login" element={<Login />} />
        {/* ── ADMIN ── */}
        <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
        <Route path="/admin/post-insight" element={<RequireAuth><AdminPostInsight /></RequireAuth>} />
        {/* ── DOWNLOADS ── */}
        <Route path="/admin/post-download" element={<RequireAuth><AdminPostDownload /></RequireAuth>} />
        <Route path="/downloads" element={<DownloadsPage />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
      </Routes>
      {/* Cookie Consent Banner - appears on all pages */}
      <CookieConsent />
    </Router>
  );
};

// Component to track page views
const PageTracker: React.FC = () => {
  usePageTracking();
  return null;
};

const DpdpAssessmentRedirect: React.FC = () => {
  useEffect(() => {
    window.location.replace(DPDP_FORM_URL);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 pt-32 text-center">
        <p className="text-sm text-gray-600">
          {IS_DPDP_FORM_CONFIGURED
            ? 'Redirecting you to the DPDP assessment form...'
            : 'Redirecting you to DPDP compliance services...'}
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default App;