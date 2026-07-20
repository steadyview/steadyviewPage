import { siteConfig } from "@/lib/seo";
import type { ProductData } from "@/content/products";
import type { Locale } from "@/i18n/routing";

/** Product 구조화 데이터 (JSON-LD). PRD §9 / Task 9.4, 6.5 */
export default function ProductJsonLd({
  product,
  locale,
  name,
  path,
}: {
  product: ProductData;
  locale: Locale;
  name: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description: product.overview[locale],
    image: `${siteConfig.url}${product.heroImage}`,
    url: `${siteConfig.url}/${locale}${path}`,
    brand: { "@type": "Brand", name: siteConfig.name },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
