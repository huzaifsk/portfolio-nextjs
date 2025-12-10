import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - Alex Rivera`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-8 py-24">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>•</span>
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
      </header>

      {/* Content */}
      <article className="prose prose-zinc dark:prose-invert prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
