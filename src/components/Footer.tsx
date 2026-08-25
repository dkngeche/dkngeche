import React from 'react';
import { PageType } from '../types';
import { ArrowUpRight, Mail, MapPin, Linkedin, Globe, ShieldCheck, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

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
    <footer className="bg-[#050911] text-[#E8E8E8] border-t border-white/[0.08] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Transformation Mantra Banner */}
        <div className="pb-14 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#0B1626] border border-[#C5A358]/30 mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358] animate-pulse"></span>
                <span>The Core Foundation</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F5F6F8] font-normal leading-tight">
                “I help businesses build <span className="text-[#C5A358] italic font-semibold">stronger digital foundations</span>, establish <span className="text-[#C5A358] italic font-semibold">credible online brands</span>, and turn digital presence into a <span className="text-[#C5A358] italic font-semibold">growth asset</span>.”
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
                From formulating commercial strategy and modern web architecture to organic search dominance and brand positioning.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:items-end">
              <button
                id="footer-talk-cta"
                onClick={() => handleNav('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A358] text-[#070D18] hover:bg-[#D4B46A] font-bold text-xs uppercase tracking-widest rounded-md transition-all group shadow-md"
              >
                <span>Let's Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <div className="text-xs text-white/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Accepting selective strategic advisory retainers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Identity & Scope */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left group focus:outline-none block"
            >
              <div className="font-signature text-3xl sm:text-4xl font-normal text-[#F5F6F8] group-hover:text-[#C5A358] tracking-normal transition-colors select-none">
                Dngeche
              </div>
            </button>
            <p className="text-sm text-white/65 leading-relaxed max-w-sm">
              Independent Digital Strategy &amp; Growth Consultant. Partnering with forward-thinking enterprises, civil society federations, and leaders across Africa and globally.
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
            <ul className="space-y-2 text-sm">
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
                  <span className="font-mono text-xs text-white/30">02</span> What I Do (4 Pillars)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('insights')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">03</span> Insights &amp; Perspectives
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">04</span> Work With Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">05</span> My Work (Case Studies)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">06</span> About &amp; Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-white/70 hover:text-[#C5A358] transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-xs text-white/30">07</span> Contact &amp; Consultations
                </button>
              </li>
            </ul>
          </div>

          {/* Strategic Pillars */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C5A358]">
              4 Core Strategic Pillars
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="font-mono text-[#C5A358] text-[11px]">01</span>
                <span className="text-white/90">Digital Strategy &amp; Growth</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-[#C5A358] text-[11px]">02</span>
                <span className="text-white/90">Web Strategy &amp; Digital Experience</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-[#C5A358] text-[11px]">03</span>
                <span className="text-white/90">Search Strategy &amp; Organic Growth</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-[#C5A358] text-[11px]">04</span>
                <span className="text-white/90">Digital Brand &amp; Online Presence</span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                id="footer-seo-inspect-btn"
                onClick={onOpenSeoInspector}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs text-white/80 bg-[#0B1626] hover:bg-[#162234] hover:text-white border border-white/10 rounded transition-colors shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-[#C5A358]" />
                <span>Live SEO Schema &amp; Entity Audit</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <p>
            &copy; {currentYear} Dickson Ngeche (DKNgeche). All rights reserved. Premium Digital Strategy &amp; Growth Advisory.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400/90 font-mono text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Semantic HTML5 &bull; Schema.org Structured Data Verified</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
