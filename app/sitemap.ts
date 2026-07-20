import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/seo";

const STATIC_PATHS = [
  "",
  "/about",
  "/about/ceo",
  "/about/location",
  "/products/2d-vision",
  "/products/3d-vision",
  "/products/xray",
  "/ir",
  "/contact",
];

/** 다국어 정적 사이트맵. PRD §7, §9 / Task 9.2 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return STATIC_PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])
        ),
      },
    }))
  );
}
