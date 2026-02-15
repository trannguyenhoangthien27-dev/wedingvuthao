from PIL import Image, ImageDraw, ImageFont
import os

# Đường dẫn
calendar_path = r'c:\Users\Admin\Downloads\weddingcongtho-main\weddingcongtho-main\image2\calendar.png'

# Tạo thư mục nếu chưa tồn tại
os.makedirs(os.path.dirname(calendar_path), exist_ok=True)

# Tạo ảnh mới với kích thước phù hợp
img = Image.new('RGB', (750, 650), color='white')
draw = ImageDraw.Draw(img)

# Màu sắc
title_color = (32, 178, 170)  # Màu xanh lá
red_color = (220, 20, 60)     # Màu đỏ cho Sundays/Saturdays
black_color = (0, 0, 0)
heart_color = (255, 20, 147)  # Màu hồng đậm

# Font
try:
    font_year = ImageFont.truetype('arial.ttf', 72)
    font_month = ImageFont.truetype('arial.ttf', 70)
    font_day_header = ImageFont.truetype('arial.ttf', 26)
    font_date = ImageFont.truetype('arial.ttf', 38)
    font_heart = ImageFont.truetype('arial.ttf', 45)
except:
    font_year = ImageFont.load_default()
    font_month = ImageFont.load_default()
    font_day_header = ImageFont.load_default()
    font_date = ImageFont.load_default()
    font_heart = ImageFont.load_default()

# Vẽ header
draw.rectangle([(30, 130), (720, 230)], fill=title_color, outline=title_color)
draw.text((540, 20), '2026', fill=title_color, font=font_year)
draw.text((220, 145), 'February', fill='white', font=font_month)

# Vẽ ngày trong tuần
days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
x_start = 50
y_start = 270
x_spacing = 100

for i, day in enumerate(days):
    draw.text((x_start + i * x_spacing, y_start), day, fill=black_color, font=font_day_header)

# Vẽ các ngày
dates = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28]
]

y_date_start = 330
y_spacing = 75

for week, row in enumerate(dates):
    for day_col, date_num in enumerate(row):
        x = x_start + day_col * x_spacing + 30
        y = y_date_start + week * y_spacing
        
        # Xuất sắc màu cho ngày đầu tuần và cuối tuần
        color = red_color if day_col in [0, 6] else black_color
        draw.text((x, y), str(date_num), fill=color, font=font_date)

# Vẽ trái tim trên ngày 28
heart_x = x_start + 6 * x_spacing + 35
heart_y = y_date_start + 3 * y_spacing + 35
draw.text((heart_x, heart_y), '❤', fill=heart_color, font=font_heart)

# Lưu ảnh
img.save(calendar_path)
print('✅ Calendar đã được tạo thành công!')
print(f'📁 Lưu tại: {calendar_path}')
print(f'❤️ Ngày 28 đã được đánh dấu bằng trái tim')
