"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ProductData } from "@/content/products";
import type { Locale } from "@/i18n/routing";

// 라이트박스는 열릴 때만 필요 — 초기 번들에서 분리. PRD §10 / Task 10.1
const ProductGalleryLightbox = dynamic(
  () => import("@/components/products/ProductGalleryLightbox"),
  { ssr: false }
);

/** 이미지 갤러리 + 라이트박스. PRD §4.3 / Task 6.1 */
export default function ProductGallery({
  product,
  locale,
}: {
  product: ProductData;
  locale: Locale;
}) {
  const t = useTranslations("ProductPage");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const images = product.gallery;

  return (
    <section className="py-14 md:py-18">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-text">
          {t("galleryTitle")}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="relative aspect-square overflow-hidden rounded-lg border border-border transition-opacity hover:opacity-90"
            >
              <Image
                src={img.src}
                alt={img.alt[locale]}
                fill
                sizes="(min-width: 768px) 25vw, 33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <ProductGalleryLightbox
          images={images}
          locale={locale}
          openIndex={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
