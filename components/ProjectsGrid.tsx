"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-12 sm:py-14 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 sm:space-y-8 lg:space-y-10"
      >
        <div className="space-y-4">
          <h2 className="text-subheading text-black dark:text-white">
            Check out my latest work
          </h2>
          <p className="text-normal text-gray-600 dark:text-gray-400">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 dark:text-gray-600 text-sm">
                      Project Preview
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
