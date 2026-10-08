import { X, ExternalLink, Copy, Check, Sparkles, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onCopyUrl: (url: string, title: string) => void;
}

export function ProjectModal({ project, onClose, onCopyUrl }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview');

  if (!project) return null;

  const handleCopy = () => {
    onCopyUrl(project.url, project.title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-modal-container"
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#141414]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a059]">
              {project.badge}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest">
              {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-white/40 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-white/5 bg-[#0a0a0a]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition ${
              activeTab === 'overview'
                ? 'text-[#c5a059] border-b-2 border-[#c5a059]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition ${
              activeTab === 'preview'
                ? 'text-[#c5a059] border-b-2 border-[#c5a059]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            Live Embed View / URL
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-white/70">
          {activeTab === 'overview' ? (
            <>
              <div>
                <h2 className="text-2xl font-light text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-xs font-mono text-[#c5a059] uppercase tracking-wider mb-3">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                  {project.fullOverview}
                </p>
              </div>

              {/* URL card with quick copy */}
              <div className="p-4 bg-[#141414] border border-white/5 flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059]">Target Deployment URL</div>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-white/80 hover:text-[#c5a059] truncate block transition mt-0.5"
                  >
                    {project.url}
                  </a>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-widest px-3 py-2 bg-[#0a0a0a] hover:bg-white/5 border border-white/10 text-white/70 transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#c5a059]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] uppercase tracking-widest px-3.5 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-medium transition"
                  >
                    <span>Open</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#c5a059] mb-3 flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#c5a059]" />
                  <span>Key Architecture & Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.keyFeatures.map((feat, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 bg-[#141414] border border-white/5 text-xs text-white/60 flex items-start gap-2.5"
                    >
                      <span className="text-[#c5a059] mt-0.5">▹</span>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#c5a059] mb-3 flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-[#c5a059]" />
                    <span>Technical Highlights</span>
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="p-3.5 bg-[#141414] border border-white/5">
                        <div className="text-xs font-mono text-white mb-0.5">{metric.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono px-2.5 py-1 bg-[#141414] text-white/60 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-[#141414] border border-white/5 text-xs text-white/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-medium text-white">Live External Frame</div>
                  <p className="text-white/40 text-[11px] mt-0.5">Due to browser X-Frame-Options policies, some external domains prefer opening in a new tab.</p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-medium text-[10px] uppercase tracking-widest shrink-0 self-start sm:self-auto"
                >
                  <span>Launch in New Window</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-[360px] border border-white/5 bg-[#141414] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 bg-[#0a0a0a] border border-[#c5a059]/30 flex items-center justify-center mb-4">
                  <ExternalLink className="w-5 h-5 text-[#c5a059]" />
                </div>
                <h4 className="text-base font-light text-white mb-1">
                  Ready to Launch {project.title}
                </h4>
                <p className="text-xs text-white/40 max-w-md mb-6 font-mono">
                  {project.url}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-medium text-xs uppercase tracking-widest shadow-md transition"
                >
                  Open {project.title}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/5 bg-[#141414] flex items-center justify-between">
          <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest">
            {project.badge}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition"
            >
              Close
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-medium text-[10px] uppercase tracking-widest transition"
            >
              <span>Visit Deployment</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
