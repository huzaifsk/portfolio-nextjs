import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Overview } from "@/components/Overview";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Skills } from "@/components/skills";
import { Hero } from "@/components/hero";
import { personalData } from "@/data/personal";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.role,
    description: siteConfig.description,
    email: personalData.email,
    telephone: personalData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    url: siteConfig.url,
    sameAs: [
      personalData.social.github,
      personalData.social.linkedin,
      personalData.social.twitter,
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: project.link ?? project.github ?? siteConfig.url,
      description: project.summary,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personJsonLd, websiteJsonLd, itemListJsonLd]),
        }}
      />
      <Hero />
      <Overview />
      <Skills />
      <ExperienceTimeline />
      <Education />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
