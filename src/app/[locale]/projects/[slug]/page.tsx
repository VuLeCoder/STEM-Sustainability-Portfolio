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
      <p className="project-detail-category">{entry.category[locale]}</p><h1>{entry.displayTitle[locale]}</h1>
      <p className="project-detail-summary">{entry.summary[locale]}</p>
      <dl className="project-detail-meta"><div><dt>{labels.roleLabel[locale]}</dt><dd>{entry.role[locale]}</dd></div>
        {entry.year && <div><dt>{labels.yearLabel[locale]}</dt><dd>{entry.year}</dd></div>}
        {entry.fields[locale].length > 0 && <div><dt>{labels.fieldsLabel[locale]}</dt><dd>{entry.fields[locale].join(" · ")}</dd></div>}
      </dl>
    </header>
    {images.length > 0 && <section className="project-detail-media" aria-labelledby="project-photos-title">
      <div className="project-detail-media-heading"><h2 id="project-photos-title">{locale === "vi" ? "Hình ảnh & Tư liệu" : "Photos & Evidence"}</h2><span>{images.length} {locale === "vi" ? "ảnh" : "photos"}</span></div>
      <JourneyMedia item={{ title: entry.displayTitle, type: "activity", images }} locale={locale} />
    </section>}
    <div className="project-detail-body">{sections.map((section, index) => <section className="project-detail-section" key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
      <p className="project-detail-section-index">{String(index + 1).padStart(2, "0")}</p><div><h2 id={`${section.id}-title`}>{section.title}</h2>{section.paragraphs.map((text, paragraphIndex) => <p key={paragraphIndex}>{text}</p>)}</div>
    </section>)}</div>
    {entry.externalLinks.length > 0 && <section className="project-detail-links"><h2>{locale === "vi" ? "Nguồn & Tư liệu" : "Sources & Resources"}</h2><div>{entry.externalLinks.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label[locale]} ↗</a>)}</div></section>}
    <nav className="project-detail-navigation" aria-label={locale === "vi" ? "Điều hướng bài viết" : "Case study navigation"}>
      {previous && <Link className="project-detail-navigation-link" href={`/${locale}/projects/${previous.slug}`}><span className="project-detail-navigation-label">← {locale === "vi" ? "Bài trước" : "Previous"}</span><span className="project-detail-navigation-title">{previous.displayTitle[locale]}</span></Link>}
      {next && <Link className="project-detail-navigation-link project-detail-navigation-link--next" href={`/${locale}/projects/${next.slug}`}><span className="project-detail-navigation-label">{locale === "vi" ? "Bài tiếp theo" : "Next"} →</span><span className="project-detail-navigation-title">{next.displayTitle[locale]}</span></Link>}
    </nav>
  </div></main>;
}
