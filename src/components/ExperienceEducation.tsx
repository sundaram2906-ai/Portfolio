import { GraduationCap, Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION_AND_EXPERIENCE } from '../data/portfolioData';

export function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <Award className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Academic Credentials & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Education & Corporate Experience
          </h2>
          <p className="text-sm text-white/50 mt-2 font-light leading-relaxed">
            Management education in finance alongside corporate experience at Deloitte USI and manufacturing supply chain analytics at Exicom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-[#141414] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-light text-white tracking-wide">Higher Education</h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 ml-4 pl-6">
              {EDUCATION_AND_EXPERIENCE.education.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-[#0a0a0a] border-2 border-[#c5a059] group-hover:scale-125 transition duration-200" />
                  
                  <div className="p-6 bg-[#141414] border border-white/5 group-hover:border-[#c5a059]/30 transition">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059]">
                        {item.period}
                      </span>
                      <span className="text-[10px] text-white/40 font-mono flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-white/30" />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-base font-light text-white mb-0.5">
                      {item.role}
                    </h4>
                    <div className="text-xs font-mono text-[#c5a059]/80 mb-3">
                      {item.organization}
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-xs text-white/60 leading-relaxed flex items-start gap-2">
                          <span className="text-[#c5a059] mt-0.5">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsUsed.map((sk, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 bg-[#0a0a0a] text-white/40 border border-white/5">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-[#141414] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-light text-white tracking-wide">Corporate Experience & Internships</h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 ml-4 pl-6">
              {EDUCATION_AND_EXPERIENCE.experience.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-[#0a0a0a] border-2 border-[#c5a059] group-hover:scale-125 transition duration-200" />
                  
                  <div className="p-6 bg-[#141414] border border-white/5 group-hover:border-[#c5a059]/30 transition">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059]">
                        {item.period}
                      </span>
                      <span className="text-[10px] text-white/40 font-mono flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-white/30" />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-base font-light text-white mb-0.5">
                      {item.role}
                    </h4>
                    <div className="text-xs font-mono text-[#c5a059]/80 mb-3">
                      {item.organization}
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-xs text-white/60 leading-relaxed flex items-start gap-2">
                          <span className="text-[#c5a059] mt-0.5">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsUsed.map((sk, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 bg-[#0a0a0a] text-white/40 border border-white/5">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
