import { useState } from 'react';
import { Phone, Mail, MessageSquare, Copy, Check, MapPin, Clock, UserCheck, Globe, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoState';

interface ContactSectionProps {
  onCopyText: (text: string, label: string) => void;
}

export function ContactSection({ onCopyText }: ContactSectionProps) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { photoUrl, handleImgError } = useProfilePhoto();

  const handleCopyPhone = () => {
    onCopyText(PERSONAL_INFO.phone, "Phone Number (+91 8999010103)");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    onCopyText(PERSONAL_INFO.email, "Email Address (sundaram2906@gmail.com)");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
              <UserCheck className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Direct Reach & Availability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Contact Coordinates
            </h2>
            <p className="text-sm text-white/50 mt-2 font-light leading-relaxed">
              Open to conversations in Corporate Valuation, Credit & Solvency Analysis, Financial Modeling, Transaction Advisory.
            </p>
          </div>

          {/* Relocation & Availability Highlight Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#141414] border border-[#c5a059]/40 text-xs text-white/80 self-start md:self-auto shadow-md">
            <div className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c5a059]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] font-medium">
                Open to Mumbai & Delhi NCR
              </span>
              <span className="text-[11px] text-white/60 font-light">
                Target Locations: Mumbai & Delhi NCR
              </span>
            </div>
          </div>
        </div>

        {/* Cohesive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Executive Profile */}
          <div className="p-6 bg-[#141414] border border-white/5 hover:border-[#c5a059]/40 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-widest font-medium">
                  Candidate Dossier
                </span>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                  Great Lakes & Deloitte USI
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 border-2 border-[#c5a059]/50 bg-[#0a0a0a] overflow-hidden shrink-0 shadow-lg">
                  <img
                    src={photoUrl}
                    alt={PERSONAL_INFO.name}
                    onError={handleImgError}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="text-base font-light text-white leading-tight">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider mt-1">
                    PGDM (Finance) Candidate @ GLIM
                  </div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-0.5">
                    Ex-Deloitte USI Senior Audit Analyst
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/50 font-light leading-relaxed">
                Specializing in corporate valuation models (DCF FCFF/FCFE), capital structure & solvency analysis (Altman Z-Score, 13-week cash flow), statutory audit evidence, and working capital optimization.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Education</span>
              <span className="text-white/80">Great Lakes & BIT Mesra</span>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="p-6 bg-[#141414] border border-white/5 hover:border-[#c5a059]/40 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Direct Phone & WhatsApp
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-ping" />
                  <span className="text-[10px] text-[#c5a059] font-mono tracking-wider uppercase">Active</span>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-light font-mono text-white mb-2 tracking-tight">
                {PERSONAL_INFO.formattedPhone}
              </div>
              <p className="text-xs text-white/50 mb-6 font-light leading-relaxed">
                Available for phone consultations, executive interviews, and fast WhatsApp correspondence.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={PERSONAL_INFO.socials.tel}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#c5a059] hover:bg-[#b08d4b] text-black text-xs font-medium tracking-wide transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#0a0a0a] hover:bg-white/5 text-white/80 border border-white/10 text-xs font-light tracking-wide transition"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <button
                onClick={handleCopyPhone}
                className="w-full flex items-center justify-center gap-2 py-2 bg-[#0a0a0a] hover:bg-white/5 border border-white/10 text-white/60 hover:text-white text-xs font-mono transition"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span className="text-[#c5a059]">Phone Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Email & Formal Communication */}
          <div className="p-6 bg-[#141414] border border-white/5 hover:border-[#c5a059]/40 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Email
                </span>
                <span className="text-[10px] text-[#c5a059] font-mono tracking-wider">RESPONSE &lt; 24H</span>
              </div>

              <div className="text-xl sm:text-2xl font-light font-mono text-white mb-2 tracking-tight break-all">
                {PERSONAL_INFO.email}
              </div>
              <p className="text-xs text-white/50 mb-6 font-light leading-relaxed">
                Preferred channel for formal offers, project evaluations, confidential files, and career discussions.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={PERSONAL_INFO.socials.emailMailto}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#c5a059] hover:bg-[#b08d4b] text-black text-xs font-medium tracking-wide transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Compose Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2 bg-[#0a0a0a] hover:bg-white/5 border border-white/10 text-white/60 hover:text-white text-xs font-mono transition"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span className="text-[#c5a059]">Email Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 4: Location & Relocation Readiness (Full Width across Grid) */}
          <div className="md:col-span-2 lg:col-span-3 p-6 bg-[#141414] border border-white/5 hover:border-[#c5a059]/40 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Location & Relocation Mobility
                </span>
                <span className="px-2.5 py-0.5 bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#c5a059] text-[10px] font-mono uppercase tracking-wider font-semibold">
                  Open to Mumbai & Delhi NCR
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-white text-base font-light mb-1">
                    <MapPin className="w-4 h-4 text-[#c5a059]" />
                    <span>Gurgaon / Delhi NCR, India</span>
                  </div>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Currently based in Gurgaon (NCR corporate hub). Available for in-person meetings across Delhi NCR and ready for on-site corporate roles.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-white text-base font-light mb-1">
                    <Globe className="w-4 h-4 text-[#c5a059]" />
                    <span>Mobility: Mumbai & Delhi NCR</span>
                  </div>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Open to immediate relocation to Mumbai and Delhi NCR financial centers. Ready for on-site and hybrid executive appointments.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/50">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Primary Timezone: IST (UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-2 text-[#c5a059]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span>Immediate Availability for Placement & Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
