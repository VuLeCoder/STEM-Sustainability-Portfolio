import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contactPageContent, siteContent } from "@/constants/content";
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
    path: "/contact",
    title: `${contactPageContent.title[locale]} | ${siteContent.seo.siteName}`,
    description: contactPageContent.description[locale],
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main className="contact-page">
      <header className="contact-hero contact-shell">
        <div className="contact-hero-meta">
          <p className="editorial-label">
            {contactPageContent.eyebrow[locale]}
          </p>
          <span aria-hidden="true">05</span>
        </div>
        <h1>{contactPageContent.title[locale]}</h1>
        <p className="contact-intro">
          {contactPageContent.description[locale]}
        </p>
      </header>

      <section data-reveal className="contact-details contact-shell">
        <dl>
          <div>
            <dt>{contactPageContent.availabilityLabel[locale]}</dt>
            <dd>{contactPageContent.availability[locale]}</dd>
          </div>
          <div>
            <dt>{contactPageContent.locationLabel[locale]}</dt>
            <dd>{siteContent.contact.location[locale]}</dd>
          </div>
        </dl>
      </section>

      <section data-reveal className="contact-explore contact-shell">
        <p className="editorial-label">
          {contactPageContent.exploreLabel[locale]}
        </p>
        <nav aria-label={contactPageContent.exploreLabel[locale]}>
          <Link href={`/${locale}/projects`}>
            {contactPageContent.projectsCta[locale]}
            <span aria-hidden="true">↗</span>
          </Link>
          <Link href={`/${locale}/journey`}>
            {contactPageContent.journeyCta[locale]}
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </section>
    </main>
  );
}
