"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteLogo } from "@/components/site-logo";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteContent, type Locale } from "@/constants/content";

const navigationKeys = ["home", "projects", "activities"] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const otherLocale: Locale = locale === "vi" ? "en" : "vi";
  const pathname = usePathname();
  const localizedPath =
    pathname.replace(/^\/(vi|en)(?=\/|(?!.))/, "/" + otherLocale) ||
    "/" + otherLocale + "/home";
  const getNavigationHref = (key: (typeof navigationKeys)[number]) =>
    key === "home" ? "/" + locale + "/home" : "/" + locale + "/" + key;
  const isNavigationActive = (key: (typeof navigationKeys)[number]) => {
    const href = getNavigationHref(key);
    return (
      pathname === href || (key !== "home" && pathname.startsWith(href + "/"))
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/88 shadow-[0_1px_0_rgb(255_255_255_/_4%)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <SiteLogo locale={locale} />
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={siteContent.ui.menu[locale]}
        >
          {navigationKeys.map((key) => (
            <Link
              key={key}
              href={getNavigationHref(key)}
              aria-current={isNavigationActive(key) ? "page" : undefined}
              className={
                isNavigationActive(key)
                  ? "rounded-full bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--foreground)]"
                  : "rounded-full px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
              }
            >
              {siteContent.navigation[key][locale]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={localizedPath}
            className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            lang={otherLocale}
          >
            {locale.toUpperCase()}
          </Link>
          <ThemeSwitch locale={locale} />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={
              isOpen
                ? siteContent.ui.closeMenu[locale]
                : siteContent.ui.openMenu[locale]
            }
            aria-expanded={isOpen}
            className="inline-grid size-10 place-items-center rounded-full border border-[var(--border)] text-[var(--foreground)] lg:hidden"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav
          className="border-t border-[var(--border)] px-5 py-3 lg:hidden"
          aria-label={siteContent.ui.menu[locale]}
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigationKeys.map((key) => (
              <Link
                key={key}
                href={getNavigationHref(key)}
                aria-current={isNavigationActive(key) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={
                  isNavigationActive(key)
                    ? "rounded-lg bg-[var(--surface)] px-3 py-3 text-sm font-semibold text-[var(--foreground)]"
                    : "rounded-lg px-3 py-3 text-sm font-medium text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                }
              >
                {siteContent.navigation[key][locale]}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
