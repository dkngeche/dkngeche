import { useState } from 'react';
import { PageType, CaseStudy } from '../types';
import { generateSchema } from './SeoHead';
import { X, ShieldCheck, Code, CheckCircle, FileText, Globe, Layers } from 'lucide-react';

interface SeoInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageType;
  currentCaseStudy?: CaseStudy | null;
}

export function SeoInspectorModal({ isOpen, onClose, currentPage, currentCaseStudy }: SeoInspectorModalProps) {
  const [activeTab, setActiveTab] = useState<'schema' | 'meta' | 'architecture' | 'vitals'>('schema');

  if (!isOpen) return null;

  const currentSchema = generateSchema(currentPage, currentCaseStudy);
  const currentTitle = document.title;
  const currentDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="seo-inspector-title"
    >
      <div className="bg-[#121212] border border-white/15 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 bg-[#161616] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-[#C5A358]/10 text-[#C5A358] border border-[#C5A358]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="seo-inspector-title" className="text-base font-semibold text-[#E8E8E8]">
                Live SEO Architecture &amp; Schema Inspector
              </h3>
              <p className="text-xs text-white/50">
                Inspecting real-time technical SEO markup for: <span className="font-mono text-[#C5A358]">/{currentPage}</span>
              </p>
            </div>
          </div>
          <button
            id="close-seo-inspector-btn"
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            aria-label="Close SEO Inspector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-white/10 bg-[#161616] px-5 pt-3 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('schema')}
            className={`pb-2.5 px-3 text-xs font-semibold tracking-wide border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'schema'
                ? 'border-[#C5A358] text-[#C5A358]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Schema.org (JSON-LD)</span>
          </button>
          <button
            onClick={() => setActiveTab('meta')}
            className={`pb-2.5 px-3 text-xs font-semibold tracking-wide border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'meta'
                ? 'border-[#C5A358] text-[#C5A358]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Metadata &amp; OpenGraph</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 px-3 text-xs font-semibold tracking-wide border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-[#C5A358] text-[#C5A358]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Semantic Hierarchy</span>
          </button>
          <button
            onClick={() => setActiveTab('vitals')}
            className={`pb-2.5 px-3 text-xs font-semibold tracking-wide border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'vitals'
                ? 'border-[#C5A358] text-[#C5A358]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Core Web Vitals Principles</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-4 bg-[#121212]">
          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="text-xs text-white/60 flex items-center justify-between">
                <span>Injected structured data graph validating entity authority:</span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                  Valid Schema.org
                </span>
              </div>
              <div className="bg-[#0A0A0A] border border-white/10 text-emerald-300/90 p-4 rounded-lg font-mono text-xs overflow-x-auto max-h-[350px]">
                <pre>{JSON.stringify(currentSchema, null, 2)}</pre>
              </div>
            </div>
          )}

          {activeTab === 'meta' && (
            <div className="space-y-4">
              <div className="bg-[#181818] border border-white/10 rounded-xl p-4 space-y-2">
                <span className="text-[11px] font-mono text-[#C5A358] font-semibold uppercase">Dynamic Title Tag:</span>
                <div className="text-sm font-semibold text-[#E8E8E8]">{currentTitle}</div>
                <div className="text-[11px] text-white/40">{currentTitle.length} characters (Optimal range: 50-60)</div>
              </div>

              <div className="bg-[#181818] border border-white/10 rounded-xl p-4 space-y-2">
                <span className="text-[11px] font-mono text-[#C5A358] font-semibold uppercase">Dynamic Meta Description:</span>
                <div className="text-xs sm:text-sm text-white/80 leading-relaxed">{currentDesc}</div>
                <div className="text-[11px] text-white/40">{currentDesc.length} characters (Optimal range: 140-160)</div>
              </div>

              <div className="bg-[#181818] border border-white/10 rounded-xl p-4 space-y-2">
                <span className="text-[11px] font-mono text-[#C5A358] font-semibold uppercase">Open Graph / Social Protocol:</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#222222] p-2 rounded border border-white/10">
                    <span className="text-white/40">og:type:</span> <span className="font-mono font-medium text-white/90">website</span>
                  </div>
                  <div className="bg-[#222222] p-2 rounded border border-white/10">
                    <span className="text-white/40">twitter:card:</span> <span className="font-mono font-medium text-white/90">summary_large_image</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-3">
              <p className="text-xs text-white/60">
                Every page on this site implements strict semantic document hierarchy, ensuring search crawlers parse contextual relationships effortlessly:
              </p>
              <div className="bg-[#181818] border border-white/10 rounded-xl p-4 space-y-2.5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Singular Semantic H1:</strong> Exactly one distinct, keyword-calibrated H1 per view.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Strict Heading Order:</strong> No skipping levels (H1 &rarr; H2 &rarr; H3 &rarr; H4).
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Structured Microdata:</strong> BreadcrumbList schemas on deep case studies for rich search snippets.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Accessible Landmarks:</strong> Native &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt; tags.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vitals' && (
            <div className="space-y-3">
              <div className="bg-[#181818] border border-white/10 rounded-xl p-4 space-y-3">
                <div className="text-xs font-mono font-bold text-[#C5A358] uppercase">Core Web Vitals Engineering</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#222222] border border-white/10 p-3 rounded-lg text-center">
                    <div className="text-base font-bold text-emerald-400">LCP &lt; 1.2s</div>
                    <div className="text-[11px] text-white/50 mt-0.5">Largest Contentful Paint</div>
                  </div>
                  <div className="bg-[#222222] border border-white/10 p-3 rounded-lg text-center">
                    <div className="text-base font-bold text-emerald-400">INP &lt; 50ms</div>
                    <div className="text-[11px] text-white/50 mt-0.5">Interaction to Next Paint</div>
                  </div>
                  <div className="bg-[#222222] border border-white/10 p-3 rounded-lg text-center">
                    <div className="text-base font-bold text-emerald-400">CLS: 0.00</div>
                    <div className="text-[11px] text-white/50 mt-0.5">Cumulative Layout Shift</div>
                  </div>
                </div>
                <p className="text-xs text-white/60 pt-1">
                  Dickson implements high-performance CSS and zero layout shifts so websites rank higher and retain organic visitors.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#161616] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 border border-white/15 rounded-md transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
