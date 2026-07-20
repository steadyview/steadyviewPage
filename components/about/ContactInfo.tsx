"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

/** 연락처 + 교통 안내 + 주소 복사. PRD §4.2.3 / Task 5.5 */
export default function ContactInfo() {
  const t = useTranslations("LocationPage");
  const tFooter = useTranslations("Footer");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(tFooter("address"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 API 미지원 환경 — 조용히 무시 (버튼은 계속 사용 가능)
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {t("addressTitle")}
        </h3>
        <p className="text-lg text-text">{tFooter("address")}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-primary hover:text-primary"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" />
            <path d="M2 9V2h7" stroke="currentColor" strokeWidth="1.3" fill="none" />
          </svg>
          {copied ? t("copied") : t("copyAddress")}
        </button>

        <dl className="mt-6 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          <div className="flex gap-2">
            <dt className="text-text-muted">{tFooter("phoneLabel")}</dt>
            <dd className="text-text">{tFooter("phone")}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-text-muted">{tFooter("emailLabel")}</dt>
            <dd className="text-text">{tFooter("email")}</dd>
          </div>
        </dl>
      </div>

      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {t("transportTitle")}
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-text">{t("byCarTitle")}</p>
            <p className="mt-1 text-sm text-text-muted">{t("byCarBody")}</p>
          </div>
          <div>
            <p className="font-semibold text-text">{t("byTransitTitle")}</p>
            <p className="mt-1 text-sm text-text-muted">{t("byTransitBody")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
