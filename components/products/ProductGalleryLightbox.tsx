"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { GalleryImage } from "@/content/products";
import type { Locale } from "@/i18n/routing";

/** 갤러리 라이트박스 — ProductGallery에서 dynamic import로 분리 로딩. Task 10.1 */
export default function ProductGalleryLightbox({
  images,
  locale,
  openIndex,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  locale: Locale;
  openIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const t = useTranslations("ProductPage");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((openIndex + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((openIndex - 1 + images.length) % images.length);
    }
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, images.length, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t("galleryTitle")}
      className="fixed inset-0 z-[70] flex flex-col bg-black/92 p-4 md:p-10"
    >
      <div className="flex items-center justify-between text-white/90">
        <p className="font-mono text-sm tabular-nums">
          {t("imageOf", { current: openIndex + 1, total: images.length })}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("closeGallery")}
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="relative flex-1">
        <Image
          src={images[openIndex].src}
          alt={images[openIndex].alt[locale]}
          fill
          sizes="90vw"
          className="object-contain"
        />
        <button
          type="button"
          onClick={() => onNavigate((openIndex - 1 + images.length) % images.length)}
          aria-label={t("prevImage")}
          className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <svg width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
            <path d="M9 1L1.5 8 9 15" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => onNavigate((openIndex + 1) % images.length)}
          aria-label={t("nextImage")}
          className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <svg width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
            <path d="M1 1l7.5 7L1 15" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
