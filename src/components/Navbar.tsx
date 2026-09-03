import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenSeoInspector: () => void;
}

export function Navbar({ currentPage, onNavigate, onOpenSeoInspector }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems: { id: PageType; label: string; number: string }[] = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'services', label: 'What I Do', number: '02' },
    { id: 'work', label: 'My Work', number: '03' },
    { id: 'insights', label: 'Insights', number: '04' },
    { id: 'pricing', label: 'Work With Me', number: '05' },
    { id: 'about', label: 'About', number: '06' },
    { id: 'contact', label: 'Contact', number: '07' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#070D18]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl'
            : 'bg-transparent border-b border-white/[0.04] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand / Logo */}
            <button
              id="nav-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex flex-col justify-center text-left group focus:outline-none py-1"
              aria-label="Dickson Ngeche Homepage"
              data-cursor="magnetic"
            >
              <div className="flex items-center gap-2">
                <span className="font-signature text-3xl sm:text-4xl text-[#F5F6F8] group-hover:text-[#C5A358] transition-colors leading-none tracking-normal select-none">
                  Dngeche
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A358] -mt-1" />
              </div>
              <span className="text-[9px] sm:text-[9.5px] tracking-[0.22em] uppercase font-mono text-white/50 group-hover:text-white/80 transition-colors -mt-0.5">
                Digital Strategy &amp; SEO Consultant
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-[0.14em] font-medium transition-all relative flex items-center gap-1.5 rounded-lg group ${
                      isActive
                        ? 'text-[#F5F6F8] font-semibold bg-[#162234]/80 border border-white/10'
                        : 'text-white/65 hover:text-white hover:bg-white/[0.04]'
                    }`}
                    data-cursor="magnetic"
                  >
                    <span className={`text-[10px] font-mono transition-colors ${isActive ? 'text-[#C5A358]' : 'text-white/30 group-hover:text-white/60'}`}>
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#C5A358] rounded-full shadow-[0_0_8px_rgba(197,163,88,0.6)]"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Live SEO Schema & Architecture Inspector */}
              <button
                id="seo-inspector-btn"
                onClick={onOpenSeoInspector}
                title="Inspect Live SEO Architecture & Schema.org Graph"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-white/70 bg-[#0B1626] hover:bg-[#162234] hover:text-white border border-white/10 rounded-lg transition-colors shadow-sm"
                data-cursor="magnetic"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A358]" />
                <span>SEO Architecture</span>
              </button>

              {/* High-conversion "Let's Talk" CTA */}
              <button
                id="header-cta-btn"
                onClick={() => handleNavClick('contact')}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-bold text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-[0_4px_15px_rgba(197,163,88,0.25)] hover:shadow-[0_8px_25px_rgba(197,163,88,0.35)] active:scale-[0.98]"
                data-cursor="magnetic"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Trigger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-3.5 py-1.5 text-xs uppercase tracking-wider font-bold text-[#070D18] bg-[#C5A358] rounded-md sm:hidden"
              >
                Talk
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg border border-white/10"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A358]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#070D18]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex flex-col">
                <span className="font-signature text-3xl text-[#F5F6F8]">Dngeche</span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">
                  Digital Strategy &amp; SEO
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white bg-white/5 rounded-lg border border-white/10"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#C5A358]" />
              </button>
            </div>

            {/* Mobile Nav Links - Large Editorial Typography */}
            <nav className="py-8 space-y-3" aria-label="Mobile Navigation">
              {navItems.map((item, idx) => {
                const isActive = currentPage === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.25 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left py-2.5 flex items-center justify-between group border-b border-white/[0.04] ${
                      isActive ? 'text-[#C5A358]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono text-white/30">{item.number}</span>
                      <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isActive ? 'text-[#C5A358]' : 'text-white/20 group-hover:text-white'
                    }`} />
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile Footer & Quick Actions */}
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-widest font-bold text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md shadow-lg"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSeoInspector();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono text-white/80 bg-[#162234] border border-white/10 rounded-md"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C5A358]" />
                  <span>Inspect SEO Graph</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-white/40 text-center">
                Dickson Ngeche &bull; Independent Digital Strategy &bull; Nairobi &amp; Remote
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
