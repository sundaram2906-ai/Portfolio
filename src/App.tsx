import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnalyticsShowcase } from './components/AnalyticsShowcase';
import { ExperienceEducation } from './components/ExperienceEducation';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => {
      setToastMessage((prev) => (prev?.includes(label) ? null : prev));
    }, 3000);
  };

  const handleCopyUrl = (url: string, title: string) => {
    navigator.clipboard.writeText(url);
    setToastMessage(`Copied link for ${title}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#c5a059]/30 selection:text-[#c5a059]">
      {/* Navigation */}
      <Navbar 
        onCopyText={handleCopyText} 
      />

      {/* Main Content: Finance Heavy Thing on Top (Primary Importance) */}
      <main>
        {/* 1. Hero Introduction with Senior Analyst Deloitte USI & GLIM credentials */}
        <Hero 
          onCopyText={handleCopyText} 
        />

        {/* 2. PRIMARY FINANCE SECTION: Corporate Valuation, DCF Models & Research Deep-Dives */}
        <AnalyticsShowcase />

        {/* 3. Corporate Experience (Deloitte USI Senior Analyst, Exicom) & Education */}
        <ExperienceEducation />

        {/* 4. Strategic Toolkit: Financial Modeling, Megaproject Governance, Econometrics */}
        <SkillsSection />

        {/* 5. Product & Megaproject Prototypes (Saral Paisa Unsecured Lending, Burj Khalifa PM) */}
        <FeaturedProjects 
          onOpenDetails={(project) => setSelectedProject(project)} 
          onCopyUrl={handleCopyUrl} 
        />

        {/* 6. Direct Contact & Coordinates */}
        <ContactSection 
          onCopyText={handleCopyText} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCopyUrl={handleCopyUrl}
      />

      {/* Quick Action Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
