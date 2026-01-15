export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Fable Fintech",
    role: "React Developer",
    period: "Jan 2025 - Present",
    startDate: "2025-01",
    endDate: null,
    responsibilities: [
      "Spearheading the migration of IndusInd Fast Remit (IFR) web application from legacy JSP architecture to modern React TypeScript, modernizing a critical financial remittance platform.",
      "Architecting component-based UI structure by converting JSP servlets and scriptlets into reusable React components with TypeScript interfaces, improving code maintainability.",
      "Integrating REST API architecture to replace direct database calls from JSP pages, establishing clear separation of concerns between frontend and backend layers",
      "Building responsive, mobile-first UI with Tailwind, replacing legacy JSP-generated HTML tables and inline styles"
    ],
    technologies: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "REST APIs", "Git", "Redux Toolkit", "Ant Design", "Vite"]
  },
  {
    id: "2",
    company: "Wolves & Company",
    role: "Software Engineer (Freelance)",
    period: "Apr 2024 - May 2025",
    startDate: "2024-04",
    endDate: "2025-05",
    responsibilities: [
      "Architected mobile-first designs for 15+ websites, achieving 60% mobile traffic increase and 35% bounce rate reduction",
      "Improved page load time from 4.2s to 1.8s through lazy loading and optimization, consistently achieving 90+ Lighthouse scores",
      "Created 25+ reusable React components for a patient management system, reducing code duplication by 50%",
      "Implemented WCAG 2.1 AA accessibility across all projects, ensuring full keyboard navigation and screen reader support"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "SCSS", "Material UI", "Framer Motion"]
  },
  {
    id: "3",
    company: "EdgeCRM",
    role: "Senior React Developer",
    period: "Dec 2023 - Mar 2024",
    startDate: "2023-12",
    endDate: "2024-03",
    responsibilities: [
      "Led development of a multilingual e-commerce portal using React and TypeScript, serving 5,000+ daily users with 99.9% uptime",
      "Designed and implemented an accessible enrollment flow for elderly users, improving completion rate from 45% to 78%",
      "Developed a real-time storefront dashboard capable of processing 1,000+ daily transactions with sub-second latency",
      "Reduced bug reports by 25% through coordinated QA and implementation of automated testing workflows"
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "REST APIs", "Git", "Agile/Scrum"]
  },
  {
    id: "3b",
    company: "EdgeCRM",
    role: "Associate Software Engineer",
    period: "Jan 2023 - Dec 2023",
    startDate: "2023-01",
    endDate: "2023-12",
    responsibilities: [
      "Built a user lifecycle management system that reduced manual management time by 40% and minimized process errors by 25%",
      "Optimized database queries, which reduced overall data retrieval time by 60% (from 5s to 2s)",
      "Integrated secure password functionality with bcrypt, ensuring high security and 99.99% accuracy for 1,000+ users"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "bcrypt", "REST APIs", "Git"]
  },
  {
    id: "4",
    company: "IlmTech Solutions",
    role: "Fullstack Engineer",
    period: "Jan 2022 - Nov 2022",
    startDate: "2022-01",
    endDate: "2022-11",
    responsibilities: [
      "Developed a JWT authentication flow that reduced login errors by 30% and improved speed by 2 seconds",
      "Achieved 95+ Lighthouse scores across 5+ device breakpoints with a 40% faster mobile load time compared to the previous version",
      "Implemented robust error handling mechanisms, which led to a 35% reduction in support tickets"
    ],
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub", "VS Code", "Postman", "Figma"]
  }
];
