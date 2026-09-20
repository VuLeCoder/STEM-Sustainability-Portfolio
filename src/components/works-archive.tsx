"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import type { Locale } from "@/constants/common";
import { works } from "@/constants/works";
import { WorkCard } from "./work-card";

export function WorksArchive({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<"all" | "project" | "research">("all");
  useEffect(() => {
    const revealWork = (hash: string) => {
      const item = works.find(work => hash === `#${work.slug}`);
      if (!item) return;
      flushSync(() => setFilter("all"));
      document.getElementById(item.slug)?.scrollIntoView({ block: "start" });
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>(".works-hero__index-link") : null;
      if (link) revealWork(link.hash);
    };
    const onHashChange = () => revealWork(window.location.hash);
    const frame = requestAnimationFrame(onHashChange);
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  const vi = locale === "vi";
  const visible = works.filter(item => filter === "all" || item.type === filter);
  const filters = [{ id: "all", label: vi ? "Tất cả" : "All" }, { id: "project", label: vi ? "Dự án" : "Projects" }, { id: "research", label: vi ? "Nghiên cứu" : "Research" }] as const;
  return <section className="works-archive" aria-labelledby="works-archive-title">
    <div className="works-section-heading"><div><p className="works-kicker">{vi ? "Danh mục" : "Archive"}</p><h2 id="works-archive-title">{vi ? "Tất cả công việc" : "All Work"}</h2></div><p>{vi ? "Khám phá theo loại sản phẩm." : "Explore by type of work."}</p></div>
    <div className="works-toolbar"><div className="works-filters" role="group" aria-label={vi ? "Lọc công việc" : "Filter work"}>{filters.map(option => <button key={option.id} type="button" aria-pressed={filter === option.id} aria-controls="works-results" onClick={() => setFilter(option.id)}>{option.label}<span>{option.id === "all" ? works.length : works.filter(item => item.type === option.id).length}</span></button>)}</div><p role="status" aria-live="polite" aria-atomic="true">{visible.length} {vi ? "mục" : "items"}</p></div>
    <div id="works-results" className="works-grid" key={filter}>{visible.map(item => <WorkCard key={item.slug} item={item} locale={locale} />)}{visible.length === 0 && <p>{vi ? "Chưa có công việc trong danh mục này." : "No work is available in this category yet."}</p>}</div>
  </section>;
}
