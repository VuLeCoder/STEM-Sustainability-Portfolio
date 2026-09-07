import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import {
  aboutPageContent,
  siteContent,
} from "@/constants/content";
import { isLocale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/site-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return createLocalizedMetadata({
    locale,
    path: "/about",
    title: `${aboutPageContent.title[locale]} | ${siteContent.seo.siteName}`,
    description: siteContent.about.story[locale],
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { profile, about, home } = siteContent;

  return (
    <main className="about-page">
      <header className="about-hero about-shell">
        <div className="about-hero-meta">
          <p className="editorial-label">
            {aboutPageContent.eyebrow[locale]}
          </p>
          <span aria-hidden="true">02</span>
        </div>
        <h1>{aboutPageContent.title[locale]}</h1>
        <div className="about-hero-grid">
          <div className="about-portrait">
            <Image
              src={profile.portrait}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 42vw"
            />
          </div>
          <p>{profile.positioning[locale]}</p>
        </div>
      </header>

      <section
        className="about-story about-shell"
        aria-labelledby="about-story-title"
      >
        <p className="editorial-label">{aboutPageContent.storyLabel[locale]}</p>
        <div className="about-story-copy">
          <h2 id="about-story-title">{home.story.title[locale]}</h2>
          <p>{about.story[locale]}</p>
          <p className="about-path">{home.story.pathLabel[locale]}</p>
        </div>
      </section>

      <section className="about-details" aria-label={home.interests.title[locale]}>
        <div className="about-shell about-details-grid">
          <div className="about-detail-block">
            <p className="editorial-label">
              {aboutPageContent.academicInterestsLabel[locale]}
            </p>
            <ol>
              {about.academicInterests.map((interest, index) => (
                <li key={interest.en}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{interest[locale]}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="about-detail-block">
            <p className="editorial-label">
              {aboutPageContent.strengthsLabel[locale]}
            </p>
            <ol>
              {about.strengths.map((strength, index) => (
                <li key={strength.en}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{strength[locale]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="about-values about-shell"
        aria-labelledby="about-values-title"
      >
        <p className="editorial-label">
          {aboutPageContent.valuesLabel[locale]}
        </p>
        <div>
          <h2 id="about-values-title">{about.values[locale]}</h2>
          <ButtonLink href={`/${locale}/activities`} variant="text">
            {home.activities.cta[locale]} <span aria-hidden="true">↗</span>
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
