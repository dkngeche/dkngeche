import { PageType } from '../types';
import { ArrowUpRight, Mail, MapPin, Linkedin, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenSeoInspector: () => void;
}

export function Footer({ onNavigate, onOpenSeoInspector }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#E8E8E8] border-t border-white/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Transformation Mantra Banner */}
        <div className="pb-14 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#C5A358]/10 border border-[#C5A358]/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358] animate-pulse"></span>
                <span>The Central Philosophy</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#E8E8E8] font-normal leading-tight">
                “I help businesses turn ideas into digital strategies that get <span className="text-[#C5A358] italic">seen</span>, <span className="text-[#C5A358] italic">understood</span> and <span className="text-[#C5A358] italic">remembered</span>.”
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/60 max-w-2xl">
                From shaping the business proposition to making it discoverable to the people who make purchasing and partnering decisions.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:items-end">
              <button
                id="footer-talk-cta"
                onClick={() => handleNav('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A358] text-black hover:bg-[#D4B46A] font-bold text-xs uppercase tracking-widest rounded-md transition-all group shadow-sm"
              >
                <span>Let's Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <div className="text-xs text-white/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Currently booking Q2/Q3 strategic advisory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Identity & Scope */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-editorial text-2xl font-bold text-[#E8E8E8] tracking-tight">
              Dickson Ngeche
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Independent Digital Strategy &amp; SEO Consultant. Specialising in turning business visions into structured digital propositions, high-authority organic search visibility, and measurable commercial growth.
            </p>
            <div className="pt-2 text-xs text-white/60 space-y-1.5">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-[#C5A358]" />
                <span>Nairobi, Kenya &bull; Global Remote Advisory</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-3.5 h-3.5 text-[#C5A358]" />
                <a href="mailto:dkngeche@gmail.com" className="hover:text-[#C5A358] transition-colors underline decoration-dotted">
                  dkngeche@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C5A358]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">01</span> Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">02</span> What I Do (Capabilities &amp; Journey)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">03</span> Pricing &amp; Engagements
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">04</span> My Work (Case Studies &amp; Evidence)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">05</span> About &amp; Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">06</span> Contact &amp; Consultations
                </button>
              </li>
            </ul>
          </div>

          {/* Strategic Pillars */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C5A358]">
              Core Specialisations
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]"></span>
                <span className="text-white/90">Digital Strategy &amp; Growth Roadmaps</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]"></span>
                <span className="text-white/90">Technical SEO &amp; Organic Search Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]"></span>
                <span className="text-white/90">Digital Value Proposition &amp; CX Positioning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]"></span>
                <span className="text-white/90">Search Intent Content &amp; Topical Authority</span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                id="footer-seo-inspect-btn"
                onClick={onOpenSeoInspector}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs text-white/80 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 rounded transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-[#C5A358]" />
                <span>View Live SEO Schema &amp; Architecture Audit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <p>
            &copy; {currentYear} Dickson Ngeche. All rights reserved. Specialist Digital Strategy &amp; SEO Advisory.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400/90">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Semantic HTML5 &bull; Schema.org Verified</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
