import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

/** PRD §7, §9 / Task 9.3 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
