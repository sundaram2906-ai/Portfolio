export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'flagship' | 'fintech' | 'analytics' | 'finance';
  categoryLabel: string;
  badge: string;
  url: string;
  isExternalApp: boolean;
  description: string;
  fullOverview: string;
  keyFeatures: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string; // Tailwind color class or hex hint
  featured?: boolean;
}

export interface ResearchStudy {
  id: string;
  orderNumber?: number;
  title: string;
  subtitle?: string;
  institution: string;
  role: string;
  location?: string;
  date: string;
  tag: string;
  summary: string;
  highlights: string[];
  keyMetrics: { label: string; value: string }[];
  actionLink?: {
    label: string;
    url: string;
    isExternal?: boolean;
  };
}

export interface SkillGroup {
  title: string;
  iconName: string;
  skills: { name: string; level: string; tag: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string[];
  skillsUsed: string[];
}
