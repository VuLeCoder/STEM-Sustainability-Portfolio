import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { HomeProjects } from "@/components/home-projects";
import { HomeSidebar } from "@/components/home-sidebar";
import { HomeAbout } from "@/components/home-about";
import { HomeResearch } from "@/components/home-research";
import { HomeVision } from "@/components/home-vision";
import { homeNarrative } from "@/constants/home";
import "./home.css";
import { HomeCertificates } from "@/components/home-certificates";
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
              {homeNarrative.positioning[lang]}
            </p>
            <div className="home-hero-actions">
              <a className="home-hero-button home-hero-button-primary" href="#about">
                {homeNarrative.actions.about[lang]}
                <span aria-hidden="true">↓</span>
              </a>
              <a className="home-hero-button" href="/documents/CV.pdf" download="Nguyen-Cao-Xuan-Phuc-CV.pdf">
                {homeNarrative.actions.cv[lang]}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />
                </svg>
              </a>
            </div>
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
      <HomeResearch locale={lang} />
      <HomeCertificates locale={lang} />
      <HomeProjects locale={lang} />
      <HomeVision locale={lang} />
    </main>
  );
}
