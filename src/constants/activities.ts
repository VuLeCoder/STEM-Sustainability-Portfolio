import type { Localized } from "./common";
import { homeAcademicAwards } from "./home";

export type GalleryItem = {
  title: Localized<string>;
  description: Localized<string>;
  image: string;
  imageAlt: Localized<string>;
  relatedWork?: string;
};

export type ActivityImage = {
  src: string;
  alt: Localized<string>;
  caption: Localized<string>;
  kind: "photo" | "certificate";
};

export type ActivityItem = GalleryItem & {
  imageCaption: Localized<string>;
  additionalImages?: ActivityImage[];
};

export const activityGallery: ActivityItem[] = [
  {
    title: { vi: "ECOMe", en: "ECOMe" },
    description: { vi: "Sáng lập và điều phối sáng kiến giáo dục môi trường, nước sạch và hoạt động cộng đồng.", en: "Founded and coordinated an initiative focused on environmental education, clean water, and community work." },
    image: "/images/work/ecome/community-certificate.jpg",
    imageAlt: { vi: "Chứng nhận đóng góp cho hoạt động cộng đồng ECOMe", en: "Certificate recognizing ECOMe community contributions" },
    imageCaption: { vi: "Ghi nhận đóng góp · 2026", en: "Contribution recognition · 2026" },
    relatedWork: "ecome",
  },
  {
    title: { vi: "Robotics Summer Camp 2026", en: "Robotics Summer Camp 2026" },
    description: { vi: "Thành viên nhóm Kỹ thuật Cơ khí, hỗ trợ hoạt động giáo dục robotics thực hành tại American Center, Hà Nội.", en: "Mechanical Engineering Team Member, supporting hands-on robotics education at the American Center in Hanoi." },
    image: "/images/community/education/robotics-summer-camp-certificate-2026.jpg",
    imageAlt: { vi: "Chứng nhận Robotics Summer Camp 2026", en: "Robotics Summer Camp 2026 certificate" },
    imageCaption: { vi: "Chứng nhận · 2026", en: "Certificate · 2026" },
  },
  {
    title: { vi: "Open Data Exploration 2026 Summer Camp", en: "Open Data Exploration 2026 Summer Camp" },
    description: { vi: "Thành viên nhóm tổ chức, phụ trách truyền thông & thiết kế và đào tạo & nghiên cứu dữ liệu tại American Center, Hà Nội.", en: "Organizing Team Member, serving in Communication & Design and Training & Data Research at the American Center in Hanoi." },
    image: "/images/community/education/open-data-exploration-certificate.jpg",
    imageAlt: { vi: "Chứng nhận Open Data Exploration", en: "Open Data Exploration certificate" },
    imageCaption: { vi: "Chứng nhận tham gia", en: "Participation certificate" },
  },
  {
    title: { vi: "ECOMeSort · AI for Good Vietnam 2026", en: "ECOMeSort · AI for Good Vietnam 2026" },
    description: { vi: "Tham gia chương trình giáo dục và cuộc thi AI for Good Vietnam 2026 cùng dự án ECOMeSort.", en: "Joined the AI for Good Vietnam 2026 education program and competition with ECOMeSort." },
    image: "/images/work/ecomesort/recognition.png",
    imageAlt: { vi: "Giấy chứng nhận tham gia AI for Good Vietnam 2026 của ECOMeSort", en: "ECOMeSort AI for Good Vietnam 2026 participation certificate" },
    imageCaption: { vi: "Chứng nhận tham gia · 2026", en: "Participation certificate · 2026" },
    relatedWork: "ecomesort",
  },
  {
    title: { vi: "NASA Space Apps Challenge 2025", en: "NASA Space Apps Challenge 2025" },
    description: { vi: "Cùng nhóm Bluemarble phát triển BloomWatch trong khuôn khổ NASA Space Apps Challenge 2025.", en: "Developed BloomWatch with team Bluemarble during the 2025 NASA Space Apps Challenge." },
    image: "/images/work/bloomwatch/galactic-problem-solver.png",
    imageAlt: { vi: "Chứng nhận Galactic Problem Solver tại NASA Space Apps 2025", en: "Galactic Problem Solver certificate at NASA Space Apps 2025" },
    imageCaption: { vi: "Chứng nhận tham gia · 2025", en: "Participation certificate · 2025" },
    relatedWork: "bloomwatch",
  },
  {
    title: { vi: "VEX V5 · New Year's Mayhem 2026", en: "VEX V5 · New Year's Mayhem 2026" },
    description: { vi: "Tham gia sự kiện VEX V5 New Year's Mayhem tại TP. Hồ Chí Minh.", en: "Participated in the VEX V5 New Year's Mayhem event in Ho Chi Minh City." },
    image: "/images/work/vex/vex-new-years-mayhem-participation-2026.png",
    imageAlt: { vi: "Chứng nhận tham gia VEX V5 New Year's Mayhem 2026 của Nguyễn Cao Xuân Phúc", en: "Nguyen Cao Xuan Phuc's VEX V5 New Year's Mayhem 2026 participation certificate" },
    imageCaption: { vi: "Chứng nhận tham gia · 2026", en: "Participation certificate · 2026" },
    relatedWork: "vex-v5-robotics",
  },
  {
    title: { vi: "Tập huấn Generative AI", en: "Generative AI training" },
    description: { vi: "Đồng tổ chức buổi tập huấn AI tạo sinh cho cán bộ Đoàn–Hội tháng 3/2026.", en: "Co-organized generative AI training for student-union officers in March 2026." },
    image: "/images/community/education/genai-training-volunteer-2026.jpg",
    imageAlt: { vi: "Ghi nhận hoạt động tập huấn Generative AI", en: "Generative AI training recognition" },
    imageCaption: { vi: "Ghi nhận hoạt động · 2026", en: "Activity recognition · 2026" },
  },
  {
    title: { vi: "Hành trình kết nối sắc màu trí tuệ", en: "Journey of Connecting Colors of Wisdom" },
    description: { vi: "Tham gia trao quà tại các trung tâm bảo trợ năm 2025 và tổ chức hoạt động tình nguyện năm 2026.", en: "Helped deliver gifts at social care centres in 2025 and organize volunteer work in 2026." },
    image: "/images/community/recognition/colors-of-wisdom-participation-2025.jpg",
    imageAlt: { vi: "Chứng nhận tham gia Hành trình kết nối sắc màu trí tuệ năm 2025", en: "Colors of Wisdom participation certificate, 2025" },
    imageCaption: { vi: "Chứng nhận tham gia · 2025", en: "Participation certificate · 2025" },
    additionalImages: [{
      src: "/images/community/recognition/colors-of-wisdom-volunteer.jpg",
      alt: { vi: "Chứng nhận tổ chức tình nguyện Hành trình kết nối sắc màu trí tuệ năm 2026", en: "Colors of Wisdom volunteer organizing certificate, 2026" },
      caption: { vi: "Chứng nhận tổ chức · 2026", en: "Organizing certificate · 2026" },
      kind: "certificate",
    }],
  },
  {
    title: { vi: "CNH Basketball Club · 2024–2026", en: "CNH Basketball Club · 2024–2026" },
    description: { vi: "Tham gia ban truyền thông của CNH Basketball Club trong hai mùa 2024–2025 và 2025–2026.", en: "Served on the CNH Basketball Club media team during the 2024–2025 and 2025–2026 seasons." },
    image: "/images/community/cnh-basketball/partners-2024-2025.jpg",
    imageAlt: { vi: "Chứng nhận thành viên ban truyền thông CNH Basketball Club mùa 2024–2025", en: "CNH Basketball Club media team certificate, 2024–2025" },
    imageCaption: { vi: "Chứng nhận · 2024–2025", en: "Certificate · 2024–2025" },
    additionalImages: [{
      src: "/images/community/cnh-basketball/partners-2025-2026.jpg",
      alt: { vi: "Chứng nhận thành viên ban truyền thông CNH Basketball Club mùa 2025–2026", en: "CNH Basketball Club media team certificate, 2025–2026" },
      caption: { vi: "Chứng nhận · 2025–2026", en: "Certificate · 2025–2026" },
      kind: "certificate",
    }],
  },
];

export type AwardItem = GalleryItem & {
  category: "project" | "academic" | "community" | "recognition";
  year: number;
  scope: Localized<string>;
  featuredOrder?: number;
  additionalImages?: ActivityImage[];
};

export const awardGallery: AwardItem[] = [
  {
    category: "project", year: 2026, featuredOrder: 1,
    scope: { vi: "Quốc tế · WICO, Seoul", en: "International · WICO, Seoul" },
    title: { vi: "SafeStride · Giải Vàng WICO 2026", en: "SafeStride · WICO 2026 Gold Award" },
    description: { vi: "Minh chứng giải thưởng của dự án SafeStride tại WICO 2026.", en: "Award evidence for the SafeStride project at WICO 2026." },
    image: "/images/work/safestride/wico-gold-award.jpeg",
    imageAlt: { vi: "Minh chứng Giải Vàng WICO 2026 của SafeStride", en: "SafeStride WICO 2026 Gold Award evidence" },
    relatedWork: "safestride",
  },
  {
    category: "project", year: 2025, featuredOrder: 2,
    scope: { vi: "NASA Space Apps · Ninh Bình", en: "NASA Space Apps · Ninh Binh" },
    title: { vi: "BloomWatch · Giải Nhất", en: "BloomWatch · First Prize" },
    description: { vi: "Chứng nhận Giải Nhất của nhóm Bluemarble tại NASA Space Apps Ninh Bình 2025.", en: "First Prize certificate for team Bluemarble at NASA Space Apps Ninh Binh 2025." },
    image: "/images/work/bloomwatch/bluemarble-first-prize-certificate.png",
    imageAlt: { vi: "Giấy chứng nhận Giải Nhất của nhóm Bluemarble tại NASA Space Apps Ninh Bình 2025", en: "Team Bluemarble's First Prize certificate at NASA Space Apps Ninh Binh 2025" },
    additionalImages: [{
      src: "/images/work/bloomwatch/bluemarble-first-prize-ceremony.jpeg",
      alt: { vi: "Nhóm Bluemarble nhận Giải Nhất tại NASA Space Apps Ninh Bình 2025", en: "Team Bluemarble receiving First Prize at NASA Space Apps Ninh Binh 2025" },
      caption: { vi: "Trao Giải Nhất · 2025", en: "First Prize ceremony · 2025" },
      kind: "photo",
    }],
    relatedWork: "bloomwatch",
  },
  {
    category: "project", year: 2026, featuredOrder: 3,
    scope: { vi: "Cuộc thi · Đại học Giao thông Vận tải", en: "Competition · University of Transport and Communications" },
    title: { vi: "ECOMeSort · Giải Ba", en: "ECOMeSort · Third Prize" },
    description: { vi: "Giải Ba cuộc thi ý tưởng bảo vệ môi trường trong lĩnh vực giao thông vận tải năm 2026.", en: "Third Prize in the 2026 Environmental Protection Ideas in the Transport Sector competition." },
    image: "/images/work/ecomesort/certificates.png",
    imageAlt: { vi: "Giấy chứng nhận Giải Ba của ECOMeSort", en: "ECOMeSort Third Prize certificate" },
    relatedWork: "ecomesort",
  },
  {
    category: "project", year: 2026,
    scope: { vi: "Giải Vô địch Quốc gia VEX V5 Robotics", en: "Vietnam VEX V5 Robotics National Championship" },
    title: { vi: "VEX V5 Robotics · Build Award", en: "VEX V5 Robotics · Build Award" },
    description: { vi: "Chứng nhận Build Award của Nguyễn Cao Xuân Phúc cùng đội NGS Hogrider tại vòng chung kết quốc gia năm 2026.", en: "Build Award certificate for Nguyen Cao Xuan Phuc and team NGS Hogrider at the 2026 national finals." },
    image: "/images/work/vex/vex-build-award-certificate-2026.png",
    imageAlt: { vi: "Chứng nhận Build Award tại Giải Vô địch Quốc gia VEX V5 Robotics 2026", en: "Build Award certificate at the Vietnam VEX V5 Robotics National Championship 2026" },
    relatedWork: "vex-v5-robotics",
  },
  {
    category: "project", year: 2026,
    scope: { vi: "VEX V5 Push Back · vòng loại miền Nam", en: "VEX V5 Push Back · Southern qualifier" },
    title: { vi: "VEX V5 Robotics · Innovate Award", en: "VEX V5 Robotics · Innovate Award" },
    description: { vi: "Hình ảnh cúp Innovate Award tại giải VEX V5 Push Back mùa 2025–2026.", en: "Innovate Award trophy from the 2025–2026 VEX V5 Push Back competition." },
    image: "/images/work/vex/vex-push-back-innovate-award-trophy.jpeg",
    imageAlt: { vi: "Cúp Innovate Award tại vòng loại miền Nam VEX V5 Push Back", en: "Innovate Award trophy at the VEX V5 Push Back Southern qualifier" },
    relatedWork: "vex-v5-robotics",
  },
  {
    category: "recognition", year: 2025,
    scope: { vi: "NASA Space Apps · Ninh Bình", en: "NASA Space Apps · Ninh Binh" },
    title: { vi: "BloomWatch · Global Nominee", en: "BloomWatch · Global Nominee" },
    description: { vi: "Bảng ghi nhận nhóm Bluemarble được đề cử toàn cầu tại NASA Space Apps Challenge Ninh Bình 2025.", en: "Recognition of team Bluemarble's Global Nominee status at NASA Space Apps Challenge Ninh Binh 2025." },
    image: "/images/work/bloomwatch/bluemarble-global-nominee-recognition.jpeg",
    imageAlt: { vi: "Bảng ghi nhận nhóm Bluemarble được đề cử toàn cầu tại NASA Space Apps Ninh Bình 2025", en: "Plaque recognizing team Bluemarble as a Global Nominee at NASA Space Apps Ninh Binh 2025" },
    relatedWork: "bloomwatch",
  },
  {
    category: "recognition", year: 2026,
    scope: { vi: "Viện Công nghệ Thông tin · VAST", en: "Institute of Information Technology · VAST" },
    title: { vi: "Xác nhận thực tập tại VAST", en: "VAST internship confirmation" },
    description: { vi: "Giấy xác nhận kỳ thực tập từ tháng 3 đến tháng 9/2026 tại Viện Công nghệ Thông tin, VAST.", en: "Confirmation of the March–September 2026 internship at the Institute of Information Technology, VAST." },
    image: "/images/work/vast/vast-iit-internship-confirmation-2026.png",
    imageAlt: { vi: "Giấy xác nhận thực tập tại Viện Công nghệ Thông tin, VAST năm 2026", en: "2026 internship confirmation from the Institute of Information Technology, VAST" },
    relatedWork: "vast-internship",
  },
  ...homeAcademicAwards.map((award) => ({
    category: "academic" as const,
    year: 2022,
    scope: award.description,
    title: award.title,
    description: award.description,
    image: `/images/academic/${award.id}.webp`,
    imageAlt: { vi: `Chứng nhận ${award.title.vi}`, en: `${award.title.en} certificate` },
  })),
  {
    category: "community", year: 2026,
    scope: { vi: "Đoàn trường Đại học Giao thông Vận tải", en: "University of Transport and Communications Youth Union" },
    title: { vi: "Tình nguyện vì cộng đồng · 2026", en: "Community volunteering · 2026" },
    description: { vi: "Giấy khen hoạt động tình nguyện từ Đoàn trường Đại học Giao thông Vận tải.", en: "Volunteer recognition from the University of Transport and Communications Youth Union." },
    image: "/images/community/recognition/community-volunteer-merit-2026.jpg",
    imageAlt: { vi: "Giấy khen hoạt động tình nguyện vì cộng đồng năm 2026", en: "Community volunteer certificate of merit, 2026" },
  },
];
