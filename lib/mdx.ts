import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost } from "@/types/blog";

const postsDirectory = join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  // Ensure directory exists
  if (!existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = join(postsDirectory, fileName);
      const fileContents = readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readingTime: stats.text,
        content,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = join(postsDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      readingTime: stats.text,
      content,
    };
  } catch {
    return null;
  }
}
