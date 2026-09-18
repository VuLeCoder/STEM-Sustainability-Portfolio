/** Content specific to the home narrative; shared profile and other pages stay unchanged. */
export const homeNarrative = {
  navigation: {
    home: { vi: "Trang chủ", en: "Home" },
    about: { vi: "Về tôi", en: "About Me" },
    research: { vi: "Hướng nghiên cứu", en: "Research Interests" },
    certificates: { vi: "Học thuật & Chứng chỉ", en: "Academics & Certifications" },
    projects: { vi: "Dự án", en: "Projects" },
    impact: { vi: "Tác động cộng đồng", en: "Community Impact" },
    vision: { vi: "Định hướng tương lai", en: "Future Vision" },
    contact: { vi: "Liên hệ", en: "Contact" },
  },
  actions: {
    about: { vi: "Xem thêm về tôi", en: "More about me" },
    cv: { vi: "Xem CV", en: "View CV" },
  },
  positioning: {
    vi: "Từ nền tảng chuyên Vật lý, tôi khám phá AI và công nghệ hỗ trợ để xây dựng những giải pháp lấy con người làm trung tâm, hướng tới giá trị cho cộng đồng.",
    en: "With a foundation in Physics, I explore AI and assistive technology to build human-centered solutions that serve communities.",
  },
  research: {
    title: { vi: "Từ câu hỏi khoa học đến nghiên cứu ứng dụng.", en: "From scientific questions to applied research." },
    description: {
      vi: "Tôi quan tâm đến giấu tin thuận nghịch và xác thực nội dung số, các hệ thống AI ứng dụng, cùng công nghệ hỗ trợ lấy con người làm trung tâm. Bài báo tại VNICT và kỳ thực tập tại VAST là những trải nghiệm giúp tôi phát triển các hướng quan tâm này.",
      en: "My interests span reversible data hiding and digital-content authentication, applied AI systems, and human-centered assistive technology. My VNICT paper and VAST internship are experiences through which I am developing these interests.",
    },
    cta: { vi: "Khám phá trải nghiệm nghiên cứu", en: "Explore my research experience" },
  },
  vision: {
    title: { vi: "Phát triển công nghệ từ nhu cầu của con người.", en: "Developing technology around human needs." },
    description: {
      vi: "Tôi mong muốn tiếp tục học sâu về AI và các hệ thống phần cứng, kết nối nền tảng Vật lý với thiết kế lấy con người làm trung tâm. Hướng đi của tôi là thử nghiệm những giải pháp hỗ trợ khả năng tiếp cận và phát triển bền vững, học từ phản hồi thực tế và đánh giá giá trị mà công nghệ mang lại cho cộng đồng.",
      en: "I want to deepen my understanding of AI and hardware systems, connecting my Physics foundation with human-centered design. My direction is to explore solutions for accessibility and sustainability, learn from real-world feedback, and evaluate the value technology brings to communities.",
    },
    cta: { vi: "Cùng trao đổi và kết nối", en: "Let’s connect and exchange ideas" },
  },
} as const;

export const homeCertificates = {
  title: { vi: "Nền tảng học thuật & Chứng chỉ", en: "Academic Profile & Certifications" },
  description: {
    vi: "Nền tảng chuyên Vật lý, kết quả học tập và hành trình mở rộng kiến thức về AI, dữ liệu và lập trình.",
    en: "A foundation in Physics, academic achievements, and continued learning in AI, data analysis, and programming.",
  },
  status: { vi: "Đã hoàn thành · Coursera", en: "Completed · Coursera" },
  // Add images to public/images/certificates and set imageSrc to /images/certificates/filename.
  courses: [
    { title: "AI Fundamentals", imageSrc: "" },
    { title: "Vibe Coding with Claude Code", imageSrc: "" },
    { title: "AI for Data Analysis", imageSrc: "" },
    { title: "Vibe Coding with GitHub Copilot", imageSrc: "" },
  ],
} as const;

export const homeAcademicAwards = [
  {
    id: "timo-bronze",
    title: { vi: "TIMO · Huy chương Đồng", en: "TIMO · Bronze Award" },
    description: { vi: "Olympic Toán học quốc tế Thái Lan · Vòng loại 2021–2022", en: "Thailand International Mathematical Olympiad · Heat Round 2021–2022" },
  },
  {
    id: "pimso-bronze",
    title: { vi: "PIMSO · Huy chương Đồng", en: "PIMSO · Bronze Award" },
    description: { vi: "Olympic Toán học quốc tế Philippines · Vòng loại 2022", en: "Philippine International Mathematical Olympiad · Heat Round 2022" },
  },
  {
    id: "asmo-merit",
    title: { vi: "ASMO English · Giải Merit", en: "ASMO English · Merit Award" },
    description: { vi: "Tiếng Anh · Cấp quốc gia · 2022", en: "English · National Level · 2022" },
  },
] as const;
