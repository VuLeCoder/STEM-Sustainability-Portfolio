"use client";

import Link from "next/link";
import { useState } from "react";
import { activityGallery, awardGallery } from "@/constants/activities";
import type { Locale } from "@/constants/common";
import { GalleryImage, type GalleryMedia } from "./gallery-image";

type Filter = "all" | "award" | "recognition" | "activity";
type Entry = {
  id: string;
  category: Exclude<Filter, "all">;
  title: string;
  description: string;
  detail: string;
  images: GalleryMedia[];
  relatedWork?: string;
  featured?: boolean;
};

function getEntries(locale: Locale): Entry[] {
  const awards = [...awardGallery]
    .sort((a, b) => (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity) || b.year - a.year)
    .map((item): Entry => ({
      id: item.image,
      category: item.category === "community" || item.category === "recognition" ? "recognition" : "award",
      title: item.title[locale],
      description: item.description[locale],
      detail: `${item.year} · ${item.scope[locale]}`,
      images: [
        { src: item.image, alt: item.imageAlt[locale] },
        ...(item.additionalImages ?? []).map(image => ({
          src: image.src,
          alt: image.alt[locale],
          caption: image.caption[locale],
        })),
      ],
      relatedWork: item.relatedWork,
      featured: Boolean(item.featuredOrder),
    }));

  const activities = activityGallery.map((item): Entry => ({
    id: item.image,
    category: "activity",
    title: item.title[locale],
    description: item.description[locale],
    detail: item.imageCaption[locale],
    images: [
      { src: item.image, alt: item.imageAlt[locale], caption: item.imageCaption[locale], kind: "certificate" as const },
      ...(item.additionalImages ?? []).map(image => ({
        src: image.src,
        alt: image.alt[locale],
        caption: image.caption[locale],
        kind: image.kind,
      })),
    ].sort((a, b) => Number(a.kind !== "photo") - Number(b.kind !== "photo")),
    relatedWork: item.relatedWork,
  }));

  // Interleave stories so the All view reads as one gallery rather than two blocks.
  const entries: Entry[] = [];
  for (let index = 0; index < Math.max(awards.length, activities.length); index += 1) {
    if (awards[index]) entries.push(awards[index]);
    if (activities[index]) entries.push(activities[index]);
  }
  return entries;
}

export function GalleryCollection({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const vi = locale === "vi";
  const entries = getEntries(locale);
  const visible = filter === "all" ? entries : entries.filter(item => item.category === filter);
  const labels: Record<Filter, string> = {
    all: vi ? "Tất cả" : "All",
    award: vi ? "Giải thưởng" : "Awards",
    recognition: vi ? "Ghi nhận" : "Recognition",
    activity: vi ? "Hoạt động" : "Activities",
  };
  const filters: Filter[] = ["all", "award", "recognition", "activity"];

  return <>
    <header className="activities-hero gallery-hero">
      <div className="gallery-hero__intro">
        <p className="activities-kicker">{vi ? "Những dấu mốc" : "Milestones"}</p>
        <h1>{vi ? "Bộ sưu tập" : "Gallery"}</h1>
        <p className="gallery-hero__description">{vi
          ? "Giải thưởng, ghi nhận và những hoạt động tôi đã tham gia, kể lại qua hình ảnh."
          : "Awards, recognition, and the activities I have taken part in, told through images."}</p>
      </div>
      <div className="gallery-hero__browse">
        <p className="gallery-hero__browse-label">{vi ? "Khám phá theo chủ đề" : "Browse by theme"}</p>
        <div className="gallery-filters" role="group" aria-label={vi ? "Lọc bộ sưu tập" : "Filter gallery"}>
          {filters.map(value => <button key={value} type="button" aria-pressed={filter === value}
            onClick={() => setFilter(value)}>
            <span>{labels[value]}</span>
            <span className="gallery-filters__count">{value === "all" ? entries.length : entries.filter(item => item.category === value).length}</span>
            <span className="gallery-filters__arrow" aria-hidden="true">↗</span>
          </button>)}
        </div>
      </div>
    </header>
    <section className="activities-section" aria-label={vi ? "Bộ sưu tập hình ảnh" : "Image gallery"}>
      <p className="gallery-results" aria-live="polite"><strong>{labels[filter]}</strong><span>{vi ? `${visible.length} dấu mốc` : `${visible.length} stories`}</span></p>
      <div className="activities-grid">
        {visible.map(item => <article className={`activities-card gallery-card${item.featured ? " gallery-card--featured" : ""}`} key={item.id}>
          <GalleryImage src={item.images[0].src} alt={item.images[0].alt} title={item.title} locale={locale} images={item.images} />
          <div className="activities-card__copy">
            <p className="gallery-card__meta"><span>{labels[item.category]}</span><span aria-hidden="true">·</span>{item.detail}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.relatedWork && <Link href={`/${locale}/works#${item.relatedWork}`}>{vi ? "Xem dự án" : "View project"} <span aria-hidden="true">↗</span></Link>}
          </div>
        </article>)}
      </div>
    </section>
  </>;
}
