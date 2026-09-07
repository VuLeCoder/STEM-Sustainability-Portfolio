import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActivityTimeline } from "@/components/activity-timeline";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { activitiesPageContent, siteContent } from "@/constants/content";
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
    path: "/activities",
    title:
      activitiesPageContent.title[selectedLocale] +
      " | " +
      siteContent.seo.siteName,
    description: activitiesPageContent.description[selectedLocale],
  });
}

export default async function ActivitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const selectedLocale = locale;

  return (
    <main className="journey-page">
      <header className="journey-hero journey-shell">
        <div className="journey-hero-meta">
          <p className="editorial-label">
            {activitiesPageContent.eyebrow[selectedLocale]}
          </p>
          <span aria-hidden="true">03</span>
        </div>
        <div className="journey-hero-grid">
          <h1>{activitiesPageContent.title[selectedLocale]}</h1>
          <p>{activitiesPageContent.description[selectedLocale]}</p>
        </div>
      </header>
      <section
        className="journey-content journey-shell"
        aria-label={activitiesPageContent.eyebrow[selectedLocale]}
      >
        <ActivityTimeline
          locale={selectedLocale}
          activities={siteContent.activities}
        />
      </section>
    </main>
  );
}
