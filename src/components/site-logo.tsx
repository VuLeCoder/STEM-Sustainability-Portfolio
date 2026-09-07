import Link from "next/link";
import type { Locale } from "@/constants/content";
import { siteContent } from "@/constants/content";

export function SiteLogo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}/home`}
      className="site-logo"
      aria-label={`${siteContent.profile.name} — ${siteContent.navigation.home[locale]}`}
    >
      {siteContent.profile.initials}<span aria-hidden="true">.</span>
    </Link>
  );
}
