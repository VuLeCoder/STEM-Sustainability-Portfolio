"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { siteContent, type Locale, type Project } from "@/constants/content";
import "./home-projects.css";

const projects: readonly Project[] = siteContent.projects.slice(0, 5);

export function HomeProjects({ locale }: { locale: Locale }) {
  const { home } = siteContent;
  const content = home.featuredProjects;
  const [activeSlug, setActiveSlug] = useState(
    projects.find((project) => project.featured)?.slug ?? projects[0]?.slug,
  );
  const previewHeading = useRef<HTMLHeadingElement>(null);
  const active = projects.find((project) => project.slug === activeSlug);
  if (!active) return null;
  const externalLink = active.externalLinks.find((link) => /^https?:\/\//.test(link.href));
  const placeholder = !active.coverImage || active.coverImage.includes("/placeholders/");

  return (
    <section id="projects" className="home-projects" aria-labelledby="home-projects-title">
      <div className="home-shell">
        <header className="home-projects-heading" data-reveal>
          <span className="home-about-label">{content.eyebrow[locale]}</span>
          <h2 id="home-projects-title">{content.title[locale]}</h2>
          <p>{content.description[locale]}</p>
        </header>
        <div className="home-projects-layout" data-reveal>
          <div id="home-projects-preview" aria-live="polite" aria-atomic="true">
            <article className="home-projects-card" key={active.slug}>
              <div className="home-projects-image">
                {placeholder ? (
                  <div className="home-projects-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8" cy="8" r="1.5" />
                      <path d="m3 17 5-5 4 4 4-6 5 7" />
                    </svg>
                    <span>{content.imagePlaceholder[locale]}</span>
                  </div>
                ) : (
                  <Image src={active.coverImage} alt={active.title} fill sizes="(min-width: 1024px) 700px, 100vw" />
                )}
                <span className="home-projects-number" aria-hidden="true">
                  {String(projects.indexOf(active) + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="home-projects-copy">
                <div className="home-projects-meta">
                  <span>{active.category[locale]}</span>
                  {active.year && <time>{active.year}</time>}
                </div>
                <h3 ref={previewHeading} tabIndex={-1}>{active.title}</h3>
                <p>{active.summary[locale]}</p>
                <div className="home-projects-card-footer">
                {externalLink ? (
                  <a className="home-projects-link" href={externalLink.href} target="_blank" rel="noopener noreferrer">
                    {content.openProject[locale]} <span aria-hidden="true">↗</span>
                  </a>
                ) : <span className="home-projects-pending">{content.pendingLink[locale]}</span>}
                </div>
              </div>
            </article>
          </div>
          <aside className="home-projects-side" aria-labelledby="home-projects-other">
            <h3 id="home-projects-other">{home.otherProjectsLabel[locale]}</h3>
            <div className="home-projects-options">
              {projects.map((project, index) => project.slug === active.slug ? null : (
                <button key={project.slug} type="button" aria-controls="home-projects-preview"
                  aria-label={`${content.preview[locale]}: ${project.title}`}
                  onClick={() => {
                    setActiveSlug(project.slug);
                    requestAnimationFrame(() => previewHeading.current?.focus({ preventScroll: true }));
                  }}>
                  <span className="home-projects-option-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="home-projects-option-copy">
                    <small>{[project.category[locale], project.year].filter(Boolean).join(" · ")}</small>
                    <strong>{project.title}</strong>
                  </span>
                  <span className="home-projects-arrow" aria-hidden="true">→</span>
                </button>
              ))}
            </div>
            <Link className="home-projects-link home-projects-all" href={`/${locale}/projects`}>
              {home.allProjectsCta[locale]} <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
