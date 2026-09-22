import { WorkProjectActions } from "./work-project-actions";
import type { Locale } from "@/constants/common";
import type { WorkItem } from "@/constants/works";

export function WorkCard({ item, locale }: { item: WorkItem; locale: Locale }) {
  const vi = locale === "vi";
  const research = item.type === "research";
  return <article id={item.slug} className="works-card">
    <div className="works-card__body">
      <p className="works-meta"><span>{research ? (vi ? "Nghiên cứu" : "Research") : (vi ? "Dự án" : "Project")}</span>{item.year && <><span aria-hidden="true">·</span><span>{item.year}</span></>}</p>
      <h3>{item.title[locale]}</h3>
      <p className="works-card__description">{item.description[locale]}</p>
      <dl><div><dt>{research ? (vi ? "Đóng góp" : "Contribution") : (vi ? "Vai trò" : "Role")}</dt><dd>{item.role[locale]}</dd></div><div><dt>{research ? (vi ? "Nơi công bố" : "Publication") : (vi ? "Kết quả" : "Outcome")}</dt><dd>{item.result[locale]}</dd></div></dl>
      <WorkProjectActions item={item} locale={locale} />
    </div>
  </article>;
}
