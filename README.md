# Top 5 Laptop Lập Trình Cho Sinh Viên CNTT — Landing Page tối ưu GEO

Landing page dạng blog đánh giá/so sánh sản phẩm (HTML/CSS/JS thuần, không framework)
với chủ đề **"Top 5 Laptop Lập Trình Cho Sinh Viên CNTT (15–30 Triệu) Đáng Mua Nhất 2026"**,
được tối ưu để các công cụ tìm kiếm AI (Perplexity, Google Gemini, Bing AI, ChatGPT Search)
dễ dàng đọc hiểu, trích xuất và đề xuất nội dung.

## Cấu trúc thư mục

```
Web/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # Tự động deploy lên GitHub Pages khi push nhánh main
├── google34cdd3d4f7cdaad7.html # File xác minh quyền sở hữu domain trên Google Search Console
├── index.html                  # Toàn bộ trang (Top 5, cấu hình, so sánh, đánh giá chi tiết, FAQ, JSON-LD)
├── styles.css                  # CSS thuần, mobile-first, không phụ thuộc thư viện ngoài
├── script.js                   # JS thuần tối giản: progress bar, back-to-top, active tab
├── robots.txt                  # Cho phép crawler AI (GPTBot, PerplexityBot, ClaudeBot, Google-Extended...)
├── sitemap.xml                 # Sitemap khai báo URL trang
└── README.md
```

Không có framework, không có bước build — chỉ cần mở `index.html` hoặc deploy thẳng thư mục.

> **Lưu ý về `google34cdd3d4f7cdaad7.html`:** đây là file xác minh quyền sở hữu domain
> qua phương thức "HTML file" của Google Search Console. Nếu bạn xác minh một domain
> khác, hãy thay bằng file mà Search Console cấp riêng cho domain đó (tên file và nội
> dung bên trong đều phải khớp với domain thật).

## Checklist đã triển khai

1. **Từ khóa & FAQ** — H1/H2 nhúng từ khóa mục tiêu ("laptop lập trình cho sinh viên",
   "laptop CNTT giá rẻ", "laptop chạy Docker"...); 6 câu hỏi FAQ viết theo ngôn ngữ tự
   nhiên người dùng hay hỏi AI (ví dụ: "Laptop bao nhiêu RAM là đủ cho sinh viên CNTT?").
2. **Chất lượng nội dung & định dạng** — bullet points trong từng thẻ sản phẩm, 2 bảng
   (cấu hình cần có + so sánh chi tiết 5 mẫu), phần "Nguồn tham khảo" ở cuối trang.
3. **Schema Markup (JSON-LD)** — `WebSite`, `Organization`, `Person`, `WebPage`,
   `BreadcrumbList`, `Article`, `ItemList` (5 `Product` xếp hạng), `FAQPage` trong
   `<head>`, nhúng dạng `@graph`.
4. **Hiệu suất & UX** — Semantic HTML, CSS/JS tối giản không phụ thuộc ngoài, responsive
   mobile-first (tab điều hướng cuộn ngang trên mobile, lưới sản phẩm co giãn), dark mode
   tự động theo hệ thống.
5. **Testing** — hướng dẫn kiểm thử AI Search bên dưới.

## Triển khai (Deploy)

### GitHub Pages (tự động qua Actions)

Repo đã có sẵn workflow `.github/workflows/deploy-pages.yml`:

1. Vào **Settings → Pages** của repo GitHub → mục "Build and deployment" →
   chọn Source = **GitHub Actions**.
2. Push (hoặc merge) vào nhánh `main` — workflow sẽ tự chạy và deploy toàn bộ
   thư mục gốc lên GitHub Pages.
3. URL công khai sẽ có dạng `https://tbill111.github.io/Seo_Geo/`. Nếu domain thật
   khác đi, cập nhật lại các URL trong `index.html` (canonical, Open Graph, JSON-LD),
   `robots.txt` và `sitemap.xml` rồi commit lại.
4. Nếu domain xác minh trên Google Search Console khác với URL trên, hãy thay file
   `google34cdd3d4f7cdaad7.html` bằng file xác minh đúng domain đó.

### Vercel

1. Đăng nhập [vercel.com](https://vercel.com), chọn **Add New → Project**.
2. Import repository GitHub này (`tbill111/Seo_Geo`, nhánh chứa mã nguồn).
3. Vercel tự nhận đây là static site (không cần Build Command / Output Directory —
   để trống hoặc chọn "Other").
4. Bấm **Deploy**. Sau khi xong, thay các URL `https://tbill111.github.io/Seo_Geo/`
   trong `index.html`, `robots.txt`, `sitemap.xml` bằng domain thật (ví dụ
   `https://lapdev-guide.vercel.app`) rồi deploy lại.

### Netlify

1. Đăng nhập [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
2. Chọn repo GitHub, nhánh tương ứng.
3. Build command: để trống. Publish directory: `/` (thư mục gốc).
4. Deploy, sau đó cập nhật lại URL thật như hướng dẫn ở phần Vercel.

### Chạy thử cục bộ

Không bắt buộc server, nhưng để tránh lỗi CORS khi test JS, có thể chạy:

```bash
npx serve .
# hoặc
python -m http.server 8080
```

rồi mở `http://localhost:8080`.

## Hướng dẫn kiểm tra khả năng hiển thị trên AI Search

### 1. Kiểm tra Schema Markup hợp lệ

- Dán URL trang (sau khi deploy) vào
  [Google Rich Results Test](https://search.google.com/test/rich-results) —
  xác nhận `Article` và `FAQPage` được nhận diện không lỗi.
- Dán vào [Schema.org Validator](https://validator.schema.org/) để kiểm tra toàn bộ `@graph`
  (bao gồm cả `ItemList`/`Product` của 5 mẫu laptop).

### 2. Kiểm tra tốc độ & UX

- Chạy [PageSpeed Insights](https://pagespeed.web.dev/) hoặc Lighthouse (DevTools → Lighthouse)
  cho cả Mobile và Desktop — mục tiêu Performance ≥ 90 vì trang không dùng thư viện ngoài.

### 3. Xác nhận crawler AI được phép truy cập

- Mở `https://<domain>/robots.txt` — đảm bảo `GPTBot`, `PerplexityBot`, `ClaudeBot`,
  `Google-Extended`, `bingbot` đều có `Allow: /`.
- Có thể dùng công cụ "URL Inspection" trong Google Search Console để xác nhận Googlebot
  crawl được trang (điều kiện để xuất hiện trong AI Overviews).

### 4. Kiểm tra thực tế trên các công cụ AI Search

Sau khi trang được index (thường mất vài ngày đến vài tuần), thử đặt các câu hỏi sau
trực tiếp trên từng công cụ để xem trang có được trích dẫn không:

**Trên Perplexity ([perplexity.ai](https://www.perplexity.ai)):**
```
Laptop nào tốt nhất cho sinh viên CNTT trong tầm giá 15-30 triệu?
```
```
Laptop bao nhiêu RAM là đủ để học lập trình?
```

**Trên Google Gemini / AI Overviews:**
```
So sánh MacBook Air M2 và laptop Windows cho sinh viên lập trình
```
Kiểm tra phần "Nguồn" (Sources) bên dưới câu trả lời AI Overviews xem trang có được liệt kê không.

**Trên Bing AI / Copilot ([bing.com/chat](https://www.bing.com/chat)):**
```
Laptop nào chạy tốt Docker và Machine Learning cho sinh viên?
```

**Mẹo "ép" AI crawl trang nhanh hơn:**
- Dán trực tiếp URL trang vào khung chat của Perplexity hoặc Bing Copilot kèm câu hỏi,
  ví dụ: `Hãy tóm tắt nội dung tại https://<domain> và cho biết laptop nào tốt nhất
  cho sinh viên CNTT?` — việc này khiến bot crawl/đọc trang ngay tại thời điểm hỏi,
  không cần chờ index định kỳ.
- Submit URL thủ công qua **Google Search Console → URL Inspection → Request Indexing**
  để đẩy nhanh việc Googlebot crawl, gián tiếp giúp AI Overviews cập nhật sớm hơn.
- Theo dõi log server (nếu có) để xác nhận các user-agent `GPTBot`, `PerplexityBot`,
  `ClaudeBot` đã từng truy cập trang.

### 5. Ghi chú về nội dung mẫu

Nội dung đánh giá, giá tham khảo, tác giả và phần "Nguồn tham khảo" trong `index.html`
được biên soạn làm ví dụ minh họa cho đồ án GEO — giá và thông số nên được xác minh lại
với nhà sản xuất trước khi dùng cho mục đích thật. Trước khi publish thật, hãy thay các
URL nguồn tham khảo bằng liên kết đã xác minh và cập nhật thông tin tác giả cho đúng
thực tế.
