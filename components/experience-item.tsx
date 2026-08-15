"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { SeparatorHorizontal } from "lucide-react";
import type { Experience } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";
import { LiveDot } from "@/components/ui/live-dot";

type ExperienceItemProps = {
  experience: Experience;
  logoSrc: string;
  index: number;
  isLast: boolean;
  /** The current role starts open so the page never opens as a row of closed boxes. */
  defaultOpen?: boolean;
};

export function ExperienceItem({
  experience,
  logoSrc,
  index,
  isLast,
  defaultOpen = false,
}: ExperienceItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <Reveal delay={index * 0.08}>
      <div className="relative flex items-start gap-4 sm:gap-5">
        {/*
          Timeline spine. Runs from just under this logo down to the top of the
          next one, bridging the gap created by space-y on the parent. Omitted
          on the last entry so the line does not dangle.
        */}
        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute left-5 sm:left-6 top-[3.25rem] sm:top-[3.75rem] -bottom-8 sm:-bottom-10 lg:-bottom-12 w-px -translate-x-1/2 bg-gradient-to-b from-gray-200 to-gray-200/40 dark:from-gray-800 dark:to-gray-800/40"
          />
        )}

        {/*
          Rounded square rather than a circle, and object-contain rather than
          object-cover: these are wordmarks and logotypes, and a circular crop
          was cutting their edges off.
        */}
        <div className="relative flex-shrink-0 mt-0.5">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 sm:h-12 sm:w-12">
            <Image
              src={logoSrc}
              alt={`${experience.company} logo`}
              width={48}
              height={48}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          {/* Company is primary, role is supporting, period is meta. */}
          <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold tracking-tight text-black dark:text-white">
                {experience.company}
              </h3>
              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                {experience.role}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end sm:gap-1.5">
              <span className="flex items-center gap-1.5 text-xs tabular-nums text-gray-500 dark:text-gray-500 sm:text-sm">
                {experience.period}
                {experience.endDate === null && <LiveDot />}
              </span>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={panelId}
                aria-label={
                  open
                    ? `Hide details for ${experience.role} at ${experience.company}`
                    : `Show details for ${experience.role} at ${experience.company}`
                }
                className={`inline-flex size-7 -mr-1 items-center justify-center rounded-md border transition-colors duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-gray-100 dark:focus-visible:ring-offset-black ${
                  open
                    ? "border-gray-300 bg-gray-100 text-black dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:text-black dark:border-gray-800 dark:text-gray-500 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                <SeparatorHorizontal aria-hidden="true" className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Always visible: enough context to scan the role without expanding. */}
          <p className="max-w-[65ch] text-sm font-medium leading-relaxed text-gray-800 dark:text-gray-200">
            {experience.summary}
          </p>

          {/*
            Collapsible panel. The 0fr -> 1fr grid-row transition animates
            cleanly without needing a measured pixel height, and collapses to an
            instant show/hide under prefers-reduced-motion.
          */}
          <div
            id={panelId}
            role="region"
            aria-label={`${experience.company} role details`}
            inert={!open}
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
              open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {/*
                Impact is pulled out against a rule, matching the projects
                section, instead of sitting inline as one more "Label: value" row.
              */}
              <p className="max-w-[65ch] border-l-2 border-gray-300 pl-4 text-sm leading-relaxed text-gray-700 dark:border-gray-700 dark:text-gray-300">
                {experience.impact}
              </p>

              {/* Every responsibility, rather than the previous slice(0, 3). */}
              <ul className="mt-5 max-w-[65ch] space-y-2">
                {experience.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                  >
                    <span aria-hidden="true" className="select-none">
                      &bull;
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              {/* Same pill treatment as the project tags. */}
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {experience.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
