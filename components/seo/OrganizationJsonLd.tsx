import { siteConfig } from "@/lib/seo";
import { companyInfo } from "@/content/company";

/** Organization 구조화 데이터 (JSON-LD). PRD §7, §9 / Task 9.4 */
export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/logo2.png`,
    description:
      "머신비전 기반 2D검사·3D검사(AOI)와 산업용 X-ray 검사장비(AXI)를 개발·공급하는 B2B 기업 STEADYVIEW. 인라인검사부터 자동화검사까지 지원합니다.",
    knowsAbout: [
      "머신비전",
      "인라인검사",
      "자동화검사",
      "2D검사",
      "3D검사",
      "AOI",
      "X-ray 검사",
      "AXI",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.addressKo,
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.coordinates.lat,
      longitude: companyInfo.coordinates.lng,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
