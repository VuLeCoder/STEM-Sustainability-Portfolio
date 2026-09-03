import { notFound } from "next/navigation";
import { locales, siteContent, type Locale } from "@/constants/content";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[var(--primary)] uppercase">STEM · Sustainability Portfolio</p>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{siteContent.profile.name}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{siteContent.profile.positioning[selectedLocale]}</p>
    </main>
  );
}
