import Link from "next/link";
import { ContactIcon } from "@/components/contact-icon";
import { SiteLogo } from "@/components/site-logo";
import { siteContent, type Locale } from "@/constants/common";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { chrome, profile, contact, navigation } = siteContent;
  return (
    <footer id="footer-contact" className="portfolio-footer">
      <div className="portfolio-footer__background" style={{ backgroundImage: `url("${chrome.footerBackground}")` }} aria-hidden="true" />
      <div className="portfolio-footer__shell">
        <div className="portfolio-footer__grid">
          <div className="portfolio-footer__intro">
            <SiteLogo locale={locale} />
            <h2>{profile.name[locale]}</h2>
            <p>{siteContent.home.contactCta.title[locale]}</p>
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
            <Link href={`/${locale}/works`}>{navigation.projects[locale]} <span aria-hidden="true">↗</span></Link>
            <a href="/documents/CV.pdf" download="Nguyen-Cao-Xuan-Phuc-CV.pdf">{locale === "vi" ? "Tải CV" : "Download CV"} <span aria-hidden="true">↓</span></a>
          </nav>
          <div className="portfolio-footer__column">
            <h2>{chrome.contact[locale]}</h2>
            {chrome.contacts.map((contact) => 
              <p className="portfolio-footer__contact" key={contact.icon} aria-label={contact.label[locale]}><ContactIcon name={contact.icon} /><a href={contact.icon === "gmail" ? `mailto:${contact.content}` : `tel:${contact.content.replace(/\s/g, "")}`}>{contact.content}</a></p>
            )}
            <p className="portfolio-footer__contact"><ContactIcon name="location" />{contact.location[locale]}</p>
          </div>
        </div>
        <div className="portfolio-footer__bottom">
          <p>© {new Date().getFullYear()} {profile.name[locale]}. {chrome.rights[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
