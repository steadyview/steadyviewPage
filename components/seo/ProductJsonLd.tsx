import { siteConfig } from "@/lib/seo";
import type { ProductData, ProductId } from "@/content/products";
import type { Locale } from "@/i18n/routing";

/** 제품별 검색 키워드 카테고리 — 구글/네이버 검색 노출 대상. */
const CATEGORY_BY_PRODUCT: Record<ProductId, string> = {
  "2d-vision": "머신비전, 2D검사, AOI, 인라인검사, 자동화검사",
  "3d-vision": "머신비전, 3D검사, 자동화검사",
  xray: "산업용 X-ray, X-ray 검사, AXI, 자동화검사",
};

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
    category: CATEGORY_BY_PRODUCT[product.id],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
