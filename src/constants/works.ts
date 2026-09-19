import type { Localized } from "./common";
import { workEntries } from "./work";

export type WorkItem = {
  slug: string;
  type: "project" | "research";
  year?: string;
  title: Localized<string>;
  description: Localized<string>;
  role: Localized<string>;
  result: Localized<string>;
  featuredOrder?: number;
  image?: { src: string; alt: Localized<string> };
  href: string;
  external?: boolean;
  cta: Localized<string>;
};

// Deliberate output-based selection: activities remain in the existing archive.
// Reuse verified copy without mutating the data consumed by Home.
const slugs = ["safestride", "bloomwatch", "ecome", "ecomesort", "vex-v5-robotics", "dual-image-reversible-data-hiding"];
const featured = ["safestride", "dual-image-reversible-data-hiding", "ecome"];
const photos: Record<string, WorkItem["image"]> = {
  safestride: { src: "/images/journey/SafeStride/1.jpeg", alt: { vi: "Hình ảnh tham dự WICO 2026 của đội SafeStride", en: "The SafeStride team at WICO 2026" } },
  "dual-image-reversible-data-hiding": { src: "/images/journey/VNICT/1.jpeg", alt: { vi: "Hoạt động trình bày nghiên cứu tại VNICT 2025", en: "Research presentation at VNICT 2025" } },
  ecome: { src: "/images/journey/ECOMe/1.jpg", alt: { vi: "Hoạt động cộng đồng trong chiến dịch ECOMe", en: "Community activities during an ECOMe campaign" } },
};

export const works: WorkItem[] = [
  ...slugs.map((slug): WorkItem => {
    const entry = workEntries.find(item => item.slug === slug);
    if (!entry) throw new Error(`Missing work source: ${slug}`);
    const research = slug === "dual-image-reversible-data-hiding";
    const order = featured.indexOf(slug);
    return {
      slug, type: research ? "research" : "project",
      year: entry.year ?? (slug === "ecome" ? "2025–2026" : undefined),
      title: research ? { vi: "Phương pháp giấu tin thuận nghịch trên ảnh kép cải tiến", en: "An Improved Dual-Image Reversible Data Hiding Method" } : entry.displayTitle,
      description: entry.summary, role: entry.role,
      result: research ? { vi: "VNICT 2025 · Hội nghị Quốc gia CNTT-TT", en: "VNICT 2025 · National ICT Conference" } : entry.achievementShort ?? entry.result,
      featuredOrder: order >= 0 ? order + 1 : undefined,
      image: photos[slug],
      href: `/projects/${slug}`,
      cta: research ? { vi: "Đọc hồ sơ nghiên cứu", en: "Read research case study" } : { vi: "Xem hồ sơ dự án", en: "View case study" },
    };
  }),
  {
    slug: "uav-gcs-framework", type: "research",
    // The UTM year is not verified in the supplied content. Do not infer it.
    title: { vi: "Khung UAV–Trạm điều khiển mặt đất tích hợp AI cho nhận thức tình huống và tìm kiếm cứu nạn", en: "An AI-Integrated UAV–Ground Control Station Framework for Situational Awareness and Search-and-Rescue" },
    description: { vi: "Đề xuất khung tích hợp UAV và trạm điều khiển mặt đất nhằm nâng cao nhận thức tình huống và hỗ trợ tìm kiếm cứu nạn trong không phận tầm thấp.", en: "An integrated UAV and ground-control-station framework for situational awareness and search-and-rescue in low-altitude airspace." },
    role: { vi: "Đồng tác giả & trình bày", en: "Co-author & presenter" },
    result: { vi: "Hội thảo Quốc gia UTM · Hà Nội", en: "UTM National Conference · Hanoi" },
    href: "mailto:nguyencxphuc@gmail.com?subject=UTM%20paper%20request",
    cta: { vi: "Yêu cầu bài báo & slide", en: "Request the paper & slides" },
  },
];

export const worksCopy = {
  title: { vi: "Dự án & Nghiên cứu", en: "Selected Work" },
  description: { vi: "Các dự án và nghiên cứu về công nghệ hỗ trợ, AI ứng dụng, phần cứng và phát triển bền vững.", en: "Projects and research across assistive technology, applied AI, hardware and sustainability." },
};
