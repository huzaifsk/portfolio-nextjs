import { Hero } from "@/components/hero";
import { Overview } from "@/components/Overview";
import { Skills } from "@/components/skills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Education } from "@/components/Education";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
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
