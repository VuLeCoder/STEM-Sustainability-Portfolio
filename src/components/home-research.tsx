import Link from "next/link";
import type { Locale } from "@/constants/common";
import { homeNarrative } from "@/constants/home";
import { projects } from "@/constants/project";
import { journeyItems } from "@/constants/journey";

export function HomeResearch({ locale }: { locale: Locale }) {
  const content = homeNarrative.research;
  const paper = projects.find((project) => project.slug === "dual-image-reversible-data-hiding");
  const internship = journeyItems.find((entry) => entry.id === "vast-2026");

  return (
    <section id="research" className="home-journey" aria-labelledby="home-research-title">
      <div className="home-shell">
        <div className="home-journey-heading" data-reveal>
          <div>
            <p className="home-about-label">{homeNarrative.navigation.research[locale]}</p>
            <h2 id="home-research-title">{content.title[locale]}</h2>
          </div>
          <p>{content.description[locale]}</p>
        </div>
        <div className="home-research-evidence" data-reveal>
          {paper && (
            <article className="home-about-card">
              <span className="home-about-label">VNICT 2025</span>
              <h3><Link href={`/${locale}/projects/${paper.slug}`}>{paper.title}</Link></h3>
              <p>{paper.summary[locale]}</p>
              <p>{paper.result[locale]}</p>
            </article>
          )}
          {internship && (
            <article className="home-about-card">
              <span className="home-about-label">VAST · {internship.year}</span>
              <h3><Link href={`/${locale}/projects/vast-research-internship`}>{internship.title[locale]}</Link></h3>
              <p>{locale === "vi"
                ? "Thực tập sinh nghiên cứu tại Phòng các Hệ thống AI, Viện Công nghệ Thông tin, Viện Hàn lâm Khoa học và Công nghệ Việt Nam. Tìm hiểu hệ thống AI ứng dụng, quy trình nghiên cứu, tài liệu kỹ thuật và hợp tác liên ngành."
                : "Research intern in the AI Systems Department, Institute of Information Technology, Vietnam Academy of Science and Technology. Exploring applied AI systems, scientific workflows, technical documentation, and interdisciplinary collaboration."}</p>
              <p>{locale === "vi" ? "18/05–24/09/2026" : "18 May–24 September 2026"}</p>
            </article>
          )}
          <article className="home-about-card home-research-upcoming">
            <span className="home-about-label">{locale === "vi" ? "Sắp cập nhật" : "Coming soon"}</span>
            <h3>{locale === "vi" ? "Nghiên cứu tiếp theo" : "Upcoming research"}</h3>
          </article>
        </div>
        <div className="home-journey-footer">
          <Link className="home-journey-link" href={`/${locale}/projects`}>
            {content.cta[locale]} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
