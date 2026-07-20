import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildAlternates } from "@/lib/seo";
import ContactForm from "@/components/contact/ContactForm";

type Params = { locale: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  const title = t("title");
  const description = t("subtitle");
  return {
    title,
    description,
    alternates: buildAlternates("/contact", locale as Locale),
    openGraph: { title, description },
  };
}

/** 견적문의 페이지. PRD §4.5 / Task 8.5 */
export default async function ContactPage(props: { params: Promise<Params> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

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
          <p className="mt-2 max-w-2xl text-sm text-text-muted">
            {t("directEmailNote").split("sales@steadyview.co.kr").map((part, i) => (
              <span key={i}>
                {i > 0 && (
                  <a href="mailto:sales@steadyview.co.kr" className="font-medium text-primary hover:underline">
                    sales@steadyview.co.kr
                  </a>
                )}
                {part}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="relative mx-auto max-w-2xl px-6 md:px-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
