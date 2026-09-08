import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default async function ActivitiesRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const journeyHref = `/${locale}/journey`;
  const label =
    locale === "vi" ? "Tiếp tục đến Hành trình" : "Continue to Journey";

  return (
    <main className="route-redirect">
      <meta httpEquiv="refresh" content={`0;url=${journeyHref}`} />
      <Link href={journeyHref}>{label}</Link>
    </main>
  );
}
