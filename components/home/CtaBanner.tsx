import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/** 견적문의 CTA 배너 — 그라디언트 + 조리개 워터마크. PRD §4.1 / Task 4.5 */
export default function CtaBanner() {
  const t = useTranslations("HomePage");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div
          className="relative overflow-hidden rounded-2xl p-10 md:p-14"
          style={{
            background:
              "linear-gradient(135deg, #2E4A1C 0%, #4A7324 45%, #CFA53E 130%)",
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -right-16 top-1/2 h-[360px] w-[360px] -translate-y-1/2 opacity-[0.14]"
          >
            <circle cx="200" cy="200" r="170" stroke="#fff" strokeWidth="14" fill="none" />
            <circle cx="200" cy="200" r="120" stroke="#fff" strokeWidth="14" fill="none" />
            <circle cx="200" cy="200" r="70" stroke="#fff" strokeWidth="14" fill="none" />
            <path d="M200 10v70M200 320v70M10 200h70M320 200h70" stroke="#fff" strokeWidth="10" />
          </svg>

          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 max-w-md text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                {t("ctaBannerTitle")}
              </h2>
              <p className="max-w-md text-white/85">{t("ctaBannerBody")}</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-md bg-white px-6 py-3 font-semibold text-forest-800 transition-all duration-200 ease-brand hover:bg-ink-50"
            >
              {t("ctaBannerButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
