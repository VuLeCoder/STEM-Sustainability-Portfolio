import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkCard } from "@/components/work-card";
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
  const featured = works.filter(item => item.featuredOrder).sort((a, b) => a.featuredOrder! - b.featuredOrder!);
  return <main className="works-page"><div className="works-shell">
    <header className="works-hero"><p className="works-kicker">{vi ? "Hồ sơ công việc" : "Work"}</p><h1>{worksCopy.title[locale]}</h1><p className="works-hero__description">{worksCopy.description[locale]}</p><p className="works-hero__count">{works.filter(item => item.type === "project").length} {vi ? "dự án" : "projects"} <span aria-hidden="true">·</span> {works.filter(item => item.type === "research").length} {vi ? "công bố" : "publications"}</p></header>
    <section className="works-featured" aria-labelledby="works-featured-title"><div className="works-section-heading"><div><p className="works-kicker">01 / {vi ? "Tiêu biểu" : "In focus"}</p><h2 id="works-featured-title">{vi ? "Công việc nổi bật" : "Featured Work"}</h2></div><p>{vi ? "Từ ý tưởng đến đóng góp thực tế." : "From ideas to practical contributions."}</p></div><div className="works-featured__grid">{featured.map(item => <WorkCard key={item.slug} item={item} locale={locale} featured />)}</div></section>
    <WorksArchive locale={locale} />
  </div></main>;
}
