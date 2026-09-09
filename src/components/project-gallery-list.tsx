"use client";

import { Children, cloneElement, useRef, useState, useSyncExternalStore, type ReactElement, type ReactNode } from "react";

function subscribe(callback: () => void) {
  const queries = [window.matchMedia("(min-width: 768px)"), window.matchMedia("(min-width: 1024px)")];
  queries.forEach((query) => query.addEventListener("change", callback));
  return () => queries.forEach((query) => query.removeEventListener("change", callback));
}

function getColumns() {
  return window.matchMedia("(min-width: 1024px)").matches ? 3 : window.matchMedia("(min-width: 768px)").matches ? 2 : 1;
}

export function ProjectGalleryList({ children, moreLabel, lessLabel }: {
  children: ReactNode;
  moreLabel: string;
  lessLabel: string;
}) {
  const columns = useSyncExternalStore(subscribe, getColumns, () => 0);
  const [expanded, setExpanded] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const cards = Children.toArray(children);
  const limit = columns === 3 ? 6 : columns === 2 ? 4 : 3;
  const canCollapse = columns > 0 && cards.length > limit;
  const collapsed = canCollapse && !expanded;

  return (
    <div className={`project-gallery__list${collapsed ? " project-gallery__list--collapsed" : ""}`}>
      <ul id="project-gallery-items" className="project-gallery__grid">
        {cards.map((card, index) => {
          const preview = collapsed && index >= limit;
          return cloneElement(card as ReactElement<{ hidden?: boolean; inert?: boolean; "aria-hidden"?: boolean; className?: string }>, {
            hidden: collapsed && index >= limit + columns,
            inert: preview,
            "aria-hidden": preview || undefined,
            className: preview ? "project-gallery__preview" : undefined,
          });
        })}
      </ul>
      {canCollapse && (
        <div className="project-gallery__toggle-wrap">
          <button ref={toggle} type="button" className="project-gallery__toggle"
            aria-expanded={expanded} aria-controls="project-gallery-items"
            onClick={() => {
              setExpanded(!expanded);
              if (expanded) requestAnimationFrame(() => toggle.current?.scrollIntoView({ block: "nearest", behavior: "instant" }));
            }}>
            {expanded ? lessLabel : moreLabel}
          </button>
        </div>
      )}
    </div>
  );
}
