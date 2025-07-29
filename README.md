# Wedding Website - Viet Hung & Lan Huyen

A beautiful, modern React wedding website featuring step-based scrolling and elegant animations.

## 🎊 Wedding Details

- **Couple**: Viet Hung & Lan Huyen
- **Date**: November 30, 2025
- **Venue**: 455 Nguyen Van Tao, Nha Be, Ho Chi Minh City

## ✨ Features

### Design

- Elegant sage green (#94a094) and off-white (#f8f8f6) color scheme
- Beautiful typography using Playfair Display and Source Sans Pro fonts
- Responsive design that works on all devices
- Smooth animations powered by Framer Motion

### Sections

1. **Hero Section**: Animated romantic text with beautiful background image
2. **Wedding Information**: Couple details with live countdown timer
3. **Photo Gallery**: Masonry layout with 42 wedding photos and lightbox viewer
4. **Venue Map**: Interactive Google Maps integration with directions

### Interactions

- **Step-based Scrolling**: Navigate between sections using mouse wheel, keyboard, or touch
- **Navigation Dots**: Quick section navigation on the right side
- **Image Gallery**: Click photos to view in full-screen lightbox with navigation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm start
```

The website will be available at `http://localhost:3000`

### Build for Production

Create a production build:

```bash
npm run build
```

## 📱 Navigation Controls

- **Mouse**: Scroll up/down to navigate between sections
- **Keyboard**:
  - Arrow keys (↑/↓) or Spacebar to navigate
  - Home/End keys to jump to first/last section
- **Touch**: Swipe up/down on mobile devices
- **Navigation Dots**: Click dots on the right side to jump to any section

## 🖼️ Images

The website includes 42 beautiful wedding photos in WebP format, optimized for web performance. The hero section uses `HUG00052.webp` as the background, while all other images are displayed in the masonry gallery.

## 📦 Dependencies

- **React**: Core framework
- **Framer Motion**: Smooth animations and transitions
- **react-intersection-observer**: Scroll-triggered animations
- **react-masonry-css**: Responsive masonry layout for photo gallery

## 🎨 Design System

### Colors

- Primary: #94a094 (sage green)
- Secondary: #f8f8f6 (off-white)
- Text: #333333 (dark gray)

### Typography

- Headings: Playfair Display (serif)
- Body text: Source Sans Pro (sans-serif)

## 🌟 Performance Features

- Image preloading with progress indicator
- Lazy loading for gallery images
- Optimized WebP format for all images
- Smooth 60fps animations
- Responsive image loading

## 📱 Accessibility

- Keyboard navigation support
- ARIA labels for interactive elements
- Focus states for navigation
- Reduced motion support for users who prefer less animation
- High contrast mode compatibility

## 🔧 Customization

The website is built with modularity in mind. Key customizable elements:

- **Colors**: Update CSS variables in `src/index.css`
- **Wedding Details**: Edit information in `WeddingInfo.js` and `MapSection.js`
- **Images**: Replace files in the `hinhcuoi` folder
- **Text Content**: Update romantic messages in `HeroSection.js`

## 📄 License

This wedding website is created specifically for Viet Hung & Lan Huyen's wedding celebration.

---

_Made with ❤️ for a beautiful celebration_
