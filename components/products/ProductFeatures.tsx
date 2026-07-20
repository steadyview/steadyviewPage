import { useTranslations } from "next-intl";
import type { ProductData } from "@/content/products";
import type { Locale } from "@/i18n/routing";

/** 주요 특징 그리드. PRD §4.3 / Task 6.1 */
export default function ProductFeatures({
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
          {t("featuresTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {product.features.map((f, i) => (
            <div key={i} className="rounded-lg border border-border bg-surface p-6">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="mb-3 text-primary">
                <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="2.4" fill="currentColor" />
              </svg>
              <h3 className="mb-1.5 font-bold text-text">{f.title[locale]}</h3>
              <p className="text-sm text-text-muted">{f.body[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
