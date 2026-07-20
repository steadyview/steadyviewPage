"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const AUTOPLAY_MS = 5000;

const slides = [
  { key: "slide1", image: "/images/hero/hero-2d-vision.jpg", href: "/products/2d-vision" },
  { key: "slide2", image: "/images/hero/hero-xray-ct-v2.png", href: "/products/xray" },
  { key: "slide3", image: "/images/hero/hero-3d-scan-v2.png", href: "/products/3d-vision" },
] as const;

/** 메인 히어로 슬라이더 — Embla 기반, 자동재생+일시정지, 화살표/인디케이터, 모바일 스와이프. PRD §4.1 / Task 4.1-4.2 */
export default function HeroSlider() {
  const t = useTranslations("HomeHero");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // 모션 최소화 선호 시 자동재생 비활성화
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!emblaApi || !isPlaying) return;
    timerRef.current = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [emblaApi, isPlaying]);

  return (
    <section aria-label="Hero" aria-roledescription="carousel" className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={slide.key}
              role="group"
              aria-roledescription="slide"
              aria-hidden={i !== selectedIndex}
              className="relative min-w-0 flex-[0_0_100%]"
            >
              <div className="relative h-[440px] w-full sm:h-[540px] md:h-[640px]">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(20,21,15,0) 30%, rgba(20,21,15,.78) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-container px-6 pb-16 md:px-10 md:pb-24">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-aureum-300">
                    {t(`${slide.key}Kicker`)}
                  </p>
                  <h2 className="mb-3 max-w-xl text-3xl font-extrabold leading-[1.1] text-white md:text-5xl">
                    {t(`${slide.key}Title`)}
                  </h2>
                  <p className="mb-7 max-w-lg text-white/85 md:text-lg">
                    {t(`${slide.key}Desc`)}
                  </p>
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-ink-900 transition-all duration-200 ease-brand hover:brightness-105"
                  >
                    {t(`${slide.key}Cta`)}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label={t("prev")}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/50 md:left-6"
      >
        <svg width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
          <path d="M9 1L1.5 8 9 15" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label={t("next")}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/50 md:right-6"
      >
        <svg width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
          <path d="M1 1l7.5 7L1 15" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-3 md:bottom-7">
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={t("goTo", { index: i + 1 })}
            aria-current={i === selectedIndex}
            className={[
              "h-2.5 rounded-full transition-all duration-300 ease-brand",
              i === selectedIndex ? "w-7 bg-accent" : "w-2.5 bg-white/50 hover:bg-white/80",
            ].join(" ")}
          />
        ))}
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? t("pause") : t("play")}
          className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur hover:bg-black/50"
        >
          {isPlaying ? (
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <rect x="1" y="0" width="3" height="10" fill="currentColor" />
              <rect x="6" y="0" width="3" height="10" fill="currentColor" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M0 0l10 5-10 5V0z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {t(`${slides[selectedIndex].key}Title`)}
      </p>
    </section>
  );
}
