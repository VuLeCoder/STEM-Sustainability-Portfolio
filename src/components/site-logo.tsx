import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/constants/content";
import { siteContent } from "@/constants/content";

export function SiteLogo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}`}
      className="site-logo"
      aria-label={`${siteContent.profile.name} — ${siteContent.navigation.home[locale]}`}
    >
      <Image src={siteContent.chrome.logoImage} alt={`${siteContent.profile.initials} logo`} width={64} height={64} />
    </Link>
  );
}
