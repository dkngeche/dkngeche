import React, { useState } from 'react';
import { PageType, InsightItem } from '../types';
import { INSIGHTS } from '../data/insightsData';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  X,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Filter
} from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: PageType) => void;
}

export function InsightsPage({ onNavigate }: InsightsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightItem | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    'All',
    'Digital Strategy',
    'Websites',
    'Search Strategy',
    'Digital Brand',
    'AI & Technology'
  ];

  const filteredInsights = selectedCategory === 'All'
    ? INSIGHTS
    : INSIGHTS.filter(item => item.category === selectedCategory);

  const handleShare = (article: InsightItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* HERO SECTION */}
      <section className="pt-12 sm:pt-16 border-b border-white/[0.08] pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#0B1626] border border-[#C5A358]/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A358]" />
            <span>Thinking About Digital &bull; Perspectives &amp; Essays</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl text-[#F5F6F8] font-bold leading-tight max-w-4xl">
            Perspectives on Digital Strategy, Search, and Operational Growth.
          </h1>

          <p className="text-base sm:text-xl text-white/75 max-w-3xl leading-relaxed">
            Essays, frameworks, and strategic notes for business leaders and operators looking to build enduring digital foundations rather than chasing superficial marketing fads.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6">
            <div className="flex items-center gap-1.5 text-xs font-mono text-white/40 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all backdrop-blur-sm ${
                  selectedCategory === category
                    ? 'bg-[#C5A358] text-[#070D18] font-bold shadow-md'
                    : 'bg-[#0B1626]/80 text-white/70 hover:text-white border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map((insight, idx) => (
            <div
              key={insight.id}
              onClick={() => setActiveArticle(insight)}
              className="group cursor-pointer glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Category & Meta */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#162234] border border-white/[0.08] text-[#C5A358] font-semibold">
                    {insight.category}
                  </span>
                  <div className="flex items-center gap-1 text-white/50">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl text-[#F5F6F8] font-bold group-hover:text-[#C5A358] transition-colors leading-snug">
                  {insight.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3">
                  {insight.summary}
                </p>
              </div>

              {/* Read Action Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-white/40">
                  {insight.date}
                </span>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C5A358] group-hover:translate-x-1 transition-transform">
                  <span>Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A358]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C5A358]/10 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* FULL ARTICLE MODAL / READER */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#070D18]/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#0B1626] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-10 my-8 space-y-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header Controls */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 sticky top-0 bg-[#0B1626]/95 backdrop-blur-md z-20">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#162234] border border-[#C5A358]/30 text-xs font-mono text-[#C5A358] font-semibold">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-mono text-white/40">&bull;</span>
                <span className="text-xs font-mono text-white/50">{activeArticle.readTime}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-white/70 hover:text-white transition-colors text-xs font-mono flex items-center gap-1.5"
                  title="Share link"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{copied ? 'Copied!' : 'Share'}</span>
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Headings */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/40 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published {activeArticle.date}</span>
                <span>&bull;</span>
                <span>By Dickson Ngeche</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl text-[#F5F6F8] font-bold leading-tight">
                {activeArticle.title}
              </h2>

              <p className="text-base sm:text-lg text-[#C5A358] font-medium leading-relaxed italic">
                {activeArticle.subtitle}
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-xl bg-[#070D18] border border-[#C5A358]/30 space-y-3 shadow-inner">
              <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Strategic Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                {activeArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content Sections */}
            <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed">
              {activeArticle.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#F5F6F8] font-bold">
                    {section.heading}
                  </h3>
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-white/75 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {activeArticle.quote && (
                <blockquote className="p-6 rounded-xl bg-gradient-to-r from-[#162234] to-[#0B1626] border-l-4 border-[#C5A358] space-y-2 my-6">
                  <p className="font-editorial text-lg sm:text-xl text-[#F5F6F8] italic">
                    "{activeArticle.quote.text}"
                  </p>
                  {activeArticle.quote.author && (
                    <cite className="block text-xs font-mono text-[#C5A358] uppercase tracking-wider not-italic">
                      — {activeArticle.quote.author}
                    </cite>
                  )}
                </blockquote>
              )}
            </div>

            {/* Article Modal Footer CTA */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-white/60">
                Have questions or want to discuss how this applies to your organization?
              </div>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onNavigate('contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#C5A358] hover:bg-[#D4B46A] text-[#070D18] text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Discuss Your Strategy</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* DISCUSS STRATEGY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1626] border border-white/15 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              Strategic Collaboration
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold">
              Apply these principles directly to your digital presence.
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Let's conduct an initial diagnostic of your digital presence, search positioning, and commercial architecture.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors shadow-lg relative z-10"
          >
            <span>Book a Discovery Session</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
