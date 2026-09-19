import type { Localized } from "./common";

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

export const works: WorkItem[] = [
  {
    "slug": "safestride",
    "type": "project",
    "year": "2026",
    "title": {
      "vi": "SafeStride",
      "en": "SafeStride"
    },
    "description": {
      "vi": "Khái niệm ứng dụng điện thoại hỗ trợ người khiếm thị nhận biết không gian với độ chính xác cao và nhận cảnh báo ưu tiên.",
      "en": "A smartphone concept that helps blind users improve spatial awareness and receive priority alerts with high precision."
    },
    "role": {
      "vi": "Thành viên phát triển dự án",
      "en": "Project development team member"
    },
    "result": {
      "vi": "WICO 2026 · Giải Vàng",
      "en": "WICO 2026 · Gold Award"
    },
    "featuredOrder": 1,
    "image": {
      "src": "/images/journey/SafeStride/1.jpeg",
      "alt": {
        "vi": "Hình ảnh tham dự WICO 2026 của đội SafeStride",
        "en": "The SafeStride team at WICO 2026"
      }
    },
    "href": "https://www.youtube.com/watch?v=FgFzlal-ikg",
    "cta": {
      "vi": "Bài viết dự án",
      "en": "Project post"
    },
    "external": true
  },
  {
    "slug": "bloomwatch",
    "type": "project",
    "year": "2025",
    "title": {
      "vi": "BloomWatch",
      "en": "BloomWatch"
    },
    "description": {
      "vi": "Nền tảng học tập biến dữ liệu vệ tinh NASA về hiện tượng ra hoa toàn cầu thành trải nghiệm đa phương tiện dễ tiếp cận.",
      "en": "An educational platform that turns NASA satellite data on global flowering phenomena into an accessible multimedia experience."
    },
    "role": {
      "vi": "Thành viên nhóm",
      "en": "Team member"
    },
    "result": {
      "vi": "NASA Space Apps 2025 · Global Nominee",
      "en": "NASA Space Apps 2025 · Global Nominee"
    },
    "href": "mailto:nguyencxphuc@gmail.com?subject=Request%20information%3A%20BloomWatch",
    "cta": {
      "vi": "Yêu cầu thông tin",
      "en": "Request information"
    }
  },
  {
    "slug": "ecome",
    "type": "project",
    "year": "2025–2026",
    "title": {
      "vi": "ECOMe",
      "en": "ECOMe"
    },
    "description": {
      "vi": "Sáng kiến do học sinh dẫn dắt về giáo dục môi trường và hành động cộng đồng.",
      "en": "A student-led initiative for environmental education and community action."
    },
    "role": {
      "vi": "Nhà sáng lập & Trưởng dự án",
      "en": "Founder & Project Chair"
    },
    "result": {
      "vi": "Khoảng 1.800 người được tiếp cận",
      "en": "Approximately 1,800 people reached"
    },
    "featuredOrder": 3,
    "image": {
      "src": "/images/journey/ECOMe/1.jpg",
      "alt": {
        "vi": "Hoạt động cộng đồng trong chiến dịch ECOMe",
        "en": "Community activities during an ECOMe campaign"
      }
    },
    "href": "https://www.facebook.com/61582875703926/posts/122134261443095856/",
    "cta": {
      "vi": "Bài viết dự án",
      "en": "Project post"
    },
    "external": true
  },
  {
    "slug": "ecomesort",
    "type": "project",
    "year": "2026",
    "title": {
      "vi": "ECOMeSort",
      "en": "ECOMeSort"
    },
    "description": {
      "vi": "Ứng dụng di động tích hợp AI, hướng dẫn phân loại rác và kết nối người dùng trong hệ sinh thái tái chế.",
      "en": "An AI-enabled mobile application that guides waste sorting and connects users within the recycling ecosystem."
    },
    "role": {
      "vi": "Thành viên Team ECOMeSort",
      "en": "Team ECOMeSort member"
    },
    "result": {
      "vi": "Giải Ba · 2026",
      "en": "Third Prize · 2026"
    },
    "href": "mailto:nguyencxphuc@gmail.com?subject=Request%20information%3A%20ECOMeSort",
    "cta": {
      "vi": "Yêu cầu thông tin",
      "en": "Request information"
    }
  },
  {
    "slug": "vex-v5-robotics",
    "type": "project",
    "year": "2026",
    "title": {
      "vi": "VEX V5 Robotics",
      "en": "VEX V5 Robotics"
    },
    "description": {
      "vi": "Tham gia đội NGS Hogrider tại Giải vô địch Quốc gia VEX V5 Robotics 2026, với trọng tâm về xây dựng và độ tin cậy của robot.",
      "en": "Participated with NGS Hogrider at the 2026 National VEX V5 Robotics Championship, with a focus on robot construction and reliability."
    },
    "role": {
      "vi": "Thành viên đội NGS Hogrider",
      "en": "NGS Hogrider team member"
    },
    "result": {
      "vi": "VEX V5 2026 · Build Award",
      "en": "VEX V5 2026 · Build Award"
    },
    "href": "mailto:nguyencxphuc@gmail.com?subject=Request%20information%3A%20VEX%20V5%20Robotics",
    "cta": {
      "vi": "Yêu cầu thông tin",
      "en": "Request information"
    }
  },
  {
    "slug": "dual-image-reversible-data-hiding",
    "type": "research",
    "year": "2025",
    "title": {
      "vi": "Phương pháp giấu tin thuận nghịch trên ảnh kép cải tiến",
      "en": "An Improved Dual-Image Reversible Data Hiding Method"
    },
    "description": {
      "vi": "Nghiên cứu phương pháp giấu tin thuận nghịch hai ảnh cải tiến nhằm tăng dung lượng nhúng cho xác thực nội dung số.",
      "en": "Research on an improved dual-image reversible data-hiding method designed to increase embedding capacity for digital-content authentication."
    },
    "role": {
      "vi": "Đồng tác giả & người trình bày",
      "en": "Student co-author & presenter"
    },
    "result": {
      "vi": "VNICT 2025 · Hội nghị Quốc gia CNTT-TT",
      "en": "VNICT 2025 · National ICT Conference"
    },
    "featuredOrder": 2,
    "image": {
      "src": "/images/journey/VNICT/1.jpeg",
      "alt": {
        "vi": "Hoạt động trình bày nghiên cứu tại VNICT 2025",
        "en": "Research presentation at VNICT 2025"
      }
    },
    "href": "mailto:nguyencxphuc@gmail.com?subject=Request%20information%3A%20An%20Improved%20Dual-Image%20Reversible%20Data%20Hiding%20Method",
    "cta": {
      "vi": "Yêu cầu thông tin",
      "en": "Request information"
    }
  },
  {
    "slug": "uav-gcs-framework",
    "type": "research",
    "title": {
      "vi": "Khung UAV–Trạm điều khiển mặt đất tích hợp AI cho nhận thức tình huống và tìm kiếm cứu nạn",
      "en": "An AI-Integrated UAV–Ground Control Station Framework for Situational Awareness and Search-and-Rescue"
    },
    "description": {
      "vi": "Đề xuất khung tích hợp UAV và trạm điều khiển mặt đất nhằm nâng cao nhận thức tình huống và hỗ trợ tìm kiếm cứu nạn trong không phận tầm thấp.",
      "en": "An integrated UAV and ground-control-station framework for situational awareness and search-and-rescue in low-altitude airspace."
    },
    "role": {
      "vi": "Đồng tác giả & trình bày",
      "en": "Co-author & presenter"
    },
    "result": {
      "vi": "Hội thảo Quốc gia UTM · Hà Nội",
      "en": "UTM National Conference · Hanoi"
    },
    "href": "mailto:nguyencxphuc@gmail.com?subject=UTM%20paper%20request",
    "cta": {
      "vi": "Yêu cầu bài báo & slide",
      "en": "Request the paper & slides"
    }
  }
];

export const worksCopy = {
  title: { vi: "Dự án & Nghiên cứu", en: "Selected Work" },
  description: { vi: "Các dự án và nghiên cứu về công nghệ hỗ trợ, AI ứng dụng, phần cứng và phát triển bền vững.", en: "Projects and research across assistive technology, applied AI, hardware and sustainability." },
};
