import type { Localized } from "./common";
import { projects, type Project } from "./project";
import { journeyItems } from "./journey";

export const workCategories = {
  all: { vi: "Tất cả", en: "All" },
  research: { vi: "Nghiên cứu", en: "Research" },
  technology: { vi: "Công nghệ & Robotics", en: "Technology & Robotics" },
  community: { vi: "Cộng đồng & Hoạt động", en: "Community & Activities" },
} as const;
export type WorkCategory = Exclude<keyof typeof workCategories, "all">;
export type WorkEntry = Project & { kind: WorkCategory; displayTitle: Localized<string> };
export const workContent = {
  title: { vi: "Dấu ấn & Tác động", en: "Work & Impact" },
  description: { vi: "Những nghiên cứu, dự án công nghệ và hoạt động cộng đồng — từ sự tò mò khoa học đến đóng góp trong thực tế.", en: "Research, technology projects, and community activities — from scientific curiosity to practical contributions." },
  featured: { vi: "Dấu ấn tiêu biểu", en: "Selected highlights" },
  archive: { vi: "Khám phá tất cả", en: "Explore all work" },
  details: { vi: "Xem chi tiết", en: "View details" },
  back: { vi: "Tất cả dấu ấn", en: "All work" },
};
const additions: WorkEntry[] = [
  {
    slug: "vast-research-internship", title: "VAST Research Internship",
    displayTitle: { vi: "Thực tập nghiên cứu tại VAST", en: "Research Internship at VAST" },
    kind: "research", featured: false, year: "2026",
    category: { vi: "Thực tập nghiên cứu", en: "Research internship" },
    summary: { vi: "Thực tập tại Phòng các Hệ thống AI, Viện Công nghệ Thông tin, Viện Hàn lâm Khoa học và Công nghệ Việt Nam.", en: "Internship in the AI Systems Department, Institute of Information Technology, Vietnam Academy of Science and Technology." },
    role: { vi: "Thực tập sinh nghiên cứu", en: "Research intern" },
    fields: { vi: ["Hệ thống AI ứng dụng", "Nghiên cứu"], en: ["Applied AI systems", "Research"] },
    result: { vi: "Kỳ thực tập từ 18/05 đến 24/09/2026, tập trung vào các hệ thống AI ứng dụng.", en: "Internship from 18 May to 24 September 2026, focused on applied AI systems." },
    externalLinks: [], coverImage: "",
  },
  {
    slug: "vex-v5-robotics", title: "VEX V5 Robotics",
    displayTitle: { vi: "VEX V5 Robotics", en: "VEX V5 Robotics" },
    kind: "technology", featured: false, year: "2026",
    category: { vi: "Robotics & Phần cứng", en: "Robotics & Hardware" },
    summary: { vi: "Tham gia đội NGS Hogrider tại Giải vô địch Quốc gia VEX V5 Robotics 2026, với trọng tâm về xây dựng và độ tin cậy của robot.", en: "Participated with NGS Hogrider at the 2026 National VEX V5 Robotics Championship, with a focus on robot construction and reliability." },
    role: { vi: "Thành viên đội NGS Hogrider", en: "NGS Hogrider team member" },
    fields: { vi: ["Robotics", "Kỹ thuật phần cứng"], en: ["Robotics", "Hardware engineering"] },
    result: { vi: "Build Award tại Giải vô địch Quốc gia VEX V5 Robotics 2026.", en: "Build Award at the 2026 National VEX V5 Robotics Championship." },
    achievementShort: { vi: "VEX V5 2026 · Build Award", en: "VEX V5 2026 · Build Award" },
    externalLinks: [], coverImage: "",
  },
];
const activities: WorkEntry[] = journeyItems.filter(item => item.id === "panthers-2024" || item.id === "pimso-2022").map(item => ({
  slug: item.id, title: item.title.en, displayTitle: item.title, kind: "community", featured: false,
  year: String(item.year), category: item.type === "award" ? { vi: "Cuộc thi học thuật", en: "Academic competition" } : { vi: "Hoạt động ngoại khóa", en: "Extracurricular activity" },
  summary: item.shortDescription, role: item.id === "panthers-2024" ? { vi: "Thành viên truyền thông", en: "Media member" } : { vi: "Thí sinh", en: "Participant" },
  fields: { vi: [], en: [] }, result: item.shortDescription,
  externalLinks: [], coverImage: item.images?.[0]?.src ?? "",
}));
const communityActivities: WorkEntry[] = [
  {
    "slug": "community-service",
    "title": "Community Service & Disaster Relief",
    "displayTitle": {
      "vi": "Hoạt động thiện nguyện & Cứu trợ",
      "en": "Community Service & Disaster Relief"
    },
    "kind": "community",
    "featured": false,
    "year": "2025–2026",
    "category": {
      "vi": "Hoạt động & Cộng đồng",
      "en": "Activities & Community"
    },
    "summary": {
      "vi": "Tham gia các chương trình thiện nguyện tại Bắc Ninh, Hải Dương, Lạng Sơn, Đắk Lắk, Đồng bằng sông Cửu Long và các địa phương khác.",
      "en": "Participated in charitable programs in Bac Ninh, Hai Duong, Lang Son, Dak Lak, the Mekong Delta, and other localities."
    },
    "role": {
      "vi": "Tình nguyện viên & Người tổ chức chiến dịch",
      "en": "Volunteer & Campaign Organizer"
    },
    "fields": {
      "vi": [],
      "en": []
    },
    "result": {
      "vi": "Hỗ trợ hai chiến dịch năm 2025 với tổng giá trị quà tặng và cứu trợ 115 triệu VNĐ; đồng thời tham gia cứu trợ 225 hộ gia đình chịu ảnh hưởng thiên tai tại Đắk Lắk.",
      "en": "Supported two 2025 campaigns delivering VND 115 million in gifts and aid; also joined disaster relief efforts serving 225 households in Dak Lak."
    },
    "externalLinks": [],
    "coverImage": ""
  },
  {
    "slug": "open-data-camp",
    "title": "Open Data Exploration Summer Camp",
    "displayTitle": {
      "vi": "Open Data Exploration Summer Camp",
      "en": "Open Data Exploration Summer Camp"
    },
    "kind": "community",
    "featured": false,
    "year": "2026",
    "category": {
      "vi": "Hoạt động & Cộng đồng",
      "en": "Activities & Community"
    },
    "summary": {
      "vi": "Trại hè tháng 7/2026 tại American Center, Đại sứ quán Hoa Kỳ tại Hà Nội.",
      "en": "July 2026 summer camp at the American Center, U.S. Embassy Hanoi."
    },
    "role": {
      "vi": "Thành viên ban tổ chức",
      "en": "Organizing team member"
    },
    "fields": {
      "vi": [],
      "en": []
    },
    "result": {
      "vi": "Tham gia Truyền thông & Thiết kế và Đào tạo & Nghiên cứu dữ liệu, hỗ trợ nội dung giáo dục và hoạt động của chương trình.",
      "en": "Worked in Communication & Design and Training & Data Research, supporting educational content and program delivery."
    },
    "externalLinks": [],
    "coverImage": ""
  },
  {
    "slug": "robotics-summer-camp",
    "title": "Robotics Summer Camp",
    "displayTitle": {
      "vi": "Robotics Summer Camp",
      "en": "Robotics Summer Camp"
    },
    "kind": "community",
    "featured": false,
    "year": "2026",
    "category": {
      "vi": "Hoạt động & Cộng đồng",
      "en": "Activities & Community"
    },
    "summary": {
      "vi": "Trại hè robotics tháng 7/2026 tại American Center, Đại sứ quán Hoa Kỳ tại Hà Nội.",
      "en": "July 2026 robotics summer camp at the American Center, U.S. Embassy Hanoi."
    },
    "role": {
      "vi": "Thành viên nhóm kỹ thuật cơ khí",
      "en": "Mechanical engineering team member"
    },
    "fields": {
      "vi": [],
      "en": []
    },
    "result": {
      "vi": "Hỗ trợ giáo dục robotics miễn phí cho học sinh Việt Nam thông qua làm việc nhóm kỹ thuật và các hoạt động thực hành.",
      "en": "Supported free robotics education for Vietnamese students through technical teamwork and hands-on activities."
    },
    "externalLinks": [],
    "coverImage": ""
  },
  {
    "slug": "tsukuba-learning",
    "title": "Learning at the University of Tsukuba",
    "displayTitle": {
      "vi": "Trải nghiệm học tập tại Đại học Tsukuba",
      "en": "Learning at the University of Tsukuba"
    },
    "kind": "community",
    "featured": false,
    "year": "2025",
    "category": {
      "vi": "Hoạt động & Cộng đồng",
      "en": "Activities & Community"
    },
    "summary": {
      "vi": "Tham quan và học tập tại Đại học Tsukuba, Nhật Bản, tháng 7/2025.",
      "en": "Campus tour and learning activities at the University of Tsukuba, Japan, in July 2025."
    },
    "role": {
      "vi": "Người tham gia",
      "en": "Participant"
    },
    "fields": {
      "vi": [],
      "en": []
    },
    "result": {
      "vi": "Hoàn thành các hoạt động học thuật và văn hóa do văn phòng hỗ trợ sinh viên quốc tế của trường tổ chức.",
      "en": "Completed academic and cultural learning activities hosted by the university’s international student support office."
    },
    "externalLinks": [],
    "coverImage": ""
  },
  {
    "slug": "japanese-festival",
    "title": "Japanese Festival in Hanoi",
    "displayTitle": {
      "vi": "Lễ hội Nhật Bản tại Hà Nội",
      "en": "Japanese Festival in Hanoi"
    },
    "kind": "community",
    "featured": false,
    "year": "2025",
    "category": {
      "vi": "Hoạt động & Cộng đồng",
      "en": "Activities & Community"
    },
    "summary": {
      "vi": "Tham gia tình nguyện tại Lễ hội Nhật Bản ở Hà Nội năm 2025.",
      "en": "Volunteered at the Japanese Festival in Hanoi in 2025."
    },
    "role": {
      "vi": "Tình nguyện viên",
      "en": "Volunteer"
    },
    "fields": {
      "vi": [],
      "en": []
    },
    "result": {
      "vi": "Tham gia hoạt động giao lưu văn hóa với vai trò tình nguyện viên.",
      "en": "Participated in a cultural exchange event as a volunteer."
    },
    "externalLinks": [],
    "coverImage": ""
  }
];

export const workEntries: WorkEntry[] = [
  ...projects.map((project): WorkEntry => ({ ...project,
    displayTitle: { vi: project.title, en: project.title },
    ...(project.slug === "ecome" ? { result: { vi: "Các chiến dịch thực địa tiếp cận khoảng 1.800 người. Chiến dịch tháng 6/2026 kết hợp truyền thông môi trường và phục vụ cộng đồng tại sáu trung tâm bảo trợ trẻ em, hỗ trợ các công trình nước sạch, cầu nông thôn, chiếu sáng, bếp ăn cộng đồng và sinh kế.", en: "Field campaigns reached approximately 1,800 people. The June 2026 campaign combined environmental communication and community service at six orphanages and child-care centers, supporting clean-water wells, rural bridges, lighting, community kitchens, and livelihoods." } } : {}),
    kind: project.slug === "dual-image-reversible-data-hiding" ? "research" : project.slug === "ecome" ? "community" : "technology",
  })), ...additions, ...activities, ...communityActivities,
];
export const featuredWork = ["safestride", "dual-image-reversible-data-hiding", "ecome"].map(slug => workEntries.find(entry => entry.slug === slug)!);
