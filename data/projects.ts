export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  tags: string[];
  link?: string;
  github?: string;
  year: string;
  image?: string;
  role: string;
  impact: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "GeoBlock Tester",
    summary: "Website accessibility and geo-restriction testing platform.",
    description: "Built a developer tool to test website availability, geo-restrictions, and regional behavior across 25+ countries using proxy networks and geolocation APIs. Shipped a fast React frontend with a workflow optimized for repeat verification and QA.",
    tags: ["React", "JavaScript", "Cloudflare Pages", "Geolocation APIs", "Proxy Networks", "Accessibility Testing"],
    link: "https://geoblock-tester.pages.dev",
    github: "https://github.com/huzaifsk/GeoBlock-Tester",
    year: "2024",
    image: "/geo-block.png",
    role: "Product design, frontend architecture, and deployment",
    impact: "Helped developers validate region-specific access issues without relying on manual VPN workflows.",
    highlights: [
      "Designed a clear country-switching workflow for rapid test iteration.",
      "Integrated proxy and geolocation APIs to simulate real-world regional access.",
      "Deployed on Cloudflare Pages for a lightweight global delivery setup.",
    ],
  },
  {
    id: "2",
    title: "Dextor Components",
    summary: "Open-source React UI component library and documentation site.",
    description: "Architected a lightweight, modular React UI library with Tailwind CSS and Vite, pairing reusable components with live documentation and a cleaner contributor workflow. Built it to improve delivery speed and consistency for frontend teams.",
    tags: ["React", "TailwindCSS", "Vite", "NPM Library", "Component Library", "Open Source"],
    link: "https://component-dextor-io.pages.dev/",
    github: "https://github.com/huzaifsk/component.dextor.io",
    year: "2024",
    image: "/dextor.png",
    role: "Library architecture, component design system, docs experience",
    impact: "Published to npm and reached 200+ downloads while creating a stronger reusable UI foundation.",
    highlights: [
      "Built 24+ production-ready components with a consistent API surface.",
      "Created live documentation to make adoption and experimentation faster.",
      "Focused on modular composition so teams can scale usage without carrying unnecessary weight.",
    ],
  },
];
