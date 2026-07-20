import { siteConfig } from "@/lib/seo";

/** Organization 구조화 데이터 (JSON-LD). PRD §7, §9 / Task 9.4 */
export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/logo2.png`,
    description:
      "2D/3D 머신비전 및 산업용 X-ray 검사장비를 개발·공급하는 B2B 기업 STEADYVIEW.",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
