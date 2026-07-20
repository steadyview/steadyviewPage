import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/** 공통 푸터 — 회사정보, 저작권. PRD §5 / Task 3.4 */
export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-ink-900 text-ink-100">
      <div className="mx-auto max-w-container px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-extrabold tracking-tight">
              <span className="text-ink-100">Steady</span>
              <span className="text-aureum-300">View</span>
            </p>
            <p className="mt-2 text-sm text-ink-300">{t("companyName")}</p>
          </div>

          <dl className="grid grid-cols-1 gap-x-10 gap-y-2 text-sm text-ink-300 sm:grid-cols-2">
            <div className="flex gap-2 sm:col-span-2">
              <dt className="shrink-0 text-ink-400">{t("addressLabel")}</dt>
              <dd>{t("address")}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 text-ink-400">{t("phoneLabel")}</dt>
              <dd>{t("phone")}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 text-ink-400">{t("emailLabel")}</dt>
              <dd>{t("email")}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-700 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("rights")}</p>
          <Link href="/" className="hover:text-aureum-300">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
