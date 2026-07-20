"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { navItems } from "@/components/layout/nav-config";

/** 모바일 전체화면 오버레이 메뉴 — 아코디언, ESC 닫기, 스크롤 잠금, 포커스 이동. Task 3.3 */
export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("Nav");
  const tm = useTranslations("MobileMenu");
  const pathname = usePathname();
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex flex-col bg-bg lg:hidden"
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-6">
        <span className="text-lg font-extrabold tracking-tight">
          <span className="text-text">Steady</span>
          <span className="text-primary">View</span>
        </span>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label={tm("close")}
          className="flex h-10 w-10 items-center justify-center rounded-md text-text"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 py-6">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-3 text-lg font-medium text-text hover:text-primary"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              );
            }
            const expanded = expandedKey === item.labelKey;
            return (
              <li key={item.labelKey} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setExpandedKey(expanded ? null : item.labelKey)}
                  className="flex w-full items-center justify-between px-2 py-3 text-lg font-medium text-text"
                >
                  {t(item.labelKey)}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ease-brand ${expanded ? "rotate-180" : ""}`}
                  >
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {expanded && (
                  <ul className="flex flex-col gap-1 pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-2 py-2 text-base text-text-muted hover:text-primary"
                        >
                          {t(child.labelKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border px-6 py-5">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
