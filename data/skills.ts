export interface Skill {
  name: string;
  icon?: string;
  category: string;
}

export const skills: Skill[] = [
  // Frontend Core
  { name: "React.js", icon: "/react_light.svg", category: "frontend" },
  { name: "Next.js", icon: "/nextjs_icon_dark.svg", category: "frontend" },
  { name: "TypeScript", icon: "/typescript.svg", category: "frontend" },
  { name: "JavaScript (ES6+)", icon: "/javascript.svg", category: "frontend" },
  { name: "HTML5", icon: "/html5.svg", category: "frontend" },
  { name: "CSS3", icon: "/css_old.svg", category: "frontend" },
  
  // State Management
  { name: "Redux", icon: "/redux.svg", category: "state" },
  
  // Styling & UI
  { name: "TailwindCSS", icon: "/tailwindcss.svg", category: "styling" },
  { name: "SCSS", icon: "/sass.svg", category: "styling" },
  { name: "Material UI", category: "styling" },
  { name: "Ant Design", icon: "/ant-design-dark-theme.svg", category: "styling" },
  { name: "Framer Motion", icon: "/motion_dark.svg", category: "styling" },
  
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
  { name: "Node.js", icon: "/nodejs.svg", category: "backend" },
  { name: "Express.js", icon: "/expressjs_dark.svg", category: "backend" },
  { name: "MongoDB", icon: "/mongodb-icon-dark.svg", category: "backend" },
  { name: "REST APIs", category: "backend" },
  
  // Development Tools
  { name: "Git", icon: "/git.svg", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Figma", icon: "/figma.svg", category: "tools" },
  { name: "Agile/Scrum", category: "tools" },
];

export const skillsByCategory = {
  frontend: skills.filter(s => s.category === "frontend"),
  state: skills.filter(s => s.category === "state"),
  styling: skills.filter(s => s.category === "styling"),
  performance: skills.filter(s => s.category === "performance"),
  accessibility: skills.filter(s => s.category === "accessibility"),
  backend: skills.filter(s => s.category === "backend"),
  tools: skills.filter(s => s.category === "tools"),
};
