import type { Locale } from "@/constants/common";
import { homeNarrative } from "@/constants/home";
import { homeJourney } from "@/constants/home-journey";

export function HomeJourney({ locale }: { locale: Locale }) {
  return (
    <section id="journey" className="home-content-section home-journey" aria-labelledby="home-journey-title">
      <div className="home-shell">
        <div className="home-content-section-heading">
          <div>
            <p className="home-about-label">{homeNarrative.navigation.journey[locale]}</p>
            <h2 id="home-journey-title">{homeJourney.title[locale]}</h2>
          </div>
          <p>{homeJourney.description[locale]}</p>
        </div>
        <ol className="home-journey-timeline">
          {homeJourney.milestones.map((milestone) => (
            <li key={milestone.id} className="home-journey-milestone">
              <p className="home-journey-period">{milestone.period[locale]}</p>
              <div className="home-journey-story">
                <h3>{milestone.title[locale]}</h3>
                <p>{milestone.description[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
