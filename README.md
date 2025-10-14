# 💒 Wedding Invitation Website

Một website thiệp cưới online đẹp mắt được xây dựng bằng React + Vite, lấy cảm hứng từ CineLove.

## ✨ Tính năng

- 🎵 **Music Player**: Phát nhạc nền tự động với điều khiển play/pause và mute
- 💑 **Hero Section**: Phần giới thiệu đẹp mắt với hình ảnh và thông tin cặp đôi
- 📖 **Love Story**: Kể câu chuyện tình yêu qua timeline với hình ảnh và text
- 💌 **Interactive Buttons**: Gửi lời chúc, like và gift
- 🎨 **Smooth Animations**: Hiệu ứng chuyển động mượt mà với Framer Motion
- 📱 **Responsive Design**: Tối ưu cho cả desktop và mobile
- 🎭 **Desktop View**: Giao diện giống mobile app trong khung desktop

## 🚀 Cài đặt và Chạy

### Yêu cầu

- Node.js version 20.19+ hoặc 22.12+ (khuyến nghị)
- npm hoặc yarn

### Các bước

1. Cài đặt dependencies:

```bash
npm install
```

2. Chạy development server:

```bash
npm run dev
```

3. Mở trình duyệt: `http://localhost:5173`

## 📦 Build cho Production

```bash
npm run build
```

## 🎨 Tùy chỉnh

### Thay đổi hình ảnh

- `src/components/HeroSection.jsx` - Hình nền hero
- `src/components/LoveStorySection.jsx` - Hình ảnh timeline

### Thay đổi nhạc nền

- `src/components/MusicPlayer.jsx` - URL file audio

### Thay đổi nội dung

- Chỉnh sửa các component trong `src/components/`

## 🛠️ Tech Stack

- React + Vite
- Framer Motion (animations)
- React Icons
- CSS3

## 📁 Cấu trúc

```
src/
├── components/
│   ├── HeroSection.jsx
│   ├── LoveStorySection.jsx
│   ├── MusicPlayer.jsx
│   └── InteractiveButtons.jsx
├── App.jsx
└── main.jsx
```

---

Made with ❤️ for your special day

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
