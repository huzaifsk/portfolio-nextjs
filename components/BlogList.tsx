"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="mx-auto max-w-5xl px-6 sm:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Recent Posts
          </h2>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block space-y-2"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-medium transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                    {post.title}
                  </h3>
                  <span className="shrink-0 text-sm text-zinc-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span>{post.readingTime}</span>
                  {post.tags.length > 0 && (
                    <>
                      <span>•</span>
                      <span>{post.tags.slice(0, 2).join(", ")}</span>
                    </>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
