import { experiences } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";
import { ExperienceItem } from "@/components/experience-item";
import { SectionHeading } from "@/components/ui/section-heading";

// Helper function to get company logo
const getCompanyLogo = (company: string) => {
  const logoMap: { [key: string]: string } = {
    'Metis Labs B.V.': '/metis.png',
    'Wolves & Company': '/wolves.png',
    'EdgeCRM': '/edge.jpeg',
    'IlmTech Solutions': '/ilmtec.png'
  };

  return logoMap[company] || '/default-company.png';
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-12 sm:py-14 lg:py-16">
      <Reveal className="space-y-8 sm:space-y-10 lg:space-y-12">
        <SectionHeading>Experience</SectionHeading>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              logoSrc={getCompanyLogo(experience.company)}
              index={index}
              isLast={index === experiences.length - 1}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
