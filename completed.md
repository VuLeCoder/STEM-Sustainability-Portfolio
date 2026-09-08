# Tiến độ redesign portfolio

## 2026-09-08 — Journey Preview trên Home theo final plan

- Thay danh sách hoạt động cũ bằng section Hành trình: pill, headline, mô tả ngắn, bộ chọn năm và một milestone card. Đặt ngay sau About, phía trên Projects; giữ anchor #journey và khoảng chừa navbar 92px/84px.
- Chọn một mốc mỗi năm từ CV: PIMSO 2022, truyền thông CNH Panthers 2024–2025, BloomWatch/NASA Space Apps 2025, SafeStride/WICO 2026. Mặc định hiển thị năm mới nhất; không bịa mốc 2023. Nội dung VI/EN tập trung trong siteContent.home.journeyPreview.
- Card trắng bo 24px, nền năm xanh nhạt, container 1200px đồng bộ About/Hero; mobile xếp dọc, bộ chọn năm cuộn ngang khi thiếu chỗ. Dùng typography cho phần năm, không dùng ảnh stock hay ảnh minh chứng giả.
- Nút năm dùng keyboard native, aria-pressed/aria-controls, focus rõ; vùng nội dung aria-live. Chuyển card fade/translate 380ms, tắt với reduced motion. CTA dẫn tới /[locale]/journey; không thêm dependency hay redesign trang Journey trong lượt này.
- Giữ nguyên section Projects và các section legacy khác ngoài phạm vi yêu cầu. Kiểm tra đạt: npm run lint, npm run typecheck, git diff --check; chưa QA trực quan trên trình duyệt.

## 2026-09-08 — Khoảng chừa navbar bên trong section khi nhảy aside

- Bỏ scroll-margin-top 104px ngoài section để điểm neo bắt đầu ở mép section đích, tránh để navbar nằm trên section trước.
- Chừa padding trên bên trong các section có anchor: tối thiểu 92px desktop (top 20px + navbar 56px + đệm 16px), 84px mobile (top 12px + 56px + 16px). Section có padding lớn hơn giữ nguyên.
- Áp dụng khoảng chừa cho footer trên Home; không thêm khoảng trắng cuối trang để ép footer ngắn lên đầu viewport. Giữ native smooth scroll và reduced motion.
- Giữ nguyên Hero và nội dung/card các section. Kiểm tra lint, typecheck, git diff --check; chưa kiểm tra trực quan trên trình duyệt.

## 2026-09-08 — Card About responsive 4 / 2 / 1 cột

- Từ 1280px: 4 cột; 768–1279px: 2 cột; dưới 768px: 1 cột. Giữ container 1200px và khoảng cách Hero–About đã duyệt.
- Thu padding card về 24px, heading 22px, khoảng cách số–heading 20px và line-height mô tả 1.7 để card gọn hơn; gap 16px ở layout 4 cột.
- Heading có chiều cao tối thiểu 2 dòng trên màn hình lớn để căn hàng mô tả; card tự tăng chiều cao, không cắt nội dung VI/EN. Giữ nguyên toàn bộ dữ kiện CV.
- Kiểm tra: lint, typecheck và git diff --check; chưa kiểm tra trực quan trên trình duyệt.

## 2026-09-08 — Thu khoảng cách giữa Hero và About Me

- Giảm padding dưới Hero từ 64–120px xuống 32–56px và padding trên About từ 64–112px xuống 32–56px; tổng khoảng đệm giữa nội dung hai section còn 64–112px thay vì 128–232px.
- Giữ nguyên khoảng cách navbar–Hero, bố cục text/ảnh, nội dung About và padding dưới About.
- Kiểm tra: lint, typecheck và git diff --check.

## 2026-09-08 — About Me theo CV và final plan

- Đọc toàn bộ 2 trang CV.pdf; lọc nội dung từ Profile, Education, Research, Leadership và STEM Programs. Không công khai email/số điện thoại trong CV; giữ placeholder liên hệ đã duyệt.
- Thay About cũ bằng pill, headline lớn, intro chuyên Vật lý Nguyễn Huệ và 4 trụ cột: nghiên cứu, công nghệ vì con người, cộng đồng, hợp tác/chia sẻ. Nội dung VI/EN tập trung tại siteContent.home.aboutMe, có ghi chú nguồn CV.
- Giữ đúng mức độ đóng góp: đồng tác giả VNICT, thực tập VAST, sáng lập ECOMe và tham gia hỗ trợ các chương trình STEM; số tiếp cận ECOMe ghi rõ khoảng 1.800 người.
- Thêm dải học thuật SAT 1440, IELTS Academic 7.0, AP Physics C 5/5 đúng CV; không suy diễn môn thành phần AP hay thêm số liệu.
- Thiết kế nền xanh nhạt, card trắng bo 24px, border/shadow nhẹ, grid 2 cột tablet/desktop và 1 cột mobile. Khung tối đa 1200px đồng bộ Hero; không lặp ảnh chân dung hay thêm CTA sang About page.
- Tái sử dụng reveal theo nhóm và reduced-motion hiện có; giữ anchor #about cho sidebar. Không thay Hero, navbar, footer hoặc các section khác.

## 2026-09-08 — Cân khoảng cách text và ảnh Hero

- Giảm gap từ 40–96px xuống 24–48px; thu container riêng Hero từ 1400px xuống 1200px và giữ căn giữa.
- Cân hai cột về tỷ lệ 1.1:0.9, căn ảnh về đầu cột trên tablet/desktop để giảm khoảng trống giữa ảnh và text.
- Giữ ảnh tối đa 480px, bố cục mobile một cột và khoảng cách với navbar đã duyệt; không thay container của section khác.

## 2026-09-08 — Thu khoảng cách Hero với navbar

- Giảm padding trên Hero còn 24–40px và bỏ min-height theo viewport để không tạo khoảng trống căn giữa dư thừa.
- Giữ khoảng thoáng phía dưới và bố cục hai cột/mobile hiện có.

## 2026-09-08 — Hero Home theo final plan

- Layout hai cột từ tablet: slogan/chủ đề hiện có, tên và giới thiệu ngắn bên trái; ảnh chân dung thật bên phải. Mobile một cột, text trước ảnh.
- Dùng nội dung VI/EN và đường dẫn ảnh từ siteContent, không thêm dữ kiện hay slogan tự bịa.
- Typography sans-serif, tên tối đa 80px (mobile 40–52px), pill xanh nhạt, nền #F7F8F5 và khoảng trắng thoáng.
- Card ảnh tỷ lệ 4:5, bo góc 32px (mobile 24px), cover, border/shadow nhẹ; giữ priority và cập nhật sizes responsive.
- Bỏ CTA, số thứ tự và caption trang trí cũ khỏi Hero; giữ fade nhẹ theo nhóm thay vì từng dòng, hỗ trợ reduced motion hiện có.
- Chỉ chỉnh Hero, giữ nguyên các section còn lại để triển khai tiếp từng phần.

## 2026-09-08 — Sidebar nổi và hiệu ứng zoom

- Thu sidebar còn 85% khi không hover; trở về 100% khi hover hoặc focus bên trong, kết hợp độ mờ hiện có với transition 220ms.
- Giữ position fixed, nâng z-index lên 60 (trên navbar và nội dung, dưới skip link hỗ trợ truy cập).
- Bỏ toàn bộ padding chừa sidebar của Home/footer và override tương ứng: sidebar nổi độc lập, không chiếm chỗ hay thu hẹp bố cục trang. Thay thế cách dành khoảng trống của bản trước.
- Thiết bị không hỗ trợ hover giữ kích thước/độ rõ đầy đủ; reduced motion vẫn tắt transition. Giữ nguyên breakpoint và điều hướng section.

## 2026-09-08 — Điều chỉnh sidebar thành điều hướng section Home

- Thay liên kết chuyển trang bằng anchor About, Journey, Projects và Contact → footer (`#footer-contact`), không trỏ vào CTA Contact cũ.
- Cuộn mượt bằng CSS scroll-behavior hiện có, chừa 104px cho navbar; reduced motion tắt cuộn mượt theo thiết lập hệ thống.
- Theo dõi vị trí cuộn để tô xanh section đang xem, kể cả khi cuộn tay và đến cuối trang; không active section khi còn ở Hero.
- Pill dọc có icon nét mảnh, mờ nhẹ khi không tương tác và rõ khi hover/focus, transition 220ms; thiết bị cảm ứng giữ độ rõ đầy đủ.
- Hiện từ 768px khi chiều cao ít nhất 480px; dành khoảng trống bên trái Home/footer dưới 1600px để tránh che nội dung. Mobile và màn hình quá thấp ẩn sidebar.
- Giữ nhãn VI/EN, tooltip khi hover/focus, nút thu gọn/mở lại và vùng bấm 44px. Thay thế cách điều hướng/breakpoint của bản sidebar trước.

## 2026-09-08 — Sidebar Home

- Thêm sidebar pill trắng, icon Home/Journey/Projects; Home active nền xanh đậm. Các liên kết giữ locale hiện tại.
- Chỉ mount tại `/[locale]/home`, cố định bên trái ở giữa màn hình; vẫn giữ navbar.
- Chọn breakpoint `100rem` (1600px mặc định), thay vì 1440px, để container Home 86rem có đủ khoảng trống hai bên và không bị sidebar che hay ép nhỏ.
- Hover/focus hiện nhãn VI/EN bên phải, chuyển động 200ms và hỗ trợ reduced motion; vùng bấm 44px, focus rõ ràng.
- Nút thu gọn ẩn các liên kết, giữ nút mở lại với `aria-expanded`/`aria-controls`; chưa thêm shortcut email vì chưa có địa chỉ thật.
- Không thay đổi nội dung các section Home; không thêm dependency.

## 2026-09-08 — Icon mạng xã hội và liên hệ ở footer

- Dưới mô tả: thay chữ bằng ba icon SVG Facebook, GitHub, LinkedIn, liên kết tạm `#` theo yêu cầu; cấu hình tại `siteContent.chrome.socials`.
- Contact chỉ còn icon Gmail và điện thoại kèm placeholder “Chưa cập nhật” / “Coming soon”, chưa gắn địa chỉ hay số điện thoại giả.
- Icon mạng xã hội dạng nút tròn 44px, đồng bộ màu footer, có hover, focus và nhãn hỗ trợ trình đọc màn hình.
- Dùng SVG nội bộ, không thêm thư viện.

## 2026-09-08 — Thu gọn navbar và nút ngôn ngữ

- Navbar rộng tối đa 1024px, cao 56px; tự co theo màn hình và giữ chiều cao trên mobile.
- Thu logo navbar xuống 44px, tinh chỉnh padding và bo góc; không thay đổi logo footer.
- Thay bộ chọn VI/EN bằng một nút: đang dùng tiếng Anh hiện EN, bấm chuyển sang tiếng Việt và hiện VI (và ngược lại), giữ trang hiện tại.
- Nút xanh nhạt có hover, focus, nhãn hỗ trợ trình đọc màn hình; dùng được trong vòng focus của menu mobile và đóng menu khi đổi ngôn ngữ.

## 2026-09-08 — Logo NCP

- Tạo ảnh logo NCP bằng skill imagegen và công cụ tạo ảnh tích hợp (built-in), màu xanh trầm trên nền trắng ngà, nét chữ bo mềm và chi tiết hướng lên ở chữ P.
- Asset: public/images/brand/ncp-logo.png. Giữ nguyên ảnh gốc được tạo; không thay đổi factual content.
- Thay placeholder logo ở navbar và footer; đường dẫn tập trung tại siteContent.chrome.logoImage.
- Prompt: Use case: logo-brand. Create one polished raster logo image for a personal STEM and sustainability portfolio, used at small size in a navbar and footer. Exact text: "NCP". A distinctive compact geometric NCP monogram, clearly readable letters, confident rounded strokes with a subtle upward growth cut in the P. Flat dark muted green #2F6B3E on a solid warm off-white #F7F8F5 rounded-square badge. Square composition, badge fills canvas, monogram fills central 80 percent with balanced narrow margins. Minimal sophisticated Swiss design, clean crisp edges, no gradients, no shadows, no mockup, no additional text, no leaves, no atom icons, no watermark. Single finished logo only.

## 2026-09-08 — Navbar

- Hoàn thành navbar nền trắng, bo góc, shadow nhẹ, ba mục Home/Journey/Projects và active pill xanh.
- Logo placeholder; VI/EN giữ trang hiện tại, luôn hiện trên mobile.
- Mobile menu dạng panel bo góc, Escape và điều hướng bàn phím; tự đóng khi chuyển sang desktop.
- Home link trỏ về /[locale]; route hiện tại vẫn chuyển tiếp tới /[locale]/home trong giai đoạn này.

## 2026-09-08 — Footer

- Hoàn thành footer ba cột desktop, bố cục gọn trên tablet/mobile.
- Nền SVG placeholder đơn giản với blur và dark overlay; chữ không bị blur.
- Logo, tên, bio, Explore → Journey/Projects, social/contact và copyright VI/EN.
- Thông tin thiếu hiện “Chưa cập nhật” / “Coming soon”, không tạo link giả.
- Asset và nhãn mới tập trung tại siteContent.chrome trong src/constants/content.ts.
- Dọn CSS navbar/footer cũ; style mới tại src/app/chrome.css, hỗ trợ reduced motion và focus visible.

## Kiểm tra

- Đã chạy thành công: npm run lint, npm run typecheck, npm run build và git diff --check.
- Chưa kiểm tra trực quan bằng trình duyệt.
