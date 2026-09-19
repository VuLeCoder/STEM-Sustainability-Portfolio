import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/constants/common";
import type { WorkItem } from "@/constants/works";

export function WorkCard({ item, locale, featured = false }: { item: WorkItem; locale: Locale; featured?: boolean }) {
  const vi = locale === "vi";
  const research = item.type === "research";
  const href = item.href.startsWith("/") ? `/${locale}${item.href}` : item.href;
  return <article id={featured ? undefined : item.slug} className={`works-card${featured ? " works-card--featured" : ""}${featured && item.featuredOrder === 1 ? " works-card--lead" : ""}`}>
    {featured && item.image && <div className="works-card__image"><Image src={item.image.src} alt={item.image.alt[locale]} fill sizes="(min-width: 1024px) 600px, (min-width: 768px) 700px, 100vw" priority={item.featuredOrder === 1} /></div>}
    <div className="works-card__body">
      <p className="works-meta"><span>{research ? (vi ? "Nghiên cứu" : "Research") : (vi ? "Dự án" : "Project")}</span><span aria-hidden="true">·</span>{item.year ? <span>{item.year}</span> : <span>{vi ? "Năm chưa cập nhật" : "Year pending"}</span>}</p>
      <h3>{item.title[locale]}</h3>
      <p className="works-card__description">{item.description[locale]}</p>
      <dl><div><dt>{research ? (vi ? "Đóng góp" : "Contribution") : (vi ? "Vai trò" : "Role")}</dt><dd>{item.role[locale]}</dd></div><div><dt>{research ? (vi ? "Nơi công bố" : "Publication") : (vi ? "Kết quả" : "Outcome")}</dt><dd>{item.result[locale]}</dd></div></dl>
      <Link className="works-card__link" href={href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} aria-label={`${item.cta[locale]}: ${item.title[locale]}`}>{item.cta[locale]} <span aria-hidden="true">{item.external ? "↗" : "→"}</span></Link>
    </div>
  </article>;
}
