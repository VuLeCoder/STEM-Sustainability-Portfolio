import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { SectionHeading } from "@/components/section-heading";
import {
  locales,
  projectsPageContent,
  siteContent,
  type Locale,
} from "@/constants/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const selectedLocale = locale as Locale;
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
  if (!locales.includes(locale as Locale)) notFound();
  const lang = locale as Locale;
  const { profile, contact, home, about, projects, activities } = siteContent;
  const featured = projects.filter((project) => project.featured).slice(0, 2);
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
          <div className="home-hero-copy">
            <p className="editorial-label">{home.eyebrow[lang]}</p>
            <h1>{profile.name}</h1>
            <p className="home-positioning">{profile.positioning[lang]}</p>
            <p className="home-intro">{profile.introduction[lang]}</p>
            <div className="home-actions">
              <ButtonLink href={`/${lang}/projects`}>
                {home.primaryCta[lang]} <span aria-hidden="true">↗</span>
              </ButtonLink>
              <ButtonLink href="#story" variant="text">
                {home.secondaryCta[lang]} <span aria-hidden="true">↓</span>
              </ButtonLink>
            </div>
          </div>
          <div className="home-portrait-wrap">
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
          <div className="home-project-list">
            {featured.map((project, index) => (
              <article className="home-project" key={project.slug}>
                <div className="home-project-visual">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} — ${project.category[lang]}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="home-project-copy">
                  <p className="editorial-label">{project.category[lang]}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary[lang]}</p>
                  <dl>
                    <div>
                      <dt>{home.projectRoleLabel[lang]}</dt>
                      <dd>{project.role[lang]}</dd>
                    </div>
                    <div>
                      <dt>{home.projectHighlightLabel[lang]}</dt>
                      <dd>{project.result[lang]}</dd>
                    </div>
                  </dl>
                  <ButtonLink
                    href={"/" + lang + "/projects/" + project.slug}
                    variant="text"
                  >
                    {projectsPageCta(lang)} <span aria-hidden="true">→</span>
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
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
      <section
        id="story"
        className="home-section home-story"
        aria-labelledby="story-title"
      >
        <div className="home-shell home-story-grid">
          <div>
            <p className="editorial-label">{home.story.eyebrow[lang]}</p>
            <h2 id="story-title">{home.story.title[lang]}</h2>
            <p className="home-story-lead">{about.story[lang]}</p>
            <p className="home-path">{home.story.pathLabel[lang]}</p>
          </div>
          <ol className="home-milestones">
            {home.story.milestones.map((milestone, index) => (
              <li key={milestone.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{milestone.title[lang]}</h3>
                  <p>{milestone.description[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
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
      <section className="home-contact" aria-labelledby="contact-title">
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
