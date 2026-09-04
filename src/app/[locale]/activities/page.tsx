import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { activitiesPageContent, locales, type Locale } from "@/constants/content";

export default async function ActivitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading eyebrow={activitiesPageContent.eyebrow[selectedLocale]} title={activitiesPageContent.title[selectedLocale]} description={activitiesPageContent.description[selectedLocale]} />
      <p className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 leading-7 text-[var(--muted)]">{activitiesPageContent.comingSoon[selectedLocale]}</p>
    </section>
  );
}
