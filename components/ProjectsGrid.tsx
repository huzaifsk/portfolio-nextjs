import { ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-12 sm:py-14 lg:py-16">
      <Reveal className="space-y-6 sm:space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <h2 className="text-subheading font-bold text-black dark:text-white">
            Check out my latest work
          </h2>
          <p className="text-normal text-gray-600 dark:text-gray-400 max-w-2xl">
            Explore my portfolio of frontend solutions that showcase modern web development practices and user-centered design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08} className="group">
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={800}
                      height={450}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="text-gray-400 dark:text-gray-600 text-sm">
                      Project Preview
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                    {project.summary}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="mb-4 space-y-2">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-black dark:text-white">Role:</span>{" "}
                      {project.role}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-black dark:text-white">Impact:</span>{" "}
                      {project.impact}
                    </p>
                  </div>

                  <div className="mb-4 space-y-2">
                    {project.highlights.map((highlight) => (
                      <p key={highlight} className="text-sm text-gray-600 dark:text-gray-400">
                        • {highlight}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black text-xs font-medium rounded-md transition-colors"
                      >
                        <Globe className="size-3" />
                        Live Website
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md transition-colors"
                      >
                        <ExternalLink className="size-3" />
                        GitHub
                      </Link>
                    )}
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
