"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { awards } from "@/data/awards";

export function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-5xl px-6 sm:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Awards & Recognition
        </h2>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start justify-between gap-4 border-b border-zinc-100 pb-6 last:border-0 dark:border-zinc-800/50"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-medium">{award.title}</h3>
                  {award.link && (
                    <Link
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
                      aria-label="View award"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {award.organization}
                </p>
              </div>
              <span className="shrink-0 text-sm text-zinc-500">
                {award.year}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
