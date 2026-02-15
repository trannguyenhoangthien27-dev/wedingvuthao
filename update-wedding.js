#!/usr/bin/env node

/**
 * ============================================
 * SCRIPT TỰ ĐỘNG CẬP NHẬT THIỆP CƯỚI
 * ============================================
 * Đọc config.js và cập nhật vào index.html
 * 
 * CÁCH DÙNG:
 * 1. Điền đầy đủ thông tin vào config.js
 * 2. Chạy: node update-wedding.js
 * 3. Hoặc: npm run update
 */

const fs = require('fs');
const path = require('path');

// Đọc file config
const config = require('./config.js');

// Đọc file HTML
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

console.log('🚀 Bắt đầu cập nhật thiệp cưới...\n');

// ============================================
// CẬP NHẬT THÔNG TIN CẶP ĐÔI
// ============================================
console.log('📝 Cập nhật thông tin cặp đôi...');

// Tên cặp đôi trong Hero section
html = html.replace(
    /Anh Tú <span class="ampersand">&<\/span> Diệu Nhi/g,
    `${config.couple.groom.firstName} <span class="ampersand">&</span> ${config.couple.bride.firstName}`
);

// Ngày cưới
const date = config.wedding.displayDate;
html = html.replace(
    /<div class="date-number">\d+<\/div>/,
    `<div class="date-number">${date.day}</div>`
);
html = html.replace(
    /<div class="date-text">Tháng \d+ • \d+<\/div>/,
    `<div class="date-text">${date.monthText} • ${date.year}</div>`
);

// ============================================
// CẬP NHẬT PHỤ HUYNH
// ============================================
console.log('👨‍👩‍👦 Cập nhật thông tin phụ huynh...');

// Nhà trai
html = html.replace(
    /<p><strong>Ông Cấn Văn An<\/strong><\/p>/,
    `<p><strong>${config.parents.groom.father}</strong></p>`
);
html = html.replace(
    /<p><strong>Bà Nguyễn Thị Hải<\/strong><\/p>/,
    `<p><strong>${config.parents.groom.mother}</strong></p>`
);

// Nhà gái
html = html.replace(
    /<p><strong>Ông \[Tên Bố\]<\/strong><\/p>/,
    `<p><strong>${config.parents.bride.father}</strong></p>`
);
html = html.replace(
    /<p><strong>Bà \[Tên Mẹ\]<\/strong><\/p>/,
    `<p><strong>${config.parents.bride.mother}</strong></p>`
);

// ============================================
// CẬP NHẬT THỜI GIAN & ĐỊA ĐIỂM
// ============================================
console.log('📅 Cập nhật thông tin sự kiện...');

// Thời gian
html = html.replace(
    /<p class="highlight">Thứ [^,]+, \d+ Tháng \d+ Năm \d+<\/p>/,
    `<p class="highlight">${config.wedding.dayOfWeek}, ${date.day} ${date.monthText} Năm ${date.year}</p>`
);
html = html.replace(
    /<p class="time">Vào lúc <strong>[\d:]+[^<]*<\/strong><\/p>/,
    `<p class="time">Vào lúc <strong>${config.wedding.time}</strong></p>`
);
html = html.replace(
    /<p class="lunar-date">\([^)]+\)<\/p>/,
    `<p class="lunar-date">(Tức ${config.wedding.lunarDate})</p>`
);

// Địa điểm
html = html.replace(
    /<p class="highlight">The ADORA Center<\/p>/,
    `<p class="highlight">${config.venue.name}</p>`
);
html = html.replace(
    /<p>xxx, Phường xxx<\/p>/g,
    `<p>${config.venue.address}</p>`
);
html = html.replace(
    /<p>Quận xxx, TP\. Hồ Chí Minh<\/p>/g,
    `<p>${config.venue.district}, ${config.venue.city}</p>`
);

// Google Maps
html = html.replace(
    /href="https:\/\/maps\.app\.goo\.gl\/[^"]+"/,
    `href="${config.venue.googleMapsUrl}"`
);
html = html.replace(
    /src="https:\/\/www\.google\.com\/maps\/embed[^"]+"/,
    `src="${config.venue.googleMapsEmbed}"`
);

// ============================================
// CẬP NHẬT NGÂN HÀNG
// ============================================
console.log('💳 Cập nhật thông tin ngân hàng...');

html = html.replace(
    /<h3>MB Bank<\/h3>/,
    `<h3>${config.banking.bank.name}</h3>`
);
html = html.replace(
    /<p><strong>Chủ tài khoản:<\/strong> NGUYEN ANH TU<\/p>/,
    `<p><strong>Chủ tài khoản:</strong> ${config.banking.account.name}</p>`
);
html = html.replace(
    /<p><strong>Số tài khoản:<\/strong> \d+<\/p>/,
    `<p><strong>Số tài khoản:</strong> ${config.banking.account.number}</p>`
);
html = html.replace(
    /data-copy="\d+"/,
    `data-copy="${config.banking.account.number}"`
);

// ============================================
// CẬP NHẬT QR CODE
// ============================================
console.log('📱 Cập nhật QR code...');

html = html.replace(
    /<img src="images\/qr-code\.png"/,
    `<img src="${config.images.qrCode}"`
);

// ============================================
// CẬP NHẬT NHẠC
// ============================================
console.log('🎵 Cập nhật nhạc nền...');

const musicSrc = config.music.youtubeUrl 
    ? config.music.youtubeUrl 
    : config.music.directUrl 
    ? config.music.directUrl 
    : config.music.localFile;

html = html.replace(
    /<source src="[^"]*" type="audio\/mpeg">/,
    `<source src="${musicSrc}" type="audio/mpeg">`
);

// ============================================
// CẬP NHẬT META TAGS
// ============================================
console.log('🔖 Cập nhật meta tags...');

html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${config.meta.description}">`
);
html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${config.meta.title}</title>`
);

// ============================================
// CẬP NHẬT HÌNH ẢNH GALLERY
// ============================================
console.log('📸 Cập nhật album ảnh...');

// Cập nhật từng ảnh trong gallery
config.images.gallery.forEach((imgUrl, index) => {
    const photoNum = index + 1;
    const regex = new RegExp(`<img src="[^"]*" alt="Ảnh cưới ${photoNum}"`, 'g');
    html = html.replace(regex, `<img src="${imgUrl}" alt="Ảnh cưới ${photoNum}"`);
});

// ============================================
// CẬP NHẬT RSVP DEADLINE
// ============================================
console.log('⏰ Cập nhật hạn xác nhận...');

html = html.replace(
    /Vui lòng xác nhận tham dự trước ngày <strong>[\d\/]+<\/strong>/,
    `Vui lòng xác nhận tham dự trước ngày <strong>${config.settings.rsvpDeadline}</strong>`
);

// ============================================
// GHI FILE
// ============================================
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('\n✅ Cập nhật thành công!');
console.log('📄 File đã được cập nhật: index.html\n');

// ============================================
// TẠO BÁO CÁO
// ============================================
console.log('📊 THÔNG TIN ĐÃ CẬP NHẬT:');
console.log('─────────────────────────────────');
console.log(`👰 Cô dâu: ${config.couple.bride.fullName}`);
console.log(`🤵 Chú rể: ${config.couple.groom.fullName}`);
console.log(`📅 Ngày cưới: ${config.wedding.dayOfWeek}, ${date.day}/${date.month}/${date.year}`);
console.log(`⏰ Giờ: ${config.wedding.time}`);
console.log(`📍 Địa điểm: ${config.venue.name}`);
console.log(`🏦 Ngân hàng: ${config.banking.bank.name} - ${config.banking.account.number}`);
console.log(`📸 Số ảnh gallery: ${config.images.gallery.length}`);
console.log('─────────────────────────────────\n');

console.log('🎉 Bây giờ bạn có thể mở index.html để xem kết quả!');
console.log('💡 Tip: Chạy "npm start" hoặc "live-server" để xem trên browser\n');
