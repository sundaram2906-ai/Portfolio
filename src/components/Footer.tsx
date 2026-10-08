import { ArrowUp, Phone, Mail, ExternalLink, Shield } from 'lucide-react';
import { PERSONAL_INFO, FEATURED_PROJECTS } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoState';

export function Footer() {
  const { photoUrl, handleImgError } = useProfilePhoto();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-14 text-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#c5a059]/40 bg-[#141414] overflow-hidden shrink-0 shadow-md">
                <img
                  src={photoUrl}
                  alt={PERSONAL_INFO.name}
                  onError={handleImgError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-light text-white tracking-wide leading-tight">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059]">
                  PGDM (Finance) · Ex-Deloitte USI Senior Audit Analyst
                </span>
              </div>
            </div>
            <p className="text-xs text-white/50 max-w-sm font-light leading-relaxed">
              Corporate Finance professional specializing in corporate valuation, credit & solvency analysis, statutory audit evidence, and working capital optimization.
            </p>
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
              Gurgaon, India · Open to Mumbai & Delhi NCR · Great Lakes PGDM (Finance) · Ex-Deloitte USI Senior Audit Analyst
            </div>
          </div>

          {/* Col 2: Featured Project Links */}
          <div>
            <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#c5a059] mb-3">
              Showcased Projects
            </h4>
            <ul className="space-y-2 text-xs">
              {FEATURED_PROJECTS.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#c5a059] text-white/60 flex items-center gap-1.5 transition font-light"
                  >
                    <span>{p.title}</span>
                    <ExternalLink className="w-3 h-3 text-white/30" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Coordinates */}
          <div>
            <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#c5a059] mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.socials.tel}
                  className="flex items-center gap-2 text-white/70 hover:text-[#c5a059] transition"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span className="font-mono">{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.emailMailto}
                  className="flex items-center gap-2 text-white/70 hover:text-[#c5a059] transition break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span className="font-mono">{PERSONAL_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-wider font-mono text-white/30">
          <div>
            © {new Date().getFullYear()} Sundaram Kumar Singh. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/60 hover:text-white px-3 py-1.5 bg-[#141414] hover:bg-white/5 border border-white/10 transition"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c5a059]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
