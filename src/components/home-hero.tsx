import Image from "next/image";
import { siteContent, type Locale } from "@/constants/common";
import { homeNarrative } from "@/constants/home";

export function HomeHero({ locale }: { locale: Locale }) {
  const lang = locale;
  const { profile, home } = siteContent;
  return (
    <section id="hero" className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-shell home-hero-grid">
        <div className="home-hero-copy motion-fade-up">
          <p className="home-hero-slogan">
            {home.eyebrow[lang]}
          </p>
          <h1 id="home-hero-title">{profile.name[locale]}</h1>
          <p className="home-positioning">
            {homeNarrative.positioning[lang]}
          </p>
          <div className="home-hero-actions">
            <a className="home-hero-button home-hero-button-primary" href="#projects">
              {homeNarrative.actions.about[lang]}
              <span aria-hidden="true">↓</span>
            </a>
            <a className="home-hero-button" href="/documents/CV_Nguyen_Cao_Xuan_Phuc.pdf" download="Nguyen-Cao-Xuan-Phuc-CV.pdf">
              {homeNarrative.actions.cv[lang]}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="home-portrait-wrap motion-fade-in">
          <div className="home-portrait-frame">
            <Image
              src={profile.portrait}
              alt={profile.name[locale]}
              fill
              priority
              sizes="(max-width: 767px) 248px, (max-width: 900px) 240px, 300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
