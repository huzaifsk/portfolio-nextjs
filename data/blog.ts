export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Accessible React Components",
    description: "A comprehensive guide to creating accessible React components using ARIA attributes and semantic HTML.",
    date: "2024-11-15",
    readTime: "8 min read",
    slug: "building-accessible-react-components",
    tags: ["React", "Accessibility", "Frontend"],
    published: true
  },
  {
    id: "2",
    title: "The Art of Micro-interactions",
    description: "How subtle animations and interactions can significantly improve user experience in web applications.",
    date: "2024-10-22",
    readTime: "6 min read",
    slug: "the-art-of-micro-interactions",
    tags: ["Design", "Animation", "UX"],
    published: true
  },
  {
    id: "3",
    title: "TypeScript Tips for React Developers",
    description: "Advanced TypeScript patterns and techniques to write better typed React applications.",
    date: "2024-09-10",
    readTime: "10 min read",
    slug: "typescript-tips-for-react-developers",
    tags: ["TypeScript", "React", "Best Practices"],
    published: true
  },
  {
    id: "4",
    title: "Building a Design System from Scratch",
    description: "Lessons learned from creating a comprehensive design system for a growing product.",
    date: "2024-08-05",
    readTime: "12 min read",
    slug: "building-a-design-system-from-scratch",
    tags: ["Design System", "UI/UX", "Frontend"],
    published: true
  }
];

export const recentPosts = blogPosts
  .filter(post => post.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);
