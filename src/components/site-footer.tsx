import Link from "next/link";
import { ContactIcon } from "@/components/contact-icon";
import { SiteLogo } from "@/components/site-logo";
import { siteContent, type Locale } from "@/constants/content";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { chrome, profile, navigation } = siteContent;
  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer__background" style={{ backgroundImage: `url("${chrome.footerBackground}")` }} aria-hidden="true" />
      <div className="portfolio-footer__shell">
        <div className="portfolio-footer__grid">
          <div className="portfolio-footer__intro">
            <SiteLogo locale={locale} />
            <h2>{profile.name}</h2>
            <p>{profile.positioning[locale]}</p>
            <div className="portfolio-footer__socials">
              {chrome.socials.map((social) => (
                <a key={social.icon} href={social.href} aria-label={social.label} title={social.label}>
                  <ContactIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <nav className="portfolio-footer__column" aria-label={siteContent.ui.footerNavigation[locale]}>
            <h2>{chrome.explore[locale]}</h2>
            <Link href={`/${locale}/journey`}>{navigation.journey[locale]} <span aria-hidden="true">↗</span></Link>
            <Link href={`/${locale}/projects`}>{navigation.projects[locale]} <span aria-hidden="true">↗</span></Link>
          </nav>
          <div className="portfolio-footer__column">
            <h2>{chrome.contact[locale]}</h2>
            {chrome.contacts.map((contact) => contact.href ? (
              <a className="portfolio-footer__contact" key={contact.icon} href={contact.href} aria-label={contact.label[locale]}><ContactIcon name={contact.icon} /><span>{contact.label[locale]}</span></a>
            ) : <p className="portfolio-footer__pending" key={contact.icon}><span className="portfolio-footer__contact-icon" role="img" aria-label={contact.label[locale]} title={contact.label[locale]}><ContactIcon name={contact.icon} /></span><small>{chrome.pending[locale]}</small></p>)}
          </div>
        </div>
        <div className="portfolio-footer__bottom">
          <p>© {new Date().getFullYear()} {profile.name}. {chrome.rights[locale]}</p>
          <span>{chrome.footerBackgroundLabel[locale]}</span>
        </div>
      </div>
    </footer>
  );
}
