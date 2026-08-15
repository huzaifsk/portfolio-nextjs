import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * Bump this by hand when the page's content meaningfully changes (a new role,
 * a new project, a rewritten bio) rather than computing `new Date()` at build
 * time. A lastModified that silently updates on every deploy, even ones that
 * touch nothing a visitor would notice, tells crawlers nothing useful about
 * actual staleness.
 */
const LAST_CONTENT_UPDATE = new Date("2026-08-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
      // Points Google Images at the same photo used for the share card and
      // favicon, so it can be indexed and surfaced under image search too.
      images: [`${siteConfig.url}/opengraph-image`],
    },
  ];
}
