/**
 * Nguồn nội dung duy nhất của website.
 * Thay text, link, ảnh hoặc file tại đây; không đưa nội dung có thể thay đổi vào UI.
 * Bản EN phải giữ nguyên ý nghĩa, dữ kiện và mức độ khẳng định của bản VI.
 */

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];

export type Localized<T> = Record<Locale, T>;

export const siteContent = {
  profile: {
    name: "Nguyen Cao Xuan Phuc",
    initials: "NCP",
    location: { vi: "Hà Nội, Việt Nam", en: "Hanoi, Vietnam" },
    positioning: {
      vi: "Tôi là học sinh nghiên cứu quan tâm đến công nghệ, đổi mới và tác động xã hội.",
      en: "I am a student researcher interested in technology, innovation, and social impact.",
    },
    introduction: {
      vi: "Tôi là học sinh chuyên Vật lý tại Trường THPT Chuyên Nguyễn Huệ, quan tâm đến nghiên cứu, đổi mới công nghệ và phát triển bền vững. Qua các dự án về AI, bảo vệ môi trường, công nghệ hỗ trợ và nghiên cứu số, tôi phát triển cách tiếp cận kết hợp tư duy khoa học, thiết kế lấy con người làm trung tâm và hành động cộng đồng. Tôi mong muốn dùng công nghệ cùng tinh thần trách nhiệm xã hội để tạo ra những giải pháp thiết thực cho cộng đồng và sự phát triển bền vững dài hạn.",
      en: "I am a Physics-specialized student at Nguyen Hue High School for the Gifted, with interests in research, technological innovation, and sustainable development. Through projects in AI, environmental protection, assistive technology, and digital research, I have developed an approach that combines scientific thinking, human-centered design, and community action. I hope to use technology and social responsibility to create practical solutions for communities and long-term sustainable development.",
    },
    portrait: "/images/placeholders/portrait.svg",
  },

  navigation: {
    home: { vi: "Trang chủ", en: "Home" },
    projects: { vi: "Dự án", en: "Projects" },
    activities: { vi: "Hoạt động", en: "Activities" },
  },

  ui: {
    menu: { vi: "Menu điều hướng", en: "Navigation menu" },
    openMenu: { vi: "Mở menu", en: "Open menu" },
    closeMenu: { vi: "Đóng menu", en: "Close menu" },
    switchToLight: {
      vi: "Chuyển sang giao diện sáng",
      en: "Switch to light theme",
    },
    switchToDark: {
      vi: "Chuyển sang giao diện tối",
      en: "Switch to dark theme",
    },
    lightTheme: { vi: "Sáng", en: "Light" },
    darkTheme: { vi: "Tối", en: "Dark" },
    portfolioLabel: { vi: "Hồ sơ học thuật", en: "Academic portfolio" },
    allRightsReserved: { vi: "Bản quyền thuộc về", en: "All rights reserved" },
  },

  contact: {
    // Thay toàn bộ placeholder bằng thông tin đã được duyệt trước khi công bố.
    email: "email@example.com",
    phone: "[Số điện thoại sẽ cập nhật]",
    location: { vi: "[Địa điểm sẽ cập nhật]", en: "[Location to be updated]" },
    cvFile: "/files/cv-placeholder.pdf",
    socialLinks: [
      { label: "GitHub", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },

  seo: {
    siteName: "Nguyen Cao Xuan Phuc",
    defaultTitle: {
      vi: "Nguyen Cao Xuan Phuc | STEM & Sustainability Portfolio",
      en: "Nguyen Cao Xuan Phuc | STEM & Sustainability Portfolio",
    },
    defaultDescription: {
      vi: "Portfolio học thuật về nghiên cứu, công nghệ và tác động xã hội.",
      en: "An academic portfolio on research, technology, and social impact.",
    },
  },

  home: {
    eyebrow: {
      vi: "STEM · Công nghệ · Phát triển bền vững",
      en: "STEM · Technology · Sustainability",
    },
    visualLabel: "STEM × Impact",
    projectRoleLabel: { vi: "Vai trò", en: "Role" },
    projectHighlightLabel: { vi: "Điểm nhấn", en: "Highlight" },
    primaryCta: {
      vi: "Khám phá các dự án",
      en: "Explore projects",
    },
    secondaryCta: {
      vi: "Cách Phúc tiếp cận vấn đề",
      en: "How Phuc approaches problems",
    },
    approach: {
      eyebrow: { vi: "Cách tiếp cận", en: "Approach" },
      title: {
        vi: "Đi từ câu hỏi khoa học đến giá trị cho cộng đồng.",
        en: "From scientific questions to value for communities.",
      },
      description: {
        vi: "Mỗi trải nghiệm là một bước để học cách quan sát kỹ hơn, thử nghiệm có trách nhiệm và cùng tạo ra giải pháp thiết thực.",
        en: "Each experience is a step toward observing more closely, experimenting responsibly, and building practical solutions together.",
      },
    },
    featuredProjects: {
      eyebrow: { vi: "Dự án nổi bật", en: "Selected projects" },
      title: {
        vi: "Công nghệ cần bắt đầu từ một vấn đề thật.",
        en: "Technology should begin with a real problem.",
      },
      description: {
        vi: "Hai dự án thể hiện các hướng Phúc đang theo đuổi: hành động môi trường tại cộng đồng và chuyển dữ liệu khoa học thành trải nghiệm học tập dễ tiếp cận.",
        en: "These projects reflect two directions Phuc is pursuing: environmental action in communities and turning scientific data into accessible learning experiences.",
      },
    },
    contactHero: {
      contactLabel: { vi: "Kết nối", en: "Connect" },
      profileLabel: { vi: "Hồ sơ STEM", en: "STEM profile" },
      emailLabel: { vi: "Email", en: "Email" },
      phoneLabel: { vi: "Điện thoại", en: "Phone" },
      locationLabel: { vi: "Địa điểm", en: "Location" },
      cvLabel: { vi: "Xem CV", en: "View CV" },
      storyCta: { vi: "Khám phá hành trình", en: "Explore my story" },
    },
    story: {
      eyebrow: { vi: "Hành trình", en: "My Story" },
      title: { vi: "Từ Vật lý đến những giải pháp có ý nghĩa.", en: "From Physics to purposeful solutions." },
      milestones: [
        { title: { vi: "Nền tảng Vật lý", en: "Physics foundation" }, description: { vi: "Tôi là học sinh chuyên Vật lý, nuôi dưỡng cách đặt câu hỏi, quan sát và kiểm chứng bằng tư duy khoa học.", en: "As a Physics-specialized student, I am developing a scientific way to question, observe, and test ideas." } },
        { title: { vi: "Nghiên cứu", en: "Research" }, description: { vi: "Tôi tìm hiểu các vấn đề thực tế qua nghiên cứu, dữ liệu và trải nghiệm cộng đồng.", en: "I investigate real-world problems through research, data, and community experience." } },
        { title: { vi: "Đổi mới công nghệ", en: "Technology innovation" }, description: { vi: "Tôi kết hợp công nghệ, tư duy khoa học và thiết kế lấy con người làm trung tâm.", en: "I combine technology, scientific thinking, and human-centered design." } },
        { title: { vi: "Trách nhiệm cộng đồng", en: "Community impact" }, description: { vi: "Tôi hướng tới các giải pháp thiết thực cho cộng đồng và phát triển bền vững dài hạn.", en: "I work toward practical solutions for communities and long-term sustainable development." } },
      ],
    },
    interests: {
      eyebrow: { vi: "Mối quan tâm", en: "STEM Interests" },
      title: { vi: "Những năng lực tôi đang phát triển.", en: "Areas I am developing." },
      cards: [
        { title: { vi: "Nghiên cứu & Đổi mới", en: "Research & Innovation" }, description: { vi: "Nghiên cứu và đổi mới công nghệ, với sự quan tâm đến phát triển bền vững và tác động xã hội.", en: "Research and technological innovation, with an interest in sustainable development and social impact." } },
        { title: { vi: "Công nghệ & Tư duy sản phẩm", en: "Technology & Product Thinking" }, description: { vi: "AI ứng dụng và thiết kế lấy con người làm trung tâm để tiếp cận vấn đề một cách thực tế.", en: "Applied AI and human-centered design for approaching problems in practical ways." } },
        { title: { vi: "Lãnh đạo & Giao tiếp", en: "Leadership & Communication" }, description: { vi: "Quản lý dự án, phối hợp nhóm, viết và trình bày nghiên cứu khoa học.", en: "Project management, team collaboration, and scientific writing and presentation." } },
      ],
    },
    valuesFuture: {
      eyebrow: { vi: "Giá trị & Định hướng", en: "Values & Future Direction" },
      valuesLabel: { vi: "Giá trị", en: "Values" },
      futureLabel: { vi: "Định hướng dài hạn", en: "Long-term direction" },
    },
  },
  about: {
    // Bản giới thiệu nháp từ CV — cần người dùng duyệt trước khi xuất bản.
    story: {
      vi: "Từ nền tảng Vật lý, Phúc quan tâm đến cách nghiên cứu và công nghệ có thể giải quyết những vấn đề gần gũi với cộng đồng. Các trải nghiệm về AI, giáo dục môi trường, công nghệ hỗ trợ và nghiên cứu nội dung số đã giúp Phúc rèn luyện tư duy khoa học, làm việc nhóm và cách biến một ý tưởng thành hoạt động có định hướng rõ ràng.",
      en: "With a foundation in Physics, Phuc is interested in how research and technology can address problems close to communities. Experiences in AI, environmental education, assistive technology, and digital-content research have helped him develop scientific thinking, teamwork, and the ability to turn an idea into purposeful action.",
    },
    academicInterests: [
      {
        vi: "Nghiên cứu và đổi mới công nghệ",
        en: "Research and technological innovation",
      },
      {
        vi: "AI ứng dụng và thiết kế lấy con người làm trung tâm",
        en: "Applied AI and human-centered design",
      },
      {
        vi: "Phát triển bền vững và tác động xã hội",
        en: "Sustainable development and social impact",
      },
    ],
    strengths: [
      {
        vi: "Viết và trình bày nghiên cứu khoa học",
        en: "Scientific writing and presentation",
      },
      {
        vi: "Quản lý dự án và phối hợp nhóm",
        en: "Project management and team collaboration",
      },
      {
        vi: "Truyền thông cộng đồng và tổ chức hoạt động",
        en: "Community outreach and event organization",
      },
    ],
    values: {
      vi: "Tò mò khoa học, trách nhiệm xã hội và sự kiên trì trong quá trình thử nghiệm.",
      en: "Scientific curiosity, social responsibility, and persistence through experimentation.",
    },
    futureGoal: {
      vi: "[Định hướng học thuật và mục tiêu dài hạn sẽ cập nhật]",
      en: "[Academic direction and long-term goals to be updated]",
    },
  },

  narrative: [
    {
      key: "explore",
      title: { vi: "Khám phá", en: "Explore" },
      description: {
        vi: "Tìm hiểu các vấn đề thực tế qua nghiên cứu, dữ liệu và trải nghiệm cộng đồng.",
        en: "Investigating real-world problems through research, data, and community experience.",
      },
    },
    {
      key: "create",
      title: { vi: "Kiến tạo", en: "Create" },
      description: {
        vi: "Kết hợp công nghệ, tư duy khoa học và thiết kế lấy con người làm trung tâm.",
        en: "Combining technology, scientific thinking, and human-centered design.",
      },
    },
    {
      key: "impact",
      title: { vi: "Tạo tác động", en: "Create impact" },
      description: {
        vi: "Hướng tới những giải pháp thiết thực cho cộng đồng và phát triển bền vững dài hạn.",
        en: "Working toward practical solutions for communities and long-term sustainable development.",
      },
    },
  ],

  projects: [
    {
      slug: "ecome",
      featured: true,
      title: "ECOMe",
      category: { vi: "Môi trường & cộng đồng", en: "Environment & community" },
      summary: {
        vi: "Sáng kiến do học sinh dẫn dắt về giáo dục môi trường và hành động cộng đồng.",
        en: "A student-led initiative for environmental education and community action.",
      },
      problem: {
        vi: "[Vấn đề cụ thể sẽ cập nhật]",
        en: "[Specific problem to be updated]",
      },
      role: {
        vi: "Nhà sáng lập & Trưởng dự án",
        en: "Founder & Project Chair",
      },
      fields: [
        "Environmental education",
        "Community action",
        "Project management",
      ],
      result: {
        vi: "CV ghi nhận các chiến dịch nâng cao nhận thức đã tiếp cận khoảng 1.800 người.",
        en: "The CV records awareness campaigns that reached approximately 1,800 people.",
      },
      coverImage: "/images/placeholders/ecome-cover.svg",
      details: {
        objective: {
          vi: "[Mục tiêu sẽ cập nhật]",
          en: "[Objective to be updated]",
        },
        solution: {
          vi: "[Giải pháp sẽ cập nhật]",
          en: "[Solution to be updated]",
        },
        process: {
          vi: "[Quy trình sẽ cập nhật]",
          en: "[Process to be updated]",
        },
        evidence: {
          vi: "[Link/bằng chứng sẽ cập nhật]",
          en: "[Links/evidence to be updated]",
        },
        lessons: { vi: "[Bài học sẽ cập nhật]", en: "[Lessons to be updated]" },
        futureWork: {
          vi: "[Cải tiến tiếp theo sẽ cập nhật]",
          en: "[Future improvements to be updated]",
        },
      },
    },
    {
      slug: "bloomwatch",
      featured: true,
      title: "BloomWatch",
      category: {
        vi: "Dữ liệu Trái Đất & giáo dục",
        en: "Earth data & education",
      },
      summary: {
        vi: "Nền tảng học tập biến dữ liệu vệ tinh NASA về hiện tượng ra hoa toàn cầu thành trải nghiệm đa phương tiện dễ tiếp cận.",
        en: "An educational platform that turns NASA satellite data on global flowering phenomena into an accessible multimedia experience.",
      },
      problem: {
        vi: "[Vấn đề cụ thể sẽ cập nhật]",
        en: "[Specific problem to be updated]",
      },
      role: { vi: "Thành viên nhóm", en: "Team member" },
      fields: ["Earth observation", "Data storytelling", "Product development"],
      result: {
        vi: "Giải Nhất, Arts & Technology Award và Global Nominee tại NASA International Space Apps Challenge 2025.",
        en: "First Prize, Arts & Technology Award, and Global Nominee at the 2025 NASA International Space Apps Challenge.",
      },
      coverImage: "/images/placeholders/bloomwatch-cover.svg",
      details: {
        objective: {
          vi: "[Mục tiêu sẽ cập nhật]",
          en: "[Objective to be updated]",
        },
        solution: {
          vi: "[Giải pháp sẽ cập nhật]",
          en: "[Solution to be updated]",
        },
        process: {
          vi: "[Quy trình sẽ cập nhật]",
          en: "[Process to be updated]",
        },
        evidence: {
          vi: "[Link/bằng chứng sẽ cập nhật]",
          en: "[Links/evidence to be updated]",
        },
        lessons: { vi: "[Bài học sẽ cập nhật]", en: "[Lessons to be updated]" },
        futureWork: {
          vi: "[Cải tiến tiếp theo sẽ cập nhật]",
          en: "[Future improvements to be updated]",
        },
      },
    },
  ],

  timeline: [
    {
      date: "2025–present",
      title: {
        vi: "Nhà sáng lập & Trưởng dự án — ECOMe",
        en: "Founder & Project Chair — ECOMe",
      },
      description: {
        vi: "Sáng kiến do học sinh dẫn dắt về giáo dục môi trường và hành động cộng đồng.",
        en: "A student-led environmental education and community-action initiative.",
      },
    },
    {
      date: "2025",
      title: {
        vi: "Tác giả và người trình bày học sinh — VNICT 2025",
        en: "Student Author and Presenter — VNICT 2025",
      },
      description: {
        vi: "Đồng tác giả và trình bày bài báo về phương pháp reversible data hiding hai ảnh được cải tiến.",
        en: "Co-authored and presented a paper on an improved dual-image reversible data-hiding method.",
      },
    },
    {
      date: "2026",
      title: {
        vi: "Thực tập sinh nghiên cứu — Viện Công nghệ Thông tin, VAST",
        en: "Research Intern — Institute of Information Technology, VAST",
      },
      description: {
        vi: "Tham gia thực tập có cấu trúc về các hệ thống AI ứng dụng.",
        en: "Participating in a structured internship focused on applied AI systems.",
      },
    },
  ],

  achievements: [
    {
      date: "2026",
      title: {
        vi: "Giải Vàng — World Invention Creativity Olympic",
        en: "Gold Award — World Invention Creativity Olympic",
      },
      description: {
        vi: "SafeStride — dự án về nhận thức không gian và cảnh báo ưu tiên trên điện thoại cho người khiếm thị.",
        en: "SafeStride — a smartphone concept for spatial awareness and priority alerts for blind users.",
      },
    },
    {
      date: "2026",
      title: {
        vi: "Giải Ba — Cuộc thi Ý tưởng Bảo vệ Môi trường trong lĩnh vực Giao thông",
        en: "Third Prize — Environmental Protection Ideas in the Transport Sector Competition",
      },
      description: {
        vi: "ECOMeSort — ý tưởng ứng dụng AI hỗ trợ phân loại rác và kết nối hệ sinh thái tái chế.",
        en: "ECOMeSort — an AI-enabled concept for waste sorting and recycling-ecosystem connections.",
      },
    },
    {
      date: "2025",
      title: {
        vi: "VNICT 2025 — Đồng tác giả và người trình bày học sinh",
        en: "VNICT 2025 — Student Author and Presenter",
      },
      description: {
        vi: "Bài báo về phương pháp reversible data hiding hai ảnh được cải tiến cho xác thực nội dung số.",
        en: "A paper on an improved dual-image reversible data-hiding method for digital-content authentication.",
      },
    },
  ],
} as const;

export const aboutPageContent = {
  eyebrow: { vi: "Giới thiệu", en: "About" },
  title: {
    vi: "Khoa học, công nghệ và trách nhiệm với cộng đồng.",
    en: "Science, technology, and responsibility to communities.",
  },
  storyLabel: { vi: "Câu chuyện", en: "Story" },
  academicInterestsLabel: {
    vi: "Mối quan tâm học thuật",
    en: "Academic interests",
  },
  strengthsLabel: { vi: "Điểm mạnh", en: "Strengths" },
  valuesLabel: { vi: "Giá trị dẫn đường", en: "Guiding values" },
  futureGoalLabel: { vi: "Hướng tới", en: "Looking ahead" },
} as const;

export const projectsPageContent = {
  eyebrow: { vi: "Dự án", en: "Projects" },
  title: {
    vi: "Từ vấn đề thực tế đến giải pháp có trách nhiệm.",
    en: "From real-world problems to responsible solutions.",
  },
  description: {
    vi: "Mỗi dự án là một hành trình quan sát, thử nghiệm, hợp tác và rút ra bài học.",
    en: "Each project is a journey of observation, experimentation, collaboration, and learning.",
  },
  viewProject: { vi: "Xem dự án", en: "View project" },
  sections: {
    problem: { vi: "Vấn đề", en: "Problem" },
    idea: { vi: "Ý tưởng", en: "Idea" },
    process: { vi: "Quy trình", en: "Process" },
    result: { vi: "Kết quả", en: "Result" },
    lessons: { vi: "Bài học", en: "Lessons" },
  },
} as const;

export const activitiesPageContent = {
  eyebrow: { vi: "Hoạt động", en: "Activities" },
  title: {
    vi: "Những trải nghiệm nuôi dưỡng tư duy và hành động.",
    en: "Experiences that shape thinking and action.",
  },
  description: {
    vi: "Các cuộc thi, hoạt động cộng đồng và dấu mốc học thuật được sắp xếp theo từng năm.",
    en: "Competitions, community work, and academic milestones, organized by year.",
  },
  comingSoon: {
    vi: "Nội dung dòng thời gian đang được cập nhật.",
    en: "The timeline content is being updated.",
  },
} as const;

export function getLocalized<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
