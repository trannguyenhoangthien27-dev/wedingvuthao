/**
 * ============================================
 * CẤU HÌNH THIỆP CƯỚI ONLINE
 * ============================================
 * Điền đầy đủ thông tin vào file này
 * Sau đó chạy lệnh: node update-wedding.js
 * hoặc copy thông tin vào các file tương ứng
 */

const weddingConfig = {
    // ==========================================
    // THÔNG TIN CẶP ĐÔI
    // ==========================================
    couple: {
        groom: {
            fullName: "Lê Nguyên Vũ",           // Tên đầy đủ chú rể
            firstName: "Lê Nguyên Vũ",                 // Tên gọi ngắn
            phone: "0999999999",                 // Số điện thoại (tùy chọn)
            facebook: "",                        // Link Facebook (tùy chọn)
            instagram: "",                       // Link Instagram (tùy chọn)
        },
        bride: {
            fullName: "Trần Thị Thu Thảo",          // Tên đầy đủ cô dâu
            firstName: "Trần Thị Thu Thảo",               // Tên gọi ngắn
            phone: "0888888888",                 // Số điện thoại (tùy chọn)
            facebook: "",                        // Link Facebook (tùy chọn)
            instagram: "",                       // Link Instagram (tùy chọn)
        }
    }, 

    // ==========================================
    // THÔNG TIN PHỤ HUYNH
    // ==========================================
    parents: {
        groom: {
            father: "Ông Lê Nguyên Văn",           // Tên bố chú rể
            mother: "Bà Hoàng Thị Ngọc",        // Tên mẹ chú rể
            address: "Số nhà 224 Hoằng Phú Hoằng Hóa Thanh Hóa" // Địa chỉ nhà trai
        },
        bride: {
            father: "Ông Trần Văn Cao",             // Tên bố cô dâu - THAY ĐỔI
            mother: "Bà Hoàng Thị Thủy",              // Tên mẹ cô dâu - THAY ĐỔI
            address: "xã Phạm Ngũ Lão, Hưng Yên" // Địa chỉ nhà gái - THAY ĐỔI
        }
    },

    // ==========================================
    // THÔNG TIN NGÀY CƯỚI
    // ==========================================
    wedding: {
        date: "2026-02-28",                     // Định dạng: YYYY-MM-DD
        time: "13:00",                          // Giờ tổ chức (24h format)
        dayOfWeek: "Thứ 7",                   // Thứ trong tuần
        lunarDate: "ngày 01 tháng 01 năm Bính Thìn", // Âm lịch
        
        // Hiển thị đẹp
        displayDate: {
            day: "28",
            month: "02",
            year: "2026",
            monthText: "Tháng 2"
        }
    },

    // ==========================================
    // ĐỊA ĐIỂM TỔ CHỨC
    // ==========================================
    venue: {
        name: "Nhà Trai",               // Tên địa điểm
        address: "Số nhà 224 Hoằng Phú Hoằng Hóa",             // Địa chỉ chi tiết - THAY ĐỔI
        district: "Thanh Hóa",                   // Quận/Huyện - THAY ĐỔI
        city: "Thanh Hóa",               // Thành phố
        
        // Link Google Maps
        googleMapsUrl: "https://maps.app.goo.gl/PP57rDnyXbgNEVbM8",
        
        // Embed Google Maps (lấy từ Google Maps > Share > Embed)
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7176.46950918691!2d106.6573604!3d10.7965823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d96e56d9bd%3A0x205428f74d7f4ddb!2sThe%20ADORA%20Center!5e1!3m2!1svi!2s!4v1739789062931!5m2!1svi!2s"
    },

    // ==========================================
    // HÌNH ẢNH (CDN URLs hoặc Google Drive)
    // ==========================================
    images: {
        // Album ảnh cưới (6 ảnh)
        gallery: [
            "images/1(1).jpg", 
             "images/1(2).jpg",  
              "images/1(3).jpg", 
              "images/1(4).jpg", 
              "images/1(5).jpg", 
              "images/1(6).jpg", 
              "images/1(7).jpg", 
              "images/1(8).jpg", 
              "images/1(9).jpg", 
              "images/1(10).jpg", 
              "images/1(11).jpg", 
              "images/1(12).jpg", 
              "images/1(13).jpg", 
            
             ],
        
        // QR Code chuyển khoản
        qrCode: "images/qr-code.png"  // THAY ĐỔI: Link Google Drive hoặc đường dẫn local
    },

    // ==========================================
    // NHẠC NỀN
    // ==========================================
    music: {
        // TÙY CHỌN 1: File MP3 local
        localFile: "",
        
        // TÙY CHỌN 2: Link YouTube
        youtubeUrl: "https://www.youtube.com/watch?v=_8ldAdQd9WU&list=RD_8ldAdQd9WU&start_radio=1",  // THAY ĐỔI: Ví dụ: "https://www.youtube.com/watch?v=xxxxx"
        
        // TÙY CHỌN 3: Link MP3 trực tiếp
        directUrl: ""    // THAY ĐỔI: Link MP3 từ Google Drive hoặc hosting khác
    },

    // ==========================================
    // THÔNG TIN NGÂN HÀNG (Mừng cưới)
    // ==========================================
    banking: {
        bank: {
            name: "k",                    // Tên ngân hàng
            shortName: "",                // Tên viết tắt
            logo: "🏦"                          // Icon/Emoji
        },
        account: {
            name: "",              // Tên chủ tài khoản (IN HOA)
            number: "",               // Số tài khoản
            branch: ""                          // Chi nhánh (tùy chọn)
        }
    },

    // ==========================================
    // MẠNG XÃ HỘI
    // ==========================================
    social: {
        facebook: "",      // Link Facebook của cặp đôi
        instagram: "",     // Link Instagram
        zalo: "",          // Link Zalo
        tiktok: ""         // Link TikTok (tùy chọn)
    },

    // ==========================================
    // CÀI ĐẶT KHÁC
    // ==========================================
    settings: {
        rsvpDeadline: "30/11/2025",            // Hạn xác nhận tham dự
        maxGuests: 100,                         // Số khách tối đa mỗi người mời
        showCountdown: true,                   // Hiển thị đếm ngược
        showGallery: true,                     // Hiển thị album ảnh
        showRSVP: true,                        // Hiển thị form xác nhận
        showBanking: true,                     // Hiển thị thông tin chuyển khoản
        autoPlayMusic: false,                  // Tự động phát nhạc (false = yêu cầu click)
        
        // Màu chủ đạo (tùy chỉnh trong CSS)
        theme: {
            primaryColor: "#ffffffff",           // Màu đỏ chủ đạo
            secondaryColor: "#fff5f5",         // Màu hồng nhạt
            accentColor: "#ffffffff"             // Màu đỏ đậm
        }
    },

    // ==========================================
    // METADATA (SEO)
    // ==========================================
    meta: {
        title: "Thiệp Cưới - Công & Thơ",
        description: "Thiệp cưới online của Công & Thơ - 30.11.2025",
        keywords: "thiệp cưới, wedding invitation, Công, Thơ",
        author: "Happy Wedding"
    }

    ,
    // Firebase configuration (used for guestbook/wishes)
    firebase: {
        apiKey: "AIzaSyB5KEXIjjWSV8ED16Qie54CuwcDC7jdk-I",
        authDomain: "weding-c0d28.firebaseapp.com",
        projectId: "weding-c0d28",
        storageBucket: "weding-c0d28.firebasestorage.app",
        messagingSenderId: "745764461466",
        appId: "1:745764461466:web:c4871debb4d6c81c2f3823",
        measurementId: "G-YKCCJ397ZZ"
    }
};

// ============================================
// XUẤT CẤU HÌNH
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = weddingConfig;
}

// ============================================
// HƯỚNG DẪN SỬ DỤNG
// ============================================
/*

📝 CÁCH SỬ DỤNG FILE CONFIG:

1. ĐIỀN THÔNG TIN:
   - Thay đổi các thông tin đánh dấu "THAY ĐỔI"
   - Điền đầy đủ thông tin cặp đôi, phụ huynh, địa điểm

2. HÌNH ẢNH:
   - Thay link trong mảng gallery[] bằng link Google Drive
   - Format Google Drive: https://drive.google.com/uc?export=view&id=FILE_ID
   - Hoặc dùng link CDN như hiện tại

3. NHẠC NỀN:
   - CÁCH 1: Upload file MP3 vào folder audio/
   - CÁCH 2: Dùng link YouTube (cần code thêm YouTube Player)
   - CÁCH 3: Dùng link MP3 trực tiếp

4. QR CODE:
   - Tạo QR code ngân hàng tại: https://qr.sepay.vn/
   - Upload lên Google Drive hoặc folder images/
   - Cập nhật link vào config.images.qrCode

5. CẬP NHẬT VÀO WEBSITE:
   - CÁCH 1 (Thủ công): Copy từng thông tin vào index.html
   - CÁCH 2 (Tự động): Chạy: node update-wedding.js
   - CÁCH 3 (Nâng cao): Dùng JavaScript đọc config động

==============================================

🔗 HƯỚNG DẪN LẤY LINK GOOGLE DRIVE:

1. Upload ảnh lên Google Drive
2. Click chuột phải > Get link > Change to "Anyone with the link"
3. Copy link, có dạng: https://drive.google.com/file/d/1ABC...XYZ/view
4. Lấy phần ID (giữa /d/ và /view)
5. Tạo link mới: https://drive.google.com/uc?export=view&id=ID_CỦA_BẠN

Ví dụ:
- Link gốc: https://drive.google.com/file/d/1A2B3C4D5/view
- Link dùng: https://drive.google.com/uc?export=view&id=1A2B3C4D5

==============================================

🎵 HƯỚNG DẪN THÊM NHẠC YOUTUBE:

1. Lấy Video ID từ YouTube
   - Link: https://www.youtube.com/watch?v=dQw4w9WgXcQ
   - Video ID: dQw4w9WgXcQ

2. Cập nhật vào config.music.youtubeUrl

3. Sửa code trong js/main.js để dùng YouTube Player API

==============================================

📞 HỖ TRỢ:
- Email: support@longthinhwedding.com
- Website: https://www.longthinhwedding.site

*/
