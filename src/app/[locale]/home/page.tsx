import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { SectionHeading } from "@/components/section-heading";
import { SelectedProjects } from "@/components/selected-projects";
import {
  activitiesPageContent,
  projectsPageContent,
  siteContent,
  type Locale,
} from "@/constants/content";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const selectedLocale = locale;
  return createLocalizedMetadata({
    locale: selectedLocale,
    path: "/home",
    title: siteContent.seo.defaultTitle[selectedLocale],
    description: siteContent.seo.defaultDescription[selectedLocale],
  });
}

function projectsPageCta(locale: Locale) {
  return projectsPageContent.viewProject[locale];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lang = locale;
  const { profile, home, about, projects, activities } = siteContent;
  const selectedProjects = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ].slice(0, 5);
  const activityPreview = activities
    .flatMap((group) =>
      group.entries
        .slice(0, 2)
        .map((entry) => ({ ...entry, year: group.year })),
    )
    .slice(0, 4);
  const selectedAwards = activities
    .flatMap((group) =>
      group.entries.map((entry) => ({ ...entry, year: group.year })),
    )
    .filter((entry) => entry.type === "competition")
    .slice(0, 3);

  return (
    <main>
      <section className="home-hero">
        <div className="home-shell home-hero-grid">
          <div className="home-hero-copy motion-stagger">
            <p className="editorial-label motion-fade-up">
              {home.eyebrow[lang]}
            </p>
            <h1 className="motion-fade-up">{profile.name}</h1>
            <p className="home-positioning motion-fade-up">
              {profile.positioning[lang]}
            </p>
            <div className="home-actions motion-fade-up">
              <ButtonLink href={`/${lang}/projects`}>
                {home.primaryCta[lang]} <span aria-hidden="true">↗</span>
              </ButtonLink>
            </div>
          </div>
          <div className="home-portrait-wrap motion-fade-in">
            <div className="home-portrait-index" aria-hidden="true">
              01 — 06
            </div>
            <div className="home-portrait-frame">
              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="home-portrait-caption">
              <span>{home.visualLabel}</span>
              <span>{profile.location[lang]}</span>
            </div>
          </div>
        </div>
      </section>
      <section
        data-reveal
        id="about"
        className="home-section home-about-preview"
        aria-labelledby="about-preview-title"
      >
        <div className="home-shell home-about-preview-grid">
          <div className="home-about-preview-visual">
            <Image
              src={profile.portrait}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 100vw, 36vw"
            />
          </div>
          <div className="home-about-preview-copy">
            <div className="home-about-preview-meta">
              <p className="editorial-label">
                {home.aboutPreview.eyebrow[lang]}
              </p>
              <span aria-hidden="true">01</span>
            </div>
            <h2 id="about-preview-title">{home.aboutPreview.title[lang]}</h2>
            <p>{about.story[lang]}</p>
            <ButtonLink href={`/${lang}/about`} variant="text">
              {home.aboutPreview.cta[lang]} <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </div>
      </section>
      <section data-reveal className="home-section">
        <div className="home-shell">
          <SectionHeading
            eyebrow={home.featuredProjects.eyebrow[lang]}
            title={home.featuredProjects.title[lang]}
            description={home.featuredProjects.description[lang]}
            action={
              <ButtonLink href={`/${lang}/projects`} variant="text">
                {home.allProjectsCta[lang]} <span aria-hidden="true">↗</span>
              </ButtonLink>
            }
          />
          <SelectedProjects
            locale={lang}
            projects={selectedProjects}
            otherProjectsLabel={home.otherProjectsLabel[lang]}
            viewProjectLabel={projectsPageCta(lang)}
            viewAllLabel={home.allProjectsCta[lang]}
          />
        </div>
      </section>
      <section data-reveal className="home-section home-activities">
        <div className="home-shell">
          <SectionHeading
            eyebrow={home.activities.eyebrow[lang]}
            title={home.activities.title[lang]}
            action={
              <ButtonLink href={`/${lang}/journey`} variant="text">
                {home.activities.cta[lang]} <span aria-hidden="true">↗</span>
              </ButtonLink>
            }
          />
          <ol className="home-activity-list">
            {activityPreview.map((activity, index) => (
              <li key={activity.title.en}>
                <time>{activity.year}</time>
                <div>
                  <span className="home-activity-type">
                    {activitiesPageContent.types[activity.type][lang]}
                  </span>
                  <h3>{activity.title[lang]}</h3>
                  <p>{activity.description[lang]}</p>
                </div>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="home-section home-awards"
        aria-labelledby="selected-awards-title"
      >
        <div className="home-shell">
          <div className="home-awards-heading">
            <p className="editorial-label">
              {home.selectedAwards.eyebrow[lang]}
            </p>
            <h2 id="selected-awards-title">
              {home.selectedAwards.title[lang]}
            </h2>
          </div>
          <ol className="home-awards-list">
            {selectedAwards.map((award, index) => (
              <li key={award.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{award.year}</time>
                <div>
                  <h3>{award.title[lang]}</h3>
                  <p>{award.description[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
          <ButtonLink href={`/${lang}/journey`} variant="text">
            {home.selectedAwards.cta[lang]} <span aria-hidden="true">↗</span>
          </ButtonLink>
        </div>
      </section>
      <section
        data-reveal
        id="contact"
        className="home-contact"
        aria-labelledby="contact-title"
      >
        <div className="home-shell home-contact-grid">
          <div className="home-contact-index" aria-hidden="true">
            06
          </div>
          <div className="home-contact-copy">
            <p className="editorial-label">{home.contactCta.eyebrow[lang]}</p>
            <h2 id="contact-title">{home.contactCta.title[lang]}</h2>
            <p>{home.contactCta.description[lang]}</p>
            <div className="home-contact-actions">
              <ButtonLink href={`/${lang}/projects`}>
                {home.contactCta.projectsCta[lang]}{" "}
                <span aria-hidden="true">↗</span>
              </ButtonLink>
              <ButtonLink href={`/${lang}/about`} variant="text">
                {home.contactCta.aboutCta[lang]}{" "}
                <span aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
