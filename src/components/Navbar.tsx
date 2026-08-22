import { useState } from 'react';
import { PageType } from '../types';
import { Menu, X, ArrowUpRight, ShieldCheck, Compass } from 'lucide-react';

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
    { id: 'pricing', label: 'Pricing', number: '03' },
    { id: 'work', label: 'My Work', number: '04' },
    { id: 'about', label: 'About', number: '05' },
    { id: 'contact', label: 'Contact', number: '06' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Identity */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left group focus:outline-none"
            aria-label="Dickson Ngeche Homepage"
          >
            <span className="font-editorial text-2xl sm:text-2xl font-bold tracking-tight text-[#E8E8E8] group-hover:text-[#C5A358] transition-colors">
              Dickson Ngeche
            </span>
            <span className="text-[11px] tracking-widest uppercase font-medium text-white/50 flex items-center gap-1.5 mt-0.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A358]"></span>
              Digital Strategy &amp; SEO Consultant
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-colors relative flex items-center gap-2 rounded-md ${
                    isActive
                      ? 'text-white font-semibold bg-white/[0.08]'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span className="text-[10px] font-mono text-white/30">{item.number}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C5A358] rounded-full" />
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
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white/70 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 rounded-md transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A358]" />
              <span>SEO Architecture</span>
            </button>

            {/* Persistent CTA Button */}
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs uppercase tracking-widest font-bold text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-sm group"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-seo-btn"
              onClick={onOpenSeoInspector}
              aria-label="Inspect SEO Architecture"
              className="p-2 text-white/70 hover:text-white rounded-md bg-white/[0.04] border border-white/10"
            >
              <ShieldCheck className="w-4 h-4 text-[#C5A358]" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/[0.06] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0A0A0A] px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-3 text-sm uppercase tracking-wider rounded-md text-left ${
                  isActive
                    ? 'bg-white/[0.08] text-white font-semibold'
                    : 'text-white/60 hover:bg-white/[0.03] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/30">{item.number}</span>
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
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
