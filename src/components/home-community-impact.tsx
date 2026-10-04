import Link from "next/link";
import { HomeEvidenceButton } from "./home-evidence-button";
import type { Locale } from "@/constants/common";

const metrics = [
  { value: { vi: "≈1.800", en: "≈1,800" }, label: { vi: "người được tiếp cận · ECOMe", en: "people reached · ECOMe" } },
  { value: { vi: "6", en: "6" }, label: { vi: "trung tâm bảo trợ · ECOMe", en: "care centres · ECOMe" } },
  { value: { vi: "225", en: "225" }, label: { vi: "hộ gia đình · cứu trợ thiên tai", en: "households · disaster relief" } },
] as const;

export function HomeCommunityImpact({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  const groups = [
    {
      title: vi ? "Cộng đồng & lãnh đạo" : "Community & leadership",
      items: [
        { title: "ECOMe", description: vi ? "Sáng lập & điều phối · Môi trường, nước sạch và cứu trợ thiên tai" : "Founder & coordinator · Environment, clean water, and disaster relief", photos: [{ src: "/images/work/ecome/community-certificate.jpg", caption: vi ? "Chứng nhận hoạt động cộng đồng ECOMe" : "ECOMe community activity certificate" }] },
        { title: "CypherCharm Club", description: vi ? "Thành viên · An ninh mạng & mật mã" : "Member · Cybersecurity & cryptography", photos: [] },
      ],
    },
    {
      title: vi ? "Giáo dục & hướng dẫn" : "Education & mentoring",
      items: [
        { title: "Robotics Summer Camp", description: vi ? "Ban tổ chức · American Center, Hà Nội · 2026" : "Organizing committee · American Center, Hanoi · 2026", photos: [{ src: "/images/community/education/robotics-summer-camp-certificate-2026.jpg", caption: vi ? "Chứng nhận Robotics Summer Camp 2026" : "Robotics Summer Camp 2026 certificate" }] },
        { title: "NASA Open Data Exploration", description: vi ? "Tham gia tổ chức · Khám phá dữ liệu mở" : "Event organizer · Open data exploration", photos: [{ src: "/images/community/education/open-data-exploration-certificate.jpg", caption: vi ? "Chứng nhận NASA Open Data Exploration" : "NASA Open Data Exploration certificate" }] },
        { title: "Generative AI Training", description: vi ? "Đồng tổ chức · Tập huấn cán bộ Đoàn–Hội · 03/2026" : "Co-organizer · Training for student-union officers · Mar 2026", photos: [{ src: "/images/community/education/genai-training-volunteer-2026.jpg", caption: vi ? "Ghi nhận hoạt động tập huấn Generative AI 2026" : "Generative AI training volunteer recognition, 2026" }] },
      ],
    },
  ];

  return (
    <section id="community-impact" className="home-impact" aria-labelledby="home-impact-title">
      <div className="home-shell">
        <header className="home-impact-heading" data-reveal>
          <div><p className="home-about-label">{vi ? "Ngoài lớp học" : "Beyond the classroom"}</p><h2 id="home-impact-title">{vi ? "Học cùng người khác, đóng góp cho cộng đồng." : "Learning with others, contributing to community."}</h2></div>
          <p>{vi ? "Các hoạt động cộng đồng, lãnh đạo và giáo dục bổ sung cho hành trình nghiên cứu và xây dựng dự án." : "Community involvement, leadership, and education that complement my research and project work."}</p>
        </header>

        <div className="home-impact-metrics" data-reveal>
          {metrics.map((metric) => <div key={metric.label.en}><strong>{metric.value[locale]}</strong><span>{metric.label[locale]}</span></div>)}
        </div>

        <div className="home-activities-grid">
          {groups.map(group => <article key={group.title} className="home-activity-group" data-reveal>
            <h3>{group.title}</h3>
            <ul>{group.items.map(item => <li key={item.title}>
              <HomeEvidenceButton locale={locale} title={item.title} photos={item.photos}>
                <strong>{item.title}</strong><span>{item.description}</span>
              </HomeEvidenceButton>
            </li>)}</ul>
          </article>)}
        </div>
        <Link className="home-impact-more" href={`/${locale}/gallery`}>{vi ? "Xem bộ sưu tập" : "Explore the gallery"} <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
