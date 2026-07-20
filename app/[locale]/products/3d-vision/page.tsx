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
  const t = await getTranslations({ locale, namespace: "Nav" });
  const title = t("product3d");
  const description = products["3d-vision"].overview[locale as Locale];
  return {
    title,
    description,
    alternates: buildAlternates("/products/3d-vision", locale as Locale),
    openGraph: { title, description, images: [products["3d-vision"].heroImage] },
  };
}

export default async function Product3DPage(props: { params: Promise<Params> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <ProductPageTemplate
      product={products["3d-vision"]}
      locale={locale as Locale}
      navKey="product3d"
    />
  );
}
