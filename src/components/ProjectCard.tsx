import { ExternalLink, Copy, Check, ArrowUpRight, Layers, Sparkles, Code2, Globe } from 'lucide-react';
import { useState, MouseEvent } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onOpenDetails: (project: Project) => void;
  onCopyUrl: (url: string, title: string) => void;
}

export function ProjectCard({ project, onOpenDetails, onCopyUrl }: ProjectCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: MouseEvent) => {
    e.stopPropagation();
    onCopyUrl(project.url, project.title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id={`project-card-${project.id}`}
      className="group relative flex flex-col justify-between bg-[#141414] border border-white/5 hover:border-[#c5a059]/40 transition-all duration-300 p-7 sm:p-8 shadow-2xl"
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] text-[#c5a059] tracking-[0.2em] uppercase font-mono block">
            {project.badge}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
            {project.categoryLabel}
          </span>
        </div>

        {/* Title and Subtitle */}
        <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight group-hover:text-[#c5a059] transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-[11px] font-mono text-[#c5a059]/80 uppercase tracking-wider mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/50 leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-2 mb-6">
          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-white/60">
              <span className="text-[#c5a059] mt-0.5">▹</span>
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="text-[10px] font-mono px-2 py-0.5 bg-[#0a0a0a] text-white/50 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="text-[10px] uppercase tracking-widest text-white/70 hover:text-[#c5a059] border-b border-white/20 hover:border-[#c5a059] pb-0.5 transition"
        >
          View Full Specs
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-2 text-white/40 hover:text-[#c5a059] transition"
            title="Copy Project Link"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#c5a059]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-medium text-[10px] uppercase tracking-widest transition shadow-sm active:scale-95"
          >
            <span>Launch Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
