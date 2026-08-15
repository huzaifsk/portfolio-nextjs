import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Projects are laid out as full-width entries separated by a hairline rather
 * than as bordered cards in a two-column grid.
 *
 * Two reasons: the screenshots are the strongest asset in this section and were
 * being rendered at roughly half their available width, and the card chrome was
 * communicating no hierarchy that spacing and a rule do not already communicate.
 */
export function ProjectsGrid() {
  return (
    <section id="projects" className="py-12 sm:py-14 lg:py-16">
      <Reveal className="space-y-8 sm:space-y-10 lg:space-y-12">
        <SectionHeading>Selected work</SectionHeading>

        <div className="space-y-14 sm:space-y-16 lg:space-y-20">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.08}
              className={
                index > 0
                  ? "group border-t border-gray-200 pt-14 dark:border-gray-800 sm:pt-16 lg:pt-20"
                  : "group"
              }
            >
              <article className="space-y-6">
                {/* Screenshot gets the full container width. */}
                <Link
                  href={project.link ?? project.github ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="block overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-800"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50 dark:bg-gray-900">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} interface`}
                        width={1200}
                        height={750}
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-gray-400 dark:text-gray-600">
                        Preview coming soon
                      </div>
                    )}
                  </div>
                </Link>

                {/* Title and year on one line, year as plain tabular meta. */}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-black dark:text-white">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-sm tabular-nums text-gray-500 dark:text-gray-500">
                    {project.year}
                  </span>
                </div>

                {/* Lead, then supporting body. Measure capped for readability. */}
                <div className="max-w-[65ch] space-y-3">
                  <p className="text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    {project.summary}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>

                {/*
                  Impact is the line a hiring manager is scanning for, so it is
                  pulled out against a rule instead of sitting inline as one more
                  "Label: value" row.
                */}
                <p className="max-w-[65ch] border-l-2 border-gray-300 pl-4 text-sm leading-relaxed text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  {project.impact}
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-black dark:text-white">
                      Role
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {project.role}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-black dark:text-white">
                      Highlights
                    </h4>
                    {/* A real list, rather than bullet glyphs inside paragraphs. */}
                    <ul className="space-y-1.5">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                        >
                          <span aria-hidden="true" className="select-none">
                            &bull;
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/*
                    One primary action plus a tertiary text link, rather than the
                    filled-button / ghost-button pair repeated on every entry.
                  */}
                  <div className="ml-auto flex items-center gap-5">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 text-sm font-medium text-black underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-black dark:text-white dark:decoration-gray-700 dark:hover:decoration-white"
                      >
                        Live site
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3.5 transition-transform duration-200 ease-out group-hover/link:-translate-y-px group-hover/link:translate-x-px motion-reduce:transition-none"
                        />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 transition-colors hover:text-black dark:text-gray-500 dark:hover:text-white"
                      >
                        Source
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
