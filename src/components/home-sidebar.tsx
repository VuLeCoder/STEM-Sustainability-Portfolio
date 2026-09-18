"use client";

import { useEffect, useId, useRef, useState } from "react";
import { siteContent, type Locale } from "@/constants/common";

import { homeNarrative } from "@/constants/home";

const items = [
  { key: "home", id: "hero", icon: "m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-8H9v8H4a1 1 0 0 1-1-1Z" },
  { key: "about", id: "about", icon: "M12 5C9 3 5 3 2 4v16c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v16" },
  { key: "certificates", id: "certificates", icon: "M4 3h16v14H4zM8 7h8M8 11h5M9 17v5l3-2 3 2v-5" },
  { key: "research", id: "research", icon: "M9 3h6M10 3v7l-6 9a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-6-9V3M7 16h10" },
  { key: "projects", id: "projects", icon: "m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5" },
  { key: "impact", id: "community-impact", icon: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" },
  { key: "vision", id: "vision", icon: "M12 3v3M12 18v3M3 12h3M18 12h3M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" },
  { key: "contact", id: "footer-contact", icon: "M3 5h18v14H3zM3 6l9 7 9-7" },
] as const;

export function HomeSidebar({ locale }: { locale: Locale }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [quickOpen, setQuickOpen] = useState(false);
  const quickRef = useRef<HTMLDivElement>(null);
  const quickButtonRef = useRef<HTMLButtonElement>(null);
  const quickNavigationId = useId();
  const scrollingHome = useRef(false);
  const navigationId = useId();
  const { sidebar } = siteContent;
  const { navigation } = homeNarrative;
  const toggleLabel = collapsed ? sidebar.expand[locale] : sidebar.collapse[locale];

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];
  const contentsLabel = locale === "vi" ? "Mục lục nhanh" : "Quick navigation";

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px) and (min-height: 480px)");
    const closeOnDesktop = () => { if (desktop.matches) setQuickOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!quickOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!quickRef.current?.contains(event.target as Node)) setQuickOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQuickOpen(false);
        quickButtonRef.current?.focus();
      }
    };
    const closeOnBlur = (event: FocusEvent) => {
      if (!quickRef.current?.contains(event.target as Node)) setQuickOpen(false);
    };
    quickRef.current?.querySelector<HTMLAnchorElement>('a[aria-current="location"]')?.focus({ preventScroll: true });
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("focusin", closeOnBlur);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("focusin", closeOnBlur);
    };
  }, [quickOpen]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.scrollY <= 2) {
        scrollingHome.current = false;
        setActiveId("hero");
        return;
      }
      if (scrollingHome.current) {
        setActiveId("hero");
        return;
      }
      const sections = items.flatMap(({ id }) => {
        const element = document.getElementById(id);
        return element ? [{ id, top: element.getBoundingClientRect().top }] : [];
      }).sort((a, b) => a.top - b.top);
      const marker = Math.min(window.innerHeight * 0.35, 240);
      const reached = sections.filter((section) => section.top <= marker);
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActiveId(atBottom ? "footer-contact" : reached.at(-1)?.id ?? null);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const interruptHomeScroll = () => {
      scrollingHome.current = false;
      schedule();
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("wheel", interruptHomeScroll, { passive: true });
    window.addEventListener("touchstart", interruptHomeScroll, { passive: true });
    window.addEventListener("keydown", interruptHomeScroll);
    window.addEventListener("pointerdown", interruptHomeScroll);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("wheel", interruptHomeScroll);
      window.removeEventListener("touchstart", interruptHomeScroll);
      window.removeEventListener("keydown", interruptHomeScroll);
      window.removeEventListener("pointerdown", interruptHomeScroll);
    };
  }, []);

  return (
    <>
    <aside className="home-sidebar" aria-label={sidebar.label[locale]}>
      <nav id={navigationId} hidden={collapsed} aria-label={sidebar.label[locale]}>
        {items.map((item) => (
          <a
            key={item.key}
            className="home-sidebar__control"
            href={`#${item.id}`}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              scrollingHome.current = false;
              if (item.key !== "home") return;
              event.preventDefault();
              scrollingHome.current = true;
              setActiveId("hero");
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
              });
            }}
            aria-label={navigation[item.key][locale]}
            aria-current={activeId === item.id ? "location" : undefined}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={item.icon} /></svg>
            <span className="home-sidebar__tooltip" aria-hidden="true">{navigation[item.key][locale]}</span>
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="home-sidebar__control home-sidebar__toggle"
        aria-label={toggleLabel}
        aria-expanded={!collapsed}
        aria-controls={navigationId}
        onClick={() => setCollapsed((value) => !value)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={collapsed ? "m9 6 6 6-6 6" : "m15 6-6 6 6 6"} /></svg>
        <span className="home-sidebar__tooltip" aria-hidden="true">{toggleLabel}</span>
      </button>
    </aside>
    <div className="home-quick-nav" ref={quickRef}>
      <nav id={quickNavigationId} className="home-quick-nav__panel" hidden={!quickOpen} aria-label={contentsLabel}>
        <p className="home-quick-nav__title">{contentsLabel}</p>
        {items.map((item) => (
          <a
            key={item.key}
            href={`#${item.id}`}
            aria-current={activeItem.id === item.id ? "location" : undefined}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              setQuickOpen(false);
              quickButtonRef.current?.focus({ preventScroll: true });
              scrollingHome.current = item.id === "hero";
              const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
              window.history.replaceState(null, "", `#${item.id}`);
              if (item.id === "hero") {
                setActiveId("hero");
                window.scrollTo({ top: 0, behavior });
              } else {
                document.getElementById(item.id)?.scrollIntoView({ behavior, block: "start" });
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={item.icon} /></svg>
            <span>{navigation[item.key][locale]}</span>
          </a>
        ))}
      </nav>
      <button
        ref={quickButtonRef}
        type="button"
        className="home-quick-nav__trigger"
        aria-expanded={quickOpen}
        aria-controls={quickNavigationId}
        aria-label={`${contentsLabel}: ${navigation[activeItem.key][locale]}`}
        onClick={() => setQuickOpen((open) => !open)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={activeItem.icon} /></svg>
        <span>{navigation[activeItem.key][locale]}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d={quickOpen ? "m6 9 6 6 6-6" : "m6 15 6-6 6 6"} /></svg>
      </button>
    </div>
    </>
  );
}
