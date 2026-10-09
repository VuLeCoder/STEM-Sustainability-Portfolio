import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/constants/common";
import { homeNarrative } from "@/constants/home";
import { works } from "@/constants/works";

export function HomeResearch({ locale }: { locale: Locale }) {
  const content = homeNarrative.research;
  const vi = locale === "vi";
  const publications = [
    {
      venue: vi ? "VNICT 2025 · Hội nghị Quốc gia CNTT-TT" : "VNICT 2025 · National ICT Conference",
      role: vi ? "Đồng tác giả & trình bày · An ninh thông tin" : "Co-author & presenter · Information Security",
      title: vi ? "Phương pháp giấu tin thuận nghịch trên ảnh kép cải tiến" : "An Improved Dual-Image Reversible Data Hiding Method",
      description: vi ? "Tăng dung lượng nhúng phục vụ xác thực nội dung số, đồng thời bảo đảm khôi phục hoàn hảo ảnh gốc." : "Improves embedding capacity for digital-content authentication while guaranteeing perfect recovery of the original image.",
      slug: "dual-image-reversible-data-hiding",
    },
    {
      venue: vi ? "Hội thảo Quốc gia UTM · Hà Nội" : "UTM National Conference · Hanoi",
      role: vi ? "Đồng tác giả & trình bày · UAV / AI" : "Co-author & presenter · UAV / AI",
      title: vi ? "Khung UAV–Trạm điều khiển mặt đất tích hợp AI cho nhận thức tình huống và tìm kiếm cứu nạn" : "An AI-Integrated UAV–Ground Control Station Framework for Situational Awareness and Search-and-Rescue",
      description: vi ? "Đề xuất khung tích hợp UAV và trạm điều khiển mặt đất nhằm nâng cao nhận thức tình huống và hỗ trợ tìm kiếm cứu nạn trong không phận tầm thấp." : "Proposes an integrated UAV and ground-control-station framework for situational awareness and search-and-rescue in low-altitude airspace.",
      slug: "uav-gcs-framework",
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
          {publications.map((publication) => {
            const image = works.find(item => item.slug === publication.slug)?.image;
            return (
              <article className="home-research-row" key={publication.slug} aria-labelledby={`home-${publication.slug}`}>
                <span className="home-about-label home-research-venue">{publication.venue}</span>
                <div className="home-research-placeholder">
                  {image && <Image
                    src={image.src}
                    alt={image.alt[locale]}
                    fill
                    sizes="(max-width: 767px) 100vw, 40vw"
                  />}
                </div>
                <div className="home-research-copy">
                  <h3 id={`home-${publication.slug}`}>{publication.title}</h3>
                  <p className="home-research-role">{publication.role}</p>
                  <p className="home-research-description">{publication.description}</p>
                  <Link className="home-research-link" href={`/${locale}/works#${publication.slug}`} aria-label={`${vi ? "Khám phá nghiên cứu" : "Explore research"}: ${publication.title}`}>
                    {vi ? "Khám phá nghiên cứu" : "Explore research"} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <article className="home-research-internship" data-reveal aria-labelledby="home-internship-title">
          <a
            className="home-research-placeholder home-internship-image"
            href="/images/work/vast/vast-iit-internship-confirmation-2026.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={vi ? "Xem giấy xác nhận thực tập tại VAST" : "View VAST internship confirmation"}
          >
            <Image
              src="/images/work/vast/vast-iit-internship-confirmation-2026.png"
              alt={vi ? "Giấy xác nhận thực tập năm 2026 tại Viện Công nghệ Thông tin, VAST" : "2026 internship confirmation from the Institute of Information Technology, VAST"}
              fill
              sizes="(max-width: 767px) 100vw, 25vw"
            />
          </a>
          <div className="home-research-copy">
          <p className="home-about-label home-internship-label">{vi ? "Thực tập nghiên cứu" : "Research internship"}</p>
          <h3 id="home-internship-title" className="home-research-institution"><strong>VAST</strong><span>{vi ? "Viện Công nghệ Thông tin" : "Institute of Information Technology"}</span></h3>
          <p className="home-research-dates">{vi ? "01/03–15/09/2026" : "1 Mar–15 Sep 2026"}</p>
          <p>{vi ? "Phòng Hệ thống thông minh và Tính toán tiên tiến · Viện Hàn lâm Khoa học và Công nghệ Việt Nam · Hà Nội" : "Department of Intelligent Systems and Advanced Computing · Vietnam Academy of Science and Technology · Hanoi"}</p>
          <p>{vi ? "Thiết kế cơ khí chính và phát triển phần cứng cho dự án kính thông minh hỗ trợ người khiếm thị, hướng tới chuyển ngôn ngữ ký hiệu thành lời nói. Tôi thiết kế khung kính cho camera, Raspberry Pi và âm thanh; cải thiện tản nhiệt và cân bằng trọng lượng khi đeo." : "Main mechanical designer and hardware developer for an assistive smart-glasses project aimed at sign-language-to-speech translation. I designed the frame for the camera, Raspberry Pi and audio hardware, improving cooling and wearable weight balance."}</p>
          <Link className="home-research-link" href={`/${locale}/works#vast-internship`}>{vi ? "Xem case study thực tập" : "Explore internship case study"} <span aria-hidden="true">↗</span></Link>
          </div>
        </article>
      </div>
    </section>
  );
}
