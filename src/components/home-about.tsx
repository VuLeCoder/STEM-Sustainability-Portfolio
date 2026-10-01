import { siteContent, type Locale } from "@/constants/common";
import { academicScores } from "@/constants/profile";
import { homeAcademicAwards, homeCertificates } from "@/constants/home";
import { HomeEvidenceButton } from "./home-evidence-button";

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
            <p className="home-about-school">
              <strong>{vi ? "THPT chuyên Nguyễn Huệ" : "Nguyen Hue High School for the Gifted"}</strong>
              <span>{vi ? "Chuyên Vật lý" : "Physics specialization"}</span>
            </p>
          </div>
          <dl className="home-about-scores" aria-label={vi ? "Điểm số học thuật" : "Academic scores"}>
            {academicScores.map((score) => (
              <div key={score.id}><dt>{score.label[locale]}</dt><dd>{score.value}</dd></div>
            ))}
          </dl>
        </div>
        <div className="home-about-focus-grid">
          {content.pillars.map((pillar) => (
            <article className="home-about-focus-card" key={pillar.id} aria-labelledby={`about-${pillar.id}-title`} data-reveal>
              <h3 id={`about-${pillar.id}-title`}>{pillar.title[locale]}</h3>
              <p>{pillar.description[locale]}</p>
            </article>
          ))}
        </div>
        <div className="home-about-credentials">
          <article className="home-credential-group" data-reveal>
            <h3>{vi ? "Giải thưởng học thuật" : "Academic awards"}</h3>
            <ul>{homeAcademicAwards.map((award) => (
              <li key={award.id}>
                <HomeEvidenceButton locale={locale} title={award.title[locale]} imageSrc={`/images/academic/${award.id}.webp`}>
                  <strong>{award.title[locale]}</strong>
                  <span>{award.description[locale]}</span>
                </HomeEvidenceButton>
              </li>
            ))}</ul>
          </article>
          <article className="home-credential-group home-credential-group--learning" data-reveal>
            <h3>{vi ? "Tự học" : "Independent learning"}</h3>
            <p>{vi ? "Các khóa Coursera bổ trợ kiến thức về AI, dữ liệu và công cụ lập trình." : "Coursera courses supporting my foundations in AI, data, and development tools."}</p>
            <ul>{homeCertificates.courses.map((course) => (
              <li key={course.title}>
                <HomeEvidenceButton locale={locale} title={course.title} imageSrc={course.imageSrc}>
                  <strong>{course.title}</strong>
                </HomeEvidenceButton>
              </li>
            ))}</ul>
          </article>
        </div>
      </div>
    </section>
  );
}
