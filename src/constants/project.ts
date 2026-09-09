/** Dữ liệu dự án, ảnh bìa, liên kết và nhãn hiển thị VI/EN. */
import type { Localized } from "./common";

export type ProjectExternalLink={
  label: Localized<string>;
  href: string;
};

export type ProjectDetails=Partial<
  Record<
    |"objective"
    |"solution"
    |"process"
    |"evidence"
    |"lessons"
    |"futureWork",
    Localized<string>
  >
>;

export type Project={
  slug: string;
  featured: boolean;
  title: string;
  year?: string;
  category: Localized<string>;
  summary: Localized<string>;
  problem?: Localized<string>;
  role: Localized<string>;
  fields: Localized<readonly string[]>;
  result: Localized<string>;
  achievementShort?: Localized<string>;
  externalLinks: readonly ProjectExternalLink[];
  coverImage: string;
  details?: ProjectDetails;
};

export const projects=[
  {
    slug: "safestride",
    featured: false,
    title: "SafeStride",
    year: "2026",
    category: {
      vi: "Công nghệ hỗ trợ & AI",
      en: "Assistive technology & AI",
    },
    summary: {
      vi: "Khái niệm ứng dụng điện thoại hỗ trợ người khiếm thị nhận biết không gian với độ chính xác cao và nhận cảnh báo ưu tiên.",
      en: "A smartphone concept that helps blind users improve spatial awareness and receive priority alerts with high precision.",
    },
    problem: {
      vi: "Người khiếm thị cần nhận biết chướng ngại và các tình huống ưu tiên xung quanh một cách kịp thời khi di chuyển.",
      en: "Blind users need timely awareness of nearby obstacles and priority situations while navigating.",
    },
    role: {
      vi: "Thành viên phát triển dự án",
      en: "Project development team member",
    },
    fields: {
      vi: [
        "Công nghệ hỗ trợ",
        "Nhận biết không gian",
        "Thiết kế lấy con người làm trung tâm",
      ],
      en: [
        "Assistive technology",
        "Spatial awareness",
        "Human-centered design",
      ],
    },
    result: {
      vi: "Giải Vàng tại World Invention Creativity Olympic (WICO) 2026 ở Seoul, Hàn Quốc.",
      en: "Gold Award at the 2026 World Invention Creativity Olympic (WICO) in Seoul, Korea.",
    },
    achievementShort: {
      vi: "WICO 2026 · Giải Vàng",
      en: "WICO 2026 · Gold Award",
    },
    externalLinks: [],
    coverImage: "/images/placeholders/safestride-cover.svg",
  },
  {
    slug: "ecome",
    featured: true,
    title: "ECOMe",
    category: { vi: "Môi trường & cộng đồng",en: "Environment & community" },
    summary: {
      vi: "Sáng kiến do học sinh dẫn dắt về giáo dục môi trường và hành động cộng đồng.",
      en: "A student-led initiative for environmental education and community action.",
    },
    role: {
      vi: "Nhà sáng lập & Trưởng dự án",
      en: "Founder & Project Chair",
    },
    fields: {
      vi: ["Giáo dục môi trường","Hành động cộng đồng","Quản lý dự án"],
      en: [
        "Environmental education",
        "Community action",
        "Project management",
      ],
    },
    result: {
      vi: "CV ghi nhận các chiến dịch nâng cao nhận thức đã tiếp cận khoảng 1.800 người.",
      en: "The CV records awareness campaigns that reached approximately 1,800 people.",
    },
    achievementShort: {
      vi: "Khoảng 1.800 người được tiếp cận",
      en: "Approximately 1,800 people reached",
    },
    externalLinks: [
      {
        label: { vi: "Bài viết dự án",en: "Project post" },
        href: "https://www.facebook.com/61582875703926/posts/122134261443095856/",
      },
    ],
    coverImage: "/images/placeholders/ecome-cover.svg",
  },
  {
    slug: "ecomesort",
    featured: false,
    title: "ECOMeSort",
    year: "2026",
    category: { vi: "AI & môi trường",en: "AI & environment" },
    summary: {
      vi: "Ứng dụng di động tích hợp AI, hướng dẫn phân loại rác và kết nối người dùng trong hệ sinh thái tái chế.",
      en: "An AI-enabled mobile application that guides waste sorting and connects users within the recycling ecosystem.",
    },
    problem: {
      vi: "Việc phân loại rác và tham gia hệ sinh thái tái chế còn khó tiếp cận trong đời sống hằng ngày.",
      en: "Waste sorting and participation in the recycling ecosystem remain difficult to access in everyday life.",
    },
    role: { vi: "Thành viên Team ECOMeSort",en: "Team ECOMeSort member" },
    fields: {
      vi: ["AI ứng dụng","Phân loại rác","Cộng đồng xanh"],
      en: ["Applied AI","Waste sorting","Green community"],
    },
    result: {
      vi: "Giải Ba cuộc thi Ý tưởng bảo vệ môi trường trong ngành Giao thông vận tải năm 2026; tham gia AI for Good Vietnam 2026.",
      en: "Third Prize in the 2026 Environmental Protection Ideas in the Transport Sector Competition; participant in AI for Good Vietnam 2026.",
    },
    achievementShort: {
      vi: "Giải Ba · 2026",
      en: "Third Prize · 2026",
    },
    externalLinks: [],
    coverImage: "/images/placeholders/ecomesort-cover.svg",
  },
  {
    slug: "bloomwatch",
    featured: true,
    title: "BloomWatch",
    year: "2025",
    category: {
      vi: "Dữ liệu Trái Đất & giáo dục",
      en: "Earth data & education",
    },
    summary: {
      vi: "Nền tảng học tập biến dữ liệu vệ tinh NASA về hiện tượng ra hoa toàn cầu thành trải nghiệm đa phương tiện dễ tiếp cận.",
      en: "An educational platform that turns NASA satellite data on global flowering phenomena into an accessible multimedia experience.",
    },
    role: { vi: "Thành viên nhóm",en: "Team member" },
    fields: {
      vi: [
        "Quan sát Trái Đất",
        "Kể chuyện bằng dữ liệu",
        "Phát triển sản phẩm",
      ],
      en: ["Earth observation","Data storytelling","Product development"],
    },
    result: {
      vi: "Giải Nhất, Arts & Technology Award và Global Nominee tại NASA International Space Apps Challenge 2025.",
      en: "First Prize, Arts & Technology Award, and Global Nominee at the 2025 NASA International Space Apps Challenge.",
    },
    achievementShort: {
      vi: "NASA Space Apps 2025 · Global Nominee",
      en: "NASA Space Apps 2025 · Global Nominee",
    },
    externalLinks: [],
    coverImage: "/images/placeholders/bloomwatch-cover.svg",
  },
  {
    slug: "dual-image-reversible-data-hiding",
    featured: false,
    title: "Dual-image Reversible Data Hiding",
    year: "2025",
    category: {
      vi: "Nghiên cứu bảo mật nội dung số",
      en: "Digital-content security research",
    },
    summary: {
      vi: "Nghiên cứu phương pháp giấu tin thuận nghịch hai ảnh cải tiến nhằm tăng dung lượng nhúng cho xác thực nội dung số.",
      en: "Research on an improved dual-image reversible data-hiding method designed to increase embedding capacity for digital-content authentication.",
    },
    problem: {
      vi: "Xác thực nội dung số cần cân bằng khả năng nhúng dữ liệu với việc khôi phục chính xác ảnh gốc.",
      en: "Digital-content authentication must balance data embedding capacity with exact recovery of the original images.",
    },
    role: {
      vi: "Đồng tác giả & người trình bày",
      en: "Student co-author & presenter",
    },
    fields: {
      vi: ["Giấu tin thuận nghịch","Xác thực số","Viết khoa học"],
      en: [
        "Reversible data hiding",
        "Digital authentication",
        "Scientific writing",
      ],
    },
    result: {
      vi: "Bài báo được đồng tác giả và trình bày tại VNICT 2025 — Hội nghị Quốc gia lần thứ 28 về các vấn đề chọn lọc của Công nghệ thông tin và Truyền thông.",
      en: "Co-authored and presented at VNICT 2025, the 28th National Conference on Selected Issues in Information and Communication Technology.",
    },
    achievementShort: {
      vi: "VNICT 2025 · Đồng tác giả & trình bày",
      en: "VNICT 2025 · Co-author & presenter",
    },
    externalLinks: [],
    coverImage: "/images/placeholders/data-hiding-cover.svg",
  },
] satisfies readonly Project[];

export const projectHome={
  primaryCta: {
    vi: "Khám phá các dự án",
    en: "Explore projects",
  },
  allProjectsCta: { vi: "Xem tất cả dự án",en: "View all projects" },
  otherProjectsLabel: { vi: "Dự án khác",en: "Other projects" },
  evidence: {
    eyebrow: { vi: "Tác động & bằng chứng",en: "Impact & evidence" },
    title: {
      vi: "Những dấu mốc được ghi nhận.",
      en: "Milestones on record.",
    },
    items: [
      { value: "≈1,800",projectSlug: "ecome" },
      { value: "2025",projectSlug: "bloomwatch" },
    ],
  },
  featuredProjects: {
    openProject: { vi: "Mở dự án",en: "Open project" },
    pendingLink: { vi: "Chưa cập nhật liên kết",en: "Link coming soon" },
    imagePlaceholder: { vi: "[Ảnh dự án — sẽ cập nhật]",en: "[Project image — coming soon]" },
    preview: { vi: "Xem trước",en: "Preview" },
    eyebrow: { vi: "Dự án nổi bật",en: "Selected projects" },
    title: {
      vi: "Công nghệ cần bắt đầu từ một vấn đề thật.",
      en: "Technology should begin with a real problem.",
    },
    description: {
      vi: "Từ công nghệ hỗ trợ đến môi trường, giáo dục và bảo mật số — những dự án tôi tham gia để đưa kiến thức đến gần hơn với đời sống.",
      en: "From assistive technology to the environment, education and digital security — projects I have worked on to bring knowledge closer to everyday life.",
    },
  }
} as const;

export const projectsPageContent={
  showMore: { vi: "Xem thêm",en: "Show more" },
  showLess: { vi: "Ẩn bớt",en: "Show less" },
  eyebrow: { vi: "Dự án",en: "Projects" },
  title: {
    vi: "Từ vấn đề thực tế đến giải pháp có trách nhiệm.",
    en: "From real-world problems to responsible solutions.",
  },
  description: {
    vi: "Mỗi dự án là một hành trình quan sát, thử nghiệm, hợp tác và rút ra bài học.",
    en: "Each project is a journey of observation, experimentation, collaboration, and learning.",
  },
  featuredLabel: { vi: "Dự án nổi bật",en: "Featured projects" },
  featuredTitle: {
    vi: "Những dự án tiêu biểu, được kể từ vấn đề đến tác động.",
    en: "Selected work, told from the problem through its impact.",
  },
  otherProjectsLabel: { vi: "Dự án khác",en: "Other projects" },
  allProjectsLabel: { vi: "Tất cả dự án",en: "All projects" },
  allProjectsTitle: {
    vi: "Khám phá toàn bộ hồ sơ dự án.",
    en: "Explore the complete project archive.",
  },
  viewAllLabel: { vi: "Xem danh mục dự án",en: "View project archive" },
  viewProject: { vi: "Xem dự án",en: "View project" },
  indexLabel: { vi: "Hồ sơ dự án",en: "Project dossier" },
  roleLabel: { vi: "Vai trò",en: "Role" },
  fieldsLabel: { vi: "Lĩnh vực",en: "Fields" },
  resultLabel: { vi: "Kết quả & tác động",en: "Result & impact" },
  externalLinkLabel: { vi: "Mở nguồn ngoài",en: "Open external source" },
  sections: {
    problem: { vi: "Vấn đề",en: "Problem" },
    idea: { vi: "Ý tưởng",en: "Idea" },
    process: { vi: "Quy trình",en: "Process" },
    result: { vi: "Kết quả",en: "Result" },
    lessons: { vi: "Bài học",en: "Lessons" },
  },
} as const;

export const projectDetailContent={
  backToProjects: { vi: "Tất cả dự án",en: "All projects" },
  projectLabel: { vi: "Dự án",en: "Project" },
  roleLabel: { vi: "Vai trò",en: "Role" },
  yearLabel: { vi: "Năm",en: "Year" },
  fieldsLabel: { vi: "Lĩnh vực",en: "Fields" },
  problemLabel: { vi: "Vấn đề",en: "The problem" },
  objectiveLabel: { vi: "Mục tiêu",en: "Objective" },
  solutionLabel: { vi: "Giải pháp",en: "Solution" },
  processLabel: { vi: "Quy trình",en: "Process" },
  evidenceLabel: { vi: "Nghiên cứu & bằng chứng",en: "Research & evidence" },
  resultLabel: { vi: "Kết quả & tác động",en: "Result & impact" },
  lessonsLabel: { vi: "Bài học",en: "Reflection" },
  futureWorkLabel: { vi: "Hướng phát triển",en: "Future work" },
  externalLinksLabel: { vi: "Liên kết dự án",en: "Project links" },
  projectNavigationLabel: { vi: "Điều hướng dự án",en: "Project navigation" },
  previousProjectLabel: { vi: "Dự án trước",en: "Previous project" },
  nextProjectLabel: { vi: "Dự án tiếp theo",en: "Next project" },
} as const;
