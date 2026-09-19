import Link from "next/link";
import type { Locale } from "@/constants/common";
import { homeNarrative } from "@/constants/home";

export function HomeResearch({ locale }: { locale: Locale }) {
  const content = homeNarrative.research;
  const vi = locale === "vi";
  const publications = [
    {
      venue: vi ? "VNICT 2025 · Hội nghị Quốc gia CNTT-TT" : "VNICT 2025 · National ICT Conference",
      role: vi ? "Đồng tác giả & trình bày · An ninh thông tin" : "Co-author & presenter · Information Security",
      title: vi ? "Phương pháp giấu tin thuận nghịch trên ảnh kép cải tiến" : "An Improved Dual-Image Reversible Data Hiding Method",
      description: vi ? "Tăng dung lượng nhúng phục vụ xác thực nội dung số, đồng thời bảo đảm khôi phục hoàn hảo ảnh gốc." : "Improves embedding capacity for digital-content authentication while guaranteeing perfect recovery of the original image.",
      href: "mailto:nguyencxphuc@gmail.com?subject=VNICT%202025%20paper%20request",
    },
    {
      venue: vi ? "Hội thảo Quốc gia UTM · Hà Nội" : "UTM National Conference · Hanoi",
      role: vi ? "Đồng tác giả & trình bày · UAV / AI" : "Co-author & presenter · UAV / AI",
      title: vi ? "Khung UAV–Trạm điều khiển mặt đất tích hợp AI cho nhận thức tình huống và tìm kiếm cứu nạn" : "An AI-Integrated UAV–Ground Control Station Framework for Situational Awareness and Search-and-Rescue",
      description: vi ? "Đề xuất khung tích hợp UAV và trạm điều khiển mặt đất nhằm nâng cao nhận thức tình huống và hỗ trợ tìm kiếm cứu nạn trong không phận tầm thấp." : "Proposes an integrated UAV and ground-control-station framework for situational awareness and search-and-rescue in low-altitude airspace.",
      href: "mailto:nguyencxphuc@gmail.com?subject=UTM%20paper%20request",
    },
  ];

  return (
    <section id="research" className="home-content-section" aria-labelledby="home-research-title">
      <div className="home-shell">
        <div className="home-content-section-heading" data-reveal>
          <div><p className="home-about-label">{homeNarrative.navigation.research[locale]}</p><h2 id="home-research-title">{content.title[locale]}</h2></div>
          <p>{content.description[locale]}</p>
        </div>
        <div className="home-research-evidence" data-reveal>
          {publications.map((publication) => (
            <article className="home-about-card" key={publication.title}>
              <span className="home-about-label">{publication.venue}</span>
              <h3>{publication.title}</h3>
              <p>{publication.role}</p><p>{publication.description}</p>
              <a className="home-research-link" href={publication.href}>{vi ? "Yêu cầu bài báo & slide" : "Request the paper & slides"} <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
        <div className="home-content-section-footer">
          <Link className="home-content-section-link" href={`/${locale}/projects/dual-image-reversible-data-hiding`}>{vi ? "Xem nghiên cứu tiêu biểu" : "View featured research"} <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
