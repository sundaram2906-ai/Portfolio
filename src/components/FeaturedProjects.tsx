import { useState } from 'react';
import { Sparkles, Globe, ArrowUpRight, ChevronDown, ChevronUp, Layers, FolderArchive } from 'lucide-react';
import { OTHER_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface FeaturedProjectsProps {
  onOpenDetails: (project: Project) => void;
  onCopyUrl: (url: string, title: string) => void;
}

export function FeaturedProjects({ onOpenDetails, onCopyUrl }: FeaturedProjectsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="projects" className="py-16 md:py-20 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 mb-3">
              <FolderArchive className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Supplementary Archive · Secondary Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Other Projects & Technical Architecture
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-1 max-w-xl font-light leading-relaxed">
              Academic assignments and technical systems (Megaproject PM, Payment Architecture, and Web3 Telemetry) collapsed to maintain primary focus on Corporate Valuation, Credit Analysis, and Financial Modeling.
            </p>
          </div>

          {/* Toggle Button */}
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141414] hover:bg-[#1a1a1a] text-white/80 border border-white/10 hover:border-[#c5a059]/40 text-xs font-mono uppercase tracking-widest transition"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Collapse Other Projects</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Expand Other Projects ({OTHER_PROJECTS.length})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Collapsed Preview Strip */}
        {!isExpanded ? (
          <div className="p-5 bg-[#141414] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-[10px] uppercase tracking-wider text-white/40">Included:</span>
              <span className="px-2.5 py-1 bg-[#0a0a0a] border border-white/5 text-white/70">
                Burj Khalifa Megaproject PM
              </span>
              <span className="px-2.5 py-1 bg-[#0a0a0a] border border-white/5 text-white/70">
                Adyen Payments Encyclopedia
              </span>
              <span className="px-2.5 py-1 bg-[#0a0a0a] border border-white/5 text-white/70">
                Web3 Blockchain Portal
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(true)}
              className="text-xs text-[#c5a059] hover:underline font-mono uppercase tracking-wider shrink-0"
            >
              Click to view project specs & live links →
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Quick Launchpad Strip */}
            <div className="p-4 bg-[#141414] border border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-[#c5a059]">
                <Globe className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>External Deployment URLs:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {OTHER_PROJECTS.map((proj) => (
                  <a
                    key={proj.id}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-white/70 hover:text-white bg-[#0a0a0a] border border-white/10 hover:border-[#c5a059]/40 px-3 py-1.5 transition"
                  >
                    <span>{proj.title.split(':')[0]}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#c5a059]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OTHER_PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={onOpenDetails}
                  onCopyUrl={onCopyUrl}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
