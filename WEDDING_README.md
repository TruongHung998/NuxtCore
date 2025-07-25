# 💒 Modern Wedding Invitation Website

A beautiful, responsive wedding invitation website built with **Nuxt.js 3** and **Vue 3**. Features elegant animations, photo galleries, countdown timer, and interactive elements.

## ✨ Features

### 🎨 Design & UI

- **Elegant Color Scheme**: Sage green (#94a094) primary with cream white (#f8f8f6) secondary
- **Modern Typography**: Dancing Script, Playfair Display, and Inter fonts
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Smooth Animations**: GSAP-powered scroll animations and page transitions

### 📱 Interactive Components

- **Wedding Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Parallax background with couple names and call-to-action
- **Love Story Timeline**: Interactive timeline with photo integration
- **Photo Gallery**: Masonry layout with lightbox functionality and lazy loading
- **Countdown Timer**: Real-time countdown to the wedding date
- **Wedding Details**: Ceremony, reception, accommodation, and registry information
- **Venue & Location**: Interactive map with venue details and directions
- **Floating Actions**: Quick RSVP, share functionality, and scroll-to-top

### 🚀 Performance Features

- **Loading Screen**: Elegant animated loader with progress indication
- **Lazy Loading**: Images load as needed for optimal performance
- **Modern Image Formats**: WebP support with fallbacks
- **Scroll Optimization**: Smooth scrolling with ScrollSmoother
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

### ♿ Accessibility Features

- **Skip Navigation**: Skip-to-content link for keyboard users
- **Focus Indicators**: Clear focus states for all interactive elements
- **Reduced Motion**: Respects user's motion preferences
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **High Contrast**: Accessible color combinations

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 3
- **Frontend**: Vue 3 with Composition API
- **Styling**: CSS3 with custom variables and animations
- **Animations**: GSAP with ScrollTrigger and ScrollSmoother
- **Typography**: Google Fonts (Dancing Script, Playfair Display, Inter)
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Nuxt-Template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 📁 Project Structure

```
├── components/
│   └── wedding/
│       ├── WeddingNavigation.vue    # Fixed navigation header
│       ├── WeddingHero.vue          # Hero section with parallax
│       ├── WeddingStory.vue         # Love story timeline
│       ├── WeddingGallery.vue       # Photo gallery with lightbox
│       ├── WeddingCountdown.vue     # Wedding countdown timer
│       ├── WeddingDetails.vue       # Wedding information & RSVP
│       ├── WeddingVenue.vue         # Venue details & map
│       ├── WeddingFooter.vue        # Footer with contact info
│       ├── WeddingLoader.vue        # Loading screen
│       └── WeddingFloatingActions.vue # Floating action buttons
├── pages/
│   └── index.vue                    # Main wedding page
├── assets/
│   └── css/
│       └── wedding.css              # Wedding-specific styles
└── public/
    └── assets/
        └── hinhcuoi/               # Wedding photos
```

## 🎨 Customization

### Color Scheme

Update the CSS variables in `assets/css/wedding.css`:

```css
:root {
  --primary-color: #94a094; /* Sage green */
  --secondary-color: #f8f8f6; /* Cream white */
  --text-dark: #2d3436; /* Dark gray */
  --text-light: #636e72; /* Light gray */
  --accent-gold: #d4af37; /* Gold accent */
}
```

### Wedding Details

Update the following files with your information:

1. **Wedding Date**: Update in `WeddingCountdown.vue`, `WeddingHero.vue`, and `WeddingDetails.vue`
2. **Couple Names**: Update in all components (currently "Sarah & John")
3. **Wedding Photos**: Replace images in `public/assets/hinhcuoi/`
4. **Venue Information**: Update in `WeddingVenue.vue` and `WeddingDetails.vue`
5. **Contact Information**: Update email and phone in `WeddingDetails.vue` and `WeddingFooter.vue`

### Love Story

Edit the timeline in `WeddingStory.vue`:

```javascript
const timelineEvents = [
  {
    date: "2018",
    title: "First Meeting",
    description: "Your love story...",
    image: "path-to-image.jpg",
  },
  // Add more events...
];
```

## 📸 Photo Management

### Adding Photos

1. Add high-resolution photos to `public/assets/hinhcuoi/`
2. Update the `galleryImages` array in `WeddingGallery.vue`
3. Optimize images for web (recommended: WebP format, max 1920px width)

### Image Optimization Tips

- Use WebP format for better compression
- Provide multiple sizes for responsive images
- Implement lazy loading for better performance
- Compress images to reduce file size

## 🗺️ Map Integration

The venue map uses Google Maps embed. To customize:

1. **Get your venue coordinates**
2. **Update the iframe src** in `WeddingVenue.vue`
3. **Add custom markers** if needed
4. **Style the map** to match your theme

```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
>
</iframe>
```

## 📱 RSVP Integration

The floating RSVP form is ready for backend integration:

1. **Update the `submitRSVP` function** in `WeddingFloatingActions.vue`
2. **Connect to your preferred backend** (Firebase, Netlify Forms, etc.)
3. **Add form validation** as needed
4. **Customize confirmation messages**

Example backend integration:

```javascript
const submitRSVP = async () => {
  try {
    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rsvpForm.value),
    });
    // Handle response...
  } catch (error) {
    // Handle error...
  }
};
```

## 🎭 Animation Customization

Animations are powered by GSAP. Customize in each component:

```javascript
// Entrance animations
gsap.from(".element", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
});

// Scroll-triggered animations
ScrollTrigger.create({
  trigger: ".element",
  start: "top 80%",
  animation: gsap.from(".element", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
  }),
});
```

## 🔧 Performance Optimization

### Image Optimization

- Use modern image formats (WebP, AVIF)
- Implement responsive images
- Add lazy loading
- Compress images appropriately

### Code Splitting

- Components are automatically code-split by Nuxt
- Use dynamic imports for heavy components
- Implement route-based code splitting

### Caching

- Configure appropriate cache headers
- Use service workers for offline functionality
- Implement browser caching strategies

## 📊 SEO & Analytics

### Meta Tags

Update in `pages/index.vue`:

```javascript
useHead({
  title: "Your Wedding Title",
  meta: [
    { name: "description", content: "Your wedding description" },
    { property: "og:title", content: "Your Wedding" },
    { property: "og:image", content: "path-to-your-image.jpg" },
  ],
});
```

### Analytics Integration

Add your analytics code to `nuxt.config.ts`:

```javascript
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID",
        },
      ],
    },
  },
});
```

## 🚀 Deployment Options

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `.output/public`

### Vercel

1. Import project from Git
2. Framework preset: Nuxt.js
3. Deploy automatically

### Static Hosting

```bash
npm run generate
# Upload .output/public to your hosting provider
```

## 🎉 Demo

The wedding website includes:

- **Modern loading animation** with wedding rings
- **Parallax hero section** with beautiful typography
- **Interactive timeline** showcasing your love story
- **Responsive photo gallery** with lightbox viewing
- **Live countdown timer** to your special day
- **Detailed wedding information** with RSVP functionality
- **Interactive venue map** with directions
- **Floating action buttons** for quick access to features

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Acknowledgments

- **GSAP** for smooth animations
- **Google Fonts** for beautiful typography
- **Nuxt.js** for the amazing framework
- **Vue.js** for the reactive components

---

**Made with ❤️ for your special day**

_Happy Wedding! 🎊_
