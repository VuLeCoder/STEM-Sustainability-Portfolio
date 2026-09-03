import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, siteContent, type Locale } from "@/constants/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const selectedLocale = locale as Locale;
  return {
    title: siteContent.seo.defaultTitle[selectedLocale],
    description: siteContent.seo.defaultDescription[selectedLocale],
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <>{children}</>;
}
