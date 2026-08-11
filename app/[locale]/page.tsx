import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroSlider from "@/components/home/HeroSlider";
import IntroSection from "@/components/home/IntroSection";
import ProductCards from "@/components/home/ProductCards";
import CtaBanner from "@/components/home/CtaBanner";

/** 메인 페이지 — 히어로 슬라이더 / 소개 / 제품 카드 / CTA. PRD §4.1 / Task 4 */
export default async function HomePage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return (
    <main>
      {/* 시각적으로는 히어로 슬라이드 제목(h2)이 대표 타이틀 역할을 하므로,
          검색엔진·스크린리더용 페이지 대표 제목(h1)은 숨김 처리해 타겟 키워드를 명시한다. */}
      <h1 className="sr-only">{t("seoHeading")}</h1>
      <HeroSlider />
      <IntroSection />
      <ProductCards />
      <CtaBanner />
    </main>
  );
}
