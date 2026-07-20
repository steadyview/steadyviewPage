import Image from "next/image";
import type { ProductData } from "@/content/products";
import type { Locale } from "@/i18n/routing";

/** 제품 히어로 배너. PRD §4.3 / Task 6.1 */
export default function ProductHero({
  product,
  locale,
  title,
  kicker,
}: {
  product: ProductData;
  locale: Locale;
  title: string;
  kicker: string;
}) {
  return (
    <section className="relative h-[320px] w-full md:h-[400px]">
      <Image
        src={product.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(20,21,15,.35) 0%, rgba(20,21,15,.8) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-container px-6 pb-10 md:px-10 md:pb-14">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-aureum-300">
          {kicker}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-white/85">{product.overview[locale]}</p>
      </div>
    </section>
  );
}
