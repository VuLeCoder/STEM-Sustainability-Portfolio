import type { Metadata } from "next";
import { siteContent, type Locale } from "@/constants/content";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

export const siteUrl = new URL(
  configuredUrl.startsWith("http") ? configuredUrl : "https://" + configuredUrl,
);

export function createLocalizedMetadata({
  locale,
  path,
  title,
  description,
  image = siteContent.profile.portrait,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const localizedUrl = (language: Locale) =>
    new URL("/" + language + path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(locale),
      languages: {
        vi: localizedUrl("vi"),
        en: localizedUrl("en"),
      },
    },
    openGraph: {
      type: "website",
      url: localizedUrl(locale),
      title,
      description,
      siteName: siteContent.seo.siteName,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: locale === "vi" ? ["en_US"] : ["vi_VN"],
      images: [{ url: new URL(image, siteUrl).toString() }],
    },
  };
}
