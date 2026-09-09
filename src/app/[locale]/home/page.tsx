import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { HomeProjects } from "@/components/home-projects";
import { HomeSidebar } from "@/components/home-sidebar";
import { HomeAbout } from "@/components/home-about";
import { HomeJourney } from "@/components/home-journey";
import { siteContent } from "@/constants/common";
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lang = locale;
  const { profile, home } = siteContent;

  return (
    <main className="home-page">
      <HomeSidebar locale={lang} />
      <section id="hero" className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-shell home-hero-grid">
          <div className="home-hero-copy motion-fade-up">
            <p className="home-hero-slogan">
              {home.eyebrow[lang]}
            </p>
            <h1 id="home-hero-title">{profile.name[locale]}</h1>
            <p className="home-positioning">
              {profile.positioning[lang]}
            </p>
          </div>
          <div className="home-portrait-wrap motion-fade-in">
            <div className="home-portrait-frame">
              <Image
                src={profile.portrait}
                alt={profile.name[locale]}
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
      <HomeProjects locale={lang} />
    </main>
  );
}
