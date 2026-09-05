import { redirect } from "next/navigation";
import { locales } from "@/constants/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect("/" + locale + "/home");
}
