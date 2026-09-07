"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/site-logo";
import { siteContent, type Locale } from "@/constants/content";
import { getLocalizedPath } from "@/lib/i18n";

const navigationItems = [
  { key: "about", path: "/about" },
  { key: "journey", path: "/activities" },
  { key: "projects", path: "/projects" },
  { key: "contact", path: "/home#contact" },
] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const otherLocale: Locale = locale === "vi" ? "en" : "vi";
  const localizedPath = getLocalizedPath(pathname, otherLocale);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const getHref = (path: string) => `/${locale}${path}`;
  const isActive = (path: string) => {
    const route = path.split("#")[0];
    return route !== "/home" && pathname.startsWith(`/${locale}${route}`);
  };

  return (
    <header
      className={`site-header${isScrolled || isOpen ? " site-header--solid" : ""}`}
    >
      <div className="site-header__inner">
        <SiteLogo locale={locale} />
        <nav
          className="site-header__nav"
          aria-label={siteContent.ui.menu[locale]}
        >
          {navigationItems.map(({ key, path }) => (
            <Link
              key={key}
              href={getHref(path)}
              aria-current={isActive(path) ? "page" : undefined}
            >
              {siteContent.navigation[key][locale]}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <div
            className="locale-switch"
            aria-label={siteContent.ui.language[locale]}
          >
            <span aria-current="true">{locale.toUpperCase()}</span>
            <span aria-hidden="true">/</span>
            <Link href={localizedPath} lang={otherLocale}>
              {otherLocale.toUpperCase()}
            </Link>
          </div>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={
              isOpen
                ? siteContent.ui.closeMenu[locale]
                : siteContent.ui.openMenu[locale]
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`mobile-menu${isOpen ? " mobile-menu--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label={siteContent.ui.menu[locale]}>
          {navigationItems.map(({ key, path }, index) => (
            <Link
              key={key}
              href={getHref(path)}
              tabIndex={isOpen ? undefined : -1}
              aria-current={isActive(path) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {siteContent.navigation[key][locale]}
            </Link>
          ))}
        </nav>
        <Link
          className="mobile-menu__locale"
          href={localizedPath}
          lang={otherLocale}
          tabIndex={isOpen ? undefined : -1}
          onClick={() => setIsOpen(false)}
        >
          {locale.toUpperCase()} / {otherLocale.toUpperCase()}
        </Link>
      </div>
    </header>
  );
}
