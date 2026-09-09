import { siteContent, type Locale } from "@/constants/common";

export function HomeAbout({ locale }: { locale: Locale }) {
  const content = siteContent.home.aboutMe;

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
        <ul className="home-about-pillars" data-reveal>
          {content.pillars.map((pillar, index) => (
            <li key={pillar.id} className="home-about-card">
              <span className="home-about-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{pillar.title[locale]}</h3>
              <p>{pillar.description[locale]}</p>
            </li>
          ))}
        </ul>
        <div className="home-about-academics" data-reveal>
          <h3>{content.credentialsLabel[locale]}</h3>
          <dl>
            {content.credentials.map((credential) => (
              <div key={credential.label.en}>
                <dt>{credential.label[locale]}</dt>
                <dd>{credential.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
