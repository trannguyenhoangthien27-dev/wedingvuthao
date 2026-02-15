# 🎊 Hướng Dẫn Nhanh - Wedding Invitation

## 🚀 Bắt Đầu Ngay (5 phút)

### Bước 1: Chuẩn bị hình ảnh
```
📁 images/
   ├── photo1.jpg  ← Thêm 6 ảnh cưới vào đây
   ├── photo2.jpg
   ├── photo3.jpg
   ├── photo4.jpg
   ├── photo5.jpg
   ├── photo6.jpg
   └── qr-code.png ← Ảnh QR code ngân hàng
```

### Bước 2: Thêm nhạc nền (tùy chọn)
```
📁 audio/
   └── wedding-music.mp3 ← File nhạc nền (MP3)
```

### Bước 3: Chỉnh sửa thông tin

Mở file `index.html` và tìm các dòng sau để sửa:

#### 1️⃣ Tên cô dâu chú rể (dòng ~29)
```html
<h2 class="couple-names">
    [TÊN CHÚ RỂ] <span class="ampersand">&</span> [TÊN CÔ DÂU]
</h2>
```

#### 2️⃣ Ngày cưới (dòng ~35)
```html
<div class="date-number">30 | 03</div>
<div class="date-text">Tháng Ba 2025</div>
```

#### 3️⃣ Thông tin gia đình (dòng ~53)
```html
<div class="parent-card">
    <h3>Gia Đình Nhà Trai</h3>
    <p>Ông: <strong>[TÊN BỐ]</strong></p>
    <p>Bà: <strong>[TÊN MẸ]</strong></p>
    <p>Con trai: <strong>[TÊN CHÚ RỂ]</strong></p>
</div>
```

#### 4️⃣ Địa điểm tổ chức (dòng ~89)
```html
<div class="info-card">
    <div class="card-icon">⛪</div>
    <h3>Lễ Cưới</h3>
    <div class="card-content">
        <p class="highlight">[TÊN ĐỊA ĐIỂM]</p>
        <p class="time">⏰ [GIỜ]</p>
        <p>📅 [NGÀY THÁNG NĂM]</p>
        <p>📍 [ĐỊA CHỈ]</p>
    </div>
</div>
```

#### 5️⃣ Thông tin chuyển khoản (dòng ~246)
```html
<div class="bank-card">
    <h3>[TÊN NGÂN HÀNG]</h3>
    <div class="bank-details">
        <p>Số TK: <strong>[SỐ TÀI KHOẢN]</strong></p>
        <p>Chủ TK: <strong>[TÊN CHỦ TÀI KHOẢN]</strong></p>
        <p>Chi nhánh: <strong>[TÊN CHI NHÁNH]</strong></p>
    </div>
    <button class="btn-copy" data-account="[SỐ TÀI KHOẢN]">
        📋 Sao chép STK
    </button>
</div>
```

### Bước 4: Cấu hình đếm ngược

Mở file `js/main.js` và sửa dòng 15:
```javascript
const weddingDate = new Date('2025-03-30T00:00:00').getTime();
//                            ↑ Sửa thành ngày cưới của bạn
//                            Format: YYYY-MM-DDTHH:MM:SS
```

### Bước 5: Test website

#### Cách 1: Mở trực tiếp
- Double click vào file `index.html`
- Xem trong trình duyệt

#### Cách 2: Dùng Live Server (khuyến nghị)
1. Mở VS Code
2. Cài extension "Live Server"
3. Right click vào `index.html` → "Open with Live Server"

## ✅ Checklist hoàn thành

```
□ Đã thêm 6 ảnh cưới vào thư mục images/
□ Đã thêm ảnh QR code vào images/qr-code.png
□ Đã thêm file nhạc vào audio/wedding-music.mp3
□ Đã sửa tên cô dâu chú rể
□ Đã sửa ngày cưới (2 chỗ: index.html và main.js)
□ Đã sửa thông tin gia đình
□ Đã sửa địa điểm lễ cưới và tiệc cưới
□ Đã sửa thông tin chuyển khoản
□ Đã update link Google Maps
□ Đã test trên điện thoại
□ Đã test form RSVP
□ Đã test nút copy số tài khoản
```

## 🎨 Tùy chỉnh màu sắc

Mở file `css/style.css` và sửa dòng 8-14:

```css
:root {
    --primary-color: #c41e3a;   /* Màu đỏ chính */
    --primary-dark: #8b0000;    /* Màu đỏ đậm */
    --secondary-color: #fff5f5; /* Màu hồng nhạt */
}
```

**Gợi ý màu:**
- 🔴 Đỏ (hiện tại): `#c41e3a`
- 💗 Hồng: `#ff69b4`
- 💜 Tím: `#9c27b0`
- 💙 Xanh dương: `#2196f3`
- 💚 Xanh lá: `#4caf50`

## 📱 Test trên Mobile

1. Mở website trên máy tính
2. Nhấn F12 để mở DevTools
3. Nhấn vào icon điện thoại (Toggle device toolbar)
4. Chọn các thiết bị khác nhau để test

## 🚀 Đưa website lên mạng (miễn phí)

### Cách 1: Netlify (Dễ nhất)
1. Vào [netlify.com](https://www.netlify.com/)
2. Kéo thả thư mục `wedding` vào
3. Nhận link website ngay lập tức!

### Cách 2: GitHub Pages
1. Tạo repository trên GitHub
2. Upload tất cả file
3. Settings → Pages → Deploy
4. Link: `https://[username].github.io/[repo-name]`

### Cách 3: Vercel
1. Vào [vercel.com](https://vercel.com/)
2. Import project
3. Deploy!

## 🆘 Gặp vấn đề?

### Hình ảnh không hiển thị
- ✅ Kiểm tra tên file đúng chưa (photo1.jpg, photo2.jpg...)
- ✅ Kiểm tra file có trong thư mục `images/` chưa
- ✅ Kiểm tra định dạng file (.jpg hoặc .png)

### Nhạc không chạy
- ✅ Kiểm tra file có trong thư mục `audio/` chưa
- ✅ File phải có tên chính xác: `wedding-music.mp3`
- ✅ Thử click vào website trước (trình duyệt chặn autoplay)

### Đếm ngược sai
- ✅ Mở file `js/main.js` dòng 15
- ✅ Sửa format: `2025-03-30T00:00:00` (YYYY-MM-DDTHH:MM:SS)

### Form RSVP không gửi
- ✅ Hiện tại form chỉ lưu vào localStorage (trong máy)
- ✅ Để gửi email thật, cần tích hợp backend hoặc service

## 💡 Tips hay

1. **Optimize ảnh**: Dùng [TinyPNG.com](https://tinypng.com) để giảm dung lượng ảnh
2. **Tìm nhạc miễn phí**: Search "royalty free wedding music"
3. **Test kỹ**: Mở trên nhiều trình duyệt và thiết bị khác nhau
4. **Chia sẻ sớm**: Gửi link cho bạn bè test trước khi gửi rộng rãi

## 📞 Liên hệ

Nếu cần hỗ trợ thêm:
- Xem file `README.md` để biết chi tiết
- Check Console trong browser (F12) để xem lỗi

---

🎉 **Chúc bạn có một đám cưới thật hạnh phúc!** 💑
