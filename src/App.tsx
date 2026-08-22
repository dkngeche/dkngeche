import { useState, useEffect } from 'react';
import { PageType, CaseStudy } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';
import { SeoInspectorModal } from './components/SeoInspectorModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HomePage } from './pages/HomePage';
import { WhatIDoPage } from './pages/WhatIDoPage';
import { PricingPage } from './pages/PricingPage';
import { MyWorkPage } from './pages/MyWorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CASE_STUDIES } from './data/caseStudies';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isSeoInspectorOpen, setIsSeoInspectorOpen] = useState(false);

  // Sync with browser hash on initial load & hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('work/')) {
        const slug = hash.replace('work/', '');
        const study = CASE_STUDIES.find(s => s.slug === slug || s.id === slug);
        if (study) {
          setSelectedCaseStudy(study);
          setCurrentPage('work');
          return;
        }
      }

      if (['home', 'services', 'pricing', 'work', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageType);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E8E8E8] antialiased selection:bg-[#C5A358]/30 selection:text-[#FFFFFF]">
      {/* Dynamic SEO Meta Manager & Schema.org JSON-LD Injector */}
      <SeoHead page={currentPage} caseStudy={selectedCaseStudy} />

      {/* Primary Sticky Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSeoInspector={() => setIsSeoInspectorOpen(true)}
      />

      {/* Main Content Area with Semantic Landmark */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        )}

        {currentPage === 'services' && (
          <WhatIDoPage onNavigate={navigateTo} />
        )}

        {currentPage === 'pricing' && (
          <PricingPage onNavigate={navigateTo} />
        )}

        {currentPage === 'work' && (
          <MyWorkPage
            onNavigate={navigateTo}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Case Study Deep-Dive Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={handleCloseCaseStudy}
          onNavigateToContact={() => {
            handleCloseCaseStudy();
            navigateTo('contact');
          }}
        />
      )}

      {/* Live SEO Schema & Architecture Inspector Modal */}
      <SeoInspectorModal
        isOpen={isSeoInspectorOpen}
        onClose={() => setIsSeoInspectorOpen(false)}
        currentPage={currentPage}
        currentCaseStudy={selectedCaseStudy}
      />

      {/* Strategic Consultancy Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenSeoInspector={() => setIsSeoInspectorOpen(true)}
      />
    </div>
  );
}
