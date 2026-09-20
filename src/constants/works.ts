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
      "vi": "Giải pháp hỗ trợ trên smartphone giúp người khiếm thị nhận biết vật cản và nhận cảnh báo an toàn ưu tiên. Hệ thống tập trung vào xử lý cảm biến, lập bản đồ không gian và quản lý điện năng để phản hồi nhanh, ổn định trên điện thoại thông thường.",
      "en": "A smartphone-based assistive system that helps blind users detect obstacles and receive priority safety alerts. It combines efficient sensor processing, spatial mapping, and power management for fast, reliable use on an ordinary phone."
    },
    "role": {
      "vi": "Xử lý dữ liệu cảm biến & tối ưu điện năng",
      "en": "Sensor-data processing & power optimization"
    },
    "result": {
      "vi": "Giải Vàng WICO 2026 · Seoul, Hàn Quốc",
      "en": "WICO 2026 Gold Award · Seoul, Korea"
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
      "vi": "Nền tảng học tập tương tác biến dữ liệu quan sát Trái Đất của NASA về hiện tượng ra hoa toàn cầu thành trải nghiệm đa phương tiện. Sản phẩm kết hợp khám phá dữ liệu trực quan với nhân vật kể chuyện tạo bởi AI và được hoàn thành trong 48 giờ.",
      "en": "An interactive learning platform that turns NASA Earth-observation data on global flowering into a multimedia experience. Built in 48 hours, it combines visual data exploration with AI-generated character storytelling."
    },
    "role": {
      "vi": "Trực quan hóa dữ liệu & xây dựng mạch kể chuyện",
      "en": "Data visualization & narrative design"
    },
    "result": {
      "vi": "Giải Nhất · Arts & Technology Award · Global Nominee, NASA Space Apps 2025",
      "en": "First Prize · Arts & Technology Award · Global Nominee, NASA Space Apps 2025"
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
      "vi": "Sáng kiến do học sinh dẫn dắt, kết hợp giáo dục môi trường với hoạt động thực địa như giếng nước sạch, cầu nông thôn, đèn đường, bếp ăn cộng đồng và hỗ trợ sinh kế.",
      "en": "A student-led initiative combining environmental education with field projects such as clean-water wells, rural bridges, street lighting, community kitchens, and livelihood support."
    },
    "role": {
      "vi": "Nhà sáng lập & Trưởng dự án",
      "en": "Founder & Project Chair"
    },
    "result": {
      "vi": "≈1.800 người tiếp cận · 6 cơ sở trẻ em được hỗ trợ · ≈115 triệu VNĐ viện trợ · 225 hộ được cứu trợ",
      "en": "≈1,800 people reached · 6 childcare centers supported · ≈VND 115M in aid · 225 households received relief"
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
      "vi": "Ứng dụng di động dùng AI để nhận diện loại rác, hướng dẫn phân loại đúng và kết nối người dùng với mạng lưới tái chế địa phương; các tính năng cộng đồng xanh hỗ trợ hình thành thói quen bền vững.",
      "en": "An AI-enabled mobile app that identifies waste, guides correct sorting, and connects users with local recycling networks, supported by green-community features that encourage sustainable habits."
    },
    "role": {
      "vi": "Thiết kế quy trình nhận diện & tính năng cộng đồng",
      "en": "Recognition workflow & community-feature design"
    },
    "result": {
      "vi": "Giải Ba cuộc thi Ý tưởng BVMT ngành GTVT 2026 · AI for Good Vietnam 2026",
      "en": "Third Prize, 2026 Transport Environmental Ideas Competition · AI for Good Vietnam 2026"
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
      "vi": "Cùng đội NGS Hogrider chế tạo robot thi đấu, cân bằng độ bền kết cấu, hệ thống dây gọn và khả năng vận hành ổn định trong điều kiện thi đấu cường độ cao.",
      "en": "Built a competition robot with NGS Hogrider, balancing structural durability, clean wiring, and dependable operation under demanding match conditions."
    },
    "role": {
      "vi": "Thi công cơ khí, phân phối nguồn & đi dây hệ thống",
      "en": "Mechanical construction, power distribution & system wiring"
    },
    "result": {
      "vi": "Build Award · Giải Vô địch Quốc gia VEX V5 Robotics 2026",
      "en": "Build Award · Vietnam VEX V5 Robotics National Championship 2026"
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
      "vi": "Bài báo đề xuất phương pháp giấu tin thuận nghịch trên ảnh kép cải tiến, tăng dung lượng nhúng phục vụ xác thực nội dung số trong khi vẫn bảo đảm khôi phục hoàn hảo ảnh gốc.",
      "en": "The paper proposes an improved dual-image reversible data-hiding method that increases embedding capacity for digital-content authentication while preserving perfect recovery of the original image."
    },
    "role": {
      "vi": "Đồng tác giả · đánh giá thực nghiệm, phân tích dữ liệu & trình bày",
      "en": "Co-author · experimental evaluation, data analysis & presentation"
    },
    "result": {
      "vi": "Công bố & trình bày tại VNICT 2025 · Hội nghị Quốc gia lần thứ 28 về CNTT-TT",
      "en": "Published & presented at VNICT 2025 · 28th National Conference on Selected ICT Problems"
    },
    "featuredOrder": 2,
    "image": {
      "src": "/images/journey/VNICT/1.jpeg",
      "alt": {
        "vi": "Hoạt động trình bày nghiên cứu tại VNICT 2025",
        "en": "Research presentation at VNICT 2025"
      }
    },
    "href": "mailto:nguyencxphuc@gmail.com?subject=VNICT%202025%20paper%20request",
    "cta": {
      "vi": "Yêu cầu bài báo & slide",
      "en": "Request the paper & slides"
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
      "vi": "Bài báo đề xuất khung tích hợp UAV và trạm điều khiển mặt đất dùng AI để nâng cao nhận thức tình huống và hỗ trợ tìm kiếm cứu nạn, hướng tới triển khai UTM trong không phận tầm thấp.",
      "en": "The paper proposes an AI-integrated UAV and ground-control-station framework for situational awareness and search-and-rescue, toward UTM deployment in low-altitude airspace."
    },
    "role": {
      "vi": "Đồng tác giả · tham gia thực nghiệm & trình bày",
      "en": "Co-author · experiments & presentation"
    },
    "result": {
      "vi": "Trình bày tại Hội thảo Quốc gia về Hành lang bay & Quản lý không gian tầm thấp · Hà Nội",
      "en": "Presented at the National Conference on Flight Corridors & Low-Altitude Airspace Management · Hanoi"
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
