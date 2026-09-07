import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActivityTimeline } from "@/components/activity-timeline";
import { SectionHeading } from "@/components/section-heading";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import {
  activitiesPageContent,
  locales,
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
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow={activitiesPageContent.eyebrow[selectedLocale]}
        title={activitiesPageContent.title[selectedLocale]}
        description={activitiesPageContent.description[selectedLocale]}
      />
      <ActivityTimeline
        locale={selectedLocale}
        activities={siteContent.activities}
      />
    </section>
  );
}
