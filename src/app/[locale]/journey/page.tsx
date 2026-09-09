import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyAccordion } from "@/components/journey-accordion";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { siteContent } from "@/constants/content";
import { journeyItems, journeyPageContent as content } from "@/constants/journey";
import { isLocale } from "@/lib/i18n";
import "./journey.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return createLocalizedMetadata({ locale, path: "/journey",
    title: content.title[locale] + " | " + siteContent.seo.siteName,
    description: content.description[locale],
  });
}

export default async function JourneyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <main className="journey-chapters">
      <div className="journey-chapters__shell">
        <header className="journey-chapters__header">
          <div>
            <span className="journey-chapters__label">{content.label[locale]}</span>
            <h1>{content.title[locale]}</h1>
          </div>
          <div className="journey-chapters__intro-copy">
            <p>{content.description[locale]}</p>
            <p className="journey-chapters__hint">{content.timelineHint[locale]}</p>
          </div>
        </header>
        <JourneyAccordion items={journeyItems} locale={locale} />
      </div>
    </main>
  );
}
