import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { SectionHeading } from "@/components/section-heading";
import { SelectedProjects } from "@/components/selected-projects";
import {
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
  const { profile, contact, home, about, projects, activities } = siteContent;
  const selectedProjects = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ].slice(0, 5);
  const evidenceItems = home.evidence.items.map((item) => ({
    ...item,
    project: projects.find((project) => project.slug === item.projectSlug),
  }));
  const activityPreview = activities
    .flatMap((group) =>
      group.entries.map((entry) => ({ ...entry, year: group.year })),
    )
    .slice(0, 3);
  const phoneNumber = contact.phone.replace(/[^+\d]/g, "");

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
      <section className="home-section">
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
      <section className="home-evidence" aria-labelledby="evidence-title">
        <div className="home-shell">
          <p className="editorial-label">{home.evidence.eyebrow[lang]}</p>
          <div className="home-evidence-grid">
            <h2 id="evidence-title">{home.evidence.title[lang]}</h2>
            {evidenceItems.map(({ value, project }) =>
              project ? (
                <div className="home-evidence-item" key={project.slug}>
                  <strong>{value}</strong>
                  <p>{project.result[lang]}</p>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </section>
      <section className="home-section home-activities">
        <div className="home-shell">
          <SectionHeading
            eyebrow={home.activities.eyebrow[lang]}
            title={home.activities.title[lang]}
            action={
              <ButtonLink href={`/${lang}/activities`} variant="text">
                {home.activities.cta[lang]} <span aria-hidden="true">↗</span>
              </ButtonLink>
            }
          />
          <div className="home-activity-list">
            {activityPreview.map((activity) => (
              <article key={activity.title.en}>
                <time>{activity.year}</time>
                <div>
                  <h3>{activity.title[lang]}</h3>
                  <p>{activity.description[lang]}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="home-contact"
        aria-labelledby="contact-title"
      >
        <div className="home-shell home-contact-grid">
          <div>
            <p className="editorial-label">{home.valuesFuture.eyebrow[lang]}</p>
            <h2 id="contact-title">{about.values[lang]}</h2>
          </div>
          <div className="home-contact-copy">
            <p className="editorial-label">
              {home.valuesFuture.futureLabel[lang]}
            </p>
            <p>{about.futureGoal[lang]}</p>
            <div className="home-contact-links">
              <a href={`mailto:${contact.email}`}>
                {contact.email} <span aria-hidden="true">↗</span>
              </a>
              {phoneNumber ? (
                <a href={`tel:${phoneNumber}`}>{contact.phone}</a>
              ) : (
                <span>{contact.phone}</span>
              )}
              <span>{contact.location[lang]}</span>
            </div>
            <div className="home-social-links">
              <a href={contact.cvFile}>
                {home.contactHero.cvLabel[lang]}{" "}
                <span aria-hidden="true">↗</span>
              </a>
              {contact.socialLinks
                .filter((link) => link.href !== "#")
                .map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
