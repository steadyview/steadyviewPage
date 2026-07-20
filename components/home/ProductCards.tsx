import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const cards = [
  { key: "product2d", href: "/products/2d-vision", image: "/images/products/2d-vision/overview.png" },
  { key: "product3d", href: "/products/3d-vision", image: "/images/products/3d-vision/overview.png" },
  { key: "productXray", href: "/products/xray", image: "/images/products/xray/overview.png" },
] as const;

/** 제품 바로가기 3카드 그리드. PRD §4.1 / Task 4.4 */
export default function ProductCards() {
  const tNav = useTranslations("Nav");
  const tHome = useTranslations("HomePage");
  const tProducts = useTranslations("ProductsSummary");

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text md:text-3xl">
          {tHome("productsTitle")}
        </h2>
        <p className="mb-10 text-text-muted">{tHome("productsSub")}</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-brand group-hover:scale-x-100"
              />
              <div className="relative h-44 w-full">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {tNav(card.key)}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-text">
                  {tProducts(`${card.key}.title`)}
                </h3>
                <p className="mt-1.5 text-sm text-text-muted">
                  {tProducts(`${card.key}.summary`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
