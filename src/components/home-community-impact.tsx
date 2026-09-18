import Link from "next/link";
import type { Locale } from "@/constants/common";

const metrics = [
  {
    value: { vi: "≈1.800", en: "≈1,800" },
    title: { vi: "Người được tiếp cận", en: "People reached" },
    description: { vi: "Các chiến dịch truyền thông và giáo dục môi trường của ECOMe — sáng kiến tôi sáng lập và điều phối.", en: "Environmental awareness and education campaigns by ECOMe, the initiative I founded and lead." },
    slug: "ecome", link: { vi: "Khám phá ECOMe", en: "Explore ECOMe" },
  },
  {
    value: { vi: "6", en: "6" },
    title: { vi: "Trung tâm bảo trợ", en: "Care centres" },
    description: { vi: "Chiến dịch tháng 6/2026 kết hợp truyền thông môi trường và phục vụ cộng đồng tại sáu trung tâm bảo trợ trẻ em.", en: "The June 2026 campaign combined environmental communication and community service at six child-care centres." },
    slug: "ecome", link: { vi: "Xem hoạt động cộng đồng", en: "Explore community work" },
  },
  {
    value: { vi: "225", en: "225" },
    title: { vi: "Hộ gia đình được hỗ trợ", en: "Households supported" },
    description: { vi: "Các hộ chịu ảnh hưởng thiên tai tại Đắk Lắk được hỗ trợ qua chương trình cứu trợ mà tôi tham gia.", en: "Households affected by natural disasters in Dak Lak, supported through relief efforts I participated in." },
    slug: "community-service", link: { vi: "Xem hoạt động cứu trợ", en: "Explore relief efforts" },
  },
] as const;

export function HomeCommunityImpact({ locale }: { locale: Locale }) {
  const vi = locale === "vi";
  return (
    <section id="community-impact" className="home-impact" aria-labelledby="home-impact-title">
      <div className="home-shell">
        <header className="home-impact-heading" data-reveal>
          <div><p className="home-about-label">{vi ? "Tác động cộng đồng" : "Community impact"}</p><h2 id="home-impact-title">{vi ? "Cùng hành động, tạo nên giá trị." : "Shared action. Meaningful impact."}</h2></div>
          <p>{vi ? "Từ giáo dục môi trường đến hoạt động thiện nguyện — những đóng góp cùng đội ngũ và cộng đồng trong các chương trình tôi tham gia." : "From environmental education to volunteer work — contributions made together with teams and communities through programmes I have been part of."}</p>
        </header>
        <div className="home-impact-grid">
          {metrics.map(metric => <article className="home-impact-card" key={metric.title.en} data-reveal>
            <span className="home-impact-value">{metric.value[locale]}</span>
            <h3>{metric.title[locale]}</h3><p>{metric.description[locale]}</p>
            <Link href={`/${locale}/projects/${metric.slug}`}>{metric.link[locale]} <span aria-hidden="true">↗</span></Link>
          </article>)}
        </div>
      </div>
    </section>
  );
}
