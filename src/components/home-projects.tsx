import Link from "next/link";
import Image from "next/image";
import { siteContent, type Locale } from "@/constants/common";

// Curated independently of the order on the full projects page.
const featuredProjects = [
  { slug: "safestride", role: { vi: "Xử lý cảm biến & tối ưu điện năng", en: "Sensor processing & power optimization" } },
  { slug: "bloomwatch", role: { vi: "Kể chuyện trực quan từ dữ liệu vệ tinh", en: "Visual storytelling with satellite data" } },
  { slug: "ecome", role: { vi: "Nhà sáng lập & Trưởng dự án", en: "Founder & Project Chair" } },
  { slug: "ecomesort", role: { vi: "Thiết kế quy trình nhận diện & tính năng cộng đồng", en: "Recognition workflow & community feature design" } },
] as const;

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
          {featuredProjects.map((featured) => {
            const project = siteContent.projects.find((item) => item.slug === featured.slug);
            if (!project) return null;
            const external = project.externalLinks.find(link => /^https?:\/\//.test(link.href));
            return (
              <article className={`home-projects-card${featured.slug === "ecomesort" ? " home-projects-card--extra" : ""}`} key={project.slug} data-reveal>
                <Link className="home-projects-image" href={`/${locale}/projects/${project.slug}`} aria-hidden="true" tabIndex={-1}>
                  {project.slug === "bloomwatch" ? (
                    <span className="home-projects-image-pending">
                      <span>BloomWatch</span>
                      <small>{vi ? "Ảnh dự án đang cập nhật" : "Project image coming soon"}</small>
                    </span>
                  ) : <Image src={project.coverImage} alt="" fill sizes="(max-width: 767px) 100vw, 50vw" />}
                </Link>
                <div className="home-projects-copy">
                  <div className="home-projects-meta"><span>{project.category[locale]}</span>{project.year && <time>{project.year}</time>}</div>
                  <h3><Link href={`/${locale}/projects/${project.slug}`}>{project.title}</Link></h3>
                  <p>{project.summary[locale]}</p>
                  <p className="home-projects-role"><span>{vi ? "Vai trò" : "Role"}</span>{featured.role[locale]}</p>
                  <div className="home-projects-result"><span>{vi ? "Dấu mốc nổi bật" : "Selected achievement"}</span><strong>{project.slug === "bloomwatch" ? project.result[locale] : project.achievementShort?.[locale] ?? project.result[locale]}</strong></div>
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
