import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales } from "@/constants/common";
import { workEntries, workContent } from "@/constants/work";
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
  const sections = [
    { title: entry.kind === "research" ? (locale === "vi" ? "Tổng quan nghiên cứu" : "Research overview") : entry.kind === "community" ? (locale === "vi" ? "Hoạt động & đóng góp" : "Activity & contribution") : labels.objectiveLabel[locale], text: entry.summary[locale] },
    { title: labels.problemLabel[locale], text: entry.problem?.[locale] },
    { title: labels.solutionLabel[locale], text: entry.details?.solution?.[locale] },
    { title: labels.processLabel[locale], text: entry.details?.process?.[locale] },
    { title: entry.slug === "vast-research-internship" ? (locale === "vi" ? "Thời gian & định hướng" : "Timeline & focus") : labels.resultLabel[locale], text: entry.result[locale] },
  ].filter(section => section.text);
  return <main className="project-detail-page"><div className="project-detail-shell">
    <header className="project-detail-hero">
      <Link className="project-detail-back" href={`/${locale}/projects`}>← {workContent.back[locale]}</Link>
      <p>{entry.category[locale]}</p><h1>{entry.displayTitle[locale]}</h1>
      <dl className="project-detail-meta"><div><dt>{labels.roleLabel[locale]}</dt><dd>{entry.role[locale]}</dd></div>
        {entry.year && <div><dt>{labels.yearLabel[locale]}</dt><dd>{entry.year}</dd></div>}
        {entry.fields[locale].length > 0 && <div><dt>{labels.fieldsLabel[locale]}</dt><dd>{entry.fields[locale].join(" · ")}</dd></div>}
      </dl>
    </header>
    {entry.coverImage && !entry.coverImage.includes("/placeholders/") && <div className="project-detail-cover"><Image src={entry.coverImage} alt={entry.displayTitle[locale]} fill sizes="(min-width: 1200px) 1100px, 100vw" priority /></div>}
    <div className="project-detail-body">{sections.map((section, index) => <section className="project-detail-section" key={section.title}>
      <p className="project-detail-section-index">{String(index + 1).padStart(2, "0")}</p><div><h2>{section.title}</h2><p>{section.text}</p></div>
    </section>)}</div>
    {entry.externalLinks.length > 0 && <section className="project-detail-links"><h2>{locale === "vi" ? "Nguồn & Tư liệu" : "Sources & Resources"}</h2><div>{entry.externalLinks.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label[locale]} ↗</a>)}</div></section>}
  </div></main>;
}
