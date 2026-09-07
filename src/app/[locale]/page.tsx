import { redirect } from "next/navigation";
import { locales } from "@/constants/content";
import { defaultLocale, isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) redirect("/" + defaultLocale + "/home");
  redirect("/" + locale + "/home");
}
