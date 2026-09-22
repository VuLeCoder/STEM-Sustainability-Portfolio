import { siteContent, type Locale } from "@/constants/common";
import { academicScores } from "@/constants/profile";

export function HomeAbout({ locale }: { locale: Locale }) {
  const content = siteContent.home.aboutMe;
  const vi = locale === "vi";

  return (
    <section id="about" className="home-about" aria-labelledby="home-about-title">
      <div className="home-shell">
        <div className="home-about-heading" data-reveal>
          <div>
            <p className="home-about-label">{content.label[locale]}</p>
            <h2 id="home-about-title">{content.title[locale]}</h2>
          </div>
          <p className="home-about-intro">{content.introduction[locale]}</p>
        </div>
        <div className="home-about-focus-grid">
          {content.pillars.map((pillar) => (
            <article className="home-about-focus-card" key={pillar.id} aria-labelledby={`about-${pillar.id}-title`} data-reveal>
              <h3 id={`about-${pillar.id}-title`}>{pillar.title[locale]}</h3>
              <p>{pillar.description[locale]}</p>
            </article>
          ))}
        </div>
        <div className="home-about-snapshot" data-reveal>
          <div>
            <p className="home-about-label">{vi ? "Nền tảng học thuật" : "Academic snapshot"}</p>
            <h3>{vi ? "THPT chuyên Nguyễn Huệ · Chuyên Vật lý" : "Nguyen Hue High School for the Gifted · Physics"}</h3>
          </div>
          <dl>
            {academicScores.map((score) => (
              <div key={score.id}><dt>{score.label[locale]}</dt><dd>{score.value}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
