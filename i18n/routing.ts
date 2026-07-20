import { defineRouting } from "next-intl/routing";

/**
 * 3개국어 라우팅 정의 (PRD §3.1)
 * - defaultLocale: ko
 * - localePrefix: "always" → 모든 경로에 로케일 세그먼트 포함 (예: /ko/products)
 * - localeDetection: Accept-Language 자동 감지 (사용자 선택 쿠키가 우선)
 */
export const routing = defineRouting({
  locales: ["ko", "en", "zh"],
  defaultLocale: "ko",
  localePrefix: "always",
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
