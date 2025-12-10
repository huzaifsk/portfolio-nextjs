export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  year: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "GeoBlock Tester",
    description: "Website Accessibility Testing Tool - Built web tool to test website accessibility across 25+ countries using proxy networks and geolocation APIs. Deployed on Cloudflare Pages with React frontend, helping developers verify geo-restrictions.",
    tags: ["React", "JavaScript", "Cloudflare Pages", "Geolocation APIs", "Proxy Networks", "Accessibility Testing"],
    link: "https://geoblock-tester.pages.dev",
    github: "https://github.com/huzaifsk/GeoBlock-Tester",
    year: "2024",
    image: "/geo-block.png"
  },
  {
    id: "2",
    title: "Dextor Components",
    description: "Open Source React UI Library - Architected lightweight, modular React component library with TailwindCSS and Vite, featuring 24+ production-ready components with comprehensive PropTypes validation. Published to npm achieving 200+ downloads.",
    tags: ["React", "TailwindCSS", "Vite", "NPM Library", "Component Library", "Open Source"],
    link: "https://component-dextor-io.pages.dev/",
    github: "https://github.com/huzaifsk/component.dextor.io",
    year: "2024",
    image: "/dextor.png"
  },
];
