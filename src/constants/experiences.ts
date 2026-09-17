import type { Localized } from "./common";

export type ExperienceType="activity"|"award"|"competition"|"workshop"|"milestone";
export interface PortfolioImage {
  src: string;
  alt: Localized<string>;
  caption?: Localized<string>;
}

export interface ExperienceItem {
  images?: readonly PortfolioImage[];
  evidencePdf?: string;
  id: string;
  year: number;
  type: ExperienceType;
  title: Localized<string>;
  shortDescription: Localized<string>;
}

// Factual content migrated from the existing CV-based Home milestones and activities.
// Dates within a year are unknown: order is editorial, not an invented chronology.
export const experienceItems: readonly ExperienceItem[]=[
  {
    id: "pimso-2022",year: 2022,type: "award",
    title: { vi: "Giải Đồng — PIMSO",en: "Bronze Award — PIMSO" },
    shortDescription: {
      vi: "Đạt giải Đồng vòng loại Philippine International Mathematical Olympiad (PIMSO) năm 2022.",
      en: "Received a Bronze Award in the 2022 Philippine International Mathematical Olympiad (PIMSO) Heat Round.",
    },
    images:[
      {
        src: "/images/journey/PIMSO/1.jpg",
        alt: {vi: "", en: ""}
      }
    ]
  },
  {
    id: "panthers-2024",year: 2024,type: "activity",
    title: { vi: "Tham gia truyền thông CNH Panthers",en: "Joining CNH Panthers media" },
    shortDescription: {
      vi: "Thành viên truyền thông CLB bóng rổ CNH Basketball Club — Panthers trong năm học 2024–2025, tiếp tục tham gia năm học 2025–2026.",
      en: "Media member of CNH Basketball Club — Panthers in the 2024–2025 school year, continuing in 2025–2026.",
    },
    images:[
      {
        src: "/images/journey/CNH/1.jpg",
        alt: {vi: "", en: ""}
      },
      {
        src: "/images/journey/CNH/2.jpg",
        alt: {vi: "", en: ""}
      }
    ]
  },
  {
    id: "bloomwatch-2025",year: 2025,type: "award",
    title: { vi: "BloomWatch — NASA Space Apps",en: "BloomWatch — NASA Space Apps" },
    shortDescription: {
      vi: "Cùng đội BlueMarble xây dựng nền tảng học tập từ dữ liệu vệ tinh NASA. Dự án đạt giải Nhất, Arts & Technology Award và được chọn là Global Nominee tại NASA International Space Apps Challenge 2025.",
      en: "Worked with Team BlueMarble on a learning platform using NASA satellite data. The project earned First Prize, the Arts & Technology Award, and Global Nominee recognition at the 2025 NASA International Space Apps Challenge.",
    },
  },
  {
    id: "ecome-2025",year: 2025,type: "activity",
    title: { vi: "Nhà sáng lập & Trưởng dự án — ECOMe",en: "Founder & Project Chair — ECOMe" },
    shortDescription: {
      vi: "Sáng kiến do học sinh dẫn dắt về giáo dục môi trường và hành động cộng đồng.",
      en: "A student-led environmental education and community-action initiative.",
    },
    images:[
      {
        src: "/images/journey/ECOMe/1.jpg",
        alt: {vi: "", en: ""}
      },
      {
        src: "/images/journey/ECOMe/2.jpeg",
        alt: {vi: "", en: ""}
      },
      {
        src: "/images/journey/ECOMe/3.jpeg",
        alt: {vi: "", en: ""}
      },
      {
        src: "/images/journey/ECOMe/4.jpeg",
        alt: {vi: "", en: ""}
      }
    ]
  },
  {
    id: "vnict-2025",year: 2025,type: "activity",
    title: { vi: "Tác giả và người trình bày học sinh — VNICT 2025",en: "Student Author and Presenter — VNICT 2025" },
    shortDescription: {
      vi: "Đồng tác giả và trình bày bài báo về phương pháp reversible data hiding hai ảnh được cải tiến.",
      en: "Co-authored and presented a paper on an improved dual-image reversible data-hiding method.",
    },
    images:[
      {
        src: "/images/journey/VNICT/1.jpeg",
        alt: {vi: "", en: ""}
      }
    ]
  },
  {
    id: "safestride-2026",year: 2026,type: "award",
    title: { vi: "SafeStride — Giải Vàng WICO",en: "SafeStride — WICO Gold Award" },
    shortDescription: {
      vi: "Tham gia phát triển ý tưởng ứng dụng điện thoại giúp người khiếm thị nhận biết không gian và nhận cảnh báo ưu tiên. SafeStride đạt giải Vàng tại World Invention Creativity Olympic 2026 ở Seoul, Hàn Quốc.",
      en: "Contributed to a smartphone concept supporting spatial awareness and priority alerts for blind users. SafeStride received a Gold Award at the 2026 World Invention Creativity Olympic in Seoul, Korea.",
    },
    images:[
      {
        src: "/images/journey/SafeStride/1.jpeg",
        alt: {vi: "", en: ""}
      }
    ]
  },
  {
    id: "vast-2026",year: 2026,type: "activity",
    title: { vi: "Thực tập sinh nghiên cứu — Viện Công nghệ Thông tin, VAST",en: "Research Intern — Institute of Information Technology, VAST" },
    shortDescription: {
      vi: "Tham gia thực tập có cấu trúc về các hệ thống AI ứng dụng.",
      en: "Participating in a structured internship focused on applied AI systems.",
    },
  },
  {
    id: "ecomesort-2026",year: 2026,type: "award",
    title: { vi: "Giải Ba — Cuộc thi Ý tưởng Bảo vệ Môi trường trong lĩnh vực Giao thông",en: "Third Prize — Environmental Protection Ideas in the Transport Sector Competition" },
    shortDescription: {
      vi: "ECOMeSort — ý tưởng ứng dụng AI hỗ trợ phân loại rác và kết nối hệ sinh thái tái chế.",
      en: "ECOMeSort — an AI-enabled concept for waste sorting and recycling-ecosystem connections.",
    },
    images:[
      {
        src: "/images/journey/ECOMeSort/1.png",
        alt: {vi: "", en: ""}
      },
      {
        src: "/images/journey/ECOMeSort/2.png",
        alt: {vi: "", en: ""}
      }
    ]
  },
];
