import { useTranslations } from "next-intl";
import { history } from "@/content/company";
import type { Locale } from "@/i18n/routing";

/** 연혁 수직 타임라인. PRD §4.2.1 / Task 5.2 */
export default function HistoryTimeline({ locale }: { locale: Locale }) {
  const t = useTranslations("AboutPage");

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-text md:text-3xl">
          {t("historyTitle")}
        </h2>

        <ol className="relative border-l border-border pl-8">
          {history.map((entry) => (
            <li key={entry.year} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-surface"
              />
              <p className="font-mono text-sm font-bold text-primary">{entry.year}</p>
              <p className="mt-1 text-text-muted">{entry.event[locale]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
