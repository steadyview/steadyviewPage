"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

/**
 * 언어 선택기 (PRD §5, Task 2.5)
 * - 현재 경로를 유지한 채 로케일 전환
 * - next-intl 네비게이션이 NEXT_LOCALE 쿠키를 갱신 → 사용자 선택이 우선
 */
export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const activeLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelect(next: Locale) {
    if (next === activeLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <nav
      aria-label={t("label")}
      className="inline-flex items-center gap-1 rounded-md border border-border bg-surface p-1"
    >
      {routing.locales.map((loc) => {
        const isActive = loc === activeLocale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => onSelect(loc)}
            disabled={isPending || isActive}
            aria-current={isActive ? "true" : undefined}
            className={[
              "rounded px-2.5 py-1 font-mono text-xs transition-colors duration-200 ease-brand",
              isActive
                ? "bg-primary text-white"
                : "text-text-muted hover:text-primary disabled:opacity-60",
            ].join(" ")}
          >
            {t(loc)}
          </button>
        );
      })}
    </nav>
  );
}
