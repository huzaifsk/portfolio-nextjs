import Image from "next/image";
import { education } from "@/data/education";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

// Helper function to get education logo
const getEducationLogo = (institution: string) => {
  const logoMap: { [key: string]: string } = {
    'Manipal University': '/manipal.png',
    'Mumbai University': '/mumbai.jpeg'
  };

  return logoMap[institution] || '/default-university.png';
};

/**
 * Same timeline rail as the experience section: logo column, connecting spine,
 * content to the right. Spine offsets match ExperienceItem exactly so the two
 * sections read as one continuous vertical rhythm down the page.
 */
export function Education() {
  return (
    <section id="education" className="py-12 sm:py-14 lg:py-16">
      <Reveal className="space-y-8 sm:space-y-10 lg:space-y-12">
        <SectionHeading>Education</SectionHeading>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {education.map((edu, index) => {
            const isLast = index === education.length - 1;

            return (
              <Reveal key={edu.id} delay={index * 0.08}>
                <div className="relative flex items-start gap-4 sm:gap-5">
                  {/*
                    Timeline spine. Runs from just under this logo to the top of
                    the next, bridging the parent's space-y gap. Omitted on the
                    last entry so the line does not dangle.
                  */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-5 sm:left-6 top-[3.25rem] sm:top-[3.75rem] -bottom-8 sm:-bottom-10 lg:-bottom-12 w-px -translate-x-1/2 bg-gradient-to-b from-gray-200 to-gray-200/40 dark:from-gray-800 dark:to-gray-800/40"
                    />
                  )}

                  {/*
                    Rounded square with object-contain, matching the experience
                    logos. A circular crop was cutting the edges off these marks.
                  */}
                  <div className="relative mt-0.5 flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 sm:h-12 sm:w-12">
                      <Image
                        src={getEducationLogo(edu.institution)}
                        alt={`${edu.institution} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="min-w-0 flex-1">
                        {/* No truncate: the full institution name always renders. */}
                        <h3 className="text-base font-semibold tracking-tight text-black dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                          {edu.degree}, {edu.field}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs tabular-nums text-gray-500 dark:text-gray-500 sm:text-sm">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
