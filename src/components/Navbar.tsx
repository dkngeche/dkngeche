import React, { useState } from 'react';
import { PageType } from '../types';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenSeoInspector: () => void;
}

export function Navbar({ currentPage, onNavigate, onOpenSeoInspector }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string; number: string }[] = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'services', label: 'What I Do', number: '02' },
    { id: 'insights', label: 'Insights', number: '03' },
    { id: 'pricing', label: 'Work With Me', number: '04' },
    { id: 'work', label: 'My Work', number: '05' },
    { id: 'about', label: 'About', number: '06' },
    { id: 'contact', label: 'Contact', number: '07' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#070D18]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Personal Brand Identity */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex flex-col justify-center text-left group focus:outline-none py-1"
            aria-label="Dngeche Homepage"
          >
            <div className="flex items-center gap-2">
              <span className="font-signature text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#F5F6F8] group-hover:text-[#C5A358] transition-colors leading-none tracking-normal select-none">
                Dngeche
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A358] -mt-1"></span>
            </div>
            <span className="text-[9px] sm:text-[9.5px] tracking-[0.22em] uppercase font-mono text-white/50 group-hover:text-white/80 transition-colors -mt-0.5">
              Digital Strategy &amp; Growth
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all relative flex items-center gap-1.5 rounded-lg ${
                    isActive
                      ? 'text-[#F5F6F8] font-semibold bg-[#162234] border border-white/10 shadow-inner'
                      : 'text-white/65 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#C5A358]' : 'text-white/30'}`}>
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C5A358] rounded-full shadow-[0_0_8px_rgba(197,163,88,0.6)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live SEO Schema / Architecture Inspector */}
            <button
              id="seo-inspector-btn"
              onClick={onOpenSeoInspector}
              title="Inspect SEO Architecture & Schema.org Graph"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-white/70 bg-[#0B1626] hover:bg-[#162234] hover:text-white border border-white/10 rounded-lg transition-colors shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A358]" />
              <span>SEO Architecture</span>
            </button>

            {/* High-conversion CTA Button */}
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs uppercase tracking-widest font-bold text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-md group active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-seo-btn"
              onClick={onOpenSeoInspector}
              aria-label="Inspect SEO Architecture"
              className="p-2 text-white/70 hover:text-white rounded-lg bg-[#0B1626] border border-white/10"
            >
              <ShieldCheck className="w-4 h-4 text-[#C5A358]" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.06] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#F5F6F8]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#070D18] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 text-xs uppercase tracking-wider rounded-lg text-left ${
                  isActive
                    ? 'bg-[#162234] text-white font-semibold border-l-2 border-[#C5A358]'
                    : 'text-white/65 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#C5A358]">{item.number}</span>
                  <span>{item.label}</span>
                </div>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#C5A358]"></div>}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              id="mobile-menu-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
