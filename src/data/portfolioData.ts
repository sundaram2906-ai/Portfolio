import { Project, ResearchStudy, SkillGroup, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Sundaram Kumar Singh",
  title: "Corporate Finance, Valuation & Risk Analysis",
  tagline: "PGDM (Finance) candidate at Great Lakes Gurgaon with 32 months as a Senior Audit Analyst at Deloitte USI, auditing client accounts up to AUD 1B+. Specializing in equity valuation, capital structure analysis, working capital optimization, and credit risk modeling.",
  email: "sundaram2906@gmail.com",
  phone: "8999010103",
  formattedPhone: "+91 8999010103",
  location: "Gurgaon, India",
  relocation: "Open to Mumbai & Delhi NCR",
  mobility: "Open to Mumbai & Delhi NCR",
  education: "PGDM (Finance) @ Great Lakes Gurgaon | BBA @ BIT Mesra",
  currentRole: "PGDM (Finance) Candidate @ Great Lakes | Ex-Deloitte USI Senior Audit Analyst",
  profileImage: "/sundar.jpg",
  aboutBio: "PGDM (Finance) candidate at Great Lakes Institute of Management, Gurgaon, with 32 months as a Senior Audit Analyst at Deloitte USI, auditing client accounts up to AUD 1B+. My work combines forensic screening (Beneish M-Score, Altman Z-Score), DCF valuation and working-capital analysis, including ₹0.78 Cr of cash recovery identified at Exicom Tele-Systems.",
  socials: {
    whatsapp: "https://wa.me/918999010103",
    emailMailto: "mailto:sundaram2906@gmail.com",
    tel: "tel:+918999010103",
  },
  stats: [
    { label: "Inventory Flows Analysed", value: "₹19.14 Cr" },
    { label: "Cash Recovery Identified", value: "₹0.78 Cr" },
    { label: "Client Accounts Audited", value: "AUD 1B+" },
    { label: "Deloitte USI Experience", value: "32 Months" },
  ]
};

// Core dossier entries in exact requested section order:
// 1. Asian Paints
// 2. Exicom
// 3. Deloitte
// 4. Corporate Solvency & Capital Structure Analysis
// 5. Saral Paisa (reframed as cash-flow-based credit underwriting and RBI digital lending norms)
export const RESEARCH_STUDIES: ResearchStudy[] = [
  {
    id: "asian-paints-valuation",
    orderNumber: 1,
    title: "Asian Paints Limited: Equity Research & Intrinsic Valuation",
    institution: "Financial Statement Analysis & Corporate Valuation",
    role: "Academic Project: Equity Research",
    location: "Gurgaon, India",
    date: "August 2026",
    tag: "Equity Research & DCF",
    summary: "Rigorous intrinsic valuation and forensic audit of Asian Paints Ltd (CMP ₹2,757), combining standalone FCFF DCF modeling (WACC 15.09%), Relative Peer Multiples, Beneish M-Score, and Altman Z-Score.",
    highlights: [
      "Built multi-year standalone FCFF DCF model deriving an intrinsic baseline value of ₹380.72 per share, uncovering extreme market multiple expansion.",
      "Synthesized Peer Relative Valuation against Berger, Kansai Nerolac, and JSW Dulux yielding a blended fair value of ₹1,648.3 (40.2% implied downside).",
      "Executed Beneish 8-variable M-Score (-1.960 vs -1.78 threshold) confirming earnings quality is clean with low manipulation probability (~2.5% via standard normal CDF).",
      "Evaluated Altman Z-Score (33.55) confirming negligible default risk supported by ₹9,182 Cr liquid reserves."
    ],
    keyMetrics: [
      { label: "WACC Derived", value: "15.09%" },
      { label: "Target Fair Value", value: "₹1,648.3" },
      { label: "Beneish M-Score", value: "-1.960 (~2.5% prob.)" },
      { label: "Altman Z-Score", value: "33.55 (Safe)" }
    ]
  },
  {
    id: "exicom-scm",
    orderNumber: 2,
    title: "Month-on-Month Inventory Movement & Working Capital Analysis",
    institution: "Exicom Tele-Systems Limited & Great Lakes Institute of Management",
    role: "Finance & Operations Summer Intern",
    location: "Gurgaon, India",
    date: "Summer 2026",
    tag: "Working Capital & Cash Recovery",
    summary: "Comprehensive operational and financial analysis of Plant 4210 (Gurgaon) across 12,523 GRN transactions, 74,434 consumption records, and ₹19.14 Cr inbound flow during the plant transition to Hyderabad.",
    highlights: [
      "Identified ₹3.03 Cr dormant inventory (180+ days) and formulated a 7-step structured disposition programme unlocking ₹0.78 Cr cash recovery and ₹0.76 Cr annual carrying cost savings.",
      "Diagnosed open-PO vs. cancelled sales-order misalignment, curbing potential ₹3.16 Cr over-procurement exposure.",
      "Calculated MRP-to-GRN variances revealing 25% front-loading in Month 1 (₹1.52 Cr excess working capital committed).",
      "Designed differentiated SKU-level ABC policies for the new Hyderabad hub where 6% of SKUs represent 80% of value."
    ],
    keyMetrics: [
      { label: "Inbound Flow Analysed", value: "₹19.14 Cr" },
      { label: "Cash Recovery Identified", value: "₹0.78 Cr" },
      { label: "Annual Cost Savings", value: "₹1.14 Cr/yr" },
      { label: "Transactions Evaluated", value: "86,957" }
    ]
  },
  {
    id: "deloitte-audit",
    orderNumber: 3,
    title: "Statutory Audit Evidence & Risk Assessment: Client Accounts up to AUD 1B+",
    institution: "Deloitte USI (Deloitte Touche Tohmatsu India)",
    role: "Senior Audit Analyst",
    location: "Hyderabad, India",
    date: "2022 – 2025 (32 Months)",
    tag: "Statutory Audit & Evidence",
    summary: "Conducted financial statement audits, analytical procedures, and substantive testing for international client accounts with balance sheet scale up to AUD 1B+, validating revenue recognition, cash flows, and internal control effectiveness.",
    highlights: [
      "Audited statutory financial statement line items for high-value client accounts up to AUD 1B+, ensuring compliance with rigorous international accounting standards.",
      "Executed substantive audit testing and variance analyses across EBITDA, revenue recognition, and operating cash flows to evaluate risk of material misstatement.",
      "Performed end-to-end audit evidence reconciliations and internal control testing, establishing complete audit trails for senior partner review.",
      "Synthesized complex financial transaction datasets using advanced financial modeling, validating ledger integrity and disclosures under zero-misstatement tolerance."
    ],
    keyMetrics: [
      { label: "Tenure Completed", value: "32 Months" },
      { label: "Client Account Scale", value: "Up to AUD 1B+" },
      { label: "Practice Area", value: "Statutory Audit" },
      { label: "Designation", value: "Senior Audit Analyst" }
    ]
  },
  {
    id: "corporate-solvency-analysis",
    orderNumber: 4,
    title: "Corporate Solvency & Capital Structure Analysis: Liquidity Waterfall & Credit Assessment",
    institution: "Corporate Credit & Debt Capacity Advisory Case Study",
    role: "Academic Project: Corporate Credit & Debt Advisory",
    location: "Gurgaon, India",
    date: "2026",
    tag: "Credit & Solvency Analysis",
    summary: "Comprehensive credit screening and capital structure model for an over-levered corporate entity facing severe cash burn, evaluating Altman Z''-Score solvency classification, 13-week liquidity waterfall, debt sustainability thresholds (DSCR/ICR), and lender recovery under insolvency resolution.",
    highlights: [
      "Built 13-week Rolling Cash Flow (STCF) liquidity waterfall isolating the point of cash deficit and calculating operational cash burn under varying revenue compression scenarios.",
      "Conducted Solvency Risk Screening utilizing Altman Z''-Score (1.14 - High Risk Zone) and Interest Coverage Ratio (ICR < 0.85x), quantifying probability of default.",
      "Decomposed ₹650 Cr capital structure into sustainable debt (serviceable at minimum 1.25x DSCR target) and subordinated debt proposed for equity swap / tenure elongation.",
      "Simulated Lender Resolution Waterfall: modeled recovery payouts across Senior Secured (78%), Unsecured Financial Creditors (32%), and Operational Creditors (15%) under CIRP resolution vs immediate liquidation value."
    ],
    keyMetrics: [
      { label: "Altman Z''-Score", value: "1.14 (High Risk)" },
      { label: "Debt Evaluated", value: "₹650 Cr Base" },
      { label: "Target DSCR", value: "1.25x Sustainable" },
      { label: "Senior Recovery", value: "78% Resolution" }
    ]
  },
  {
    id: "saral-paisa-underwriting",
    orderNumber: 5,
    title: "Saral Paisa: Cash-Flow Credit Underwriting & RBI Digital Lending Architecture",
    subtitle: "Digital Micro-Credit Underwriting, DTI Risk Rules & RBI DLG Compliance Prototype",
    institution: "FinTech Credit Risk & Google AI Studio Prototype",
    role: "Credit Product & Underwriting Designer",
    location: "Gurgaon, India",
    date: "2026",
    tag: "Credit Underwriting & Digital Lending",
    summary: "Reframed around institutional credit risk and regulatory compliance: evaluates alternative cash-flow-based credit assessment for thin-file and salaried borrowers, assessing debt-to-income (DTI) thresholds, dynamic EMI debt service feasibility, and mandatory RBI Digital Lending Guidelines (DLG) & Key Fact Statements (KFS).",
    highlights: [
      "Formulated cash-flow-based credit underwriting evaluating net monthly recurring surplus and bank inflow frequency rather than traditional asset collateral.",
      "Enforced strict debt-to-income (DTI < 45%) and fixed obligation to income ratio (FOIR) underwriting caps to prevent borrower over-indebtedness.",
      "Architected regulatory compliance in alignment with RBI Digital Lending Guidelines (DLG), generating automated Key Fact Statements (KFS) detailing APR and total cost of credit.",
      "Prototyped interactive borrower funnel and dynamic EMI repayment schedules on Google AI Studio to validate underwriting logic and risk disclosures."
    ],
    keyMetrics: [
      { label: "Underwriting Model", value: "Cash-Flow Based" },
      { label: "DTI / FOIR Limit", value: "< 45% Cap" },
      { label: "Regulatory Norms", value: "RBI DLG & KFS" },
      { label: "Prototype Platform", value: "Google AI Studio" }
    ],
    actionLink: {
      label: "Launch AI Studio Prototype",
      url: "https://saralpaisa-unsecured-lending.ai.studio",
      isExternal: true
    }
  }
];

// Collapsed "Other Projects" (Burj Khalifa, Web3 and Adyen - kept collapsed so they don't sit in the first impression)
export const OTHER_PROJECTS: Project[] = [
  {
    id: "burj-app",
    title: "Burj Khalifa: Megaproject Management Plan",
    subtitle: "Interactive PM Plan: WBS, Critical Path (CPM), EVM S-Curve & Risk Matrix",
    category: "flagship",
    categoryLabel: "Project Management Assignment",
    badge: "Interactive PM Plan (Netlify)",
    url: "https://burj.netlify.app/",
    isExternalApp: true,
    description: "An exhaustive academic Project Management Plan for the Burj Khalifa megaproject, dissecting WBS decomposition, Critical Path scheduling (MS Project), Earned Value Management (EVM) cost divergence, RACI governance, and geotechnical risk mitigation.",
    fullOverview: "A comprehensive executive project management assignment evaluating the $1.5B, 828-meter Burj Khalifa development across a 490-acre district. Synthesizes core PMBOK principles to model how scope, time, and cost were balanced while quality remained non-negotiable. Implemented as an interactive web-based management plan on Netlify featuring live WBS navigation, task-level Gantt network charts, S-Curve variance analysis, and contractor RACI matrices.",
    keyFeatures: [
      "Work Breakdown Structure (WBS) Decomposition: 5-level hierarchical decomposition spanning Substructure, Buttressed Core Superstructure, MEP & Lifts, and Façade",
      "Baseline Schedule & Critical Path Method (CPM): MS Project workflow mapping WBS → Activities → Dependencies with critical path around core wall cycles",
      "Earned Value Management (EVM) & Cost S-Curve: Modeled Planned Value (PV), Earned Value (EV), and Actual Cost (AC) variance post-Month 42",
      "RACI Organizational Governance: Responsibility Assignment Matrix across Emaar Properties, Turner Construction, SOM, and Samsung C&T / Besix JV"
    ],
    techStack: ["MS Project (CPM/Gantt)", "Earned Value Management (EVM)", "WBS Decomposition", "RACI Framework", "Risk Response Planning", "Interactive Web UI"],
    metrics: [
      { label: "Megaproject Budget", value: "$1.5 Billion" },
      { label: "Tower Height Analyzed", value: "828m (163 Floors)" },
      { label: "Core Methodology", value: "WBS · CPM · EVM · RACI" }
    ],
    accentColor: "from-amber-500/20 to-yellow-500/20 border-yellow-500/40 text-yellow-400",
    featured: false
  },
  {
    id: "adyen-encyclopedia",
    title: "Adyen Payments Encyclopedia",
    subtitle: "Global FinTech Architecture & Knowledge Hub",
    category: "fintech",
    categoryLabel: "FinTech & Payments",
    badge: "Payments Intelligence",
    url: "https://snehangsusaha2017-prog.github.io/adyen-encyclopedia/",
    isExternalApp: true,
    description: "An exhaustive technical and functional knowledge platform on global payments processing, unified commerce, acquiring mechanics, and merchant settlement systems.",
    fullOverview: "A specialized FinTech knowledge system and reference architecture dissecting Adyen's unified commerce infrastructure. It covers global card brand integrations, dynamic routing, interchange fee optimization, tokenization, multi-currency settlement, and 3D Secure 2 authentication workflows.",
    keyFeatures: [
      "In-depth breakdown of global payment gateway & full-stack acquirer architecture",
      "Interchange++ fee mechanics and multi-currency treasury settlement flows",
      "Automated risk scoring, RevenueProtect fraud mitigation, and chargeback lifecycles",
      "Unified POS, in-app, and web payment sequence diagrams with tokenization logic"
    ],
    techStack: ["FinTech Protocols", "React", "Documentation Engine", "System Design", "Tailwind CSS"],
    metrics: [
      { label: "Domain", value: "Global FinTech" },
      { label: "Coverage", value: "Acquiring to Settlement" },
      { label: "Format", value: "Interactive System Guide" }
    ],
    accentColor: "from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-400",
    featured: false
  },
  {
    id: "blockchain-portal",
    title: "Web3 Blockchain Portal",
    subtitle: "Decentralized Network Gateway & Explorer",
    category: "fintech",
    categoryLabel: "Web3 & Blockchain",
    badge: "Decentralized Portal",
    url: "https://snehangsusaha2017-prog.github.io/blockchain-portal/",
    isExternalApp: true,
    description: "An intuitive decentralized blockchain gateway designed for on-chain telemetry, validator network insights, transaction exploration, and Web3 integration.",
    fullOverview: "A sleek decentralized infrastructure explorer and Web3 portal. Designed for clarity and cryptographic transparency, it delivers live network verification metrics, validator state tracking, smart contract inspection, and secure cryptographic primitives within a modern, cyber-dark UI.",
    keyFeatures: [
      "Real-time block and validator network state telemetry with cryptographic integrity checks",
      "Cryptographic address explorer and smart contract interaction inspection",
      "Responsive Web3 wallet connectivity and on-chain account state evaluation",
      "Ultra-low latency data synchronization with public and testnet chain nodes"
    ],
    techStack: ["Web3.js / Ethers", "React", "TypeScript", "Smart Contracts", "Tailwind CSS", "GitHub Pages"],
    metrics: [
      { label: "Architecture", value: "Decentralized" },
      { label: "Deployment", value: "GitHub Pages" },
      { label: "Performance", value: "Sub-second sync" }
    ],
    accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400",
    featured: false
  }
];

export const FEATURED_PROJECTS = OTHER_PROJECTS;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Corporate Valuation & Capital Strategy",
    iconName: "TrendingUp",
    skills: [
      { name: "Discounted Cash Flow (FCFF/FCFE)", level: "Advanced", tag: "Valuation" },
      { name: "Relative Peer Multiples (P/E, EV/EBITDA)", level: "Advanced", tag: "Valuation" },
      { name: "Capital Structure & Debt Capacity Modeling", level: "Advanced", tag: "Credit" },
      { name: "Solvency Screening (Altman Z-Score)", level: "Advanced", tag: "Risk" },
      { name: "13-Week Cash Flow & Liquidity Waterfall", level: "Advanced", tag: "Treasury" },
      { name: "Sustainable Debt & DSCR / ICR Modeling", level: "Advanced", tag: "Credit" }
    ]
  },
  {
    title: "Statutory Audit & Forensic Screening",
    iconName: "ShieldCheck",
    skills: [
      { name: "Financial Statement Audit (Deloitte USI)", level: "Advanced", tag: "Statutory Audit" },
      { name: "Forensic Earnings Screening (Beneish M-Score)", level: "Advanced", tag: "Forensics" },
      { name: "EBITDA & Revenue Variance Decompositions", level: "Advanced", tag: "Audit Evidence" },
      { name: "Substantive Testing & ICFR Controls", level: "Advanced", tag: "Compliance" },
      { name: "Audit Trail & Workpaper Documentation", level: "Advanced", tag: "Audit Quality" },
      { name: "Risk of Material Misstatement (RMM)", level: "Advanced", tag: "Risk Analysis" }
    ]
  },
  {
    title: "Working Capital & Credit Underwriting",
    iconName: "BarChart3",
    skills: [
      { name: "Working Capital & Inventory Movement (Exicom)", level: "Advanced", tag: "Working Capital" },
      { name: "Dormant Inventory Cash Recovery", level: "Advanced", tag: "Liquidity" },
      { name: "Cash-Flow-Based Underwriting (Saral Paisa)", level: "Advanced", tag: "Credit Risk" },
      { name: "Debt-to-Income (DTI) & FOIR Caps", level: "Advanced", tag: "Underwriting" },
      { name: "RBI Digital Lending Guidelines (DLG) & KFS", level: "Advanced", tag: "Compliance" },
      { name: "SAP HANA MM Module Reconciliations", level: "Intermediate", tag: "ERP" }
    ]
  },
  {
    title: "Financial Modeling & Decision Analytics",
    iconName: "Code2",
    skills: [
      { name: "Advanced Financial Modeling (MS Excel)", level: "Advanced", tag: "Financial Modeling" },
      { name: "Power BI Desktop & Financial Reporting", level: "Advanced", tag: "BI" },
      { name: "Econometric Regression (OLS, ANOVA)", level: "Advanced", tag: "Statistics" },
      { name: "Sensitivity & Scenario Modeling", level: "Advanced", tag: "Analysis" },
      { name: "Senior vs Subordinated Debt Recovery Waterfall", level: "Advanced", tag: "Debt Advisory" },
      { name: "Senior Stakeholder & Lender Presentations", level: "Advanced", tag: "Advisory" }
    ]
  }
];

export const EDUCATION_AND_EXPERIENCE: { education: ExperienceItem[]; experience: ExperienceItem[] } = {
  education: [
    {
      period: "2025 – 2027",
      role: "Post Graduate Diploma in Management (PGDM) — Finance Candidate",
      organization: "Great Lakes Institute of Management",
      location: "Gurgaon, India",
      description: [
        "Specialization in Corporate Finance, Financial Valuation, Credit & Solvency Analysis, and Working Capital Optimization.",
        "Authored in-depth summer research dissertation on Exicom Tele-Systems inventory dynamics and operational efficiency (Plant 4210, Gurgaon).",
        "Lead author on major financial and valuation research: Asian Paints DCF Intrinsic Valuation & Forensic Screening, Corporate Solvency & Capital Structure Modeling, and Saral Paisa Credit Underwriting."
      ],
      skillsUsed: ["DCF Valuation", "Credit & Solvency Analysis", "Beneish M-Score", "Working Capital", "Financial Modeling"]
    },
    {
      period: "2019 – 2022",
      role: "Bachelor of Business Administration (BBA)",
      organization: "Birla Institute of Technology, Mesra",
      location: "Ranchi / Patna Campus, India",
      description: [
        "Rigorous foundation in financial accounting, cost management, quantitative methods, economics, and business organization.",
        "Graduation thesis: 'Extract Analysis of Financial Statements and see how Market Research Affected the Finance Department of Learnovate'."
      ],
      skillsUsed: ["Financial Statements", "Cost Benefit Analysis", "Capital Budgeting", "Market Research"]
    }
  ],
  experience: [
    {
      period: "2022 – 2025 (32 Months)",
      role: "Senior Audit Analyst",
      organization: "Deloitte USI (Deloitte Touche Tohmatsu India)",
      location: "Hyderabad, India",
      description: [
        "Executed statutory audit procedures, substantive testing, and analytical reviews for international client accounts with balance sheet scale up to AUD 1B+.",
        "Conducted detailed financial statement reconciliations, EBITDA and revenue variance decompositions, and audit risk assessments to evaluate risk of material misstatement.",
        "Examined internal controls over financial reporting (ICFR), documented audit trails, and ensured adherence to international accounting standards under zero-misstatement tolerance.",
        "Synthesized large-scale transaction datasets using advanced financial models, preparing detailed audit workpapers for senior manager and partner review."
      ],
      skillsUsed: ["Statutory Audit", "Financial Statement Analysis", "Audit Evidence", "Risk Assessment", "EBITDA Variance", "Internal Controls"]
    },
    {
      period: "Summer 2026",
      role: "Finance & Operations Summer Intern",
      organization: "Exicom Tele-Systems Limited",
      location: "Gurgaon, India",
      description: [
        "Conducted end-to-end month-on-month inventory movement analysis across Plant 4210 (Gurgaon) for EV Charging and SMR Telecom Power Systems.",
        "Evaluated 12,523 Goods Receipt Notes (₹19.14 Cr inbound flow) and 74,434 production consumption movements from SAP HANA MM module.",
        "Formulated dead-stock disposition framework identifying ₹3.03 Cr dormant stock to unlock ₹0.78 Cr cash recovery and ₹1.14 Cr annual carrying cost savings.",
        "Presented strategic findings directly to Director of Operations and senior plant leadership."
      ],
      skillsUsed: ["Working Capital Optimization", "Inventory Flow Analytics", "SAP HANA MM", "Cash Recovery", "ABC Stratification"]
    }
  ]
};
