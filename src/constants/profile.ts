/** Thông tin cá nhân, giới thiệu, liên hệ và nội dung hồ sơ VI/EN. */

export const profile={
  name: { vi: "Nguyễn Cao Xuân Phúc",en: "Nguyen Cao Xuan Phuc" },
  initials: "NCP",
  location: { vi: "Hà Nội, Việt Nam",en: "Hanoi, Vietnam" },
  positioning: {
    vi: "Tôi là học sinh nghiên cứu quan tâm đến công nghệ, đổi mới và tác động xã hội.",
    en: "I am a student researcher interested in technology, innovation, and social impact.",
  },
  introduction: {
    vi: "Tôi là học sinh chuyên Vật lý tại Trường THPT Chuyên Nguyễn Huệ, quan tâm đến nghiên cứu, đổi mới công nghệ và phát triển bền vững. Qua các dự án về AI, bảo vệ môi trường, công nghệ hỗ trợ và nghiên cứu số, tôi phát triển cách tiếp cận kết hợp tư duy khoa học, thiết kế lấy con người làm trung tâm và hành động cộng đồng. Tôi mong muốn dùng công nghệ cùng tinh thần trách nhiệm xã hội để tạo ra những giải pháp thiết thực cho cộng đồng và sự phát triển bền vững dài hạn.",
    en: "I am a Physics-specialized student at Nguyen Hue High School for the Gifted, with interests in research, technological innovation, and sustainable development. Through projects in AI, environmental protection, assistive technology, and digital research, I have developed an approach that combines scientific thinking, human-centered design, and community action. I hope to use technology and social responsibility to create practical solutions for communities and long-term sustainable development.",
  },
  portrait: "/images/profile/nguyen-cao-xuan-phuc.jpg",
} as const;

export const contact={
  // Chỉ thêm thông tin liên hệ sau khi chủ sở hữu duyệt việc công khai.
  email: null,
  phone: null,
  location: { vi: "Hà Nội, Việt Nam",en: "Hanoi, Vietnam" },
  cvFile: null,
  socialLinks: [],
} as const;

export const seo={
  siteName: "Nguyen Cao Xuan Phuc",
  defaultTitle: {
    vi: "Nguyễn Cao Xuân Phúc | STEM & Sustainability Portfolio",
    en: "Nguyen Cao Xuan Phuc | STEM & Sustainability Portfolio",
  },
  defaultDescription: {
    vi: "Portfolio học thuật về nghiên cứu, công nghệ và tác động xã hội.",
    en: "An academic portfolio on research, technology, and social impact.",
  },
} as const;

export const about={
  // Bản giới thiệu nháp từ CV — cần người dùng duyệt trước khi xuất bản.
  story: {
    vi: "Từ nền tảng Vật lý, tôi quan tâm đến cách nghiên cứu và công nghệ có thể giải quyết những vấn đề gần gũi với cộng đồng. Các trải nghiệm về AI, giáo dục môi trường, công nghệ hỗ trợ và nghiên cứu nội dung số giúp tôi rèn luyện tư duy khoa học, làm việc nhóm và cách biến một ý tưởng thành hoạt động có định hướng rõ ràng.",
    en: "With a foundation in Physics, I am interested in how research and technology can address problems close to communities. Experiences in AI, environmental education, assistive technology, and digital-content research help me develop scientific thinking, teamwork, and the ability to turn an idea into purposeful action.",
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
} as const;

export const narrative=[
  {
    key: "explore",
    title: { vi: "Khám phá",en: "Explore" },
    description: {
      vi: "Tìm hiểu các vấn đề thực tế qua nghiên cứu, dữ liệu và trải nghiệm cộng đồng.",
      en: "Investigating real-world problems through research, data, and community experience.",
    },
  },
  {
    key: "create",
    title: { vi: "Kiến tạo",en: "Create" },
    description: {
      vi: "Kết hợp công nghệ, tư duy khoa học và thiết kế lấy con người làm trung tâm.",
      en: "Combining technology, scientific thinking, and human-centered design.",
    },
  },
  {
    key: "impact",
    title: { vi: "Tạo tác động",en: "Create impact" },
    description: {
      vi: "Hướng tới những giải pháp thiết thực cho cộng đồng và phát triển bền vững dài hạn.",
      en: "Working toward practical solutions for communities and long-term sustainable development.",
    },
  },
] as const;

export const profileChrome={
  logoImage: "/images/brand/ncp-logo.png",
  socials: [
    { icon: "facebook",label: "Facebook",href: "#" },
    { icon: "github",label: "GitHub",href: "#" },
    { icon: "linkedin",label: "LinkedIn",href: "#" },
  ],
  contacts: [
    { icon: "gmail",label: { vi: "Gmail",en: "Gmail" },href: null as string|null },
    { icon: "phone",label: { vi: "Điện thoại",en: "Phone" },href: null as string|null },
  ]
} as const;

export const profileHome={
  eyebrow: {
    vi: "STEM · Công nghệ · Phát triển bền vững",
    en: "STEM · Technology · Sustainability",
  },
  visualLabel: "STEM × Impact",
  aboutPreview: {
    eyebrow: { vi: "Về tôi",en: "About me" },
    title: {
      vi: "Tôi quan tâm đến cách STEM và công nghệ có thể góp phần giải quyết những vấn đề của phát triển bền vững.",
      en: "I am interested in how STEM and technology can help address challenges in sustainable development.",
    },
    cta: { vi: "Tìm hiểu thêm về tôi",en: "More about me" },
  },
  // Selected and paraphrased from CV.pdf: Profile, Education, Research,
  // Leadership, STEM Programs and Core Competencies. Scores are as listed.
  aboutMe: {
    label: { vi: "Về tôi",en: "About me" },
    title: {
      vi: "Khám phá khoa học. Hướng tới giá trị cộng đồng.",
      en: "Exploring science. Working toward community impact.",
    },
    introduction: {
      vi: "Tôi là học sinh chuyên Vật lý tại Trường THPT Chuyên Nguyễn Huệ, Hà Nội. Qua nghiên cứu và các dự án liên ngành, tôi mong muốn kết hợp công nghệ, tư duy kinh doanh và trách nhiệm xã hội để tạo ra những giải pháp thiết thực cho sự phát triển bền vững.",
      en: "I am a Physics-specialized student at Nguyen Hue High School for the Gifted in Hanoi. Through research and interdisciplinary projects, I hope to combine technology, business thinking, and social responsibility to create practical solutions for sustainable development.",
    },
    pillars: [
      {
        id: "research",
        title: { vi: "Nghiên cứu khoa học",en: "Scientific research" },
        description: {
          vi: "Đồng tác giả và trình bày báo cáo về giấu tin thuận nghịch tại VNICT 2025; tìm hiểu quy trình nghiên cứu và hệ thống AI ứng dụng qua kỳ thực tập tại Viện Công nghệ thông tin, VAST.",
          en: "Co-authored and presented a paper on reversible data hiding at VNICT 2025; exploring research workflows and applied AI systems through an internship at the Institute of Information Technology, VAST.",
        },
      },
      {
        id: "technology",
        title: { vi: "Công nghệ vì con người",en: "Human-centered technology" },
        description: {
          vi: "Khám phá AI, công nghệ hỗ trợ và dữ liệu qua SafeStride, ECOMeSort và BloomWatch — từ hỗ trợ người khiếm thị đến phân loại rác và học tập với dữ liệu NASA.",
          en: "Exploring AI, assistive technology, and data through SafeStride, ECOMeSort, and BloomWatch — from supporting blind users to waste sorting and learning with NASA data.",
        },
      },
      {
        id: "community",
        title: { vi: "Hành động cộng đồng",en: "Community action" },
        description: {
          vi: "Sáng lập và chủ nhiệm ECOMe, triển khai giáo dục môi trường và hoạt động cộng đồng. Các chiến dịch truyền thông thực địa đã tiếp cận khoảng 1.800 người tại nhiều tỉnh thành.",
          en: "Founded and lead ECOMe, an environmental education and community-action initiative. Its field awareness campaigns have reached approximately 1,800 people across multiple Vietnamese provinces.",
        },
      },
      {
        id: "collaboration",
        title: { vi: "Hợp tác & chia sẻ",en: "Collaboration & learning" },
        description: {
          vi: "Tham gia tổ chức Open Data Exploration và hỗ trợ Robotics Summer Camp 2026 tại American Center, Hà Nội; kết hợp truyền thông, thiết kế, nghiên cứu dữ liệu và làm việc nhóm kỹ thuật.",
          en: "Helped organize Open Data Exploration and supported Robotics Summer Camp 2026 at the American Center in Hanoi, combining communication, design, data research, and technical teamwork.",
        },
      },
    ],
    credentialsLabel: { vi: "Nền tảng học thuật",en: "Academic foundation" },
    credentials: [
      { label: { vi: "SAT",en: "SAT" },value: "1440" },
      { label: { vi: "IELTS Academic",en: "IELTS Academic" },value: "7.0" },
      { label: { vi: "AP Physics C",en: "AP Physics C" },value: "5/5" },
    ],
  },
  contactCta: {
    eyebrow: { vi: "Kết nối",en: "Let's connect" },
    title: {
      vi: "Cùng trao đổi về STEM, công nghệ và phát triển bền vững.",
      en: "Let’s talk about STEM, technology, and sustainability.",
    },
    description: {
      vi: "Khám phá thêm hành trình, các dự án và cách tôi đang biến sự tò mò khoa học thành những thử nghiệm thực tế.",
      en: "Explore my journey, projects, and how I am turning scientific curiosity into practical experiments.",
    },
    projectsCta: { vi: "Khám phá dự án",en: "Explore projects" },
    aboutCta: { vi: "Tìm hiểu về tôi",en: "More about me" },
  },
  approach: {
    eyebrow: { vi: "Cách tiếp cận",en: "Approach" },
    title: {
      vi: "Đi từ câu hỏi khoa học đến giá trị cho cộng đồng.",
      en: "From scientific questions to value for communities.",
    },
    description: {
      vi: "Mỗi trải nghiệm là một bước để học cách quan sát kỹ hơn, thử nghiệm có trách nhiệm và cùng tạo ra giải pháp thiết thực.",
      en: "Each experience is a step toward observing more closely, experimenting responsibly, and building practical solutions together.",
    },
  },
  contactHero: {
    contactLabel: { vi: "Kết nối",en: "Connect" },
    profileLabel: { vi: "Hồ sơ STEM",en: "STEM profile" },
    emailLabel: { vi: "Email",en: "Email" },
    phoneLabel: { vi: "Điện thoại",en: "Phone" },
    locationLabel: { vi: "Địa điểm",en: "Location" },
    cvLabel: { vi: "Xem CV",en: "View CV" },
    storyCta: { vi: "Khám phá hành trình",en: "Explore my story" },
  },
  story: {
    eyebrow: { vi: "Hành trình",en: "My Story" },
    title: {
      vi: "Từ Vật lý đến những giải pháp có ý nghĩa.",
      en: "From Physics to purposeful solutions.",
    },
    pathLabel: {
      vi: "Vật lý → Nghiên cứu → Công nghệ → Tác động",
      en: "Physics → Research → Technology → Impact",
    },
    milestones: [
      {
        title: { vi: "Nền tảng Vật lý",en: "Physics foundation" },
        description: {
          vi: "Tôi là học sinh chuyên Vật lý, nuôi dưỡng cách đặt câu hỏi, quan sát và kiểm chứng bằng tư duy khoa học.",
          en: "As a Physics-specialized student, I am developing a scientific way to question, observe, and test ideas.",
        },
      },
      {
        title: { vi: "Nghiên cứu",en: "Research" },
        description: {
          vi: "Tôi tìm hiểu các vấn đề thực tế qua nghiên cứu, dữ liệu và trải nghiệm cộng đồng.",
          en: "I investigate real-world problems through research, data, and community experience.",
        },
      },
      {
        title: { vi: "Đổi mới công nghệ",en: "Technology innovation" },
        description: {
          vi: "Tôi kết hợp công nghệ, tư duy khoa học và thiết kế lấy con người làm trung tâm.",
          en: "I combine technology, scientific thinking, and human-centered design.",
        },
      },
      {
        title: { vi: "Trách nhiệm cộng đồng",en: "Community impact" },
        description: {
          vi: "Tôi hướng tới các giải pháp thiết thực cho cộng đồng và phát triển bền vững dài hạn.",
          en: "I work toward practical solutions for communities and long-term sustainable development.",
        },
      },
    ],
  },
  interests: {
    eyebrow: { vi: "Mối quan tâm",en: "STEM Interests" },
    title: {
      vi: "Những năng lực tôi đang phát triển.",
      en: "Areas I am developing.",
    },
    cards: [
      {
        title: { vi: "Nghiên cứu & Đổi mới",en: "Research & Innovation" },
        description: {
          vi: "Nghiên cứu và đổi mới công nghệ, với sự quan tâm đến phát triển bền vững và tác động xã hội.",
          en: "Research and technological innovation, with an interest in sustainable development and social impact.",
        },
      },
      {
        title: {
          vi: "Công nghệ & Tư duy sản phẩm",
          en: "Technology & Product Thinking",
        },
        description: {
          vi: "AI ứng dụng và thiết kế lấy con người làm trung tâm để tiếp cận vấn đề một cách thực tế.",
          en: "Applied AI and human-centered design for approaching problems in practical ways.",
        },
      },
      {
        title: {
          vi: "Lãnh đạo & Giao tiếp",
          en: "Leadership & Communication",
        },
        description: {
          vi: "Quản lý dự án, phối hợp nhóm, viết và trình bày nghiên cứu khoa học.",
          en: "Project management, team collaboration, and scientific writing and presentation.",
        },
      },
    ],
  },
  valuesFuture: {
    eyebrow: { vi: "Giá trị & Định hướng",en: "Values & Future Direction" },
    valuesLabel: { vi: "Giá trị",en: "Values" },
    futureLabel: { vi: "Định hướng dài hạn",en: "Long-term direction" },
  }
} as const;

export const aboutPageContent={
  eyebrow: { vi: "Giới thiệu",en: "About" },
  title: {
    vi: "Khoa học, công nghệ và trách nhiệm với cộng đồng.",
    en: "Science, technology, and responsibility to communities.",
  },
  storyLabel: { vi: "Câu chuyện",en: "Story" },
  academicInterestsLabel: {
    vi: "Mối quan tâm học thuật",
    en: "Academic interests",
  },
  strengthsLabel: { vi: "Điểm mạnh",en: "Strengths" },
  valuesLabel: { vi: "Giá trị dẫn đường",en: "Guiding values" },
  futureGoalLabel: { vi: "Hướng tới",en: "Looking ahead" },
} as const;

export const contactPageContent={
  eyebrow: { vi: "Liên hệ",en: "Contact" },
  title: { vi: "Hãy cùng kết nối.",en: "Let’s connect." },
  description: {
    vi: "Bạn muốn trao đổi về STEM, công nghệ hoặc phát triển bền vững? Thông tin liên hệ công khai sẽ được cập nhật tại đây sau khi được xác nhận.",
    en: "Want to talk about STEM, technology, or sustainability? Public contact details will appear here once they have been confirmed.",
  },
  availabilityLabel: { vi: "Trạng thái",en: "Availability" },
  availability: {
    vi: "Thông tin liên hệ đang được xác nhận",
    en: "Contact details are being confirmed",
  },
  locationLabel: { vi: "Địa điểm",en: "Location" },
  exploreLabel: { vi: "Trong lúc chờ đợi",en: "In the meantime" },
  projectsCta: { vi: "Khám phá dự án",en: "Explore projects" },
  journeyCta: { vi: "Xem hành trình",en: "View the journey" },
} as const;
