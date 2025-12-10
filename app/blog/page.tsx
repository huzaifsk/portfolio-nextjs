import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog - Alex Rivera",
  description: "Thoughts on design, engineering, and building great products",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-8 py-24">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Blog
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Thoughts on design, engineering, and building great products.
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-semibold transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  {post.title}
                </h2>
                <time className="shrink-0 text-sm text-zinc-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <span>{post.readingTime}</span>
                {post.tags.length > 0 && (
                  <>
                    <span>•</span>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
