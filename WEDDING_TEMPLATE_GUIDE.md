# 💒 Wedding Invitation Template - Hướng Dẫn

## 📋 Tổng Quan

Template thiệp cưới online được xây dựng với React + Vite, tái hiện 100% bố cục và giao diện từ file HTML gốc của CineLove.

## 🎨 Đặc Điểm Chính

### ✅ Bố Cục 100% Giống Gốc

- **Kích thước**: 500px x động (scroll dọc)
- **Định vị**: Absolute positioning như HTML gốc
- **Animation**: Framer Motion với các hiệu ứng fade-in, slide-up, slide-left, slide-right
- **Typography**: Sử dụng Playfair Display, Quicksand fonts

### 🎯 Các Section Chính

1. **Hero Section** (849px height)

   - Cover image toàn màn hình
   - Text overlay với các vị trí absolute
   - Tên cô dâu & chú rể
   - Ngày cưới: 2025.05.20

2. **Second Section**

   - Hình ảnh phụ
   - Quote cảm ơn khách mời
   - Slogan: "Right love | Right reason | Right for you"

3. **Love Story Section**

   - Tiêu đề "OUR LOVE STORY"
   - Story images với label
   - Text "Sweet" với rotation
   - Wedding invitation box với lá cây 🌿

4. **Date Section**

   - Ngày cưới: 2050.05.20
   - Lời nhắn: "Chúng mình, hẹn gặp nhau trong ngày cưới nhé!"

5. **RSVP Form**

   - Form xác nhận tham dự
   - Radio buttons cho lựa chọn
   - Submit button

6. **Map Section**
   - Google Maps iframe
   - Hiển thị địa điểm tổ chức

### 🎵 Tính Năng Tương Tác

- **Music Player**: Auto-play nhạc nền (có thể mute)
- **Interactive Buttons**:
  - ❤️ Like button với counter
  - 💌 Gửi lời chúc
  - 🎁 Gửi quà mừng cưới (Momo, Banking)

## 🚀 Cài Đặt & Chạy

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Cấu Trúc File

```
src/
├── App.jsx                    # Main component với toàn bộ bố cục
├── App.css                    # Styles 100% giống HTML gốc
├── components/
│   ├── MusicPlayer.jsx        # Music player component
│   ├── MusicPlayer.css
│   ├── InteractiveButtons.jsx # Toolbar buttons
│   └── InteractiveButtons.css
```

## 🎨 Tùy Chỉnh

### 1. Thay Đổi Hình Ảnh

Trong `App.jsx`, tìm và thay thế các URL hình ảnh:

```jsx
// Hero cover image
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Wedding Cover"
  className="cover-image"
/>

// Story images
<img
  src="YOUR_STORY_IMAGE_URL"
  alt="Love Story"
  className="story-photo"
/>
```

### 2. Thay Đổi Nội Dung Text

```jsx
// Tên cô dâu & chú rể
<span className="bride-label">YOUR_BRIDE_NAME</span>
<span className="groom-label">YOUR_GROOM_NAME</span>

// Ngày cưới
<div className="wedding-date">YOUR_DATE</div>

// Lời nhắn
<p className="invitation-message">
  Your custom message here...
</p>
```

### 3. Thay Đổi Nhạc Nền

Trong `components/MusicPlayer.jsx`:

```jsx
<audio ref={audioRef} loop preload="auto">
  <source src="YOUR_MUSIC_URL_HERE.mp3" type="audio/mpeg" />
</audio>
```

### 4. Cập Nhật Địa Chỉ Map

Trong `App.jsx`, tìm iframe và thay URL:

```jsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  // ... other props
></iframe>
```

### 5. Thay Đổi Màu Sắc

Trong `App.css`:

```css
/* Primary color */
.sweet-text {
  color: #d63030; /* Đổi màu chữ "Sweet" */
}

/* Button colors */
.submit-btn {
  background: #5c5c5c; /* Đổi màu button */
}
```

## 📱 Responsive Design

Template tự động responsive cho các màn hình:

- Desktop: 500px width (như HTML gốc)
- Tablet: < 768px
- Mobile: < 480px

```css
@media (max-width: 768px) {
  /* Tự động điều chỉnh layout */
}
```

## 🎯 So Sánh Với HTML Gốc

| Tính Năng           | HTML Gốc                | React Template          |
| ------------------- | ----------------------- | ----------------------- |
| Bố cục              | ✅ Absolute positioning | ✅ Giống 100%           |
| Animation           | ✅ CSS transitions      | ✅ Framer Motion        |
| Music Player        | ✅ Auto-play            | ✅ Auto-play + Controls |
| Interactive Toolbar | ✅ Fixed bottom         | ✅ Fixed bottom         |
| RSVP Form           | ✅ Static form          | ✅ Functional form      |
| Map                 | ✅ Google Maps          | ✅ Google Maps          |
| Responsive          | ⚠️ Limited              | ✅ Full responsive      |
| Performance         | ⚠️ 50+ JS files         | ✅ Optimized bundle     |

## 🔧 Các Cải Tiến

So với HTML gốc, React template có thêm:

1. **Performance**:

   - Optimized bundle size
   - Lazy loading images
   - Code splitting

2. **Maintainability**:

   - Component-based structure
   - Easy to customize
   - Clean code organization

3. **Developer Experience**:

   - Hot reload
   - TypeScript support (nếu cần)
   - Modern tooling

4. **Accessibility**:
   - Better semantic HTML
   - ARIA labels
   - Keyboard navigation

## 📝 Notes

- Font chữ sử dụng Google Fonts (Playfair Display, Quicksand)
- Hình ảnh sử dụng Unsplash demo (thay bằng ảnh thật khi deploy)
- Music player có thể bị browser block auto-play (user cần click)
- RSVP form cần kết nối backend để lưu dữ liệu

## 🐛 Troubleshooting

### Nhạc không tự động phát

```jsx
// Browser chặn auto-play, cần user interaction
// Hiện tại: Music player có button để bật/tắt manual
```

### Hình ảnh không hiển thị

```bash
# Kiểm tra URL hình ảnh
# Đảm bảo CORS được enable
```

### Layout bị lệch

```css
/* Kiểm tra width của container */
.page-container {
  width: 500px; /* Phải cố định 500px như gốc */
}
```

## 📞 Support

Nếu cần hỗ trợ, vui lòng:

- Kiểm tra console browser (F12)
- So sánh với HTML gốc
- Đọc kỹ code comments

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

Made with ❤️ by copying 100% from CineLove HTML template
