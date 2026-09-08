"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SiteLogo } from "@/components/site-logo";
import { siteContent, type Locale } from "@/constants/content";
import { getLocalizedPath } from "@/lib/i18n";

const navigationItems = [
  { key: "home", path: "" },
  { key: "journey", path: "/journey" },
  { key: "projects", path: "/projects" },
] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const localeSwitchRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
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
    const breakpoint = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (breakpoint.matches) setIsOpen(false); };
    breakpoint.addEventListener("change", closeOnDesktop);
    const previousOverflow = document.body.style.overflow;
    const menu = mobileMenuRef.current;
    const focusableElements = [
      localeSwitchRef.current,
      menuToggleRef.current,
      ...(menu
        ? Array.from(
            menu.querySelectorAll<HTMLElement>('nav a[href], button:not([disabled])'),
          )
        : []),
    ].filter((element): element is HTMLElement => element !== null);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => focusableElements[2]?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      breakpoint.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const getHref = (path: string) => `/${locale}${path}`;
  const isActive = (path: string) => {
    const route = path.split("#")[0];
    return route === ""
      ? pathname === `/${locale}` || pathname === `/${locale}/home`
      : pathname === `/${locale}${route}` || pathname.startsWith(`/${locale}${route}/`);
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
          <Link
            ref={localeSwitchRef}
            className="locale-switch"
            href={localizedPath}
            hrefLang={otherLocale}
            aria-label={locale === "en" ? "EN — Switch to Vietnamese" : "VI — Chuyển sang tiếng Anh"}
            title={locale === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
            onClick={() => setIsOpen(false)}
          >
            {locale.toUpperCase()}
          </Link>
          <button
            ref={menuToggleRef}
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
            aria-haspopup="true"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        ref={mobileMenuRef}
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
      </div>
    </header>
  );
}
