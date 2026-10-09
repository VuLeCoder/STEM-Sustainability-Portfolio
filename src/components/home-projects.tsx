import Link from "next/link";
import Image from "next/image";
import { siteContent, type Locale } from "@/constants/common";
import { works } from "@/constants/works";

// Curated independently of the order on the full projects page.
const featuredProjects = [
  { slug: "safestride", summary: { vi: "Ứng dụng hỗ trợ người khiếm thị nhận biết vật cản.", en: "A smartphone app helping blind users detect obstacles." }, achievement: { vi: "WICO 2026 · Giải Vàng", en: "WICO 2026 · Gold Award" } },
  { slug: "bloomwatch", summary: { vi: "Khám phá hiện tượng ra hoa qua dữ liệu vệ tinh NASA.", en: "Exploring global flowering through NASA satellite data." }, achievement: { vi: "NASA Space Apps 2025 · Giải Nhất", en: "NASA Space Apps 2025 · First Prize" } },
  { slug: "ecomesort", summary: { vi: "Ứng dụng AI hướng dẫn phân loại rác và kết nối tái chế.", en: "AI-powered waste sorting and recycling connections." }, achievement: { vi: "Ý tưởng bảo vệ môi trường ngành GTVT 2026 · Giải Ba", en: "Transport Environmental Ideas 2026 · Third Prize" } },
  { slug: "vex-v5-robotics", summary: { vi: "Chế tạo robot thi đấu cùng đội NGS Hogrider.", en: "Building a competition robot with NGS Hogrider." }, achievement: { vi: "VEX V5 Quốc gia 2026 · Build Award", en: "VEX V5 Nationals 2026 · Build Award" } },
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
          {featuredProjects.map((preview) => {
            const project = works.find((item) => item.slug === preview.slug);
            if (!project) return null;
            const coverImage = siteContent.projects.find(item => item.slug === project.slug)?.coverImage ?? project.image?.src;
            return (
              <article className="home-projects-card" key={project.slug} data-reveal>
                <Link className="home-projects-image" href={`/${locale}/works#${project.slug}`} aria-hidden="true" tabIndex={-1}>
                  {project.slug === "bloomwatch" || !coverImage ? (
                    <span className="home-projects-image-pending">
                      <span>{project.title[locale]}</span>
                      <small>{vi ? "Ảnh dự án đang cập nhật" : "Project image coming soon"}</small>
                    </span>
                  ) : <Image src={coverImage} alt="" fill sizes="(max-width: 767px) 100vw, 50vw" />}
                </Link>
                <div className="home-projects-copy">
                  <h3><Link href={`/${locale}/works#${project.slug}`}>{project.title[locale]}</Link></h3>
                  <p>{preview.summary[locale]}</p>
                  <div className="home-projects-result"><strong>{preview.achievement[locale]}</strong></div>
                  <div className="home-projects-card-footer">
                    <Link className="home-projects-link" href={`/${locale}/works#${project.slug}`} aria-label={`${vi ? "Khám phá dự án" : "Explore project"}: ${project.title[locale]}`}>{vi ? "Khám phá dự án" : "Explore project"} <span aria-hidden="true">↗</span></Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="home-projects-bottom">
          <div className="home-projects-invitation">
            <h3>{vi ? "Còn nhiều điều để khám phá." : "There’s more to explore."}</h3>
            <p>{vi ? "Khám phá thêm những dự án và ý tưởng khác." : "Discover more projects and ideas."}</p>
          </div>
          <Link className="home-projects-link home-projects-all" href={`/${locale}/works`}>{home.allProjectsCta[locale]} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
