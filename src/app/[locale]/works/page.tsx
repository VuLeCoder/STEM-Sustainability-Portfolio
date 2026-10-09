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
    <WorksArchive locale={locale} intro={
      <div className="works-hero__intro">
        <p className="works-kicker">{vi ? "Hồ sơ công việc" : "Work"}</p>
        <h1>{worksCopy.title[locale]}</h1>
        <p className="works-hero__description">{worksCopy.description[locale]}</p>
        <p className="works-hero__count">{works.filter(item => item.type === "project").length} {vi ? "dự án" : "projects"} <span aria-hidden="true">·</span> {works.filter(item => item.type === "research").length} {vi ? "nghiên cứu" : "research works"} <span aria-hidden="true">·</span> {works.filter(item => item.type === "experience").length} {vi ? "kỳ thực tập" : "internship"}</p>
      </div>
    } />
  </div></main>;
}
