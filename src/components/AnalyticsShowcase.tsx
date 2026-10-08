import { useState } from 'react';
import { TrendingUp, BarChart3, Database, FileText, CheckCircle, ChevronRight, Calculator, PieChart, Activity, ExternalLink, ArrowUpRight } from 'lucide-react';
import { RESEARCH_STUDIES } from '../data/portfolioData';
import { ResearchStudy } from '../types';

export function AnalyticsShowcase() {
  const [selectedStudyId, setSelectedStudyId] = useState<string>(RESEARCH_STUDIES[0].id);

  const currentStudy = RESEARCH_STUDIES.find((s) => s.id === selectedStudyId) || RESEARCH_STUDIES[0];

  return (
    <section id="finance" className="py-20 md:py-28 relative bg-[#0a0a0a] border-t border-white/5">
      <span id="research" className="absolute -top-24 pointer-events-none" />
      <span id="saral-paisa" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Primary Focus · Corporate Valuation, Credit & Audit Evidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Corporate Finance, Valuation & Audit Dossier
          </h2>
          <p className="text-sm text-white/50 mt-2 max-w-2xl font-light leading-relaxed">
            Institutional case studies and corporate evidence across Equity Valuation, Working Capital Optimization, Statutory Audit Evidence, Capital Structure & Solvency Modeling, and Cash-Flow Credit Underwriting.
          </p>
        </div>

        {/* Layout: Study selector on the left, full interactive deep-dive on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-5 space-y-2.5">
            {RESEARCH_STUDIES.map((study, idx) => {
              const isSelected = study.id === selectedStudyId;
              const displayNum = String(idx + 1).padStart(2, '0');
              return (
                <button
                  key={study.id}
                  onClick={() => setSelectedStudyId(study.id)}
                  className={`w-full text-left p-5 transition-all duration-200 border flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#141414] border-[#c5a059]/60 text-white shadow-xl'
                      : 'bg-[#141414] border-white/5 hover:border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  <div className="min-w-0 pr-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono text-[#c5a059] font-medium">
                        {displayNum}.
                      </span>
                      <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 ${
                        isSelected ? 'bg-[#c5a059]/20 text-[#c5a059]' : 'bg-[#0a0a0a] text-white/40'
                      }`}>
                        {study.tag}
                      </span>
                      <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">{study.date}</span>
                    </div>
                    <div className="text-sm font-light truncate leading-tight text-white">
                      {study.title}
                    </div>
                    <div className="text-xs text-white/40 truncate mt-1 font-light">
                      {study.institution}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-[#c5a059] translate-x-1' : 'text-white/20'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Card */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/5 p-7 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-5 border-b border-white/5">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a059]">
                  {currentStudy.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mt-1">
                  {currentStudy.title}
                </h3>
                <div className="text-xs text-white/40 mt-1 font-mono">
                  {currentStudy.institution} · {currentStudy.location || 'India'} · {currentStudy.date}
                </div>
              </div>

              {currentStudy.actionLink && (
                <a
                  href={currentStudy.actionLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-medium text-[10px] uppercase tracking-widest shrink-0 transition shadow-sm self-start"
                >
                  <span>{currentStudy.actionLink.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#c5a059] mb-2">
                Executive Overview
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                {currentStudy.summary}
              </p>
            </div>

            {/* Metrics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {currentStudy.keyMetrics.map((metric, i) => (
                <div key={i} className="p-4 bg-[#0a0a0a] border border-white/5">
                  <div className="text-lg font-light font-mono text-[#c5a059]">
                    {metric.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40 mt-1 leading-tight font-mono">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Findings & Quantitative Highlights */}
            <div>
              <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#c5a059] mb-4 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Analytical Takeaways & Institutional Evidence</span>
              </h4>
              <ul className="space-y-2.5">
                {currentStudy.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/70 leading-relaxed bg-[#0a0a0a] p-3.5 border border-white/5">
                    <span className="text-[#c5a059] font-serif shrink-0 mt-0.5">▪</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
