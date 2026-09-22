/** Content specific to the home narrative; shared profile and other pages stay unchanged. */
export const homeNarrative = {
  navigation: {
    home: { vi: "Trang chủ", en: "Home" },
    about: { vi: "Về tôi", en: "About Me" },
    research: { vi: "Nghiên cứu", en: "Research" },
    certificates: { vi: "Học thuật & Chứng chỉ", en: "Academics & Certifications" },
    projects: { vi: "Dự án nổi bật", en: "Featured Projects" },
    impact: { vi: "Ngoài lớp học", en: "Beyond the Classroom" },
    journey: { vi: "Hành trình", en: "Journey" },
    vision: { vi: "Định hướng tương lai", en: "Future Vision" },
    contact: { vi: "Liên hệ", en: "Contact" },
  },
  actions: {
    about: { vi: "Xem dự án nổi bật", en: "View selected work" },
    cv: { vi: "Tải CV", en: "Download CV" },
  },
  positioning: {
    vi: "Học sinh chuyên Vật lý, đang tìm hiểu cách kết hợp kỹ thuật phần cứng, AI và thiết kế hướng tới con người để giải quyết những vấn đề thực tế về hỗ trợ tiếp cận và môi trường — qua từng dự án một.",
    en: "A Physics-specialized student exploring how hardware, AI, and human-centered design can address real accessibility and environmental problems — one project at a time.",
  },
  research: {
    title: { vi: "Hai công bố, hai hướng nghiên cứu ứng dụng.", en: "Two publications, two fields of applied research." },
    description: {
      vi: "Hai bài báo hội nghị quốc gia giúp tôi học cách kiểm chứng ý tưởng, tham gia thử nghiệm và trình bày kết quả rõ ràng trong bảo mật nội dung số và hệ thống UAV tích hợp AI.",
      en: "Two national conference papers taught me to test ideas, contribute to experiments, and communicate results clearly across digital-content security and AI-integrated UAV systems.",
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
  courses: [
    { title: "AI Fundamentals", imageSrc: "/images/certificates/ai-fundamentals.png" },
    { title: "Vibe Coding with Claude Code", imageSrc: "/images/certificates/vibe-coding-claude-code.png" },
    { title: "AI for Data Analysis", imageSrc: "/images/certificates/ai-for-data-analysis.png" },
    { title: "Vibe Coding with GitHub Copilot", imageSrc: "/images/certificates/vibe-coding-github-copilot.png" },
    { title: "Vibe Coding with Cursor AI", imageSrc: "/images/certificates/vibe-coding-cursor-ai.png" },
  ],
} as const;

export const homeVolunteerEvidence = [
  {
    title: { vi: "Hành trình kết nối sắc màu trí tuệ · 2025", en: "Journey of Connecting Colors of Wisdom · 2025" },
    description: { vi: "Chứng nhận tham gia trao quà tại các trung tâm bảo trợ.", en: "Participation certificate for gift delivery at social care centres." },
    imageSrc: "/images/community/recognition/colors-of-wisdom-participation-2025.jpg",
  },
  {
    title: { vi: "Tập huấn GenAI cho cán bộ Đoàn–Hội · 2026", en: "GenAI training for student-union officers · 2026" },
    description: { vi: "Chứng nhận đóng góp tổ chức chương trình.", en: "Certificate for helping organize the training." },
    imageSrc: "/images/community/recognition/genai-training-volunteer-2026.jpg",
  },
  {
    title: { vi: "Tình nguyện vì cộng đồng · 2026", en: "Community volunteering · 2026" },
    description: { vi: "Giấy khen thành tích xuất sắc của Đoàn trường ĐH Giao thông Vận tải.", en: "Certificate of Merit from the University of Transport and Communications Youth Union." },
    imageSrc: "/images/community/recognition/community-volunteer-merit-2026.jpg",
  },
] as const;

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
