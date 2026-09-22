import type { Localized } from "./common";

export const workCaseStudies: Record<string, { title: Localized<string>; body: Localized<string> }[]> = {
  "dual-image-reversible-data-hiding": [
    {
      "title": {
        "vi": "Bối cảnh & vấn đề",
        "en": "Problem"
      },
      "body": {
        "vi": "Nghiên cứu hướng tới tăng dung lượng nhúng dữ liệu trong ảnh để phục vụ xác thực nội dung số, đồng thời duy trì khả năng khôi phục ảnh gốc.",
        "en": "The research addresses increasing embedding capacity for digital-content authentication while preserving recovery of the original image."
      }
    },
    {
      "title": {
        "vi": "Vai trò của tôi",
        "en": "My role"
      },
      "body": {
        "vi": "Là đồng tác giả, em tham gia đánh giá thực nghiệm, phân tích dữ liệu, đóng góp vào bài viết và trình bày nghiên cứu tại hội nghị.",
        "en": "As a co-author, I contributed to experimental evaluation, data analysis, and the paper, and presented the research at the conference."
      }
    },
    {
      "title": {
        "vi": "Phương pháp & hướng tiếp cận",
        "en": "Method & approach"
      },
      "body": {
        "vi": "Bài báo đề xuất phương pháp giấu tin thuận nghịch trên ảnh kép cải tiến, nhằm tăng dung lượng nhúng trong khi vẫn bảo đảm khôi phục hoàn hảo ảnh gốc.",
        "en": "The paper proposes an improved dual-image reversible data-hiding method that increases embedding capacity while preserving perfect recovery of the original image."
      }
    },
    {
      "title": {
        "vi": "Kết quả",
        "en": "Result"
      },
      "body": {
        "vi": "Nghiên cứu được công bố và trình bày tại VNICT 2025 — Hội nghị Quốc gia lần thứ 28 về Một số vấn đề chọn lọc của Công nghệ Thông tin và Truyền thông, tháng 11/2025 tại Ninh Bình.",
        "en": "The research was published and presented at VNICT 2025, the 28th National Conference on Selected ICT Problems, in November 2025 in Ninh Binh."
      }
    },
    {
      "title": {
        "vi": "Kinh nghiệm nghiên cứu",
        "en": "Research experience"
      },
      "body": {
        "vi": "Quá trình nghiên cứu giúp em tích lũy kinh nghiệm viết kỹ thuật, lập luận thực nghiệm, trình bày học thuật và trao đổi khoa học với những người cùng lĩnh vực.",
        "en": "The research gave me early experience in technical writing, experimental reasoning, academic presentation, and scientific communication with peers."
      }
    }
  ],
  "uav-gcs-framework": [
    {
      "title": {
        "vi": "Bối cảnh & vấn đề",
        "en": "Problem"
      },
      "body": {
        "vi": "Nghiên cứu hướng tới việc kết hợp UAV, trạm điều khiển mặt đất và AI để nâng cao nhận thức tình huống và hỗ trợ tìm kiếm cứu nạn trong không phận tầm thấp.",
        "en": "The research explores combining UAVs, ground control stations, and AI to improve situational awareness and support search-and-rescue in low-altitude airspace."
      }
    },
    {
      "title": {
        "vi": "Vai trò của tôi",
        "en": "My role"
      },
      "body": {
        "vi": "Em tham gia với vai trò đồng tác giả, cùng viết bài, tham gia thực nghiệm và trình bày nghiên cứu tại hội thảo.",
        "en": "As a co-author, I helped write the paper, took part in experiments, and presented the research at the conference."
      }
    },
    {
      "title": {
        "vi": "Phương pháp & hướng tiếp cận",
        "en": "Method & approach"
      },
      "body": {
        "vi": "Bài báo đề xuất khung tích hợp UAV và trạm điều khiển mặt đất sử dụng AI cho nhận thức tình huống và tìm kiếm cứu nạn, hướng tới triển khai UTM trong không phận tầm thấp.",
        "en": "The paper proposes an AI-integrated UAV and ground-control-station framework for situational awareness and search-and-rescue, toward UTM deployment in low-altitude airspace."
      }
    },
    {
      "title": {
        "vi": "Kết quả",
        "en": "Result"
      },
      "body": {
        "vi": "Nghiên cứu được trình bày tại Hội thảo Quốc gia về Hành lang bay và Quản lý không gian tầm thấp tại Hà Nội.",
        "en": "The research was presented at the National Conference on Flight Corridors and Low-Altitude Airspace Management in Hanoi."
      }
    },
    {
      "title": {
        "vi": "Kinh nghiệm nghiên cứu",
        "en": "Research experience"
      },
      "body": {
        "vi": "Các công việc em tham gia trải từ cùng xây dựng bài viết, thực nghiệm đến trình bày một hướng ứng dụng AI trong hệ thống UAV và hỗ trợ tìm kiếm cứu nạn.",
        "en": "My involvement spanned co-writing, experiments, and presenting an application of AI to UAV systems and search-and-rescue support."
      }
    }
  ],
  "safestride": [
    {
      "title": {
        "vi": "Bối cảnh & vấn đề",
        "en": "Problem"
      },
      "body": {
        "vi": "Người khiếm thị và thị lực kém đối mặt với rủi ro va chạm hằng ngày từ những vật cản bất ngờ. Nhiều thiết bị hỗ trợ hiện có đắt hoặc cồng kềnh, còn giải pháp trên điện thoại thường gặp vấn đề độ trễ cao và tiêu tốn pin.",
        "en": "People who are blind or have low vision face daily navigation hazards from unexpected obstacles. Many existing aids are expensive or bulky, and mobile solutions often struggle with high latency and heavy battery use."
      }
    },
    {
      "title": {
        "vi": "Vai trò của tôi",
        "en": "My role"
      },
      "body": {
        "vi": "Trong nhóm, em tập trung vào phần xử lý dữ liệu cảm biến và tối ưu điện năng — làm cho quy trình đủ nhẹ để chạy phản hồi nhanh trên một chiếc điện thoại thông thường.",
        "en": "Within the team, I focused on sensor data processing and power optimization — making the pipeline light enough to run responsively on an ordinary phone."
      }
    },
    {
      "title": {
        "vi": "Giải pháp & công nghệ",
        "en": "Solution & technology"
      },
      "body": {
        "vi": "Nhóm xây dựng một ý tưởng dựa trên smartphone giúp tăng cường nhận thức không gian và phát cảnh báo an toàn ưu tiên. Thiết kế xoay quanh xử lý cảm biến hiệu quả, lập bản đồ không gian và quản lý điện năng để phản hồi thời gian thực nhanh, tin cậy.",
        "en": "We built a smartphone-based concept that improves spatial awareness and delivers priority safety alerts. The design centers on efficient sensor processing, spatial mapping, and power management for fast, reliable real-time response."
      }
    },
    {
      "title": {
        "vi": "Kết quả",
        "en": "Result"
      },
      "body": {
        "vi": "SafeStride nhận Giải Vàng tại World Invention Creativity Olympic (WICO 2026) ở Seoul, được ghi nhận về đổi mới kỹ thuật, chất lượng trình bày và giá trị xã hội thực tiễn.",
        "en": "SafeStride received a Gold Award at the World Invention Creativity Olympic (WICO 2026) in Seoul, recognized for technical innovation, presentation quality, and practical social value."
      }
    },
    {
      "title": {
        "vi": "Điều tôi học được",
        "en": "What I learned"
      },
      "body": {
        "vi": "Việc hướng tới người dùng thật dạy em rằng nửa giây độ trễ là ranh giới giữa hữu ích và nguy hiểm. Với công nghệ hỗ trợ, mục tiêu thiết kế thực sự là sự tin cậy, chứ không phải sự mới lạ.",
        "en": "Working toward real users taught me that half a second of latency is the difference between helpful and dangerous. Reliability, not novelty, is the real design goal for assistive technology."
      }
    }
  ],
  "bloomwatch": [
    {
      "title": {
        "vi": "Bối cảnh & vấn đề",
        "en": "Problem"
      },
      "body": {
        "vi": "Dữ liệu quan sát Trái Đất của NASA mang giá trị khoa học thật về các chu kỳ môi trường toàn cầu, nhưng dữ liệu vệ tinh thô lại phức tạp và khó tiếp cận với học sinh và công chúng.",
        "en": "NASA Earth-observation data holds real scientific value about global environmental cycles, yet raw satellite datasets are complex and hard for students and the public to access."
      }
    },
    {
      "title": {
        "vi": "Vai trò của tôi",
        "en": "My role"
      },
      "body": {
        "vi": "Em tham gia chuyển dữ liệu vệ tinh thành một tuyến kể chuyện trực quan rõ ràng và góp phần định hình mạch nội dung, cùng các bạn phụ trách dữ liệu và giao diện.",
        "en": "I worked on turning satellite data into a clear visual narrative and helped shape the storytelling flow, alongside teammates handling data and interface."
      }
    },
    {
      "title": {
        "vi": "Giải pháp & công nghệ",
        "en": "Solution & technology"
      },
      "body": {
        "vi": "Nhóm tạo ra BloomWatch, một nền tảng học tập tương tác biến dữ liệu NASA về hiện tượng nở hoa toàn cầu thành trải nghiệm đa phương tiện sinh động. Hoàn thành trong 48 giờ hackathon, sản phẩm kết hợp nhân vật AI kể chuyện với khám phá dữ liệu trực quan.",
        "en": "We created BloomWatch, an interactive learning platform that turns NASA data on global flowering into an engaging multimedia experience. Built in a 48-hour hackathon, it pairs AI-generated character storytelling with visual data exploration."
      }
    },
    {
      "title": {
        "vi": "Kết quả",
        "en": "Result"
      },
      "body": {
        "vi": "BloomWatch đạt Giải Nhất, Giải Nghệ thuật & Công nghệ và Đề cử Toàn cầu tại NASA International Space Apps Challenge 2025.",
        "en": "BloomWatch earned First Prize, the Arts & Technology Award, and Global Nominee status at the NASA International Space Apps Challenge 2025."
      }
    },
    {
      "title": {
        "vi": "Điều tôi học được",
        "en": "What I learned"
      },
      "body": {
        "vi": "Thời hạn 48 giờ dạy em cách giới hạn phạm vi thật dứt khoát và tin tưởng đồng đội ở phần họ mạnh nhất. Làm việc tốt với dữ liệu mở phụ thuộc vào khả năng truyền đạt rõ ràng chẳng kém gì bản thân dữ liệu.",
        "en": "A 48-hour deadline taught me to scope ruthlessly and to trust teammates with the parts they knew best. Good open-data work is as much about clear communication as about the data itself."
      }
    }
  ],
  "ecome": [
    {
      "title": {
        "vi": "Bối cảnh & vấn đề",
        "en": "Problem"
      },
      "body": {
        "vi": "Nhiều cộng đồng nông thôn và trung tâm bảo trợ trẻ em ở Việt Nam còn thiếu giáo dục môi trường thực tiễn và hạ tầng cơ bản như nước sạch, chiếu sáng và cầu an toàn.",
        "en": "Many rural communities and childcare centers in Vietnam lack experiential environmental education and basic infrastructure such as clean water, lighting, and safe bridges."
      }
    },
    {
      "title": {
        "vi": "Vai trò của tôi",
        "en": "My role"
      },
      "body": {
        "vi": "Em sáng lập và điều hành ECOMe, điều phối tình nguyện viên, lên kế hoạch chiến dịch thực địa và giữ cân bằng giữa hoạt động nâng cao nhận thức và những công trình cụ thể.",
        "en": "I founded and chair ECOMe, coordinating volunteers, planning field campaigns, and keeping the balance between awareness work and concrete construction."
      }
    },
    {
      "title": {
        "vi": "Giải pháp & công nghệ",
        "en": "Solution & technology"
      },
      "body": {
        "vi": "ECOMe kết hợp các chiến dịch nâng cao nhận thức môi trường với hành động thực địa trực tiếp: các cuộc thi sáng kiến cho thanh thiếu niên song song với giếng nước sạch, cầu nông thôn, đèn đường và bếp ăn cộng đồng.",
        "en": "ECOMe pairs environmental awareness campaigns with direct field work: youth idea competitions alongside clean-water wells, rural bridges, street lighting, and community kitchens."
      }
    },
    {
      "title": {
        "vi": "Kết quả",
        "en": "Result"
      },
      "body": {
        "vi": "Các chiến dịch thực địa đã tiếp cận khoảng 1.800 người tại Đồng bằng sông Cửu Long, Hải Dương và Quảng Ninh; hỗ trợ 6 trại trẻ và trung tâm bảo trợ; trao khoảng 115 triệu VNĐ quà tặng và cứu trợ, trong đó có hỗ trợ 225 hộ dân sau thiên tai tại Đắk Lắk.",
        "en": "Field campaigns have reached about 1,800 people across the Mekong Delta, Hai Duong, and Quang Ninh; supported 6 orphanages and childcare centers; and delivered around VND 115 million in gifts and aid, including relief for 225 households after disasters in Dak Lak."
      }
    },
    {
      "title": {
        "vi": "Điều tôi học được",
        "en": "What I learned"
      },
      "body": {
        "vi": "Điều hành ECOMe dạy em rằng tác động bền vững cần sự kiên nhẫn trong tổ chức hậu cần, chứ không chỉ thiện chí — và rằng lắng nghe cộng đồng trước tiên là bước thiết kế quan trọng nhất.",
        "en": "Leading ECOMe taught me that lasting impact needs patient logistics, not just good intentions — and that listening to a community first is the most important design step."
      }
    }
  ],
  "ecomesort": [
    {
      "title": {
        "vi": "Bối cảnh & vấn đề",
        "en": "Problem"
      },
      "body": {
        "vi": "Rác thải đô thị và giao thông tại Việt Nam ít được phân loại tại nguồn vì người dân thiếu hướng dẫn tức thời, khiến tỷ lệ tái chế thấp và gia tăng ô nhiễm.",
        "en": "Municipal and transport waste in Vietnam is rarely sorted at the source because people lack immediate guidance, which lowers recycling efficiency and adds to pollution."
      }
    },
    {
      "title": {
        "vi": "Vai trò của tôi",
        "en": "My role"
      },
      "body": {
        "vi": "Em góp phần thiết kế quy trình nhận diện và các tính năng cộng đồng kết nối người dùng với mạng lưới tái chế địa phương.",
        "en": "I helped design the recognition workflow and the community features that connect users to local recycling networks."
      }
    },
    {
      "title": {
        "vi": "Giải pháp & công nghệ",
        "en": "Solution & technology"
      },
      "body": {
        "vi": "Nhóm thiết kế một ứng dụng di động tích hợp AI giúp nhận diện loại rác và hướng dẫn phân loại đúng, kết nối người dùng với mạng lưới tái chế gần nhất, và bổ sung các tính năng cộng đồng xanh để khuyến khích thói quen bền vững.",
        "en": "We designed an AI-enabled mobile app that identifies waste types and guides correct disposal, links users to nearby recycling networks, and adds green-community features to encourage sustainable habits."
      }
    },
    {
      "title": {
        "vi": "Kết quả",
        "en": "Result"
      },
      "body": {
        "vi": "ECOMeSort đạt Giải Ba Cuộc thi Ý tưởng Bảo vệ Môi trường ngành Giao thông Vận tải 2026 (UTC) và được chọn vào chương trình AI for Good Vietnam 2026.",
        "en": "ECOMeSort won Third Prize at the 2026 Environmental Protection Ideas in the Transport Sector Competition (UTC) and was selected for the AI for Good Vietnam 2026 program."
      }
    },
    {
      "title": {
        "vi": "Điều tôi học được",
        "en": "What I learned"
      },
      "body": {
        "vi": "Em học được rằng thay đổi hành vi cần nhiều hơn độ chính xác — hướng dẫn phải nhanh, đơn giản và dễ tha thứ cho sai sót thì mới thực sự được dùng.",
        "en": "I learned that changing behavior needs more than accuracy — the guidance has to be fast, simple, and forgiving of mistakes to be used at all."
      }
    }
  ],
  "vex-v5-robotics": [
    {
      "title": {
        "vi": "Bối cảnh & vấn đề",
        "en": "Problem"
      },
      "body": {
        "vi": "Các giải VEX V5 cấp quốc gia đòi hỏi độ ổn định kết cấu, phân phối nguồn tin cậy và độ bền cơ khí dưới áp lực thi đấu cao.",
        "en": "National VEX V5 competitions demand structural stability, reliable power distribution, and mechanical resilience under intense match conditions."
      }
    },
    {
      "title": {
        "vi": "Vai trò của tôi",
        "en": "My role"
      },
      "body": {
        "vi": "Em là thành viên kỹ thuật trực tiếp, phụ trách thi công cơ khí, phân phối nguồn và đi dây hệ thống, tập trung vào độ vững kết cấu và khả năng sẵn sàng thi đấu.",
        "en": "I was a hands-on technical member responsible for mechanical construction, power distribution, and system wiring, with a focus on structural integrity and competition readiness."
      }
    },
    {
      "title": {
        "vi": "Giải pháp & công nghệ",
        "en": "Solution & technology"
      },
      "body": {
        "vi": "Nhóm thiết kế và chế tạo một robot cân bằng giữa độ bền, hệ thống dây gọn gàng và vận hành ổn định suốt những ngày thi đấu dài.",
        "en": "The team designed and built a robot balancing durability, clean wiring, and dependable operation across long competition days."
      }
    },
    {
      "title": {
        "vi": "Kết quả",
        "en": "Result"
      },
      "body": {
        "vi": "Robot nhận Build Award tại Giải Vô địch Quốc gia VEX V5 Robotics 2026, được ghi nhận về chất lượng chế tạo, tay nghề và độ tin cậy vận hành.",
        "en": "The robot received the Build Award at the Vietnam VEX V5 Robotics National Championship 2026, recognized for construction quality, craftsmanship, and operational reliability."
      }
    },
    {
      "title": {
        "vi": "Điều tôi học được",
        "en": "What I learned"
      },
      "body": {
        "vi": "Robotics đặt nền cho niềm yêu thích phần cứng của em: đi dây cẩn thận và quản lý nguồn tuy không hào nhoáng nhưng quyết định việc mọi thứ còn lại có hoạt động hay không. Đây cũng là một lý do em muốn tiến về hướng bán dẫn và các hệ thống vật lý.",
        "en": "Robotics grounded my interest in hardware: careful wiring and power management are not glamorous, but they decide whether everything else works. This is part of why I want to move toward semiconductors and physical systems."
      }
    }
  ]
};

export const workPhotos: Record<string, string[]> = {
  "dual-image-reversible-data-hiding": [
    "/images/work/dual-image/vnict-presentation.jpeg"
  ],
  "safestride": [
    "/images/work/safestride/wico-gold-award.jpeg"
  ],
  "ecome": [
    "/images/work/ecome/community-certificate.jpg",
    "/images/work/ecome/community-event.jpeg",
    "/images/work/ecome/volunteer-program.jpeg",
    "/images/work/ecome/community-outreach.jpeg"
  ],
  "ecomesort": [
    "/images/work/ecomesort/recognition.png",
    "/images/work/ecomesort/certificates.png"
  ]
};
