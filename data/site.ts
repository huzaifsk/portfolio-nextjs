import type { Metadata } from "next";
import { personalData } from "@/data/personal";

export const siteConfig = {
  name: "Huzaif Shaikh Portfolio",
  title: "Huzaif Shaikh | Frontend Software Engineer",
  description:
    "Frontend Software Engineer based in Mumbai, building high-performance React and Next.js products with strong UX, accessibility, and measurable business impact.",
  url: "https://huzaif-shaikh-portfolio.vercel.app",
  keywords: [
    "Huzaif Shaikh",
    "frontend software engineer",
    "react developer",
    "next.js portfolio",
    "typescript developer",
    "web performance engineer",
    "frontend engineer mumbai",
    "accessible web development",
  ],
} as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: personalData.social.github,
    kind: "github" as const,
  },
  {
    label: "LinkedIn",
    href: personalData.social.linkedin,
    kind: "linkedin" as const,
  },
  {
    label: "X",
    href: personalData.social.twitter,
    kind: "x" as const,
  },
] as const;

export const metadataBase = new URL(siteConfig.url);

export const defaultMetadata: Metadata = {
  metadataBase,
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: personalData.name, url: siteConfig.url }],
  creator: personalData.name,
  publisher: personalData.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  /*
    No manual `icons` or image arrays here. app/icon.tsx and
    app/opengraph-image.tsx are Next.js file-convention routes that generate
    the favicon and the og:image/twitter:image tags (and their width, height,
    and alt) automatically. Declaring them here too would have fought the file
    convention with a stale reference to the old 588x586 profile photo.
  */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@Huzaif__Shaikh",
  },
};
