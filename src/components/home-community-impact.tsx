import type { Locale } from "@/constants/common";
import { homeAcademicAwards, homeCertificates } from "@/constants/home";

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
        vi ? "Sáng lập và điều phối ECOMe: giáo dục môi trường, hoạt động thực địa, nước sạch và cứu trợ thiên tai." : "Founded and lead ECOMe: environmental education, field campaigns, clean-water projects, and disaster relief.",
        vi ? "Thành viên CypherCharm Club, thực hành an ninh mạng và mật mã." : "Member of CypherCharm Club, extending cybersecurity and cryptography interests through practice.",
      ],
    },
    {
      title: vi ? "Giáo dục & hướng dẫn" : "Education & mentoring",
      items: [
        vi ? "Ban tổ chức Robotics Summer Camp 2026 tại American Center, Hà Nội." : "Organizing committee member for Robotics Summer Camp 2026 at the American Center, Hanoi.",
        vi ? "Tham gia tổ chức NASA Open Data Exploration với các bộ dữ liệu mở." : "Helped organize NASA Open Data Exploration using open datasets.",
        vi ? "Đồng tổ chức tập huấn Generative AI cho cán bộ Đoàn–Hội, tháng 3/2026." : "Co-organized Generative AI training for student-union officers in March 2026.",
      ],
    },
  ];

  return (
    <section id="community-impact" className="home-impact" aria-labelledby="home-impact-title">
      <div className="home-shell">
        <header className="home-impact-heading" data-reveal>
          <div><p className="home-about-label">{vi ? "Ngoài lớp học" : "Beyond the classroom"}</p><h2 id="home-impact-title">{vi ? "Học cùng người khác, đóng góp cho cộng đồng." : "Learning with others, contributing to community."}</h2></div>
          <p>{vi ? "Các hoạt động lãnh đạo, giáo dục, ghi nhận học thuật và tự học bổ sung cho hành trình nghiên cứu và xây dựng dự án." : "Leadership, education, academic recognition, and independent learning that complement my research and project work."}</p>
        </header>

        <div className="home-impact-metrics" data-reveal>
          {metrics.map((metric) => <div key={metric.label.en}><strong>{metric.value[locale]}</strong><span>{metric.label[locale]}</span></div>)}
        </div>

        <div className="home-activities-grid">
          {groups.map((group) => <article key={group.title} className="home-activity-group" data-reveal><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
          <article className="home-activity-group" data-reveal>
            <h3>{vi ? "Ghi nhận tiêu biểu" : "Selected recognition"}</h3>
            <ul>{homeAcademicAwards.map((award) => <li key={award.id}><strong>{award.title[locale]}</strong><span>{award.description[locale]}</span></li>)}
              <li><strong>{vi ? "Hai giấy khen tình nguyện · 2026" : "Two volunteering Certificates of Merit · 2026"}</strong><span>{vi ? "ĐH Giao thông Vận tải · Hoạt động cộng đồng, Tiếp sức mùa thi & Mùa hè xanh" : "University of Transport and Communications · Community work, Exam Support & Green Summer"}</span></li>
            </ul>
          </article>
          <article className="home-activity-group home-activity-group--learning" data-reveal>
            <h3>{vi ? "Tự học" : "Independent learning"}</h3>
            <p className="home-learning-note">{vi ? "Các khóa Coursera bổ trợ kiến thức về AI, dữ liệu và công cụ lập trình." : "Coursera courses supporting my foundations in AI, data, and development tools."}</p>
            <ul>{homeCertificates.courses.map((course) => <li key={course.title}><strong>{course.title}</strong></li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  );
}
