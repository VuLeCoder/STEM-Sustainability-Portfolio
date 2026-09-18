# Checklist hoàn thiện nội dung website

Rà soát theo mã nguồn ngày 17/09/2026. Mục tiêu: hoàn thiện nội dung, giữ nguyên phong cách và bố cục đã thống nhất.

> Dùng checklist này cho cấu trúc hiện tại. `CONTENT_GUIDE.md` còn một số hướng dẫn cũ về Journey và trang chi tiết, không còn phù hợp. Website hiện dùng đường dẫn `/vi/projects`, `/en/projects` cho Work & Impact; trang chi tiết là `/{locale}/projects/{slug}`. Không cần tạo lại `/journey`.

## 1. Ưu tiên chuẩn bị trước

- [ ] Ảnh của 4 chứng chỉ Coursera.
- [ ] Nội dung case study đầy đủ cho SafeStride, BloomWatch, ECOMe và bài báo VNICT: vấn đề, đóng góp cá nhân, cách thực hiện, kết quả, bài học.
- [ ] PDF bài báo VNICT hoặc liên kết bản công bố, slide và sơ đồ phương pháp nếu có.
- [ ] Ảnh bìa thật cho BloomWatch; ảnh sản phẩm, hoạt động và minh chứng phù hợp cho từng bài.
- [ ] Liên kết thật của GitHub, LinkedIn, Facebook muốn công khai.
- [ ] Đối chiếu bản CV đang tải xuống với `CV_New.docx`, điểm số và thành tích trên website.

Không cần hoàn thành ngay ô Research “Sắp cập nhật”; đây là ô đã chủ động để dành cho nghiên cứu tiếp theo.

## 2. Bản đồ file cần sửa

| Nội dung | File / vị trí |
| --- | --- |
| Hero, lời dẫn Research, Future Vision, tên và ảnh 4 chứng chỉ | `src/constants/home.ts` |
| About Me, điểm số học thuật, liên hệ, mạng xã hội, thông tin SEO chung | `src/constants/profile.ts` |
| 5 dự án trên Home và dữ liệu gốc của chúng trên Work: SafeStride, ECOMe, ECOMeSort, BloomWatch, VNICT | `src/constants/project.ts` → `projects` |
| Tổng hợp Work, VAST, VEX, hoạt động cộng đồng, nội dung riêng của case study | `src/constants/work.ts` |
| Album dùng chung, thông tin PIMSO/Panthers và nguồn dữ liệu VAST trên Home | `src/constants/experiences.ts` → `experienceItems` |
| Research trên Home: nội dung VAST viết trực tiếp và ô Sắp cập nhật | `src/components/home-research.tsx` |
| CV được nút Hero tải xuống | `public/documents/CV.pdf` |
| Đường dẫn nút tải CV nếu đổi tên file | `src/app/[locale]/home/page.tsx` |
| Ảnh chứng chỉ mới | `public/images/certificates/` (tạo nếu chưa có) |
| Ảnh bìa đang dùng | `public/images/project/` |
| Album mới đề xuất | `public/images/work/<slug>/` (tạo nếu cần) |
| PDF bài báo, slide, tài liệu mới | `public/documents/` |

**Quy tắc:** file trong `public/images/...` được khai báo bằng `/images/...`; file trong `public/documents/...` được khai báo bằng `/documents/...`. Chép file vào thư mục chưa đủ, cần gắn đường dẫn vào dữ liệu. Nội dung có `vi`/`en` cần cập nhật cả hai bản.

`CV_New.docx` và `noi-dung-website.docx` là tài liệu nguồn, website không tự đọc hoặc đồng bộ hai file này.

## 3. Home: hồ sơ, học thuật và chứng chỉ

### CV và liên hệ

- [x] Đã có nút tải CV và file `public/documents/CV.pdf`.
- [ ] Xác nhận PDF này là bản cuối cùng; nếu cần, xuất PDF từ CV đã duyệt và thay đúng `public/documents/CV.pdf` (chú ý chữ hoa/thường).
- [ ] Kiểm tra tên, email, điện thoại, trường và tình trạng học tập trong `profile.ts` khớp với CV.
- [ ] Thay `profileChrome.socials[*].href` đang là `#` bằng URL thật. Không dùng tài khoản nào thì bỏ mục đó.

Lưu ý: nút Hero hiện trỏ trực tiếp đến `/documents/CV.pdf`. `contact.cvFile` trong `profile.ts` vẫn là `null`; chỉ sửa field này sẽ không đổi nút Hero.

### Điểm số học thuật

Vị trí: `src/constants/profile.ts` → `profileHome.aboutMe.credentials`. Tuy tên biến nằm dưới `aboutMe`, giao diện hiện hiển thị điểm ở section Academics & Certifications.

- [ ] Đối chiếu SAT 1440, IELTS Academic 7.5 và AP Physics C 5/5 với chứng nhận.
- [ ] Bổ sung SAT Math 800/800 nếu muốn hiển thị riêng.
- [ ] Bổ sung GPA lớp 10: 9.1 và lớp 11: 9.2, ghi rõ lớp/năm học và thang điểm sau khi xác nhận.
- [ ] Xác nhận tên chính xác của môn AP Physics C theo chứng nhận.

Giữ nguyên section About Me như đã thống nhất; không chuyển điểm trở lại section này. Chứng nhận điểm có thể dùng để đối chiếu, không bắt buộc đăng ảnh công khai.

### 4 chứng chỉ tự học

Vị trí: `src/constants/home.ts` → `homeCertificates.courses[*].imageSrc`. Cả 4 đường dẫn hiện còn trống; chức năng bấm card mở ảnh đã có.

| Hoàn thành | Chứng chỉ | Tên file ảnh đề xuất |
| --- | --- | --- |
| [ ] | AI Fundamentals | `public/images/certificates/ai-fundamentals.webp` |
| [ ] | Vibe Coding with Claude Code | `public/images/certificates/claude-code.webp` |
| [ ] | AI for Data Analysis | `public/images/certificates/ai-data-analysis.webp` |
| [ ] | Vibe Coding with GitHub Copilot | `public/images/certificates/github-copilot.webp` |

Ví dụ sau khi có file thật: `imageSrc: "/images/certificates/ai-fundamentals.webp"`.

- [ ] Đối chiếu tên khóa học và trạng thái hoàn thành với từng chứng chỉ.
- [ ] Dùng ảnh đủ rõ để đọc tên khóa học, tên người học và đơn vị cấp khi mở lớn.
- [ ] Nếu có URL xác minh, lưu lại để bổ sung sau. Cấu hình card hiện chỉ có `title` và `imageSrc`; thêm nút xác minh sẽ cần chỉnh component.

### Future Vision — bổ sung nếu muốn cá nhân hóa hơn

- [ ] Duyệt nội dung `homeNarrative.vision` trong `home.ts`.
- [ ] Có thể bổ sung ngành muốn học, câu hỏi nghiên cứu quan tâm và mục tiêu 2–3 năm tới bằng một đoạn ngắn, cụ thể.

## 4. Research

### VNICT 2025

Dữ liệu: `project.ts` → slug `dual-image-reversible-data-hiding`. Album: `experiences.ts` → `vnict-2025`.

- [ ] Tên chính thức của bài báo, danh sách tác giả và thông tin hội nghị/kỷ yếu.
- [ ] Abstract ngắn: bài toán, phương pháp, điểm mới và kết quả đã xác nhận.
- [ ] Đóng góp cụ thể của bản thân: phần nghiên cứu, thực nghiệm, viết hoặc trình bày đã đảm nhiệm.
- [ ] Sơ đồ phương pháp và hình/bảng kết quả có chú thích dễ hiểu.
- [ ] PDF bài báo được phép chia sẻ hoặc URL bản công bố; slide nếu có.
- [ ] Điền bài học cá nhân: khó khăn, cách giải quyết và điều muốn nghiên cứu tiếp.

Đặt PDF trong `public/documents/`, rồi thêm vào `externalLinks` của bài trong `project.ts`, ví dụ đường dẫn `/documents/vnict-2025-paper.pdf` khi file đã tồn tại. Trang chi tiết hiện hỗ trợ hiển thị liên kết này; không cần tạo một trang PDF riêng.

### Thực tập VAST

Dữ liệu trang chi tiết: `work.ts` → `additions`, slug `vast-research-internship`.

- [ ] Xác nhận thời gian, phòng nghiên cứu, vai trò và tên đề tài được phép công bố.
- [ ] Mô tả nhiệm vụ thực tế, công cụ đã dùng, phần tự thực hiện và sản phẩm đầu ra.
- [ ] Thêm kết quả khi đã có, thay câu “Kết quả nghiên cứu sẽ được cập nhật”.
- [ ] Bổ sung ảnh, báo cáo, poster hoặc xác nhận thực tập nếu có.
- [ ] Viết bài học từ quá trình đọc tài liệu, thử nghiệm và làm việc cùng nhóm nghiên cứu.

Đồng bộ thông tin tóm tắt trong `experiences.ts` → `vast-2026` và `home-research.tsx` (mô tả/thời gian VAST đang viết trực tiếp ở đây). Không tự gộp bài VNICT thành kết quả kỳ thực tập nếu chưa có căn cứ.

### Ô Research thứ ba

- [x] Giữ “Sắp cập nhật” theo kế hoạch hiện tại.
- [ ] Khi có nghiên cứu mới: chuẩn bị tên, mô tả, vai trò, trạng thái, ảnh/tài liệu; thêm entry ở `work.ts` và thay card trong `home-research.tsx` bằng liên kết đến bài đó.

## 5. Nội dung cần có cho mỗi case study

Không cần viết quá dài. Mỗi bài nên trả lời được các câu hỏi sau:

- [ ] **Header:** tên, năm, mô tả 1–2 câu, vai trò cụ thể, giải thưởng nếu có.
- [ ] **Problem:** ai gặp vấn đề gì, bối cảnh và mục tiêu của dự án/hoạt động?
- [ ] **My role:** bản thân chịu trách nhiệm việc gì, đã trực tiếp làm gì? Nội dung này nằm trong Project info ở header, không tạo lại section Role bên dưới.
- [ ] **Solution:** đã làm theo những bước nào, sử dụng công cụ gì, quyết định quan trọng và khó khăn thực tế là gì?
- [ ] **Result:** đầu ra, số liệu có căn cứ, thành tích và trạng thái hiện tại; phân biệt kết quả cá nhân với kết quả cả nhóm.
- [ ] **What I learned:** một bài học cụ thể, một điều sẽ làm khác hoặc bước phát triển tiếp theo.
- [ ] **Photos:** ảnh có mô tả và chú thích đúng sự kiện, ưu tiên ảnh thể hiện sản phẩm hoặc đóng góp.
- [ ] **Links:** bài đăng, demo, repository, PDF hoặc minh chứng phù hợp nếu có; không bắt buộc mỗi bài phải có đủ mọi loại.

### Ghi nội dung vào field nào?

| Nội dung | 5 dự án gốc trong `project.ts` | Entry trực tiếp trong `work.ts` |
| --- | --- | --- |
| Vấn đề | `problem` hoặc `details.objective` | `caseStudy.problem` |
| Vai trò | `role` | `role` hoặc `caseStudy.role` |
| Cách thực hiện | `details.solution`, `details.process` | `caseStudy.solution` |
| Kết quả | `result`, có thể thêm `details.evidence` | `caseStudy.result` hoặc `result` |
| Bài học | `details.lessons` | `caseStudy.lessons` |
| Liên kết | `externalLinks` | `externalLinks` |
| Ảnh bìa | `coverImage` | `coverImage` |

Các field nội dung trên dùng `{ vi: "...", en: "..." }`. `caseStudy` thuộc `WorkEntry`, không thêm trực tiếp vào object kiểu `Project` trong `project.ts`. Nếu cần nội dung riêng cho trang chi tiết của 5 dự án gốc, bổ sung override theo slug trong `workEntries` của `work.ts`.

**Riêng ECOMe:** `work.ts` đang ghi đè `result` từ `project.ts`. Khi sửa số liệu/kết quả, kiểm tra cả hai vị trí để Home và trang chi tiết thống nhất.

### Checklist theo từng dự án

| Hoàn thành | Bài | Cần bổ sung / rà soát | Nguồn nội dung |
| --- | --- | --- | --- |
| [ ] | SafeStride | Đóng góp cá nhân, luồng sử dụng, công nghệ thực sự đã dùng, thử nghiệm và giới hạn; ảnh giao diện/thiết bị, minh chứng WICO. Đã có URL YouTube, cần kiểm tra và đặt nhãn đúng nội dung video. | `project.ts` → `safestride` |
| [ ] | BloomWatch | Vai trò trong 48 giờ hackathon, dữ liệu NASA cụ thể, cách xử lý/kể chuyện, ảnh sản phẩm, link Space Apps/demo, minh chứng từng giải. Ảnh bìa hiện vẫn là placeholder. | `project.ts` → `bloomwatch` |
| [ ] | ECOMe | Năm hoạt động còn thiếu trong project; cách tổ chức, đóng góp của bản thân, căn cứ số người tiếp cận và 6 trung tâm; ảnh hoạt động. Thay lời nháp “CV ghi nhận…” sau khi duyệt. | `project.ts` → `ecome` và override trong `work.ts` |
| [ ] | ECOMeSort | Phần AI thực sự triển khai, quy trình phân loại rác, vai trò cá nhân, mức độ hoàn thiện, ảnh demo, link bài đăng; phân biệt Giải Ba với việc tham dự AI for Good. | `project.ts` → `ecomesort` |
| [ ] | VEX V5 Robotics | Phần cơ khí/điện/lập trình trực tiếp phụ trách, vấn đề robot gặp và cách khắc phục, ảnh robot/đội, minh chứng Build Award, bài học kỹ thuật. | `work.ts` → `additions`, slug `vex-v5-robotics` |

Không thêm các số liệu độ chính xác, độ trễ, mức tiết kiệm điện hoặc số người dùng nếu chưa có phép đo/tài liệu hỗ trợ. Với BloomWatch, ghi rõ cấp độ của từng giải theo chứng nhận để tránh nhầm giải tại điểm thi với giải toàn cầu.

### Các hoạt động còn lại

- [ ] `community-service`: mô tả hai chiến dịch, thời gian, vai trò, ảnh và nguồn số liệu 115 triệu VNĐ/225 hộ. Đây là mục thiện nguyện riêng; không tự gán toàn bộ số liệu này cho ECOMe.
- [ ] `open-data-camp`: nội dung đã tổ chức/thiết kế, đóng góp cụ thể, kết quả và ảnh.
- [ ] `robotics-summer-camp`: phần kỹ thuật đã hỗ trợ, hoạt động với học sinh, kết quả và ảnh.
- [ ] `tsukuba-learning`: hoạt động học tập cụ thể và bài học cá nhân, ảnh phù hợp.
- [ ] `japanese-festival`: nhiệm vụ tình nguyện cụ thể, kết quả và ảnh.

Năm mục trên nằm trong `work.ts` → `communityActivities`.

- [ ] `panthers-2024`: công việc truyền thông đã làm, sản phẩm và điều học được.
- [ ] `pimso-2022`: đối chiếu tên vòng thi, môn thi và hạng giải từ chứng nhận; bổ sung quá trình chuẩn bị/bài học nếu phù hợp.

Hai mục cuối lấy tiêu đề, mô tả và ảnh từ `experiences.ts`, được chuyển thành card trong `work.ts` → `activities`. Muốn thêm `caseStudy` riêng cần bổ sung tại bước chuyển đổi này theo ID tương ứng.

## 6. Ảnh và tài liệu: đặt ở đâu, gắn vào đâu?

Album đã có cơ chế xem nhiều ảnh và mở lớn; không cần thiết kế lại để thêm ảnh.

| Bài | Nơi khai báo album hiện tại |
| --- | --- |
| SafeStride | `experiences.ts` → `safestride-2026.images` |
| ECOMe | `experiences.ts` → `ecome-2025.images` |
| ECOMeSort | `experiences.ts` → `ecomesort-2026.images` |
| BloomWatch | Thêm `images` cho `bloomwatch-2025` trong `experiences.ts` |
| VNICT | `experiences.ts` → `vnict-2025.images` |
| VAST | Thêm `images` cho `vast-2026` trong `experiences.ts` |
| Panthers / PIMSO | `experiences.ts` → `panthers-2024.images` / `pimso-2022.images` |
| VEX và các hoạt động còn lại | Thêm `images` vào entry tương ứng trong `work.ts` |

Ảnh cũ vẫn nằm trong `public/images/journey/`. Thư mục này chứa tài sản đang dùng, không đồng nghĩa còn trang Journey; không xóa hoặc đổi tên nếu chưa cập nhật đường dẫn.

- [ ] Phân loại ảnh thật theo từng bài; có thể đặt ảnh mới trong `public/images/work/<slug>/`.
- [ ] Điền `alt.vi`, `alt.en` mô tả đúng ảnh; nhiều ảnh cũ đang để trống và được thay bằng mô tả chung.
- [ ] Thêm `caption.vi/en` khi cần giải thích sự kiện, thời gian, vai trò hoặc kết quả.
- [ ] Chọn ảnh bìa rõ chủ thể và ảnh album có nội dung khác nhau; gợi ý 3–6 ảnh cho dự án trọng điểm, 1–3 ảnh cho hoạt động nhỏ, không bắt buộc đủ số lượng.
- [ ] Nén ảnh nhưng giữ chữ trên chứng chỉ đọc được; dùng đúng định dạng và tên file không dấu, không khoảng trắng.

Ví dụ một phần tử trong `images` — chỉ dùng sau khi có file thật:

```ts
{
  src: "/images/work/safestride/demo.webp",
  alt: {
    vi: "Mô tả đúng nội dung ảnh bằng tiếng Việt",
    en: "Accurate description of the image in English",
  },
  caption: { vi: "Chú thích ảnh", en: "Photo caption" },
}
```

`entry.images` trong `work.ts` được ưu tiên hơn album từ `experiences.ts`. Nếu đặt `images: []`, album liên kết sẽ không được dùng. Ảnh bìa `coverImage` và album là hai cấu hình riêng; cập nhật một nơi không đảm bảo nơi còn lại tự thay đổi.

PDF cho trang chi tiết nên thêm bằng `externalLinks`. Trang chi tiết hiện không truyền `evidencePdf` từ experience sang PhotoGallery, nên chỉ điền `evidencePdf` ở `experiences.ts` sẽ chưa tạo link PDF tại đây. Video có thể thêm dưới dạng URL trong `externalLinks`; nhúng trình phát ngay trong bài cần chỉnh component riêng.

## 7. Mẫu nội dung bạn có thể gửi để cập nhật

Nếu chưa muốn sửa TypeScript, tạo file `CONTENT_TO_ADD.md` tại thư mục gốc và lặp mẫu dưới đây cho từng bài. Đây là file biên tập, website không tự đọc.

```md
## Tên bài — slug
- Năm/thời gian:
- Vai trò của mình:
- Mô tả ngắn:
- Problem:
- Công việc mình trực tiếp làm:
- Solution (quy trình/công nghệ):
- Result (số liệu, giải thưởng, trạng thái):
- What I learned:
- Link bài đăng/demo/repository/tài liệu:
- Ảnh: tên file + mô tả + chú thích:
- Thông tin còn cần xác nhận:
```

Có thể chuẩn bị bản tiếng Việt trước rồi dịch; trước khi đưa lên website cần duyệt cả VI/EN. Không cần sửa nội dung About Me hoặc tạo lại Journey để bổ sung các bài này.

## 8. Checklist trước khi xuất bản

- [ ] Không còn nội dung nháp hoặc “sẽ cập nhật” ngoài những mục chủ động giữ lại.
- [ ] Tên, vai trò, năm, giải thưởng và số liệu thống nhất giữa Home, Work, trang chi tiết và CV.
- [ ] Mỗi card chứng chỉ mở đúng ảnh; Photos có đúng ảnh/chú thích và xem lớn được trên mobile.
- [ ] Nút CV tải đúng PDF; nút “Xem thêm về tôi” cuộn đúng About Me.
- [ ] Kiểm tra các URL bài đăng, demo, tài liệu và mạng xã hội có mở được với người xem thông thường.
- [ ] Kiểm tra cả tiếng Việt và tiếng Anh, trên desktop/mobile; ảnh không lỗi và văn bản không tràn.
- [ ] Điền tên miền thật vào `NEXT_PUBLIC_SITE_URL` trong môi trường build/hosting (có thể dùng `.env.local` khi build local); logic URL nằm ở `src/lib/site-metadata.ts`.
- [ ] Duyệt tên và mô tả SEO trong `profile.ts` → `seo`, ảnh chia sẻ và favicon `src/app/icon.svg`.
- [ ] Sau khi cập nhật dữ liệu, chạy `npm run lint`, `npm run typecheck`, `npm run build` và `git diff --check`.
- [ ] Build và deploy lại để nội dung/ảnh mới xuất hiện trên website đang chạy; kiểm tra sitemap và các trang chi tiết sau deploy.

Checklist này ghi nhận mã nguồn hiện tại, chưa xác minh truy cập các URL ngoài hoặc nội dung từng chứng nhận/PDF.
