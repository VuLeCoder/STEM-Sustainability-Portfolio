import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/constants/common";
import { siteContent } from "@/constants/common";

export function SiteLogo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}`}
      className="site-logo"
      aria-label={`${siteContent.profile.name[locale]} — ${siteContent.navigation.home[locale]}`}
    >
      <Image src={siteContent.chrome.logoImage} alt={`${siteContent.profile.initials} logo`} width={64} height={64} />
    </Link>
  );
}
