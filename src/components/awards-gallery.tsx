import Link from "next/link";
import { awardGallery } from "@/constants/activities";
import type { Locale } from "@/constants/common";
import { GalleryImage } from "./gallery-image";

export function AwardsGallery({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const awards = [...awardGallery].sort((a, b) =>
    (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity) || b.year - a.year
  );
  const categories = {
    project: vi ? "Dự án" : "Project",
    academic: vi ? "Học thuật" : "Academic",
    community: vi ? "Cộng đồng" : "Community",
  };

  return <section id="awards" className="activities-section awards-section" aria-labelledby="awards-title">
    <div className="activities-section__heading">
      <h2 id="awards-title">{vi ? "Giải thưởng & ghi nhận" : "Awards & recognition"}</h2>
      <p>{vi ? "Mỗi dấu mốc đều có hình ảnh minh chứng. Chọn ảnh để xem rõ hơn." : "Each milestone includes visual evidence. Select an image for a closer look."}</p>
    </div>
    <div className="activities-grid">
      {awards.map(item => <article className={`activities-card award-card${item.featuredOrder ? " award-card--featured" : ""}`} key={item.image}>
        <GalleryImage src={item.image} alt={item.imageAlt[locale]} title={item.title[locale]} locale={locale} />
        <div className="activities-card__copy">
          <p className="award-meta">{categories[item.category]} · {item.year} · {item.scope[locale]}</p>
          <h3>{item.title[locale]}</h3>
          <p>{item.description[locale]}</p>
          {item.relatedWork && <Link href={`/${locale}/works#${item.relatedWork}`}>{vi ? "Xem dự án & case study" : "Explore project & case study"} ↗</Link>}
        </div>
      </article>)}
    </div>
  </section>;
}
