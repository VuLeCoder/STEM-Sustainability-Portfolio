import Link from "next/link";
import { siteContent, type Locale } from "@/constants/common";
import "./home-projects.css";

export function HomeProjects({ locale }: { locale: Locale }) {
  const { home } = siteContent;
  const content = home.featuredProjects;
  const vi = locale === "vi";
  return (
    <section id="projects" className="home-projects" aria-labelledby="home-projects-title">
      <div className="home-shell">
        <header className="home-projects-heading" data-reveal>
          <span className="home-about-label">{content.eyebrow[locale]}</span>
          <h2 id="home-projects-title">{content.title[locale]}</h2>
          <p>{content.description[locale]}</p>
        </header>
        <div className="home-projects-grid">
          {siteContent.projects.slice(0, 4).map((project) => {
            const external = project.externalLinks.find(link => /^https?:\/\//.test(link.href));
            return (
              <article className="home-projects-card" key={project.slug} data-reveal>
                <div className="home-projects-copy">
                  <div className="home-projects-meta"><span>{project.category[locale]}</span>{project.year && <time>{project.year}</time>}</div>
                  <h3><Link href={`/${locale}/projects/${project.slug}`}>{project.title}</Link></h3>
                  <p>{project.summary[locale]}</p>
                  <p className="home-projects-role"><span>{vi ? "Vai trò" : "Role"}</span>{project.role[locale]}</p>
                  <div className="home-projects-result"><span>{vi ? "Dấu mốc nổi bật" : "Selected achievement"}</span><strong>{project.achievementShort?.[locale] ?? project.result[locale]}</strong></div>
                  <div className="home-projects-card-footer">
                    <Link className="home-projects-link" href={`/${locale}/projects/${project.slug}`} aria-label={`${vi ? "Xem chi tiết" : "View details"}: ${project.title}`}>{vi ? "Xem chi tiết" : "View details"} <span aria-hidden="true">→</span></Link>
                    {external && <a className="home-projects-external" href={external.href} target="_blank" rel="noopener noreferrer" aria-label={`${external.label[locale]}: ${project.title}`}>{external.label[locale]} <span aria-hidden="true">↗</span></a>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="home-projects-bottom"><Link className="home-projects-link home-projects-all" href={`/${locale}/projects`}>{home.allProjectsCta[locale]} <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
  );
}
