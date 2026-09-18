import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { notFound } from "next/navigation";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { HomeCommunityImpact } from "@/components/home-community-impact";
import { HomeProjects } from "@/components/home-projects";
import { HomeSidebar } from "@/components/home-sidebar";
import { HomeAbout } from "@/components/home-about";
import { HomeResearch } from "@/components/home-research";
import { HomeVision } from "@/components/home-vision";
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

  return (
    <main className="home-page">
      <HomeSidebar locale={lang} />
      <HomeHero locale={lang} />
      <HomeAbout locale={lang} />
      <HomeCertificates locale={lang} />
      <HomeResearch locale={lang} />
      <HomeProjects locale={lang} />
      <HomeCommunityImpact locale={lang} />
      <HomeVision locale={lang} />
    </main>
  );
}
