# Top 4 Điện Thoại Đáng Mua Nhất 2026 — Landing Page tối ưu GEO

Landing page dạng blog đánh giá/so sánh sản phẩm (HTML/CSS/JS thuần, không framework)
với chủ đề **"Top 4 Điện Thoại Đáng Mua Nhất 2026 (8–34 Triệu)"**, được tối ưu để các
công cụ tìm kiếm AI (Perplexity, Google Gemini, Bing AI, ChatGPT Search) dễ dàng đọc
hiểu, trích xuất và đề xuất nội dung.

## Cấu trúc thư mục

```
Web/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # Tự động deploy lên GitHub Pages khi push nhánh main
├── google34cdd3d4f7cdaad7.html # File xác minh quyền sở hữu domain trên Google Search Console
├── index.html                  # Toàn bộ trang (Top 4, cấu hình, so sánh, đánh giá chi tiết, FAQ, JSON-LD)
├── styles.css                  # CSS thuần, mobile-first, không phụ thuộc thư viện ngoài
├── script.js                   # JS thuần tối giản: progress bar, back-to-top, active tab
├── robots.txt                  # Cho phép crawler AI (GPTBot, PerplexityBot, ClaudeBot, Google-Extended...)
├── sitemap.xml                 # Sitemap khai báo URL trang
└── README.md
```

Không có framework, không có bước build — chỉ cần mở `index.html` hoặc deploy thẳng thư mục.

> **Lưu ý về `google34cdd3d4f7cdaad7.html`:** đây là file xác minh quyền sở hữu domain
> qua phương thức "HTML file" của Google Search Console, đã xác minh thành công cho
> `https://tbill111.github.io/Seo_Geo/`. **Không xoá file này** — Google yêu cầu giữ
> lại để duy trì trạng thái xác minh. Nếu đổi sang domain khác, thay bằng file mà
> Search Console cấp riêng cho domain đó.

## Checklist đã triển khai

1. **Từ khóa & FAQ** — H1/H2 nhúng từ khóa mục tiêu ("điện thoại đáng mua 2026",
   "iPhone 17", "điện thoại chơi game", "điện thoại camera đẹp"...); 6 câu hỏi FAQ
   viết theo ngôn ngữ tự nhiên người dùng hay hỏi AI (ví dụ: "Điện thoại bao nhiêu
   RAM là đủ dùng mượt lâu dài?").
2. **Chất lượng nội dung & định dạng** — bullet points trong từng thẻ sản phẩm, 2 bảng
   (cấu hình cần chú ý + so sánh chi tiết 4 mẫu), phần "Nguồn tham khảo" ở cuối trang.
3. **Schema Markup (JSON-LD)** — `WebSite`, `Organization`, `Person`, `WebPage`,
   `BreadcrumbList`, `Article`, `ItemList` (4 `Product` xếp hạng, mỗi sản phẩm có
   `offers` + `review` để qua Rich Results Test không lỗi), `FAQPage` trong `<head>`,
   nhúng dạng `@graph`.
4. **Hiệu suất & UX** — Semantic HTML, CSS/JS tối giản không phụ thuộc ngoài, responsive
   mobile-first (tab điều hướng cuộn ngang trên mobile, lưới 4 sản phẩm co giãn), dark
   mode tự động theo hệ thống.
5. **Testing** — hướng dẫn kiểm thử Schema + AI Search bên dưới.

## Triển khai (Deploy)

### GitHub Pages (tự động qua Actions) — đang dùng cho property hiện tại

Repo đã có sẵn workflow `.github/workflows/deploy-pages.yml`, tự deploy khi push vào
nhánh `main`. URL công khai: `https://tbill111.github.io/Seo_Geo/` — property này đã
được xác minh trong Google Search Console.

Nếu domain thật khác đi, cập nhật lại các URL trong `index.html` (canonical, Open
Graph, JSON-LD), `robots.txt` và `sitemap.xml`, đồng thời thay file xác minh Google
cho đúng domain mới rồi commit lại.

### Vercel / Netlify

Có thể import trực tiếp repo GitHub này (`tbill111/Seo_Geo`) vào Vercel hoặc Netlify —
không cần Build Command (site tĩnh). Sau khi deploy, nhớ cập nhật lại URL thật trong
`index.html`, `robots.txt`, `sitemap.xml` nếu domain khác với GitHub Pages.

### Chạy thử cục bộ

```bash
npx serve .
# hoặc
python -m http.server 8080
```

rồi mở `http://localhost:8080`.

## Hướng dẫn kiểm tra Schema và khả năng hiển thị trên AI Search

### 1. Kiểm tra Schema Markup hợp lệ

- Dán URL trang vào [Google Rich Results Test](https://search.google.com/test/rich-results)
  — xác nhận `Article`, `FAQPage` và 4 `Product` (trong `ItemList`) không có lỗi
  nghiêm trọng. Mỗi `Product` đã có `offers` (giá) và `review` (đánh giá biên tập) để
  đáp ứng yêu cầu tối thiểu của Google; `aggregateRating` cố tình không thêm vì trang
  không có dữ liệu đánh giá khách hàng thật — thêm số liệu giả sẽ là review giả mạo.
- Dán vào [Schema.org Validator](https://validator.schema.org/) để kiểm tra toàn bộ `@graph`.

### 2. Kiểm tra tốc độ & UX

- Chạy [PageSpeed Insights](https://pagespeed.web.dev/) hoặc Lighthouse (DevTools → Lighthouse)
  cho cả Mobile và Desktop — mục tiêu Performance ≥ 90 vì trang không dùng thư viện ngoài.

### 3. Xác nhận crawler AI được phép truy cập

- Mở `https://tbill111.github.io/Seo_Geo/robots.txt` — đảm bảo `GPTBot`, `PerplexityBot`,
  `ClaudeBot`, `Google-Extended`, `bingbot` đều có `Allow: /`.
- Trong Google Search Console, vào **Sơ đồ trang web** để chắc chắn `sitemap.xml` đã
  được nộp, sau đó dùng **Kiểm tra URL → Yêu cầu lập chỉ mục** để đẩy nhanh việc index.

### 4. Kiểm tra thực tế trên các công cụ AI Search

Sau khi trang được index (thường mất vài ngày đến vài tuần), thử đặt các câu hỏi sau
trực tiếp trên từng công cụ để xem trang có được trích dẫn không:

**Trên Perplexity ([perplexity.ai](https://www.perplexity.ai)):**
```
Điện thoại nào đáng mua nhất năm 2026 trong tầm giá 8-34 triệu?
```
```
Điện thoại bao nhiêu RAM là đủ dùng mượt lâu dài?
```

**Trên Google Gemini / AI Overviews:**
```
So sánh iPhone 17 và Samsung Galaxy S25 Ultra
```
Kiểm tra phần "Nguồn" (Sources) bên dưới câu trả lời AI Overviews xem trang có được liệt kê không.

**Trên Bing AI / Copilot ([bing.com/chat](https://www.bing.com/chat)):**
```
Điện thoại nào chơi game mượt nhất trong tầm giá dưới 30 triệu?
```

**Mẹo "ép" AI crawl trang nhanh hơn:**
- Dán trực tiếp URL trang vào khung chat của Perplexity hoặc Bing Copilot kèm câu hỏi,
  ví dụ: `Hãy tóm tắt nội dung tại https://tbill111.github.io/Seo_Geo/ và cho biết
  điện thoại nào đáng mua nhất?` — việc này khiến bot crawl/đọc trang ngay tại thời
  điểm hỏi, không cần chờ index định kỳ.
- Submit URL thủ công qua **Google Search Console → URL Inspection → Request Indexing**
  để đẩy nhanh việc Googlebot crawl, gián tiếp giúp AI Overviews cập nhật sớm hơn.

### 5. Ghi chú về nội dung mẫu

Nội dung đánh giá, giá tham khảo, tác giả và phần "Nguồn tham khảo" trong `index.html`
được biên soạn làm ví dụ minh họa cho đồ án GEO — giá và thông số nên được xác minh lại
với nhà sản xuất trước khi dùng cho mục đích thật. Trước khi publish thật, hãy thay các
URL nguồn tham khảo bằng liên kết đã xác minh và cập nhật thông tin tác giả cho đúng
thực tế.
