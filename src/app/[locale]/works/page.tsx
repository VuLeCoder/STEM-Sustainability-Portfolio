import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorksArchive } from "@/components/works-archive";
import { works, worksCopy } from "@/constants/works";
import { isLocale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import "./works.css";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return createLocalizedMetadata({ locale, path: "/works", title: `${worksCopy.title[locale]} | Nguyen Cao Xuan Phuc`, description: worksCopy.description[locale] });
}
export default async function WorksPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const vi = locale === "vi";
  return <main className="works-page"><div className="works-shell">
    <header className="works-hero">
      <div className="works-hero__intro">
        <p className="works-kicker">{vi ? "Hồ sơ công việc" : "Work"}</p>
        <h1>{worksCopy.title[locale]}</h1>
        <p className="works-hero__description">{worksCopy.description[locale]}</p>
        <p className="works-hero__count">{works.filter(item => item.type === "project").length} {vi ? "dự án" : "projects"} <span aria-hidden="true">·</span> {works.filter(item => item.type === "research").length} {vi ? "công bố" : "publications"}</p>
        <a className="works-hero__explore" href="#works-archive-title">{vi ? "Khám phá công việc" : "Explore the work"} <span aria-hidden="true">↓</span></a>
      </div>
      <nav className="works-hero__index" aria-label={vi ? "Các hướng công việc tiêu biểu" : "Selected areas of work"}>
        <p className="works-hero__index-label">{vi ? "Ba góc nhìn về công việc" : "Three perspectives on my work"}</p>
        {[
          { slug: "safestride", area: vi ? "Công nghệ hỗ trợ" : "Assistive technology", name: "SafeStride" },
          { slug: "dual-image-reversible-data-hiding", area: vi ? "Nghiên cứu" : "Research", name: vi ? "Giấu tin thuận nghịch" : "Reversible data hiding" },
          { slug: "ecome", area: vi ? "Cộng đồng & bền vững" : "Community & sustainability", name: "ECOMe" },
        ].map((entry, index) => <a key={entry.slug} href={`#${entry.slug}`} className="works-hero__index-link">
          <span className="works-hero__index-number" aria-hidden="true">0{index + 1}</span>
          <span><span className="works-hero__index-area">{entry.area}</span><span className="works-hero__index-name">{entry.name}</span></span>
          <span className="works-hero__index-arrow" aria-hidden="true">↘</span>
        </a>)}
      </nav>
    </header>
    <WorksArchive locale={locale} />
  </div></main>;
}
