import { siteContent, type Locale } from "@/constants/common";

export function HomeAbout({ locale }: { locale: Locale }) {
  const content = siteContent.home.aboutMe;
  const vi = locale === "vi";
  const scores = [
    { label: vi ? "GPA lớp 10" : "Grade 10 GPA", value: "9.1/10" },
    { label: vi ? "GPA lớp 11" : "Grade 11 GPA", value: "9.2/10" },
    { label: "SAT", value: "1440" },
    { label: "SAT Math", value: "800" },
    { label: "IELTS Academic", value: "7.5" },
    { label: "AP Physics C", value: "5/5" },
  ];

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
        <div className="home-about-snapshot" data-reveal>
          <div>
            <p className="home-about-label">{vi ? "Nền tảng học thuật" : "Academic snapshot"}</p>
            <h3>{vi ? "THPT chuyên Nguyễn Huệ · Chuyên Vật lý" : "Nguyen Hue High School for the Gifted · Physics"}</h3>
          </div>
          <dl>
            {scores.map((score) => (
              <div key={score.label}><dt>{score.label}</dt><dd>{score.value}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
