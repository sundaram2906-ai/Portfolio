import { Phone, Mail, ArrowUpRight, Copy, Check, Terminal, ShieldCheck, TrendingUp, Briefcase, MapPin } from 'lucide-react';
import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoState';

interface HeroProps {
  onCopyText: (text: string, label: string) => void;
}

export function Hero({ onCopyText }: HeroProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { photoUrl, handleImgError } = useProfilePhoto();

  const handleCopy = (text: string, label: string, field: string) => {
    onCopyText(text, label);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c5a059]/5 blur-[150px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Main Info Column */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
            {/* Availability Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 bg-[#141414] border border-white/10 text-xs text-white/70 mb-6 shadow-sm self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]"></span>
              </span>
              <span className="font-mono text-[#c5a059] text-[11px] uppercase tracking-widest font-medium">Available</span>
              <span className="text-white/20">|</span>
              <span className="text-[11px] uppercase tracking-widest text-white/60">
                Corporate Finance · Valuation · Credit Analysis · Ex-Deloitte USI
              </span>
              <span className="text-white/20">|</span>
              <span className="px-2 py-0.5 bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#c5a059] text-[10px] font-mono tracking-wider uppercase font-semibold">
                Open to Mumbai & Delhi NCR
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.18] mb-5">
              Turning audit evidence and cash flow analysis into{" "}
              <span className="italic font-serif text-[#c5a059]">
                lender-ready insight
              </span>
              .
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-6 font-light">
              PGDM (Finance) candidate at Great Lakes Institute of Management, Gurgaon, with 32 months as a Senior Audit Analyst at Deloitte USI, auditing client accounts up to AUD 1B+. My work combines forensic screening (Beneish M-Score, Altman Z-Score), DCF valuation and working-capital analysis, including ₹0.78 Cr of cash recovery identified at Exicom Tele-Systems.
            </p>

            {/* Primary Action Buttons - Finance First */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#finance"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-medium text-xs uppercase tracking-widest transition shadow-lg shadow-black/60 active:scale-98"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Corporate Valuation, Credit & Audit Dossier</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#141414] hover:bg-[#1a1a1a] text-white/80 border border-white/10 hover:border-[#c5a059]/40 font-medium text-xs uppercase tracking-widest transition"
              >
                <Briefcase className="w-4 h-4 text-[#c5a059]" />
                <span>Deloitte & Exicom Experience</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-white/50 hover:text-white text-xs uppercase tracking-widest transition"
              >
                <span>Contact Coordinates</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Fast Contact Coordinates Strip */}
            <div className="p-4 sm:p-5 bg-[#141414] border border-white/5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-mono mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Direct Contact Coordinates</span>
                </div>
                <span className="text-[#c5a059]/90 text-[10px] uppercase font-mono tracking-wider">Gurgaon · Open to Mumbai & Delhi NCR</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Phone card */}
                <div className="flex items-center justify-between p-3 bg-[#0a0a0a] border border-white/5 group hover:border-[#c5a059]/30 transition">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 bg-[#141414] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                    </div>
                    <div className="truncate">
                      <div className="text-[9px] uppercase tracking-wider text-white/40 font-mono">Phone / WhatsApp</div>
                      <a 
                        href={PERSONAL_INFO.socials.tel}
                        className="text-xs font-mono text-white/90 hover:text-[#c5a059] transition font-medium"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.phone, "Phone Number", "phone")}
                      className="p-1.5 text-white/40 hover:text-[#c5a059] transition"
                      title="Copy Phone Number"
                    >
                      {copiedField === "phone" ? (
                        <Check className="w-3.5 h-3.5 text-[#c5a059]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Email card */}
                <div className="flex items-center justify-between p-3 bg-[#0a0a0a] border border-white/5 group hover:border-[#c5a059]/30 transition">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 bg-[#141414] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                    </div>
                    <div className="truncate">
                      <div className="text-[9px] uppercase tracking-wider text-white/40 font-mono">Email</div>
                      <a 
                        href={PERSONAL_INFO.socials.emailMailto} 
                        className="text-xs font-mono text-white/90 hover:text-[#c5a059] truncate block transition font-medium"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, "Email Address", "email")}
                    className="p-1.5 text-white/40 hover:text-[#c5a059] transition shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedField === "email" ? (
                      <Check className="w-3.5 h-3.5 text-[#c5a059]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card Column */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm bg-[#141414] border border-white/10 p-4 sm:p-5 shadow-2xl group hover:border-[#c5a059]/40 transition duration-300">
              {/* Corner decorative marks */}
              <div className="absolute top-2 left-2 text-[#c5a059]/40 text-[10px] font-mono leading-none">⌜</div>
              <div className="absolute top-2 right-2 text-[#c5a059]/40 text-[10px] font-mono leading-none">⌝</div>
              <div className="absolute bottom-2 left-2 text-[#c5a059]/40 text-[10px] font-mono leading-none">⌞</div>
              <div className="absolute bottom-2 right-2 text-[#c5a059]/40 text-[10px] font-mono leading-none">⌟</div>

              {/* Photo Frame */}
              <div 
                className="relative aspect-[4/5] w-full overflow-hidden bg-[#0a0a0a] border border-white/5 mb-4 group/img"
              >
                <img
                  src={photoUrl}
                  alt={PERSONAL_INFO.name}
                  onError={handleImgError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover/img:scale-[1.02] filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Relocation Status Badge in Photo */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#0a0a0a]/85 backdrop-blur-md border border-[#c5a059]/40 text-[10px] font-mono text-[#c5a059] uppercase tracking-wider shadow-md">
                  <MapPin className="w-3 h-3 text-[#c5a059]" />
                  <span>Open to Mumbai & Delhi NCR</span>
                </div>

                {/* Overlay Name & Education in Frame */}
                <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                  <div className="text-white font-light text-lg tracking-tight">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider mt-0.5">
                    PGDM (Finance) Candidate @ GLIM · Ex-Deloitte USI Senior Audit Analyst
                  </div>
                </div>
              </div>

              {/* Card Metadata Details */}
              <div className="space-y-2 text-xs text-white/70">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] font-mono">
                  <span className="text-white/40 uppercase tracking-wider">Location & Mobility</span>
                  <span className="text-[#c5a059] font-medium">Gurgaon · Open to Mumbai & Delhi NCR</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] font-mono">
                  <span className="text-white/40 uppercase tracking-wider">Education</span>
                  <span className="text-white">Great Lakes (PGDM Finance) · BIT Mesra</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] font-mono">
                  <span className="text-white/40 uppercase tracking-wider">Prior Work</span>
                  <span className="text-[#c5a059] font-medium">Deloitte USI (Senior Audit Analyst, 32 Mos)</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] font-mono">
                  <span className="text-white/40 uppercase tracking-wider">Summer Internship</span>
                  <span className="text-white">Exicom Tele-Systems (Plant 4210, Gurgaon)</span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white/40 uppercase tracking-wider">Flagship Focus</span>
                  <span className="text-[#c5a059]">Asian Paints DCF, Solvency & Exicom</span>
                </div>
              </div>

              {/* Profile Card Footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                <span className="uppercase text-white/40 tracking-wider">
                  Target Domain
                </span>
                <span className="text-[#c5a059] uppercase tracking-widest font-medium">
                  Corporate Finance & Valuation Advisory
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Metric Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/5">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="p-4 bg-[#141414] border border-white/5">
              <div className="text-xl sm:text-2xl font-light font-mono text-[#c5a059]">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-white/45 mt-1 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
