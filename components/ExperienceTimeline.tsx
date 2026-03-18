import Image from "next/image";
import { experiences } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";

// Helper function to get company logo
const getCompanyLogo = (company: string) => {
  const logoMap: { [key: string]: string } = {
    'Fable Fintech': '/fable-logo.jpeg',
    'Wolves & Company': '/wolves.png',
    'EdgeCRM': '/edge.jpeg', 
    'IlmTech Solutions': '/ilmtec.png'
  };
  
  return logoMap[company] || '/default-company.png';
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-12 sm:py-14 lg:py-16">
      <Reveal className="space-y-6 sm:space-y-8 lg:space-y-10">
        <h2 className="text-subheading font-bold text-black dark:text-white">
          Work Experience
        </h2>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {experiences.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 0.08} className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm shadow-black/10 ring-1 ring-black/10 dark:ring-white/10 border-2 border-white dark:border-gray-900">
                    <Image 
                      src={getCompanyLogo(experience.company)}
                      alt={`${experience.company} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-1 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-normal font-semibold text-black dark:text-white">
                        {experience.company}
                      </h3>
                      <p className="text-sm sm:text-normal font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">
                        {experience.role}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm  text-gray-500 dark:text-gray-500 self-start sm:self-auto">
                      {experience.period}
                    </span>
                  </div>

                  <p className="mb-3 text-sm font-medium text-gray-800 dark:text-gray-200">
                    {experience.summary}
                  </p>

                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-black dark:text-white">Impact:</span>{" "}
                    {experience.impact}
                  </p>

                  <div className="text-normal text-gray-600 dark:text-gray-400 leading-relaxed mb-4 space-y-2">
                    {experience.responsibilities.slice(0, 3).map((responsibility, idx) => (
                      <p key={idx} className="text-sm">
                        • {responsibility}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
