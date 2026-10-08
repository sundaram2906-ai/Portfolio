import { useState, useEffect } from 'react';
import { Phone, Mail, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoState';

interface NavbarProps {
  onCopyText: (text: string, label: string) => void;
}

export function Navbar({ onCopyText }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { photoUrl, handleImgError } = useProfilePhoto();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Valuation & Credit", href: "#finance" },
    { label: "Corporate Experience", href: "#experience" },
    { label: "Financial Toolkit", href: "#skills" },
    { label: "Other Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 border border-[#c5a059]/40 bg-[#141414] overflow-hidden shrink-0 shadow-md"
              title="Sundaram Kumar Singh"
            >
              <img 
                src={photoUrl} 
                alt="Sundaram Kumar Singh" 
                onError={handleImgError}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter contrast-[1.02]" 
              />
            </div>
            <a href="#" className="flex flex-col group">
              <span className="text-lg sm:text-xl font-light tracking-widest text-white uppercase group-hover:text-[#c5a059] transition duration-200 leading-tight">
                Sundaram
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[#c5a059] uppercase font-mono leading-tight">
                PGDM (Finance) · Ex-Deloitte USI Senior Audit Analyst
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-white/60">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition duration-200 ${
                  idx === 0 ? 'text-[#c5a059]' : 'hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Contact Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onCopyText(PERSONAL_INFO.phone, "Phone Number (+91 8999010103)")}
              className="flex items-center gap-2 text-xs font-mono text-white/80 hover:text-white bg-[#141414] border border-white/10 hover:border-[#c5a059]/40 px-3.5 py-2 transition tracking-wider"
              title="Click to copy phone number"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{PERSONAL_INFO.phone}</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-medium text-black bg-[#c5a059] hover:bg-[#d8b56f] px-4 py-2 tracking-widest uppercase transition"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              className="text-[10px] uppercase tracking-widest text-[#c5a059] border border-[#c5a059]/40 px-2.5 py-1.5"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/60 hover:text-white transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-white/5 mt-4 space-y-3 bg-[#141414] p-5 border border-white/5 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-widest text-white/70 hover:text-[#c5a059] transition py-1.5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/5 flex flex-col gap-2 font-mono">
              <a
                href={PERSONAL_INFO.socials.tel}
                className="flex items-center gap-2 text-xs text-white/80 py-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>+91 8999010103</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.emailMailto}
                className="flex items-center gap-2 text-xs text-white/80 py-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
