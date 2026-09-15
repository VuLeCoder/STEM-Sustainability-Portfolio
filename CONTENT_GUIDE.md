# Hướng dẫn hoàn thiện và cập nhật nội dung portfolio

Cập nhật phần liên hệ và route ngày 14/09/2026; các phần khác theo rà soát ngày 12/09/2026. Tài liệu này hướng dẫn thao tác; các ví dụ bên dưới không phải dữ kiện thật và chưa được đưa vào website.

## 1. Chỉnh nội dung ở đâu?

| File | Nội dung |
| --- | --- |
| `src/constants/profile.ts` | Thông tin cá nhân, ảnh chân dung, logo, liên hệ, giới thiệu |
| `src/constants/project.ts` | Danh sách dự án, mô tả, ảnh bìa, liên kết, nội dung trang dự án |
| `src/constants/journey.ts` | Hoạt động, giải thưởng, các mốc hành trình và nhãn phân loại |
| `src/constants/common.ts` | Điều hướng, nhãn dùng chung, nền footer, ghép dữ liệu thành `siteContent` |
| `public/` | File ảnh, tài liệu được phép công khai |

Sửa dữ liệu tại file theo lĩnh vực, không tạo bản sao trong `common.ts`. Những field có `vi` và `en` phải cập nhật cả hai ngôn ngữ, giữ cùng dữ kiện. Tên riêng như tên dự án dùng một chuỗi chung.

Đường dẫn thực tế có locale: `/vi/home`, `/en/home`, `/vi/projects`, `/en/projects`, `/vi/journey`, `/en/journey`. Tên route dự án là **projects**, không phải project.

## 2. Checklist placeholder cần hoàn thiện

### Liên hệ và footer

- [ ] Trong `profile.ts`, thay `profileChrome.socials[*].href` của Facebook, GitHub, LinkedIn từ `#` sang URL thật. Không có tài khoản thì bỏ phần tử tương ứng để ẩn icon.
- [x] Email/Gmail và điện thoại đã thống nhất nguồn dữ liệu tại `contact.email` và `contact.phone` trong `profile.ts`. Chỉ sửa hai field này khi đổi thông tin; footer tự lấy giá trị qua `profileChrome.contacts`.
- `icon: "gmail"` chỉ chọn biểu tượng, không phải một địa chỉ liên hệ riêng. `label.vi/en` là nhãn truy cập; `content` là nội dung hiển thị. Giữ tham chiếu như sau, không nhập lại địa chỉ:

```ts
{
  icon: "gmail",
  label: { vi: "Email", en: "Email" },
  content: contact.email,
},
```

Điện thoại tương tự dùng `content: contact.phone`. Footer hiện hiển thị văn bản, không có liên kết `mailto:`/`tel:`. Nếu không muốn công khai một mục, bỏ phần tử tương ứng khỏi `profileChrome.contacts`.

- [x] Nền footer đã dùng `/images/home/footer-background.png`; nhãn placeholder nền đã được bỏ.
- [x] Hai trang `/contact` và `/activities` đã bỏ ở cả VI/EN, không còn trong sitemap. Liên hệ nằm ở footer (`#footer-contact`); hoạt động và giải thưởng nằm ở `/journey`. URL trang đã bỏ sẽ không còn được xuất khi build mới.

**Lưu ý:** `contact.cvFile` vẫn là `null`, `contact.socialLinks` là mảng rỗng. Icon mạng xã hội của footer vẫn lấy từ `profileChrome.socials`.

Nếu muốn công khai CV: đưa bản PDF đã duyệt vào `public/documents/cv.pdf`; đường dẫn website là `/documents/cv.pdf`. Cần nối nút tải/xem CV với đường dẫn này; chỉ điền `contact.cvFile` không tự tạo nút. File CV ở thư mục gốc dự án không tự trở thành tài liệu tải công khai.

### Dự án

Tất cả các mục dưới đây sửa trong mảng `projects` của `project.ts`.

| Dự án | `coverImage` hiện tại | `externalLinks` | Cần bổ sung khác |
| --- | --- | --- | --- |
| SafeStride | Placeholder | Rỗng | — |
| ECOMe | Placeholder | Đã có bài Facebook | Chưa có `year` |
| ECOMeSort | Placeholder | Rỗng | — |
| BloomWatch | Placeholder | Rỗng | — |
| Dual-image Reversible Data Hiding | Placeholder | Rỗng | — |

- [ ] Thay 5 ảnh bìa bằng ảnh thật được phép sử dụng.
- [ ] Thêm link cho 4 dự án chưa có: demo, repository, bài giới thiệu hoặc minh chứng phù hợp. Kiểm tra link ECOMe có thể xem công khai.
- [ ] Nếu chưa có link để công khai, có thể để `externalLinks: []`; giao diện hiện sẽ báo “Chưa cập nhật liên kết”. Muốn bỏ lời báo này thì cần chỉnh nhánh hiển thị thiếu link trong Home và Projects, không đặt `#` để giả làm link thật.
- [ ] Xác nhận năm ECOMe rồi thêm `year` dạng chuỗi, ví dụ `"2025"` nếu đúng dữ kiện.
- [ ] Duyệt lại câu “CV ghi nhận…” ở `ECOMe.result` và chuyển thành lời giới thiệu chính thức sau khi xác nhận số liệu.

`projectHome.featuredProjects.imagePlaceholder` và `pendingLink` là nhãn dự phòng: có thể giữ trong code, chúng không xuất hiện trên card khi đã có ảnh/link hợp lệ.

### Nội dung còn thiếu nhưng không nhất thiết đang xuất hiện

- [x] `profile.ts` → `about.futureGoal` còn câu `[Định hướng học thuật và mục tiêu dài hạn sẽ cập nhật]`. Trang About hiện không render field này; có thể hoàn thiện hoặc loại bỏ field nếu không dùng.
- [ ] Duyệt nội dung giới thiệu được diễn giải từ CV, số liệu, vai trò và tên giải thưởng cho cả VI/EN trước khi xuất bản.
- [x] `projects[*].details` chưa được điền. Đây là field tùy chọn; các phần thiếu không render, không bắt buộc phải thêm nếu chỉ dùng trang danh sách.
- Đã xóa `/about`, `/projects/[slug]`, `/contact`, `/activities` (14/09/2026). Chỉ giữ Home, Journey, Projects; section About trên Home vẫn giữ nguyên.

Journey hiện không có placeholder trong các mốc đã khai báo. `journeyPageContent.empty` là thông báo dự phòng khi không có dữ liệu, không phải phần cần xóa.

## 3. Cách thêm dự án mới

1. Chuẩn bị ảnh bìa, tên, mô tả VI/EN, vai trò, kết quả và link đã xác minh.
2. Đặt ảnh vào `public/images/projects/`, ví dụ `ten-du-an.webp`.
3. Mở `src/constants/project.ts`, thêm một object vào **bên trong mảng `projects`**, trước dấu `] satisfies readonly Project[];`. Nhớ dấu phẩy giữa các object.
4. Thay toàn bộ nội dung minh họa trong mẫu sau bằng dữ kiện thật:

```ts
{
  slug: "ten-du-an",
  featured: false,
  title: "Tên dự án",
  year: "2026",
  category: { vi: "Lĩnh vực dự án", en: "Project category" },
  summary: {
    vi: "Mô tả ngắn dự án giải quyết việc gì và dành cho ai.",
    en: "A short description of the project and its intended users.",
  },
  role: { vi: "Vai trò thực tế của bạn", en: "Your actual role" },
  fields: {
    vi: ["Lĩnh vực thứ nhất", "Lĩnh vực thứ hai"],
    en: ["First field", "Second field"],
  },
  result: {
    vi: "Kết quả đã được xác nhận hoặc trạng thái hiện tại.",
    en: "Verified outcomes or current status.",
  },
  externalLinks: [],
  coverImage: "/images/projects/ten-du-an.webp",
},
```

Để thêm link, thay mảng rỗng bằng các phần tử dạng `{ label: { vi: "Xem dự án", en: "View project" }, href: "https://example.com" }`, rồi thay URL ví dụ bằng URL thật.

### Quy tắc field và thứ tự

- Bắt buộc: `slug`, `featured`, `title`, `category`, `summary`, `role`, `fields`, `result`, `externalLinks`, `coverImage`.
- Tùy chọn: `year`, `problem`, `achievementShort`, `details`.
- `slug` phải duy nhất, nên viết thường không dấu, nối bằng dấu gạch ngang. Hiện dùng làm định danh dự án, không tạo URL trang chi tiết.
- `year` là **chuỗi** ở project, nhưng là **số** ở journey.
- Trang Projects hiển thị theo thứ tự mảng, không tự sắp theo năm.
- Home chỉ lấy **5 dự án đầu tiên** qua `slice(0, 5)`. Muốn dự án mới xuất hiện ở Home, đưa nó vào 5 vị trí đầu.
- Trong 5 dự án đó, project đầu tiên có `featured: true` được chọn mặc định; nếu không có thì chọn mục đầu. `featured` không tự đưa dự án ở vị trí thứ 6 trở đi lên Home, cũng không lọc danh sách trang Projects.
- Home và danh sách Projects dùng link HTTP(S) đầu tiên trong `externalLinks` cho CTA. Dùng URL đầy đủ `https://...`.
- `problem` và `details` được giữ làm dữ liệu dự phòng; hiện không có trang case study riêng để render các nội dung này.
- Thêm dự án vào dữ liệu rồi build lại; dự án xuất hiện trên các giao diện hiện có, không tạo trang riêng hay thêm URL vào sitemap.

### Xem thêm / Ẩn bớt tự hoạt động

| Màn hình | Số card hiện rõ khi thu gọn | Hàng preview blur |
| --- | --- | --- |
| Từ 1024px, 3 cột | 6 | Hàng 3 |
| 768–1023px, 2 cột | 4 | Hàng 3 |
| Dưới 768px, 1 cột | 3 | Hàng 4 |

Các hàng sau preview ẩn hoàn toàn. Nút chỉ xuất hiện khi số project vượt ngưỡng tương ứng. Không cần sửa component khi thêm dữ liệu.

## 4. Cách thêm activity mới

Thêm object vào mảng `journeyItems` trong `src/constants/journey.ts`. Mẫu minh họa:

```ts
{
  id: "hoat-dong-moi-2026",
  year: 2026,
  type: "activity",
  order: 4,
  featured: false,
  title: {
    vi: "Tên hoạt động thực tế",
    en: "Actual activity name",
  },
  shortDescription: {
    vi: "Vai trò của bạn, công việc đã làm và tác động được xác nhận.",
    en: "Your role, work completed and verified impact.",
  },
},
```

- `id`: duy nhất trong toàn bộ mảng; dùng tên không dấu và năm để dễ quản lý.
- `year`: năm thực tế, kiểu số. Năm mới tự tạo nhóm timeline, không cần thêm header bằng tay.
- `type`: một trong `activity`, `award`, `competition`, `workshop`, `milestone`; nhãn VI/EN đã có sẵn tại `journeyPageContent.types`.
- `title`, `shortDescription`: bắt buộc đủ VI/EN; viết ngắn, không bịa ngày hoặc thành tích.
- `order`: tùy chọn, nhưng nên điền để chủ động sắp xếp trong năm. Số nhỏ đứng trước; bỏ trống được tính là `0`, có thể nhảy lên đầu năm. Đây là thứ tự biên tập, không phải ngày tháng.
- `featured`: tùy chọn, điều khiển mốc chọn cho Home; không ảnh hưởng việc mục đó xuất hiện trên trang Journey.

Trang Journey tự sắp năm mới → cũ và mặc định mở năm mới nhất.

## 5. Cách thêm award mới

Giải thưởng dùng **cùng mảng `journeyItems`**, không tạo mảng riêng. Thêm object giống activity nhưng dùng `type: "award"`:

```ts
{
  id: "giai-thuong-moi-2026",
  year: 2026,
  type: "award",
  order: 5,
  featured: false,
  title: {
    vi: "Tên giải — Tên cuộc thi",
    en: "Award name — Competition name",
  },
  shortDescription: {
    vi: "Tên dự án hoặc đội, hạng giải và phạm vi giải thưởng đã xác nhận.",
    en: "The project or team, award level and verified competition scope.",
  },
},
```

Chỉ công bố thành tích đã xác nhận. Nếu sự kiện chỉ là tham dự cuộc thi, dùng `competition` hoặc `activity` phù hợp, không ghi như đã nhận giải.

### Đưa activity/award lên Home

Home lấy **tối đa một mục `featured: true` mỗi năm**. Nếu nhiều mục cùng năm được đánh dấu, mục đầu tiên sau khi sắp `order` sẽ được chọn. Nên chỉ đánh dấu một mục mỗi năm; bỏ `featured` hoặc đặt `false` ở mục cũ khi muốn thay thế. Năm không có mục featured sẽ không xuất hiện trong Journey ở Home. Các năm được chọn ở Home hiển thị cũ → mới.

Thêm project không tự tạo activity/award, và ngược lại. Nếu một dự án đạt giải, cập nhật `project.ts` (kết quả dự án) và `journey.ts` (mốc giải thưởng) riêng. Các đoạn giới thiệu ở `profile.ts` cũng không tự đồng bộ số liệu từ hai mảng này.

## 6. Thêm và quản lý ảnh

- File `public/images/projects/ten-du-an.webp` được tham chiếu bằng `/images/projects/ten-du-an.webp` — không đưa chữ `public` vào URL.
- Không đặt ảnh dự án thật dưới `/images/placeholders/`: Home và Projects kiểm tra chuỗi này để hiện khung placeholder thay vì ảnh.
- Dùng tên file dễ hiểu, không dấu, không khoảng trắng; chú ý chữ hoa/thường trên hosting. Nén ảnh trước khi đưa vào và kiểm tra crop trên cả desktop/mobile.
- Ảnh chân dung: sửa `profile.portrait`. Logo: sửa `profileChrome.logoImage`. Nền footer: sửa `siteContent.chrome.footerBackground`.
- Journey đã hỗ trợ `images` và `evidencePdf` trên từng mục trong `src/constants/journey.ts`. Chỉ chép file vào `public` không làm ảnh tự xuất hiện; cần khai báo đường dẫn trong đúng mục.
- Các lời gọi `temporaryImage(...)` hiện là ảnh gán tạm theo yêu cầu để xem bố cục, **chưa xác nhận thuộc hoạt động/giải thưởng tương ứng**. Thay chúng bằng dữ liệu đúng như mẫu dưới trước khi xuất bản. Mục không có ảnh/PDF vẫn là card chữ, không có placeholder.
- Mỗi project hiện có một `coverImage`, chưa hỗ trợ gallery nhiều ảnh bằng cấu hình.
- Chỉ đưa vào `public` tài liệu/ảnh được phép công khai; rà thông tin riêng tư trên chứng nhận, CV và quyền sử dụng ảnh trước khi deploy. File trong `public` có thể truy cập trực tiếp dù giao diện không gắn link.

Ví dụ thêm vào một object trong `journeyItems` (đường dẫn minh họa, cần có file thật):

```ts
images: [
  {
    src: "/images/journey/ten-hoat-dong-01.webp",
    alt: { vi: "Mô tả nội dung ảnh", en: "Description of the image" },
    caption: { vi: "Chú thích đã xác minh", en: "Verified caption" }, // tùy chọn
  },
],
evidencePdf: "/documents/ten-chung-nhan.pdf", // tùy chọn; bỏ nếu không có PDF
```

Thứ tự mảng là thứ tự album. Timeline xem trước tối đa 3 ảnh; ảnh cuối có +N khi còn ảnh. Bấm ảnh hoặc nút Xem hình ảnh/Xem minh chứng để mở cửa sổ, dùng nút mũi tên (hoặc phím trái/phải khi chưa phóng to) để chuyển ảnh. Phóng to rồi cuộn để đọc chứng nhận, Escape để đóng. Ảnh chứng nhận dùng `contain` để không cắt chữ. Album chỉ hiển thị trên trang Journey, không thay section Home hay Projects.

## 7. Kiểm tra trước khi xuất bản

- [ ] Điền tên miền chính thức vào biến môi trường `NEXT_PUBLIC_SITE_URL` trước khi build; cấu hình URL nằm trong `src/lib/site-metadata.ts`. Nếu thiếu cả các biến URL hosting, code fallback về `http://localhost:3000`, ảnh hưởng canonical/sitemap/ảnh chia sẻ.
- [ ] Cân nhắc đồng bộ `src/app/icon.svg` (favicon chữ N) với logo NCP. Ảnh chia sẻ mặc định dùng chân dung.
- [ ] Chạy các lệnh tại thư mục gốc:

```bash
npm run lint
npm run typecheck
npm run build
git diff --check
```

- [ ] Mở cả VI/EN: kiểm tra dấu tiếng Việt, ảnh, link ngoài, email, điện thoại, năm và thành tích.
- [ ] Kiểm tra Home có đúng 5 project mong muốn, Journey Home có đúng mốc featured từng năm.
- [ ] Kiểm tra Projects ở 3/2/1 cột, Xem thêm/Ẩn bớt; Journey có năm mới, thứ tự và accordion đúng.
- [ ] Kiểm tra dự án mới trên Home và Projects ở cả hai ngôn ngữ, bao gồm ảnh và liên kết ngoài.
- [ ] Kiểm tra URL thực tế trong sitemap và canonical sau build/deploy.
- [ ] Website xuất tĩnh (`output: "export"`): sau khi sửa constants/thêm ảnh, cần build và deploy lại để bản đang hoạt động nhận thay đổi.
- [ ] Ghi tóm tắt thay đổi và kết quả kiểm tra vào `completed.md`.

Tài liệu này không xác nhận link ngoài đang truy cập được hoặc hosting đã cấu hình đúng; cần kiểm tra thực tế trước khi public.
