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
    title: "TraceForge",
    summary: "Privacy-first browser monitoring SDK and error/performance dashboard.",
    description: "Built a lightweight monitoring SDK and dashboard that catches JavaScript errors, unhandled rejections, failing API calls, and Core Web Vitals in production, grouping them into issues so teams know what to fix first. The SDK ships as a 9 KB, zero-dependency core with dedicated React and Next.js integrations for render errors and server-side crashes.",
    tags: ["TypeScript", "React", "Next.js", "SDK", "Web Vitals", "Observability", "Open Source"],
    link: "https://thetraceforge.vercel.app/",
    github: "https://github.com/huzaifsk/TraceForge",
    year: "2025",
    image: "/traceforge.png",
    role: "SDK architecture, dashboard design, and framework integrations",
    impact: "Gives teams production visibility into errors and slow API calls within seconds, without pulling in third-party dependencies or capturing sensitive user data.",
    highlights: [
      "Shipped a 9 KB minified + brotli, zero-dependency core SDK with ESM, CommonJS, and CDN builds.",
      "Built React and Next.js integrations that surface render errors and Server Component/Route Handler crashes the browser SDK never sees.",
      "Designed privacy-by-default capture: no input values, cookies, headers, or bodies, with query-string redaction.",
      "Built an issue-grouping dashboard covering errors, API failures, and Core Web Vitals (LCP, INP, CLS) across environments.",
    ],
  },
  {
    id: "2",
    title: "Dextor Components",
    summary: "Open-source React component library built on Radix UI and Tailwind CSS.",
    description: "Architected a fully typed, accessible-by-default React component library on top of Radix UI primitives and Tailwind CSS, spanning form, overlay, feedback, and layout primitives plus a dedicated micro-interaction set. Ships with a precompiled stylesheet, real dark mode via CSS-variable tokens, and full TypeScript definitions for every export.",
    tags: ["React", "TypeScript", "Radix UI", "TailwindCSS", "NPM Library", "Component Library", "Open Source"],
    link: "https://component-dextor-io.pages.dev/",
    github: "https://github.com/huzaifsk/component.dextor.io",
    year: "2024",
    image: "/dextor-v2.png",
    role: "Library architecture, component design system, docs experience",
    impact: "Published to npm as a major 2.x release, giving frontend teams 52 accessible, themeable components without hand-rolling focus management or ARIA behavior.",
    highlights: [
      "Built 52 components across five categories, from form and overlay primitives to a polished Interaction set (Magnetic Button, Text Scramble, Number Ticker, and more).",
      "Used Radix UI primitives for overlay and interactive components to get correct focus management, keyboard navigation, and ARIA out of the box.",
      "Shipped real dark mode with CSS-variable design tokens and a precompiled stylesheet, so consumers need no Tailwind setup to get started.",
      "Wrote full TypeScript definitions and live documentation with a playground and props reference for every component.",
    ],
  },
];
