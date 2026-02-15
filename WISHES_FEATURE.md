# 📖 Sổ Lời Chúc (Wishes Book) - Hệ Thống Hoàn Chỉnh

## ✨ Tổng Quan Tính Năng

Đã triển khai một hệ thống sổ lời chúc đầy đủ cho trang thiệp cưới với các tính năng:

1. **📝 Gửi Lời Chúc** - Khách mời có thể gửi lời chúc
2. **📖 Hiển Thị Lời Chúc** - Lời chúc được lưu trữ và hiển thị real-time
3. **✨ Styling Chuyên Nghiệp** - Giao diện đẹp mắt với animations
4. **🔒 Bảo Mật** - Sử dụng Firebase Firestore với quy tắc bảo mật

---

## 🔧 Cấu Hình Firestore Rules

Đã thiết lập các quy tắc Firestore như sau:

### 💌 `wishes` Collection (Lời Chúc Đã Duyệt)
```
- Ai cũng đọc được (read: true)
- Ai cũng gửi được (create: true)
- Không ai sửa/xóa (update, delete: false)
```

### ⏳ `wishes_pending` Collection (Lời Chúc Chờ Duyệt)
```
- Chỉ admin đọc/xóa
- Ai cũng gửi được
- Không ai update
```

### 👥 `rsvp_guests` Collection (Danh Sách Khách)
```
- Chỉ admin đọc
- Ai cũng tạo (điền form RSVP)
- Không ai sửa/xóa
```

---

## 📁 File Được Sửa/Tạo

### 1. **js/wishes.js** - JavaScript cho Sổ Lời Chúc
✅ Hoàn toàn viết lại để sạch sẽ, rõ ràng

**Các hàm chính:**
- `initializeFirebase()` - Khởi tạo kết nối Firebase
- `loadAndDisplayWishes()` - Tải và hiển thị lời chúc real-time
- `submitWish(name, message)` - Gửi lời chúc mới
- `escapeHtml(text)` - Bảo vệ khỏi XSS

**Tính năng:**
- ✅ Real-time updates (nghe sự kiện Firestore)
- ✅ Hiệu ứng animation khi load
- ✅ Xử lý lỗi toàn diện
- ✅ Feedback người dùng (loading, success, error states)
- ✅ Tối đa 300 ký tự cho mỗi lời chúc
- ✅ Validation đầu vào

### 2. **index.html** - HTML cho Sổ Lời Chúc
✅ Nâng cấp giao diện với styling chuyên nghiệp

**Cải tiến:**
- 📖 Tiêu đề: "Sổ Lời Chúc" với emoji
- 🎨 Form với gradient background
- 💫 Input fields với focus effects
- 🎯 Button với hover animations
- 📜 Wishes list container với scrollbar custom
- 🎭 Animations khi item load

**Styling:**
- Gradient backgrounds
- Smooth transitions
- Custom scrollbar
- Responsive design
- Color coordination (#c41e3a = màu cưới)

---

## 🚀 Cách Sử Dụng

### Cho Khách Mời:
1. Scroll đến section "📖 Sổ Lời Chúc"
2. Nhập tên (tùy chọn)
3. Viết lời chúc (tối đa 300 ký tự)
4. Nhấn "💌 Gửi Lời Chúc"
5. Lời chúc sẽ hiện ngay trong danh sách dưới (hoặc sau vài giây)

### Để Hiển Thị:
- Lời chúc được lưu vào `wishes` collection
- Ngay lập tức hiển thị cho tất cả khách
- Sắp xếp theo mới nhất trước

### Cho Admin (Phê Duyệt):
- Có thể lấy lời chúc từ `wishes_pending` 
- Sau khi phê duyệt, move vào `wishes` collection

---

## 💾 Firebase Configuration

Firebase config đã được lưu trong **config.js**:
```javascript
firebase: {
    apiKey: "AIzaSyB5KEXIjjWSV8ED16Qie54CuwcDC7jdk-I",
    authDomain: "weding-c0d28.firebaseapp.com",
    projectId: "weding-c0d28",
    storageBucket: "weding-c0d28.firebasestorage.app",
    messagingSenderId: "745764461466",
    appId: "1:745764461466:web:c4871debb4d6c81c2f3823",
    measurementId: "G-YKCCJ397ZZ"
}
```

---

## 🎨 Tính Năng Visual

### Lời Chúc Hiển Thị:
- 💝 Tên người gửi với icon
- 📝 Nội dung lời chúc
- 🕐 Thời gian gửi (định dạng: dd/mm/yyyy hh:mm)
- 🎨 Background gradient đỏ nhạt
- ✨ Border left đỏ đậm
- 🌅 Animation slide-in khi load

### Form Interaction:
- 👤 Input tên với placeholder
- 💌 Textarea lời chúc với counter ký tự
- 🎯 Button gradient với hover effect
- ⏳ Loading state khi gửi
- ✅ Success state (đổi màu xanh, text "Gửi thành công!")
- ❌ Error handling với pesan chi tiết

---

## ✅ Kiểm Tra & Testing

Để kiểm tra xem sổ lời chúc có hoạt động:

1. **Mở DevTools** (F12)
2. **Kiểm tra Console** cho messages:
   - ✅ "Firebase khởi tạo thành công"
   - ✅ "Lời chúc đã gửi thành công"
3. **Thử gửi lời chúc** và xem nó xuất hiện
4. **Refresh trang** - lời chúc cũ vẫn hiện (lưu trữ Firebase)

---

## 📋 Danh Sách ToDo Hoàn Thành

- ✅ Sửa lạo file wishes.js bị hỏng
- ✅ Nâng cấp HTML styling cho wishes section
- ✅ Thêm form validation
- ✅ Thêm error handling
- ✅ Thêm loading states
- ✅ Thêm success feedback
- ✅ Styling input/textarea focus effects
- ✅ Thêm animations

---

## 🔗 Lưu Ý Quan Trọng

1. **Firebase SDK** phải được load trước (trong index.html):
   ```html
   <script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore-compat.js"></script>
   ```

2. **config.js** phải được load trước wishes.js

3. **wishes.js** được load sau HTML:
   ```html
   <script type="module" src="js/wishes.js"></script>
   ```

4. **Firestore Rules** cần được thiết lập đúng (xem phần Rules ở trên)

---

## 🎯 Tính Năng Tiềm Năng Để Mở Rộng

- [ ] Admin panel để phê duyệt lời chúc từ `wishes_pending`
- [ ] Phân trang lời chúc (hiện tại max 100)
- [ ] Tìm kiếm/lọc lời chúc
- [ ] Like/React để lời chúc
- [ ] Video wishes
- [ ] Anonymous wishes option
- [ ] Spam protection

---

**✨ Sổ Lời Chúc đã sẵn sàng sử dụng! 🎉**
