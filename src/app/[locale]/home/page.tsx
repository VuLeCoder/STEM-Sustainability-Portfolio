import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { SectionHeading } from "@/components/section-heading";
import { SelectedProjects } from "@/components/selected-projects";
import { HomeSidebar } from "@/components/home-sidebar";
import { HomeAbout } from "@/components/home-about";
import { HomeJourney } from "@/components/home-journey";
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
  const { profile, home, projects, activities } = siteContent;
  const selectedProjects = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ].slice(0, 5);
  const selectedAwards = activities
    .flatMap((group) =>
      group.entries.map((entry) => ({ ...entry, year: group.year })),
    )
    .filter((entry) => entry.type === "competition")
    .slice(0, 3);

  return (
    <main className="home-page">
      <HomeSidebar locale={lang} />
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-shell home-hero-grid">
          <div className="home-hero-copy motion-fade-up">
            <p className="home-hero-slogan">
              {home.eyebrow[lang]}
            </p>
            <h1 id="home-hero-title">{profile.name}</h1>
            <p className="home-positioning">
              {profile.positioning[lang]}
            </p>
          </div>
          <div className="home-portrait-wrap motion-fade-in">
            <div className="home-portrait-frame">
              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 519px) calc(100vw - 40px), (max-width: 767px) 480px, (max-width: 1199px) 38vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>
      <HomeAbout locale={lang} />
      <HomeJourney locale={lang} />
      <section id="projects" data-reveal className="home-section">
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
      <section
        data-reveal
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
