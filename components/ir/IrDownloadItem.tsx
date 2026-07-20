import { useTranslations } from "next-intl";
import type { IrEntry } from "@/content/ir-data";
import type { Locale } from "@/i18n/routing";

/** 개별 IR 자료 항목 — 모바일 카드 뷰. PRD §4.4 / Task 7.2 */
export default function IrDownloadItem({
  entry,
  locale,
}: {
  entry: IrEntry;
  locale: Locale;
}) {
  const t = useTranslations("IrPage");

  return (
    <div className="flex items-center justify-between gap-4 border-b border-border px-1 py-4 last:border-b-0">
      <div className="min-w-0">
        <span
          className={[
            "mb-1.5 inline-block rounded-full px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider",
            entry.category === "financial"
              ? "bg-forest-100 text-forest-700"
              : "bg-aureum-100 text-aureum-700",
          ].join(" ")}
        >
          {entry.category === "financial" ? t("filterFinancial") : t("filterDisclosure")}
        </span>
        <p className="truncate font-medium text-text">{entry.title[locale]}</p>
        <p className="mt-0.5 font-mono text-xs tabular-nums text-text-muted">{entry.date}</p>
      </div>
      <a
        href={`/ir/${entry.filename}`}
        download
        className="flex shrink-0 items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-forest-50"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M7 1v8M3.5 6L7 9.5 10.5 6M2 12h10" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {t("download")}
      </a>
    </div>
  );
}
