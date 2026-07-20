import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildAlternates } from "@/lib/seo";
import IrList from "@/components/ir/IrList";

type Params = { locale: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "IrPage" });
  const title = t("title");
  const description = t("subtitle");
  return {
    title,
    description,
    alternates: buildAlternates("/ir", locale as Locale),
    openGraph: { title, description },
  };
}

/** IR DATA 페이지. PRD §4.4 / Task 7.4 */
export default async function IrPage(props: { params: Promise<Params> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("IrPage");

  return (
    <main>
      <section className="border-b border-border bg-surface-muted py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t("kicker")}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-text md:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <IrList locale={locale as Locale} />
        </div>
      </section>
    </main>
  );
}
