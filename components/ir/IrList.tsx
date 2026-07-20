"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { irData, type IrCategory } from "@/content/ir-data";
import type { Locale } from "@/i18n/routing";
import IrDownloadItem from "@/components/ir/IrDownloadItem";

type FilterKey = "all" | IrCategory;
type SortOrder = "newest" | "oldest";

/** IR 자료 목록 — 카테고리 필터/정렬, 데스크톱 테이블 + 모바일 카드. PRD §4.4 / Task 7.2-7.4 */
export default function IrList({ locale }: { locale: Locale }) {
  const t = useTranslations("IrPage");
  const [filter, setFilter] = useState<FilterKey>("all");
  const [sort, setSort] = useState<SortOrder>("newest");

  const items = useMemo(() => {
    const filtered = filter === "all" ? irData : irData.filter((e) => e.category === filter);
    return [...filtered].sort((a, b) =>
      sort === "newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)
    );
  }, [filter, sort]);

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "financial", label: t("filterFinancial") },
    { key: "disclosure", label: t("filterDisclosure") },
  ];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={[
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ease-brand",
                filter === f.key
                  ? "border-primary bg-primary text-white"
                  : "border-border text-text-muted hover:border-primary hover:text-primary",
              ].join(" ")}
            >
              {f.label}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOrder)}
          className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text"
        >
          <option value="newest">{t("sortNewest")}</option>
          <option value="oldest">{t("sortOldest")}</option>
        </select>
      </div>

      <>
          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-lg border border-border md:block">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-forest-800 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                    {t("colTitle")}
                  </th>
                  <th className="bg-forest-800 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                    {t("colCategory")}
                  </th>
                  <th className="bg-forest-800 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                    {t("colDate")}
                  </th>
                  <th className="bg-forest-800 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                    {t("colDownload")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((entry, i) => (
                  <tr key={entry.id} className={i % 2 === 1 ? "bg-surface-muted" : "bg-surface"}>
                    <td className="border-t border-border px-5 py-3.5 text-text">
                      {entry.title[locale]}
                    </td>
                    <td className="border-t border-border px-5 py-3.5">
                      <span
                        className={[
                          "inline-block rounded-full px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider",
                          entry.category === "financial"
                            ? "bg-forest-100 text-forest-700"
                            : "bg-aureum-100 text-aureum-700",
                        ].join(" ")}
                      >
                        {entry.category === "financial" ? t("filterFinancial") : t("filterDisclosure")}
                      </span>
                    </td>
                    <td className="border-t border-border px-5 py-3.5 font-mono tabular-nums text-text-muted">
                      {entry.date}
                    </td>
                    <td className="border-t border-border px-5 py-3.5">
                      <a
                        href={`/ir/${entry.filename}`}
                        download
                        className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                          <path d="M7 1v8M3.5 6L7 9.5 10.5 6M2 12h10" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {t("download")}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          {items.length > 0 && (
            <div className="rounded-lg border border-border px-4 md:hidden">
              {items.map((entry) => (
                <IrDownloadItem key={entry.id} entry={entry} locale={locale} />
              ))}
            </div>
          )}
        </>
    </div>
  );
}
