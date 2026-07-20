import { setRequestLocale } from "next-intl/server";
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

  return (
    <main>
      <HeroSlider />
      <IntroSection />
      <ProductCards />
      <CtaBanner />
    </main>
  );
}
