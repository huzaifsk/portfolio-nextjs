export interface Skill {
  name: string;
  icon?: string;
  category: string;
}

export const skills: Skill[] = [
  // Frontend Core
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  
  // Styling & UI
  { name: "TailwindCSS", category: "styling" },
  { name: "SCSS", category: "styling" },
  { name: "Material UI", category: "styling" },
  { name: "Framer Motion", category: "styling" },
  
  // Performance & Optimization
  { name: "Lazy Loading", category: "performance" },
  { name: "Code Splitting", category: "performance" },
  { name: "Core Web Vitals", category: "performance" },
  { name: "SEO", category: "performance" },
  
  // Accessibility
  { name: "WCAG 2.1 AA", category: "accessibility" },
  { name: "ARIA", category: "accessibility" },
  { name: "Keyboard Navigation", category: "accessibility" },
  
  // Backend & APIs
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "REST APIs", category: "backend" },
  
  // Development Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Agile/Scrum", category: "tools" },
];

export const skillsByCategory = {
  frontend: skills.filter(s => s.category === "frontend"),
  styling: skills.filter(s => s.category === "styling"),
  performance: skills.filter(s => s.category === "performance"),
  accessibility: skills.filter(s => s.category === "accessibility"),
  backend: skills.filter(s => s.category === "backend"),
  tools: skills.filter(s => s.category === "tools"),
  ui: skills.filter(s => s.category === "ui"),
  tools: skills.filter(s => s.category === "tools"),
};
