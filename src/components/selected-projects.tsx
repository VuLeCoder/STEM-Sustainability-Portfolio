"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import type { Locale, Project } from "@/constants/content";

type Props = {
  locale: Locale;
  projects: readonly Project[];
  otherProjectsLabel: string;
  viewProjectLabel: string;
  viewAllLabel: string;
};

export function SelectedProjects({
  locale,
  projects,
  otherProjectsLabel,
  viewProjectLabel,
  viewAllLabel,
}: Props) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");
  const active =
    projects.find((project) => project.slug === activeSlug) ?? projects[0];

  if (!active) return null;

  const activeIndex = projects.findIndex(
    (project) => project.slug === active.slug,
  );
  const secondary = projects.filter((project) => project.slug !== active.slug);

  return (
    <div className="selected-projects">
      <article
        id="selected-project-preview"
        className="selected-projects-featured"
        aria-live="polite"
        key={active.slug}
      >
        <div className="selected-projects-image">
          <Image
            src={active.coverImage}
            alt={`${active.title} — ${active.category[locale]}`}
            fill
            sizes="(max-width: 767px) 100vw, 62vw"
          />
          <span aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="selected-projects-meta">
          {[active.year, active.category[locale]].filter(Boolean).join(" · ")}
        </p>
        <h3>{active.title}</h3>
        <p className="selected-projects-summary">{active.summary[locale]}</p>
        <ButtonLink
          href={`/${locale}/projects/${active.slug}`}
          variant="text"
        >
          {viewProjectLabel} <span aria-hidden="true">↗</span>
        </ButtonLink>
      </article>

      <aside className="selected-projects-side" aria-label={otherProjectsLabel}>
        <p className="editorial-label">{otherProjectsLabel}</p>
        <div className="selected-projects-list">
          {secondary.map((project) => {
            const index = projects.findIndex(
              (item) => item.slug === project.slug,
            );

            return (
              <button
                key={project.slug}
                type="button"
                aria-controls="selected-project-preview"
                onClick={() => setActiveSlug(project.slug)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>
                  {[project.category[locale], project.year]
                    .filter(Boolean)
                    .join(" · ")}
                </small>
                <strong>{project.title}</strong>
                <span aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>
        <ButtonLink href={`/${locale}/projects`} variant="text">
          {viewAllLabel} <span aria-hidden="true">↗</span>
        </ButtonLink>
      </aside>
    </div>
  );
}
