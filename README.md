# 💍 Website Thiệp Cưới Online

Một website thiệp cưới trực tuyến đẹp mắt, hiện đại với đầy đủ tính năng và responsive hoàn toàn.

## ✨ Tính năng

### 🎨 Giao diện
- ✅ Thiết kế hiện đại, sang trọng với tông màu đỏ - trắng
- ✅ Responsive 100% trên mọi thiết bị (Desktop, Tablet, Mobile)
- ✅ Hiệu ứng chuyển động mượt mà với scroll animations
- ✅ Loading screen đẹp mắt
- ✅ Floating hearts effect
- ✅ Confetti effect khi trang load

### 📋 Các Section
1. **Hero Section**: Trang chủ với tên cô dâu chú rể và ngày cưới
2. **Invitation Section**: Lời mời cưới và thông tin gia đình
3. **Event Section**: 
   - Thông tin lễ cưới và tiệc cưới
   - Đếm ngược thời gian đến ngày cưới
   - Tích hợp Google Maps
4. **Gallery Section**: Bộ sưu tập ảnh với lightbox
5. **RSVP Section**: Form xác nhận tham dự
6. **Wishes Section**: 
   - Thông tin chuyển khoản với QR code
   - Tường lời chúc
7. **Footer**: Thông tin liên hệ và social links

### 🎵 Tính năng tương tác
- Phát nhạc nền với nút điều khiển
- Đếm ngược thời gian đến ngày cưới (realtime)
- Form RSVP với validation đầy đủ
- Gallery ảnh với lightbox và navigation
- Copy số tài khoản một chạm
- Nút scroll to top
- Smooth scroll
- Share thiệp cưới

## 📁 Cấu trúc thư mục

```
wedding/
├── index.html          # File HTML chính
├── css/
│   └── style.css      # File CSS với đầy đủ styling
├── js/
│   └── main.js        # File JavaScript với các tính năng
├── images/            # Thư mục chứa hình ảnh
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   ├── photo6.jpg
│   └── qr-code.png
├── audio/             # Thư mục chứa file nhạc
│   └── wedding-music.mp3
└── README.md          # File hướng dẫn này
```

## 🚀 Cách sử dụng

### 1. Setup cơ bản

1. **Tải project về** hoặc clone repository
2. **Chuẩn bị assets**:
   - Thêm 6 ảnh cưới vào thư mục `images/` với tên `photo1.jpg` đến `photo6.jpg`
   - Thêm ảnh QR code ngân hàng vào `images/qr-code.png`
   - Thêm file nhạc nền vào `audio/wedding-music.mp3`

### 2. Chỉnh sửa thông tin

Mở file `index.html` và thay đổi các thông tin sau:

#### Thông tin cô dâu chú rể:
```html
<!-- Dòng 29-33: Tên cô dâu chú rể -->
<h2 class="couple-names">
    Anh Tú <span class="ampersand">&</span> Diệu Nhi
</h2>

<!-- Dòng 35-37: Ngày cưới -->
<div class="date-number">30 | 03</div>
<div class="date-text">Tháng Ba 2025</div>
```

#### Thông tin gia đình:
```html
<!-- Dòng 53-75: Thông tin gia đình -->
<div class="parent-card">
    <h3>Gia Đình Nhà Trai</h3>
    <p>Ông: <strong>Nguyễn Văn A</strong></p>
    <p>Bà: <strong>Trần Thị B</strong></p>
    <!-- ... -->
</div>
```

#### Thông tin sự kiện:
```html
<!-- Dòng 89-134: Chi tiết lễ cưới và tiệc cưới -->
```

#### Thông tin ngân hàng:
```html
<!-- Dòng 246-275: Thông tin chuyển khoản -->
<div class="bank-card">
    <div class="bank-logo">🏦</div>
    <h3>MB Bank</h3>
    <div class="bank-details">
        <p>Số TK: <strong>8838683860</strong></p>
        <!-- ... -->
    </div>
</div>
```

### 3. Cấu hình ngày cưới cho countdown

Mở file `js/main.js` và chỉnh sửa dòng 15:
```javascript
const weddingDate = new Date('2025-03-30T00:00:00').getTime();
```

### 4. Chạy website

#### Cách 1: Mở trực tiếp
- Double click vào file `index.html`

#### Cách 2: Dùng Live Server (khuyến nghị)
```bash
# Cài đặt live-server global
npm install -g live-server

# Chạy trong thư mục project
live-server
```

#### Cách 3: Dùng Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8000`

## 🎨 Tùy chỉnh màu sắc

Mở file `css/style.css` và chỉnh sửa các biến CSS ở đầu file:

```css
:root {
    --primary-color: #c41e3a;      /* Màu chính (đỏ) */
    --primary-dark: #8b0000;       /* Màu đỏ đậm */
    --secondary-color: #fff5f5;    /* Màu phụ (hồng nhạt) */
    --text-dark: #333;             /* Màu chữ đậm */
    --text-light: #666;            /* Màu chữ nhạt */
    --text-muted: #999;            /* Màu chữ mờ */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: < 480px

## 🔧 Tính năng JavaScript

### Countdown Timer
```javascript
initCountdown() // Tự động đếm ngược đến ngày cưới
```

### Music Player
```javascript
initMusicPlayer() // Điều khiển nhạc nền
```

### Lightbox Gallery
```javascript
initLightbox() // Xem ảnh phóng to với navigation
```

### RSVP Form
```javascript
initRSVPForm() // Xử lý form xác nhận tham dự
```

### Copy to Clipboard
```javascript
initCopyToClipboard() // Copy số tài khoản
```

## 🌟 Tối ưu hóa

### Performance
- CSS và JS được minify (nếu cần)
- Hình ảnh nên được optimize (khuyến nghị < 500KB/ảnh)
- Lazy loading cho hình ảnh
- File nhạc nên < 5MB

### SEO
- Meta tags đầy đủ trong `<head>`
- Semantic HTML
- Alt text cho tất cả hình ảnh
- Open Graph tags cho social sharing

## 🚢 Deploy

### Option 1: GitHub Pages (Free)
1. Push code lên GitHub repository
2. Settings → Pages → Source: main branch
3. Website sẽ có URL: `https://username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Kéo thả thư mục vào [Netlify](https://app.netlify.com/drop)
2. Hoặc kết nối với GitHub repo

### Option 3: Vercel (Free)
```bash
npm i -g vercel
vercel
```

### Option 4: Firebase Hosting (Free)
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## 📝 Checklist trước khi publish

- [ ] Đã thay đổi tất cả thông tin cá nhân
- [ ] Đã thêm đầy đủ hình ảnh (6 ảnh + QR code)
- [ ] Đã thêm file nhạc nền
- [ ] Đã test trên mobile/tablet/desktop
- [ ] Đã test form RSVP
- [ ] Đã set đúng ngày cưới trong countdown
- [ ] Đã update thông tin Google Maps
- [ ] Đã kiểm tra tất cả links
- [ ] Đã optimize hình ảnh
- [ ] Đã test trên các trình duyệt khác nhau

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Hỗ trợ

Nếu gặp vấn đề hoặc cần tùy chỉnh thêm, vui lòng:
- Kiểm tra Console trong Browser DevTools (F12)
- Đảm bảo tất cả file paths đúng
- Kiểm tra file assets đã có đầy đủ chưa

## 📄 License

MIT License - Free to use for personal wedding invitations

## 🎉 Credits

- **Fonts**: Google Fonts (Great Vibes, Playfair Display, Roboto)
- **Icons**: Unicode Emoji
- **Design**: Custom design with modern aesthetics

---

💝 **Chúc bạn có một đám cưới thật hạnh phúc và trọn vẹn!** 💝
