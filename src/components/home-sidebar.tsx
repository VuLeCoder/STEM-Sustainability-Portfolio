"use client";

import { useEffect, useId, useRef, useState } from "react";
import { siteContent, type Locale } from "@/constants/common";

const items = [
  { key: "home", id: "hero", icon: "m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-8H9v8H4a1 1 0 0 1-1-1Z" },
  { key: "about", id: "about", icon: "M12 5C9 3 5 3 2 4v16c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v16" },
  { key: "journey", id: "journey", icon: "M6 3v14a4 4 0 0 0 4 4h8M3 6h6M14 5h7M14 9h4M15 18l3 3-3 3" },
  { key: "projects", id: "projects", icon: "m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5" },
  { key: "contact", id: "footer-contact", icon: "M3 5h18v14H3zM3 6l9 7 9-7" },
] as const;

export function HomeSidebar({ locale }: { locale: Locale }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const scrollingHome = useRef(false);
  const navigationId = useId();
  const { sidebar, navigation } = siteContent;
  const toggleLabel = collapsed ? sidebar.expand[locale] : sidebar.collapse[locale];

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
  );
}
