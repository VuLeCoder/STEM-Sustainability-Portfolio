import type { Locale } from "@/constants/common";
import { homeNarrative } from "@/constants/home";

export function HomeVision({ locale }: { locale: Locale }) {
  const content = homeNarrative.vision;
  return (
    <section id="vision" className="home-journey" aria-labelledby="home-vision-title">
      <div className="home-shell">
        <div className="home-journey-heading" data-reveal>
          <div>
            <p className="home-about-label">{homeNarrative.navigation.vision[locale]}</p>
            <h2 id="home-vision-title">{content.title[locale]}</h2>
          </div>
          <p>{content.description[locale]}</p>
        </div>
        <div className="home-journey-footer">
          <a className="home-journey-link" href="#footer-contact">
            {content.cta[locale]} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
