import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildAlternates } from "@/lib/seo";
import CeoGreeting from "@/components/about/CeoGreeting";

type Params = { locale: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "CeoPage" });
  const title = t("title");
  return {
    title,
    alternates: buildAlternates("/about/ceo", locale as Locale),
    openGraph: { title },
  };
}

/** CEO 인사말 페이지. PRD §4.2.2 / Task 5.3 */
export default async function CeoPage(props: { params: Promise<Params> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <main>
      <CeoGreeting />
    </main>
  );
}
