import { useTranslations } from "next-intl";

/** 회사 간단 소개 + 핵심 키워드. PRD §4.1 / Task 4.3 */
export default function IntroSection() {
  const t = useTranslations("HomePage");
  const keywords = [t("keywordPrecision"), t("keywordVision"), t("keywordXray")];

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {t("eyebrow")}
        </p>
        <p className="max-w-2xl text-xl leading-relaxed text-text md:text-2xl">
          {t("intro")}
        </p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {keywords.map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-text-muted"
            >
              <span aria-hidden="true" className="h-2 w-2 rounded-sm bg-accent" />
              {kw}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
