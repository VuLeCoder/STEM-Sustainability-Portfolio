"use client";

import { useEffect, useId, useState } from "react";
import { siteContent, type Locale } from "@/constants/content";

const items = [
  { key: "about", id: "about", icon: "M12 5C9 3 5 3 2 4v16c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v16" },
  { key: "journey", id: "journey", icon: "M6 3v14a4 4 0 0 0 4 4h8M3 6h6M14 5h7M14 9h4M15 18l3 3-3 3" },
  { key: "projects", id: "projects", icon: "m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5" },
  { key: "contact", id: "footer-contact", icon: "M3 5h18v14H3zM3 6l9 7 9-7" },
] as const;

export function HomeSidebar({ locale }: { locale: Locale }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const navigationId = useId();
  const { sidebar, navigation } = siteContent;
  const toggleLabel = collapsed ? sidebar.expand[locale] : sidebar.collapse[locale];

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
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
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <aside className="home-sidebar" aria-label={sidebar.label[locale]}>
      <nav id={navigationId} hidden={collapsed} aria-label={sidebar.label[locale]}>
        {items.map((item) => (
          <a
            key={item.key}
            className="home-sidebar__control"
            href={`#${item.id}`}
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
  );
}
