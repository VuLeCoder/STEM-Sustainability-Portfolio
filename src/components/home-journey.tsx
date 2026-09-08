"use client";

import { useState } from "react";
import Link from "next/link";
import { siteContent, type Locale } from "@/constants/content";

export function HomeJourney({ locale }: { locale: Locale }) {
  const content = siteContent.home.journeyPreview;
  const [activeIndex, setActiveIndex] = useState(content.milestones.length - 1);
  const milestone = content.milestones[activeIndex];

  return (
    <section id="journey" className="home-journey" aria-labelledby="home-journey-title">
      <div className="home-shell">
        <div className="home-journey-heading" data-reveal>
          <div>
            <p className="home-about-label">{content.label[locale]}</p>
            <h2 id="home-journey-title">{content.title[locale]}</h2>
          </div>
          <p>{content.description[locale]}</p>
        </div>
        <div className="home-journey-selector" role="group" aria-label={content.selectYear[locale]}>
          {content.milestones.map((item, index) => (
            <button
              key={item.year}
              type="button"
              aria-pressed={index === activeIndex}
              aria-controls="home-journey-milestone"
              onClick={() => setActiveIndex(index)}
            >
              <span>{item.year}</span>
              <span className="home-journey-dot" aria-hidden="true" />
            </button>
          ))}
        </div>
        <div id="home-journey-milestone" aria-live="polite" aria-atomic="true">
          <article className="home-journey-card" key={milestone.year}>
            <div className="home-journey-year" aria-hidden="true">
              <span>{milestone.year}</span>
              <span className="home-journey-year-line" />
            </div>
            <div className="home-journey-copy">
              <p className="home-journey-meta">
                <span>{content.types[milestone.type][locale]}</span>
                <time dateTime={milestone.year}>{milestone.year}</time>
              </p>
              <h3>{milestone.title[locale]}</h3>
              <p className="home-journey-description">{milestone.description[locale]}</p>
            </div>
          </article>
        </div>
        <div className="home-journey-footer">
          <Link href={`/${locale}/journey`} className="home-journey-link">
            {content.cta[locale]} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
