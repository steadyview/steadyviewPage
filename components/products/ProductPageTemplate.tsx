import { getTranslations } from "next-intl/server";
import type { ProductData } from "@/content/products";
import type { Locale } from "@/i18n/routing";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ApplicationList from "@/components/products/ApplicationList";
import ProductGallery from "@/components/products/ProductGallery";
import CtaBanner from "@/components/home/CtaBanner";
import ProductJsonLd from "@/components/seo/ProductJsonLd";

const NAV_KEY_TO_PATH = {
  product2d: "/products/2d-vision",
  product3d: "/products/3d-vision",
  productXray: "/products/xray",
} as const;

/**
 * 제품 상세 공통 템플릿 — 개요/특징/적용분야/갤러리/CTA.
 * PRD §4.3 공통 상세 템플릿 / Task 6.1, 6.3-6.5
 */
export default async function ProductPageTemplate({
  product,
  locale,
  navKey,
  title,
}: {
  product: ProductData;
  locale: Locale;
  navKey: "product2d" | "product3d" | "productXray";
  title: string;
}) {
  const tNav = await getTranslations("Nav");

  return (
    <main>
      <ProductJsonLd
        product={product}
        locale={locale}
        name={title}
        path={NAV_KEY_TO_PATH[navKey]}
      />
      <ProductHero
        product={product}
        locale={locale}
        kicker={tNav("products")}
        title={title}
      />
      <ProductFeatures product={product} locale={locale} />
      <ApplicationList product={product} locale={locale} />
      <ProductGallery product={product} locale={locale} />
      <CtaBanner />
    </main>
  );
}
