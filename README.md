# Landing Page 1 - Popup xác nhận 18+

## Mô tả

Landing Page này là trang xác nhận độ tuổi (18+) cho chiến dịch quảng cáo Nova855, được thiết kế theo mô hình SHBET với nội dung tiếng Khmer.

## Tính năng

- ✅ Popup xác nhận độ tuổi 18+ bằng tiếng Khmer
- ✅ Checkbox xác nhận với animation mượt mà
- ✅ Nút "TIẾP TỤC" chuyển hướng đến promotionnova855.com
- ✅ Responsive 100% (mobile, tablet, desktop)
- ✅ Loading animation khi chuyển trang
- ✅ Session storage để tránh hiển thị lại popup trong 30 phút
- ✅ Thiết kế đẹp mắt với gradient và shadow
- ✅ Font Khmer chuẩn (Noto Sans Khmer)

## Cấu trúc file

```
landing-page-1/
├── index.html          # File HTML chính
├── style.css           # File CSS styling
├── script.js           # File JavaScript logic
├── logo.png            # Logo Nova855
└── README.md           # File hướng dẫn này
```

## Hướng dẫn deploy lên Vercel

### Phương án 1: Deploy bằng Vercel CLI (Khuyến nghị)

#### Bước 1: Cài đặt Vercel CLI

```bash
npm install -g vercel
```

#### Bước 2: Login vào Vercel

```bash
vercel login
```

Nhập email bạn đã dùng để đăng ký Vercel, sau đó check email để xác nhận.

#### Bước 3: Deploy

```bash
cd landing-page-1
vercel
```

Trả lời các câu hỏi:
- Set up and deploy? → **Y**
- Which scope? → Chọn account của bạn
- Link to existing project? → **N**
- What's your project's name? → **landing-page-1** (hoặc tên khác)
- In which directory is your code located? → **./** (enter)

#### Bước 4: Kết nối domain

```bash
vercel domains add eventnova855.com
```

Vercel sẽ hướng dẫn bạn thêm DNS record:

**Option A: Nameservers (Khuyến nghị)**
- Thay đổi nameservers của domain thành:
  - ns1.vercel-dns.com
  - ns2.vercel-dns.com

**Option B: A Record**
- Type: A
- Name: @
- Value: 76.76.21.21
- TTL: 3600

**Option C: CNAME**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com
- TTL: 3600

Đợi 5-30 phút để DNS propagate, sau đó truy cập https://eventnova855.com để kiểm tra.

---

### Phương án 2: Deploy qua Vercel Dashboard (Dễ hơn)

#### Bước 1: Đăng nhập Vercel

Truy cập [vercel.com](https://vercel.com) và đăng nhập.

#### Bước 2: Tạo project mới

1. Click "Add New" → "Project"
2. Chọn "Import Git Repository" hoặc "Deploy from template"

#### Bước 3: Upload file

**Option A: Từ GitHub (Khuyến nghị)**

1. Tạo repository mới trên GitHub
2. Upload các file trong folder `landing-page-1` lên repo
3. Kết nối Vercel với GitHub repo
4. Click "Deploy"

**Option B: Kéo thả trực tiếp**

1. Nén folder `landing-page-1` thành file ZIP
2. Kéo thả file ZIP vào Vercel dashboard
3. Vercel sẽ tự động deploy

#### Bước 4: Kết nối domain

1. Vào project settings → Domains
2. Click "Add Domain"
3. Nhập: **eventnova855.com**
4. Vercel sẽ hướng dẫn thêm DNS record (giống phương án 1)

---

### Phương án 3: Deploy bằng Vercel Git Integration (Chuyên nghiệp nhất)

#### Bước 1: Push code lên GitHub

```bash
cd landing-page-1
git init
git add .
git commit -m "Initial commit: Landing Page 1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/landing-page-1.git
git push -u origin main
```

#### Bước 2: Import từ GitHub

1. Vào Vercel Dashboard
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Chọn repository vừa tạo
5. Click "Deploy"

#### Bước 3: Kết nối domain

Làm tương tự phương án 2, bước 4.

---

## Cấu hình DNS chi tiết

### Nếu domain mua từ Namecheap:

1. Đăng nhập Namecheap
2. Vào "Domain List" → Click "Manage" bên cạnh eventnova855.com
3. Chọn tab "Advanced DNS"
4. Thêm records sau:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 76.76.21.21 | Automatic |
| CNAME Record | www | cname.vercel-dns.com | Automatic |

5. Đợi 5-30 phút

### Nếu domain mua từ Cloudflare:

1. Đăng nhập Cloudflare
2. Chọn domain eventnova855.com
3. Vào tab "DNS"
4. Thêm records:

| Type | Name | Content | Proxy status |
|------|------|---------|--------------|
| A | @ | 76.76.21.21 | DNS only (gray cloud) |
| CNAME | www | cname.vercel-dns.com | DNS only (gray cloud) |

5. Đợi vài phút (Cloudflare nhanh hơn)

---

## Kiểm tra sau khi deploy

### 1. Kiểm tra trên desktop:
- Mở https://eventnova855.com
- Kiểm tra popup hiển thị đúng
- Thử tick checkbox và click "បន្ត"
- Xem có chuyển đến promotionnova855.com không

### 2. Kiểm tra trên mobile:
- Mở trên điện thoại
- Kiểm tra responsive
- Test checkbox và nút

### 3. Kiểm tra SSL:
- URL phải là HTTPS (có ổ khóa)
- Không có cảnh báo bảo mật

### 4. Kiểm tra tốc độ:
- Trang phải load < 2 giây
- Dùng [PageSpeed Insights](https://pagespeed.web.dev/) để test

---

## Tùy chỉnh nội dung

### Thay đổi link chuyển hướng:

Mở file `script.js`, tìm dòng:

```javascript
window.location.href = 'https://promotionnova855.com';
```

Thay thế bằng link mới.

### Thay đổi màu sắc:

Mở file `style.css`, tìm các biến màu:

```css
/* Màu chính */
background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);

/* Màu cảnh báo */
background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);

/* Màu nút */
background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
```

### Thay đổi nội dung tiếng Khmer:

Mở file `index.html`, chỉnh sửa text trong các thẻ `<p>`, `<h1>`, `<span>`.

---

## Troubleshooting

### Vấn đề 1: Domain không kết nối được

**Giải pháp:**
- Đợi thêm 30-60 phút (DNS propagate mất thời gian)
- Kiểm tra lại DNS records đã đúng chưa
- Xóa cache trình duyệt (Ctrl + Shift + R)
- Thử truy cập từ chế độ ẩn danh

### Vấn đề 2: SSL không hoạt động

**Giải pháp:**
- Vercel tự động cấp SSL sau 5-10 phút
- Kiểm tra trong Vercel Dashboard → Settings → Domains
- Nếu vẫn không có, click "Refresh SSL"

### Vấn đề 3: Font Khmer không hiển thị

**Giải pháp:**
- Kiểm tra kết nối internet
- Font được load từ Google Fonts, cần internet
- Nếu vẫn lỗi, thêm font backup trong CSS

### Vấn đề 4: Nút "បន្ត" không hoạt động

**Giải pháp:**
- Kiểm tra console trong DevTools (F12)
- Đảm bảo file `script.js` đã được load
- Xóa cache trình duyệt

---

## Thông tin liên hệ

Nếu có vấn đề khi deploy, hãy liên hệ để được hỗ trợ.

---

## Changelog

### Version 1.0 (09/01/2026)
- ✅ Tạo landing page với popup 18+
- ✅ Nội dung tiếng Khmer chuẩn
- ✅ Responsive design
- ✅ Tích hợp session storage
- ✅ Animation và loading state
