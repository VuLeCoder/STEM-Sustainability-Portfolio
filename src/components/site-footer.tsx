import Link from "next/link";
import type { Locale } from "@/constants/content";
import { siteContent } from "@/constants/content";

const footerNavigation = [
  { key: "about", path: "/about" },
  { key: "journey", path: "/journey" },
  { key: "projects", path: "/projects" },
] as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="editorial-container site-footer__inner">
        <div className="site-footer__intro">
          <Link
            className="site-footer__mark"
            href={`/${locale}/home`}
            aria-label={siteContent.navigation.home[locale]}
          >
            {siteContent.profile.initials}
            <span aria-hidden="true">.</span>
          </Link>
          <p>{siteContent.profile.positioning[locale]}</p>
        </div>

        <nav
          className="site-footer__nav"
          aria-label={siteContent.ui.footerNavigation[locale]}
        >
          {footerNavigation.map(({ key, path }, index) => (
            <Link key={key} href={`/${locale}${path}`}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {siteContent.navigation[key][locale]}
            </Link>
          ))}
        </nav>

        <Link className="site-footer__contact" href={`/${locale}/contact`}>
          {siteContent.navigation.contact[locale]}
          <span aria-hidden="true">↗</span>
        </Link>

        <div className="site-footer__meta">
          <p>{siteContent.profile.location[locale]}</p>
          <p>
            © {new Date().getFullYear()} {siteContent.profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
