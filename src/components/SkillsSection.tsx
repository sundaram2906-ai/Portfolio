import { TrendingUp, BarChart3, Code2, Check, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-[#c5a059]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#c5a059]" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4 text-[#c5a059]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#c5a059]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#c5a059]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Domains & Strategic Toolkit
          </h2>
          <p className="text-sm text-white/50 mt-2 font-light leading-relaxed">
            A cohesive institutional toolkit combining corporate valuation, capital structure analysis, statutory audit evidence, working capital optimization, and credit risk modeling.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div 
              key={idx}
              className="bg-[#141414] border border-white/5 p-6 hover:border-[#c5a059]/30 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="w-9 h-9 bg-[#0a0a0a] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                    {getIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white tracking-wide leading-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-2.5 bg-[#0a0a0a] border border-white/5 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="text-[#c5a059] text-xs shrink-0">▹</span>
                        <span className="text-xs font-light text-white/80 truncate" title={skill.name}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-[#141414] text-white/40 border border-white/5 shrink-0">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/40 font-mono">
                {group.skills.length} Methodologies
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
