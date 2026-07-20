"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/layout/MobileMenu";
import { navItems } from "@/components/layout/nav-config";

/** 데스크톱 GNB — 드롭다운(호버/포커스 + 키보드), 활성 상태, sticky. PRD §5 / Task 3.1 */
export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenKey(null);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenKey(null);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-6 md:h-24 md:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="STEADYVIEW">
          <Image
            src="/logo/logo2.png"
            alt="STEADYVIEW"
            width={215}
            height={65}
            priority
            className="h-16 w-auto md:h-[72px]"
          />
        </Link>

        <nav ref={navRef} aria-label={t("home")} className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ease-brand",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-text hover:text-primary",
                  ].join(" ")}
                >
                  {t(item.labelKey)}
                </Link>
              );
            }

            const open = openKey === item.labelKey;
            return (
              <div key={item.labelKey} className="relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={open}
                  onMouseEnter={() => setOpenKey(item.labelKey)}
                  onClick={() => setOpenKey(open ? null : item.labelKey)}
                  className={[
                    "flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ease-brand",
                    isActive(item.href) || open
                      ? "text-primary"
                      : "text-text hover:text-primary",
                  ].join(" ")}
                >
                  {t(item.labelKey)}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ease-brand ${open ? "rotate-180" : ""}`}
                  >
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  onMouseLeave={() => setOpenKey(null)}
                  className={[
                    "absolute left-0 top-full min-w-[180px] rounded-lg border border-border bg-surface p-1.5 shadow-md transition-all duration-200 ease-brand",
                    open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
                  ].join(" ")}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpenKey(null)}
                      className="block rounded-md px-3 py-2 text-sm text-text transition-colors duration-200 ease-brand hover:bg-surface-muted hover:text-primary"
                    >
                      {t(child.labelKey)}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-text lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <path d="M2 5h18M2 11h18M2 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
