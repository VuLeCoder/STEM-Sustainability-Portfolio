import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGalleryList } from "@/components/project-gallery-list";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { projectsPageContent } from "@/constants/project";
import { siteContent } from "@/constants/common";
import { workContent, workEntries, workCategories, featuredWork } from "@/constants/work";
import { isLocale } from "@/lib/i18n";
import "./projects.css";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return createLocalizedMetadata({ locale, path: "/projects", title: workContent.title[locale] + " | " + siteContent.seo.siteName, description: workContent.description[locale] });
}
export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <main className="project-gallery"><div className="project-gallery__shell">
    <header className="project-gallery__header">
      <span className="project-gallery__label">{locale === "vi" ? "Nghiên cứu · Công nghệ · Cộng đồng" : "Research · Technology · Community"}</span>
      <h1>{workContent.title[locale]}</h1><p>{workContent.description[locale]}</p>
    </header>
    <section className="work-featured" aria-labelledby="work-featured-title">
      <h2 id="work-featured-title">{workContent.featured[locale]}</h2>
      <ul>{featuredWork.map(entry => <li key={entry.slug}><Link href={`/${locale}/projects/${entry.slug}`}>
        <span className="home-about-label">{workCategories[entry.kind][locale]}</span>
        <h3>{entry.displayTitle[locale]}</h3><p>{entry.achievementShort?.[locale] ?? entry.result[locale]}</p><span aria-hidden="true">↗</span>
      </Link></li>)}</ul>
    </section>
    <section aria-labelledby="work-archive-title">
      <h2 id="work-archive-title">{workContent.archive[locale]}</h2>
      <ProjectGalleryList moreLabel={projectsPageContent.showMore[locale]} lessLabel={projectsPageContent.showLess[locale]}
        filters={Object.entries(workCategories).map(([id, label]) => ({ id, label: label[locale] }))}
        categories={workEntries.map(entry => entry.kind)} filterLabel={locale === "vi" ? "mục trong danh mục" : "entries in the archive"}>
        {workEntries.map((entry, index) => <li key={entry.slug}><article className="project-gallery__card" aria-labelledby={`work-${entry.slug}`}>
          <div className="project-gallery__image">
            {entry.coverImage && !entry.coverImage.includes("/placeholders/") ? <Image src={entry.coverImage} alt={entry.displayTitle[locale]} fill sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw" /> : <div className="project-gallery__placeholder">{locale === "vi" ? "Ảnh sẽ được cập nhật" : "Image coming soon"}</div>}
            <span className="project-gallery__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="project-gallery__body">
            <div className="project-gallery__meta"><span>{entry.category[locale]}</span>{entry.year && <time>{entry.year}</time>}</div>
            <h2 id={`work-${entry.slug}`}>{entry.displayTitle[locale]}</h2><p>{entry.summary[locale]}</p>
            {entry.achievementShort && <strong className="work-result">{entry.achievementShort[locale]}</strong>}
            <div className="project-gallery__footer"><Link href={`/${locale}/projects/${entry.slug}`} aria-label={`${workContent.details[locale]}: ${entry.displayTitle[locale]}`}>{workContent.details[locale]} <span aria-hidden="true">↗</span></Link></div>
          </div>
        </article></li>)}
      </ProjectGalleryList>
    </section>
  </div></main>;
}
