import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { products } from "@/content/products";
import { buildAlternates } from "@/lib/seo";
import ProductPageTemplate from "@/components/products/ProductPageTemplate";

type Params = { locale: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "ProductMeta" });
  const title = t("vision2dTitle");
  const description = products["2d-vision"].overview[locale as Locale];
  return {
    title,
    description,
    alternates: buildAlternates("/products/2d-vision", locale as Locale),
    openGraph: { title, description, images: [products["2d-vision"].heroImage] },
  };
}

export default async function Product2DPage(props: { params: Promise<Params> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ProductMeta" });

  return (
    <ProductPageTemplate
      product={products["2d-vision"]}
      locale={locale as Locale}
      navKey="product2d"
      title={t("vision2dTitle")}
    />
  );
}
