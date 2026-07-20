import { useTranslations } from "next-intl";
import type { ProductData } from "@/content/products";
import type { Locale } from "@/i18n/routing";

/** 적용 분야 리스트. PRD §4.3 / Task 6.1 */
export default function ApplicationList({
  product,
  locale,
}: {
  product: ProductData;
  locale: Locale;
}) {
  const t = useTranslations("ProductPage");

  return (
    <section className="border-b border-border py-14 md:py-18">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-text">
          {t("applicationsTitle")}
        </h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {product.applications.map((app, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 text-text"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
                <circle cx="9" cy="9" r="6.5" fill="none" stroke="#4A7324" className="stroke-primary" strokeWidth="1.6" />
                <circle cx="9" cy="9" r="2.4" fill="#CFA53E" className="fill-accent" />
              </svg>
              <span>{app[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
