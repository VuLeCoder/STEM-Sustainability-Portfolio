import Link from "next/link";
import type { Locale } from "@/constants/content";
import { siteContent } from "@/constants/content";

export function SiteLogo({ locale }: { locale: Locale }) {
  return (
    <Link href={`/${locale}`} className="group inline-flex items-center gap-3 rounded-md" aria-label={siteContent.profile.name}>
      <span className="grid size-10 place-items-center rounded-xl bg-[var(--primary)] font-mono text-sm font-bold tracking-[0.12em] text-white shadow-[var(--shadow)] transition-transform group-hover:-translate-y-0.5">
        {siteContent.profile.initials}
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-sm font-semibold tracking-tight">{siteContent.profile.name}</span>
        <span className="block text-xs text-[var(--muted)]">{siteContent.ui.portfolioLabel[locale]}</span>
      </span>
    </Link>
  );
}
