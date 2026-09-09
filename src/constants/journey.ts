import type { Localized } from "./common";

export type JourneyType="activity"|"award"|"competition"|"workshop"|"milestone";
export interface JourneyItem {
  id: string;
  year: number;
  type: JourneyType;
  title: Localized<string>;
  shortDescription: Localized<string>;
  order?: number;
  featured?: boolean;
}

// Factual content migrated from the existing CV-based Home milestones and activities.
// Dates within a year are unknown: order is editorial, not an invented chronology.
export const journeyItems: readonly JourneyItem[]=[
  {
    id: "pimso-2022",year: 2022,type: "award",order: 1,featured: true,
    title: { vi: "Giải Đồng — PIMSO",en: "Bronze Award — PIMSO" },
    shortDescription: {
      vi: "Đạt giải Đồng vòng loại Philippine International Mathematical Olympiad (PIMSO) năm 2022.",
      en: "Received a Bronze Award in the 2022 Philippine International Mathematical Olympiad (PIMSO) Heat Round.",
    },
  },
  {
    id: "panthers-2024",year: 2024,type: "activity",order: 1,featured: true,
    title: { vi: "Tham gia truyền thông CNH Panthers",en: "Joining CNH Panthers media" },
    shortDescription: {
      vi: "Thành viên truyền thông CLB bóng rổ CNH Basketball Club — Panthers trong năm học 2024–2025, tiếp tục tham gia năm học 2025–2026.",
      en: "Media member of CNH Basketball Club — Panthers in the 2024–2025 school year, continuing in 2025–2026.",
    },
  },
  {
    id: "bloomwatch-2025",year: 2025,type: "award",order: 1,featured: true,
    title: { vi: "BloomWatch — NASA Space Apps",en: "BloomWatch — NASA Space Apps" },
    shortDescription: {
      vi: "Cùng đội BlueMarble xây dựng nền tảng học tập từ dữ liệu vệ tinh NASA. Dự án đạt giải Nhất, Arts & Technology Award và được chọn là Global Nominee tại NASA International Space Apps Challenge 2025.",
      en: "Worked with Team BlueMarble on a learning platform using NASA satellite data. The project earned First Prize, the Arts & Technology Award, and Global Nominee recognition at the 2025 NASA International Space Apps Challenge.",
    },
  },
  {
    id: "ecome-2025",year: 2025,type: "activity",order: 2,
    title: { vi: "Nhà sáng lập & Trưởng dự án — ECOMe",en: "Founder & Project Chair — ECOMe" },
    shortDescription: {
      vi: "Sáng kiến do học sinh dẫn dắt về giáo dục môi trường và hành động cộng đồng.",
      en: "A student-led environmental education and community-action initiative.",
    },
  },
  {
    id: "vnict-2025",year: 2025,type: "activity",order: 3,
    title: { vi: "Tác giả và người trình bày học sinh — VNICT 2025",en: "Student Author and Presenter — VNICT 2025" },
    shortDescription: {
      vi: "Đồng tác giả và trình bày bài báo về phương pháp reversible data hiding hai ảnh được cải tiến.",
      en: "Co-authored and presented a paper on an improved dual-image reversible data-hiding method.",
    },
  },
  {
    id: "safestride-2026",year: 2026,type: "award",order: 1,featured: true,
    title: { vi: "SafeStride — Giải Vàng WICO",en: "SafeStride — WICO Gold Award" },
    shortDescription: {
      vi: "Tham gia phát triển ý tưởng ứng dụng điện thoại giúp người khiếm thị nhận biết không gian và nhận cảnh báo ưu tiên. SafeStride đạt giải Vàng tại World Invention Creativity Olympic 2026 ở Seoul, Hàn Quốc.",
      en: "Contributed to a smartphone concept supporting spatial awareness and priority alerts for blind users. SafeStride received a Gold Award at the 2026 World Invention Creativity Olympic in Seoul, Korea.",
    },
  },
  {
    id: "vast-2026",year: 2026,type: "activity",order: 2,
    title: { vi: "Thực tập sinh nghiên cứu — Viện Công nghệ Thông tin, VAST",en: "Research Intern — Institute of Information Technology, VAST" },
    shortDescription: {
      vi: "Tham gia thực tập có cấu trúc về các hệ thống AI ứng dụng.",
      en: "Participating in a structured internship focused on applied AI systems.",
    },
  },
  {
    id: "ecomesort-2026",year: 2026,type: "award",order: 3,
    title: { vi: "Giải Ba — Cuộc thi Ý tưởng Bảo vệ Môi trường trong lĩnh vực Giao thông",en: "Third Prize — Environmental Protection Ideas in the Transport Sector Competition" },
    shortDescription: {
      vi: "ECOMeSort — ý tưởng ứng dụng AI hỗ trợ phân loại rác và kết nối hệ sinh thái tái chế.",
      en: "ECOMeSort — an AI-enabled concept for waste sorting and recycling-ecosystem connections.",
    },
  },
];

export function groupJourneyItems(items: readonly JourneyItem[]) {
  const groups=new Map<number,JourneyItem[]>();
  for(const item of items) {
    const group=groups.get(item.year)??[];
    group.push(item);
    groups.set(item.year,group);
  }
  return [...groups].sort(([a],[b]) => b-a).map(([year,entries]) => ({
    year,items: entries.sort((a,b) => (a.order??0)-(b.order??0)),
  }));
}

export const journeyFeatured=groupJourneyItems(journeyItems)
  .flatMap(({ items }) => {
    const featured=items.find((item) => item.featured);
    return featured? [featured]:[];
  }).reverse();

export const journeyPageContent={
  label: { vi: "Hành trình",en: "Journey" },
  title: { vi: "Mỗi trải nghiệm, một bước trưởng thành.",en: "Every experience, a step toward growth." },
  description: {
    vi: "Từ những cuộc thi học thuật đến nghiên cứu công nghệ và hoạt động cộng đồng, đây là những dấu mốc trong hành trình học hỏi của tôi. Mỗi hoạt động và giải thưởng ghi lại một cơ hội để thử sức, hợp tác và đưa kiến thức đến gần hơn với thực tế.",
    en: "From academic competitions to technology research and community activities, these milestones trace my learning journey. Each activity and award marks an opportunity to take on a challenge, collaborate and connect knowledge with practice.",
  },
  timelineHint: {
    vi: "Mới nhất → Trước đây · Chọn một năm để khám phá các dấu mốc.",
    en: "Newest → Oldest · Select a year to explore its milestones.",
  },
  empty: { vi: "Nội dung hành trình đang được cập nhật.",en: "Journey content is being updated." },
  types: {
    activity: { vi: "Hoạt động",en: "Activity" },
    award: { vi: "Giải thưởng",en: "Award" },
    competition: { vi: "Cuộc thi",en: "Competition" },
    workshop: { vi: "Hội thảo",en: "Workshop" },
    milestone: { vi: "Dấu mốc",en: "Milestone" },
  },
} as const;

export const journeyHome={
  journeyPreview: {
    label: { vi: "Hành trình",en: "Journey" },
    title: { vi: "Từng bước học hỏi. Từng dấu mốc trưởng thành.",en: "Learning at every step. Growing with every milestone." },
    description: {
      vi: "Từ những cuộc thi học thuật đến hoạt động tập thể và các dự án công nghệ — mỗi năm là một trải nghiệm đáng nhớ.",
      en: "From academic competitions to community activities and technology projects — a memorable experience from each selected year.",
    },
    selectYear: { vi: "Chọn năm để xem dấu mốc",en: "Choose a year to explore a milestone" },
    cta: { vi: "Xem hành trình",en: "View the journey" },
  },
  activities: {
    eyebrow: { vi: "Hoạt động chọn lọc",en: "Selected activities" },
    title: {
      vi: "Nghiên cứu, thử nghiệm và hành động.",
      en: "Research, experimentation, and action.",
    },
    cta: { vi: "Xem hành trình",en: "View the journey" },
  },
  selectedAwards: {
    eyebrow: { vi: "Thành tích chọn lọc",en: "Selected awards" },
    title: {
      vi: "Những dấu mốc ghi nhận quá trình học hỏi và thử nghiệm.",
      en: "Milestones recognizing a process of learning and experimentation.",
    },
    cta: { vi: "Xem trong hành trình",en: "Explore the journey" },
  }
} as const;

export const activitiesPageContent={
  eyebrow: { vi: "Hoạt động",en: "Activities" },
  title: {
    vi: "Những trải nghiệm nuôi dưỡng tư duy và hành động.",
    en: "Experiences that shape thinking and action.",
  },
  description: {
    vi: "Các cuộc thi, hoạt động cộng đồng và dấu mốc học thuật được sắp xếp theo từng năm.",
    en: "Competitions, community work, and academic milestones, organized by year.",
  },
  types: {
    research: { vi: "Nghiên cứu",en: "Research" },
    competition: { vi: "Cuộc thi & giải thưởng",en: "Competition & award" },
    community: { vi: "Cộng đồng",en: "Community" },
  },
} as const;
