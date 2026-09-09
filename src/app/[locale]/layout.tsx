import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, siteContent } from "@/constants/common";
import { isLocale } from "@/lib/i18n";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollReveal } from "@/components/scroll-reveal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const selectedLocale = locale;
  return {
    title: siteContent.seo.defaultTitle[selectedLocale],
    description: siteContent.seo.defaultDescription[selectedLocale],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const selectedLocale = locale;
  return (
    <div className="flex min-h-screen flex-col" lang={selectedLocale}>
      <a className="skip-link" href="#main-content">
        {selectedLocale === "vi" ? "Bỏ qua đến nội dung" : "Skip to content"}
      </a>
      <SiteHeader locale={selectedLocale} />
      <ScrollReveal />
      <div id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </div>
      <SiteFooter locale={selectedLocale} />
    </div>
  );
}
