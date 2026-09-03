import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeSwitch } from "@/components/theme-switch";
import { locales, siteContent, type Locale } from "@/constants/content";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;
  const otherLocale: Locale = selectedLocale === "vi" ? "en" : "vi";

  return (
    <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "2rem" }}>
      <nav aria-label="Thiết lập website" style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Link href={`/${otherLocale}`}>{otherLocale.toUpperCase()}</Link>
        <ThemeSwitch />
      </nav>
      <p style={{ color: "var(--primary)", fontFamily: "monospace" }}>STEM · SUSTAINABILITY PORTFOLIO</p>
      <h1>{siteContent.profile.name}</h1>
      <p style={{ color: "var(--muted)", maxWidth: "42rem" }}>{siteContent.profile.positioning[selectedLocale]}</p>
    </main>
  );
}
