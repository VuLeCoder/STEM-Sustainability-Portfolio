import { redirect } from "next/navigation";
import { defaultLocale, isLocale } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) redirect("/" + defaultLocale + "/home");
  redirect(`/${locale}/home#story`);
}
