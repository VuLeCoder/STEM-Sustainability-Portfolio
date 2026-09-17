import { Fragment } from "react";
import type { Metadata } from "next";
import { JourneyMedia } from "@/components/journey-media";
import "./detail.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales } from "@/constants/common";
import { workEntries, workContent, getWorkSections, getWorkImages } from "@/constants/work";
import { projectDetailContent as labels } from "@/constants/project";
import { isLocale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/site-metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return locales.flatMap(locale => workEntries.map(entry => ({ locale, slug: entry.slug })));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = workEntries.find(item => item.slug === slug);
  if (!isLocale(locale) || !entry) return {};
  return createLocalizedMetadata({ locale, path: `/projects/${slug}`, title: entry.displayTitle[locale], description: entry.summary[locale], ...(entry.coverImage ? { image: entry.coverImage } : {}) });
}
export default async function WorkDetail({ params }: Props) {
  const { locale, slug } = await params;
  const entry = workEntries.find(item => item.slug === slug);
  if (!isLocale(locale) || !entry) notFound();
  const images = getWorkImages(entry);
  const sections = getWorkSections(entry, locale);
  const index = workEntries.findIndex(item => item.slug === slug);
  const previous = workEntries[index - 1];
  const next = workEntries[index + 1];
  return <main className="project-detail-page"><div className="project-detail-shell">
    <header className="project-detail-hero">
      <Link className="project-detail-back" href={`/${locale}/projects`}>← {workContent.back[locale]}</Link>
      <div className="project-detail-badges">
        <p className="project-detail-category">{entry.category[locale]}</p>
        {entry.year && <p className="project-detail-category"><span className="sr-only">{labels.yearLabel[locale]}: </span>{entry.year}</p>}
      </div>
      <div className="project-detail-heading-row">
        <div className="project-detail-intro">
          <h1>{entry.displayTitle[locale]}</h1>
          <p className="project-detail-summary">{entry.summary[locale]}</p>
          {entry.externalLinks.length > 0 && <nav className="project-detail-links" aria-label={locale === "vi" ? "Liên kết dự án" : "Project links"}>
      {entry.externalLinks.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>
        <span>{link.label[locale]}</span>
        <span className="project-detail-link-arrow" aria-hidden="true">↗</span>
        <span className="sr-only">{locale === "vi" ? " (mở trong tab mới)" : " (opens in a new tab)"}</span>
      </a>)}
    </nav>}
        </div>
        <aside className="project-detail-info" aria-labelledby="project-info-title">
          <h2 id="project-info-title">{locale === "vi" ? "Thông tin dự án" : "Project info"}</h2>
          <dl className="project-detail-meta">
            <div><dt>{labels.roleLabel[locale]}</dt><dd>{entry.caseStudy?.role?.[locale] ?? entry.role[locale]}</dd></div>
            {entry.recognition && <div><dt>{locale === "vi" ? "Giải thưởng" : "Recognition"}</dt><dd>{entry.recognition[locale]}</dd></div>}
          </dl>
        </aside>
      </div>
    </header>
    <div className="project-detail-body">{sections.map((section, index) => <Fragment key={section.id}><section className="project-detail-section" id={section.id} aria-labelledby={`${section.id}-title`}>
      <p className="project-detail-section-index">{String(index + 1).padStart(2, "0")}</p><div><h2 id={`${section.id}-title`}>{section.title}</h2>{section.paragraphs.map((text, paragraphIndex) => <p key={paragraphIndex}>{text}</p>)}</div>
    </section>
    {section.id === "result" && <> {images.length > 0 && <section className="project-detail-media" aria-labelledby="project-photos-title">
      <div className="project-detail-media-heading"><h2 id="project-photos-title">{locale === "vi" ? "Hình ảnh" : "Photos"}</h2><span>{images.length} {locale === "vi" ? "ảnh" : images.length === 1 ? "photo" : "photos"}</span></div>
      <JourneyMedia item={{ title: entry.displayTitle, type: "activity", images }} locale={locale} />
    </section>} </>}
    </Fragment>)}</div>
    <nav className="project-detail-navigation" aria-label={locale === "vi" ? "Điều hướng bài viết" : "Case study navigation"}>
      {previous && <Link className="project-detail-navigation-link" href={`/${locale}/projects/${previous.slug}`}><span className="project-detail-navigation-label">← {locale === "vi" ? "Bài trước" : "Previous"}</span><span className="project-detail-navigation-title">{previous.displayTitle[locale]}</span></Link>}
      {next && <Link className="project-detail-navigation-link project-detail-navigation-link--next" href={`/${locale}/projects/${next.slug}`}><span className="project-detail-navigation-label">{locale === "vi" ? "Bài tiếp theo" : "Next"} →</span><span className="project-detail-navigation-title">{next.displayTitle[locale]}</span></Link>}
    </nav>
  </div></main>;
}
