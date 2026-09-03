import type { Locale } from "@/constants/content";
import { siteContent } from "@/constants/content";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {siteContent.profile.name}</p>
        <p>{siteContent.ui.allRightsReserved[locale]}</p>
      </div>
    </footer>
  );
}
