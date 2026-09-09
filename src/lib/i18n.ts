import { locales, type Locale } from "@/constants/common";

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");

  if (segments[1] && isLocale(segments[1])) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}/home`;
  }

  return `/${locale}/home`;
}
