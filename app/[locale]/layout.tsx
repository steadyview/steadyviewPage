import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import { buildAlternates, siteConfig } from "@/lib/seo";
import "../globals.css";

type LocaleParams = { locale: string };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const OG_LOCALE_MAP: Record<Locale, string> = { ko: "ko_KR", en: "en_US", zh: "zh_CN" };

/** 검색엔진 대상 핵심 타겟 키워드 (구글/네이버 검색 노출용). */
const SEO_KEYWORDS: Record<Locale, string[]> = {
  ko: [
    "머신비전",
    "인라인검사",
    "자동화검사",
    "2D검사",
    "3D검사",
    "AOI",
    "X-ray",
    "X-ray 검사",
    "AXI",
    "산업용 X-ray 검사장비",
  ],
  en: [
    "machine vision",
    "in-line inspection",
    "automated inspection",
    "2D inspection",
    "3D inspection",
    "AOI",
    "X-ray inspection",
    "AXI",
    "industrial X-ray inspection equipment",
  ],
  zh: [
    "机器视觉",
    "在线检测",
    "自动化检测",
    "2D检测",
    "3D检测",
    "AOI",
    "X射线检测",
    "AXI",
    "工业X射线检测设备",
  ],
};

export async function generateMetadata(props: {
  params: Promise<LocaleParams>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: "%s | STEADYVIEW",
    },
    description,
    keywords: SEO_KEYWORDS[locale as Locale],
    alternates: buildAlternates("", locale as Locale),
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "website",
      locale: OG_LOCALE_MAP[locale as Locale],
      images: [{ url: "/logo/logo2.png", width: 1290, height: 390, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo/logo2.png"],
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<LocaleParams>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 정적 렌더링을 위해 요청 로케일 고정
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations("Common");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          {t("skipToContent")}
        </a>
        <OrganizationJsonLd />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div id="main-content" className="flex-1">
            {props.children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
