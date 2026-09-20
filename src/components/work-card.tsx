import { WorkProjectActions } from "./work-project-actions";
import Link from "next/link";
import type { Locale } from "@/constants/common";
import type { WorkItem } from "@/constants/works";

export function WorkCard({ item, locale }: { item: WorkItem; locale: Locale }) {
  const vi = locale === "vi";
  const research = item.type === "research";
  const href = item.href.startsWith("/") ? `/${locale}${item.href}` : item.href;
  return <article id={item.slug} className="works-card">
    <div className="works-card__body">
      <p className="works-meta"><span>{research ? (vi ? "Nghiên cứu" : "Research") : (vi ? "Dự án" : "Project")}</span>{item.year && <><span aria-hidden="true">·</span><span>{item.year}</span></>}</p>
      <h3>{item.title[locale]}</h3>
      <p className="works-card__description">{item.description[locale]}</p>
      <dl><div><dt>{research ? (vi ? "Đóng góp" : "Contribution") : (vi ? "Vai trò" : "Role")}</dt><dd>{item.role[locale]}</dd></div><div><dt>{research ? (vi ? "Nơi công bố" : "Publication") : (vi ? "Kết quả" : "Outcome")}</dt><dd>{item.result[locale]}</dd></div></dl>
      {!research ? <WorkProjectActions item={item} locale={locale} /> : <Link className="works-card__link" href={href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} aria-label={`${item.cta[locale]}: ${item.title[locale]}`}>{item.cta[locale]} <span aria-hidden="true">{item.external ? "↗" : "→"}</span></Link>}
    </div>
  </article>;
}
