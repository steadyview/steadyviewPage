import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildAlternates } from "@/lib/seo";
import AboutHero from "@/components/about/AboutHero";
import HistoryTimeline from "@/components/about/HistoryTimeline";

type Params = { locale: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const title = t("overviewTitle");
  const description = t("heroIntro");
  return {
    title,
    description,
    alternates: buildAlternates("/about", locale as Locale),
    openGraph: { title, description },
  };
}

/** STEADYVIEW 소개 페이지. PRD §4.2.1 / Task 5.1-5.2 */
export default async function AboutPage(props: { params: Promise<Params> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <main>
      <AboutHero />
      <HistoryTimeline locale={locale as Locale} />
    </main>
  );
}
