# SEO truyền thống vs GEO — Landing Page tối ưu GEO

Landing page dạng blog (HTML/CSS/JS thuần, không framework) minh họa chủ đề
**"Sự khác biệt giữa SEO truyền thống và GEO (Generative Engine Optimization)"**,
được tối ưu để các công cụ tìm kiếm AI (Perplexity, Google Gemini, Bing AI, ChatGPT Search)
dễ dàng đọc hiểu, trích xuất và đề xuất nội dung.

## Cấu trúc thư mục

```
Web/
├── index.html        # Toàn bộ trang (bài viết, FAQ, bảng so sánh, JSON-LD)
├── css/
│   └── style.css      # CSS thuần, mobile-first, không phụ thuộc thư viện ngoài
├── js/
│   └── main.js         # JS thuần tối giản: progress bar, back-to-top, active TOC
├── robots.txt          # Cho phép crawler AI (GPTBot, PerplexityBot, ClaudeBot, Google-Extended...)
├── sitemap.xml          # Sitemap khai báo URL trang
└── README.md
```

Không có framework, không có bước build — chỉ cần mở `index.html` hoặc deploy thẳng thư mục.

## Checklist đã triển khai

1. **Từ khóa & FAQ** — H1/H2 nhúng từ khóa mục tiêu ("GEO là gì", "SEO truyền thống",
   "tối ưu hóa AI Search"...); 6 câu hỏi FAQ viết theo ngôn ngữ tự nhiên người dùng hay hỏi AI.
2. **Chất lượng nội dung & định dạng** — bullet points, 1 bảng so sánh SEO vs GEO,
   phần "Nguồn tham khảo" ở cuối trang.
3. **Schema Markup (JSON-LD)** — `WebSite`, `Organization`, `Person`, `WebPage`,
   `BreadcrumbList`, `Article`, `FAQPage` trong `<head>`, nhúng dạng `@graph`.
4. **Hiệu suất & UX** — Semantic HTML, CSS/JS tối giản không phụ thuộc ngoài, responsive
   mobile-first, dark mode tự động theo hệ thống.
5. **Testing** — hướng dẫn kiểm thử AI Search bên dưới.

## Triển khai (Deploy)

### Vercel

1. Đăng nhập [vercel.com](https://vercel.com), chọn **Add New → Project**.
2. Import repository GitHub này (`tbill111/Seo_Geo`, nhánh chứa mã nguồn).
3. Vercel tự nhận đây là static site (không cần Build Command / Output Directory —
   để trống hoặc chọn "Other").
4. Bấm **Deploy**. Sau khi xong, thay các URL placeholder
   `https://your-domain.example/` trong `index.html`, `robots.txt`, `sitemap.xml`
   bằng domain thật (ví dụ `https://seo-geo.vercel.app`) rồi deploy lại.

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
- Dán vào [Schema.org Validator](https://validator.schema.org/) để kiểm tra toàn bộ `@graph`.

### 2. Kiểm tra tốc độ & UX

- Chạy [PageSpeed Insights](https://pagesight.web.dev/) hoặc Lighthouse (DevTools → Lighthouse)
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
GEO (Generative Engine Optimization) khác gì so với SEO truyền thống?
```
```
Làm thế nào để website xuất hiện trong câu trả lời của AI Search?
```

**Trên Google Gemini / AI Overviews:**
```
So sánh SEO truyền thống và GEO
```
Kiểm tra phần "Nguồn" (Sources) bên dưới câu trả lời AI Overviews xem trang có được liệt kê không.

**Trên Bing AI / Copilot ([bing.com/chat](https://www.bing.com/chat)):**
```
Schema Markup có bắt buộc để tối ưu GEO không?
```

**Mẹo "ép" AI crawl trang nhanh hơn:**
- Dán trực tiếp URL trang vào khung chat của Perplexity hoặc Bing Copilot kèm câu hỏi,
  ví dụ: `Hãy tóm tắt nội dung tại https://<domain> và trả lời câu hỏi: GEO là gì?`
  — việc này khiến bot crawl/đọc trang ngay tại thời điểm hỏi, không cần chờ index định kỳ.
- Submit URL thủ công qua **Google Search Console → URL Inspection → Request Indexing**
  để đẩy nhanh việc Googlebot crawl, gián tiếp giúp AI Overviews cập nhật sớm hơn.
- Theo dõi log server (nếu có) để xác nhận các user-agent `GPTBot`, `PerplexityBot`,
  `ClaudeBot` đã từng truy cập trang.

### 5. Ghi chú về nội dung mẫu

Nội dung bài viết, tác giả và phần "Nguồn tham khảo" trong `index.html` được biên soạn
làm ví dụ minh họa cho đồ án. Trước khi dùng cho mục đích thật, hãy thay các URL nguồn
tham khảo bằng liên kết đã xác minh và cập nhật thông tin tác giả cho đúng thực tế.
