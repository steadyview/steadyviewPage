import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

/** 사이트 절대 URL — Vercel 환경변수 NEXT_PUBLIC_SITE_URL로 설정(PRD §9). */
export const siteConfig = {
  name: "STEADYVIEW",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

/**
 * 로케일 무관 경로(예: "/about/ceo")로부터 hreflang alternates + canonical 생성.
 * PRD §6 다국어 SEO / Task 9.5.
 */
export function buildAlternates(path: string, locale: Locale): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}${path}`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${path}`;

  return {
    canonical: `/${locale}${path}`,
    languages,
  };
}
