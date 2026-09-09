"use client";

import { useState } from "react";
import type { Locale } from "@/constants/common";
import { groupJourneyItems, journeyPageContent, type JourneyItem } from "@/constants/journey";

export function JourneyAccordion({ items, locale }: { items: readonly JourneyItem[]; locale: Locale }) {
  const groups = groupJourneyItems(items);
  const [openYear, setOpenYear] = useState<number | null>(groups[0]?.year ?? null);
  if (!groups.length) return <p className="journey-chapters__empty">{journeyPageContent.empty[locale]}</p>;

  return (
    <div className="journey-chapters__timeline">
      {groups.map(({ year, items: entries }) => {
        const open = year === openYear;
        return (
          <section className="journey-chapters__year" key={year} data-open={open}>
            <h2>
              <button id={`journey-year-${year}`} type="button" aria-expanded={open}
                aria-controls={`journey-panel-${year}`}
                onClick={() => setOpenYear(open ? null : year)}>
                <span>{year}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
              </button>
            </h2>
            <div id={`journey-panel-${year}`} className="journey-chapters__panel" role="region"
              aria-labelledby={`journey-year-${year}`} aria-hidden={!open} inert={!open}
              onTransitionEnd={(event) => {
                if (!open || event.target !== event.currentTarget || event.propertyName !== "grid-template-rows") return;
                const header = document.getElementById(`journey-year-${year}`);
                if (header && (header.getBoundingClientRect().top < 92 || header.getBoundingClientRect().top > window.innerHeight - 80)) {
                  header.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
                }
              }}>
              <div className="journey-chapters__clip">
                <ol className="journey-chapters__items">
                  {entries.map((item) => (
                    <li key={item.id}>
                      <article className="journey-chapters__card">
                        <span className="journey-chapters__tag">{journeyPageContent.types[item.type][locale]}</span>
                        <h3>{item.title[locale]}</h3>
                        <p>{item.shortDescription[locale]}</p>
                      </article>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
