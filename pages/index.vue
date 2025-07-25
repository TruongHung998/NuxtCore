<template>
  <div>
    <!-- Accessibility Skip Link -->
    <a href="#hero" class="skip-link">Skip to main content</a>

    <!-- Wedding Loader -->
    <WeddingLoader v-if="!contentLoaded" @loaded="handleLoaded" />
    <!-- Main Wedding Content -->
    <div v-show="contentLoaded" class="wedding-website">
      <!-- Navigation -->
      <WeddingNavigation />

      <!-- Hero Section -->
      <WeddingHero />

      <!-- Couple Story -->
      <WeddingStory />

      <!-- Photo Gallery -->
      <WeddingGallery />

      <!-- Countdown Timer -->
      <WeddingCountdown />

      <!-- Wedding Details -->
      <WeddingDetails />

      <!-- Venue Map -->
      <WeddingVenue />

      <!-- Footer -->
      <WeddingFooter />

      <!-- Floating Actions -->
      <WeddingFloatingActions />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import WeddingLoader from "@/components/wedding/WeddingLoader.vue";
import WeddingNavigation from "@/components/wedding/WeddingNavigation.vue";
import WeddingHero from "@/components/wedding/WeddingHero.vue";
import WeddingStory from "@/components/wedding/WeddingStory.vue";
import WeddingGallery from "@/components/wedding/WeddingGallery.vue";
import WeddingCountdown from "@/components/wedding/WeddingCountdown.vue";
import WeddingDetails from "@/components/wedding/WeddingDetails.vue";
import WeddingVenue from "@/components/wedding/WeddingVenue.vue";
import WeddingFooter from "@/components/wedding/WeddingFooter.vue";
import WeddingFloatingActions from "@/components/wedding/WeddingFloatingActions.vue";

const contentLoaded = ref(false);

const handleLoaded = () => {
  contentLoaded.value = true;
  nextTick(() => {
    initializeAnimations();
  });
};

const initializeAnimations = () => {
  // Initialize GSAP animations after content is loaded
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
    });

    // Page entrance animation
    gsap.timeline().from(".wedding-website > *", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }
};

useHead({
  title: "Our Wedding - Lan Huyen & Viet Hung | November 30th, 2025",
  meta: [
    {
      name: "description",
      content:
        "Join us as we celebrate our special day. Wedding invitation and details for Lan Huyen & Viet Hung's wedding on November 30th, 2025 in Ho Chi Minh City, Vietnam.",
    },
    { property: "og:title", content: "Our Wedding - Lan Huyen & Viet Hung" },
    {
      property: "og:description",
      content:
        "Join us as we celebrate our special day on November 30th, 2025 in Ho Chi Minh City, Vietnam",
    },
    { property: "og:image", content: "/assets/hinhcuoi/HUG00025.jpg" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Our Wedding - Lan Huyen & Viet Hung" },
    {
      name: "twitter:description",
      content: "Join us as we celebrate our special day on November 30th, 2025",
    },
    { name: "twitter:image", content: "/assets/hinhcuoi/HUG00025.jpg" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, viewport-fit=cover",
    },
    { name: "theme-color", content: "#94a094" },
  ],
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
    },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    { rel: "preload", href: "/assets/hinhcuoi/HUG00025.jpg", as: "image" },
  ],
  script: [{ src: "/assets/js/smoother-script.js", defer: true }],
});
</script>

<style>
:root {
  --primary-color: #94a094;
  --secondary-color: #f8f8f6;
  --text-dark: #2d3436;
  --text-light: #636e72;
  --accent-gold: #d4af37;
  --white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
  overflow-x: hidden;
}

.wedding-website {
  min-height: 100vh;
  background-color: var(--secondary-color);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Typography */
h1,
h2,
h3,
h4 {
  font-family: "Playfair Display", serif;
  font-weight: 600;
}

.script-font {
  font-family: "Dancing Script", cursive;
  font-weight: 600;
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-1 {
  animation-delay: 0.1s;
}
.stagger-2 {
  animation-delay: 0.2s;
}
.stagger-3 {
  animation-delay: 0.3s;
}
.stagger-4 {
  animation-delay: 0.4s;
}
.stagger-5 {
  animation-delay: 0.5s;
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
</style>
