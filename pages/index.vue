<template>
  <div class="wedding-website">
    <!-- Navigation Dots -->
    <nav class="nav-dots">
      <button
        v-for="(section, index) in sections"
        :key="index"
        @click="scrollToSection(index)"
        :class="['nav-dot', { active: currentSection === index }]"
        :aria-label="`Go to section ${index + 1}`"
      />
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Section 1: Hero with Lyrics -->
      <section ref="heroSection" class="section hero-section">
        <div class="hero-background">
          <img
            src="/assets/hinhcuoi/HUG00052.webp"
            alt="Viet Hung and Lan Huyen Wedding"
            class="hero-image"
          />
          <div class="hero-overlay"></div>
        </div>

        <div class="hero-content">
          <div class="lyrics-container">
            <div
              v-for="(line, index) in lyrics"
              :key="index"
              class="lyric-line"
              :style="{ animationDelay: `${index * 0.5}s` }"
            >
              {{ line }}
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Photo Gallery -->
      <section ref="gallerySection" class="section gallery-section">
        <div class="container">
          <h2 class="section-title">Our Love Story</h2>
          <div class="gallery-grid">
            <div
              v-for="(image, index) in galleryImages"
              :key="index"
              class="gallery-item"
              @click="openLightbox(index)"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="gallery-image"
                loading="lazy"
              />
              <div class="gallery-overlay">
                <div class="gallery-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Wedding Information -->
      <section ref="infoSection" class="section info-section">
        <div class="container">
          <div class="wedding-info">
            <h2 class="couple-names">
              <span class="groom-name">Viet Hung</span>
              <span class="and">&</span>
              <span class="bride-name">Lan Huyen</span>
            </h2>

            <div class="wedding-date">
              <div class="date-label">November 30, 2025</div>
              <div class="countdown" ref="countdown">
                <div class="countdown-item">
                  <span class="countdown-number" ref="days">00</span>
                  <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                  <span class="countdown-number" ref="hours">00</span>
                  <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                  <span class="countdown-number" ref="minutes">00</span>
                  <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-item">
                  <span class="countdown-number" ref="seconds">00</span>
                  <span class="countdown-label">Seconds</span>
                </div>
              </div>
            </div>

            <div class="venue-info">
              <h3>Join Us</h3>
              <p class="venue-address">
                455 Nguyen Van Tao<br />
                Nha Be, Ho Chi Minh City
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Venue Map -->
      <section ref="mapSection" class="section map-section">
        <div class="container">
          <h2 class="section-title">Find Us</h2>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.484123456789!2d106.71234567890123!3d10.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQyJzQ0LjQiTiAxMDbCsDQyJzQ0LjQiRQ!5e0!3m2!1sen!2svn!4v1234567890123"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            ></iframe>
          </div>
          <div class="venue-details">
            <h3>Venue Details</h3>
            <p>
              455 Nguyen Van Tao, Nha Be District, Ho Chi Minh City, Vietnam
            </p>
            <p>Please arrive 30 minutes before the ceremony begins.</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <img
          :src="galleryImages[currentImageIndex].src"
          :alt="galleryImages[currentImageIndex].alt"
          class="lightbox-image"
        />
        <button
          v-if="currentImageIndex > 0"
          class="lightbox-nav lightbox-prev"
          @click="previousImage"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          v-if="currentImageIndex < galleryImages.length - 1"
          class="lightbox-nav lightbox-next"
          @click="nextImage"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Wedding details
const weddingDate = new Date("2025-11-30T00:00:00");

// Lyrics for the hero section
const lyrics = [
  "Georgia, wrap me up in all your-",
  "I want you in my arms",
  "Oh, let me hold you",
  "I'll never let you go again like I did",
  '"I would never fall in love again until I found her"',
  'I said, "I would never fall unless it\'s you I fall into"',
  "I was lost within the darkness, but then I found her",
  "I found you",
];

// Gallery images (excluding HUG00052.webp which is used in hero)
const galleryImages = [
  {
    src: "/assets/hinhcuoi/HUG00025.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 1",
  },
  {
    src: "/assets/hinhcuoi/HUG00163.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 2",
  },
  {
    src: "/assets/hinhcuoi/HUG00192.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 3",
  },
  {
    src: "/assets/hinhcuoi/HUG00221.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 4",
  },
  {
    src: "/assets/hinhcuoi/HUG00246.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 5",
  },
  {
    src: "/assets/hinhcuoi/HUG00263.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 6",
  },
  {
    src: "/assets/hinhcuoi/HUG00293.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 7",
  },
  {
    src: "/assets/hinhcuoi/HUG00324.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 8",
  },
  {
    src: "/assets/hinhcuoi/HUG00353.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 9",
  },
  {
    src: "/assets/hinhcuoi/HUG00374.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 10",
  },
  {
    src: "/assets/hinhcuoi/HUG00410.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 11",
  },
  {
    src: "/assets/hinhcuoi/HUG00532.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 12",
  },
  {
    src: "/assets/hinhcuoi/HUG00637.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 13",
  },
  {
    src: "/assets/hinhcuoi/HUG00805.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 14",
  },
  {
    src: "/assets/hinhcuoi/HUG00818.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 15",
  },
  {
    src: "/assets/hinhcuoi/HUG00930.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 16",
  },
  {
    src: "/assets/hinhcuoi/HUG01017.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 17",
  },
  {
    src: "/assets/hinhcuoi/HUG09101.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 18",
  },
  {
    src: "/assets/hinhcuoi/HUG09122.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 19",
  },
  {
    src: "/assets/hinhcuoi/HUG09133.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 20",
  },
  {
    src: "/assets/hinhcuoi/HUG09183.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 21",
  },
  {
    src: "/assets/hinhcuoi/HUG09192.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 22",
  },
  {
    src: "/assets/hinhcuoi/HUG09271.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 23",
  },
  {
    src: "/assets/hinhcuoi/HUG09300.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 24",
  },
  {
    src: "/assets/hinhcuoi/HUG09350.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 25",
  },
  {
    src: "/assets/hinhcuoi/HUG09395.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 26",
  },
  {
    src: "/assets/hinhcuoi/HUG09401.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 27",
  },
  {
    src: "/assets/hinhcuoi/HUG09441.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 28",
  },
  {
    src: "/assets/hinhcuoi/HUG09461.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 29",
  },
  {
    src: "/assets/hinhcuoi/HUG09482.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 30",
  },
  {
    src: "/assets/hinhcuoi/HUG09557.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 31",
  },
  {
    src: "/assets/hinhcuoi/HUG09606.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 32",
  },
  {
    src: "/assets/hinhcuoi/HUG09695.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 33",
  },
  {
    src: "/assets/hinhcuoi/HUG09738.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 34",
  },
  {
    src: "/assets/hinhcuoi/HUG09767.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 35",
  },
  {
    src: "/assets/hinhcuoi/HUG09799.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 36",
  },
  {
    src: "/assets/hinhcuoi/HUG09905.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 37",
  },
  {
    src: "/assets/hinhcuoi/HUG09943.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 38",
  },
  {
    src: "/assets/hinhcuoi/HUG09970.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 39",
  },
  {
    src: "/assets/hinhcuoi/HUG09986.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 40",
  },
  {
    src: "/assets/hinhcuoi/HUG09999.webp",
    alt: "Viet Hung and Lan Huyen - Love Story 41",
  },
];

// Reactive state
const currentSection = ref(0);
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

// Section refs
const heroSection = ref<HTMLElement>();
const gallerySection = ref<HTMLElement>();
const infoSection = ref<HTMLElement>();
const mapSection = ref<HTMLElement>();

// Countdown refs
const days = ref<HTMLElement>();
const hours = ref<HTMLElement>();
const minutes = ref<HTMLElement>();
const seconds = ref<HTMLElement>();

const sections = computed(() => [
  heroSection.value,
  gallerySection.value,
  infoSection.value,
  mapSection.value,
]);

// Methods
const scrollToSection = (index: number) => {
  sections.value[index]?.scrollIntoView({ behavior: "smooth" });
  currentSection.value = index;
};

const openLightbox = (index: number) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = "auto";
};

const nextImage = () => {
  if (currentImageIndex.value < galleryImages.length - 1) {
    currentImageIndex.value++;
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = weddingDate.getTime() - now;

  if (distance > 0) {
    const daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursValue = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesValue = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsValue = Math.floor((distance % (1000 * 60)) / 1000);

    if (days.value)
      days.value.textContent = daysValue.toString().padStart(2, "0");
    if (hours.value)
      hours.value.textContent = hoursValue.toString().padStart(2, "0");
    if (minutes.value)
      minutes.value.textContent = minutesValue.toString().padStart(2, "0");
    if (seconds.value)
      seconds.value.textContent = secondsValue.toString().padStart(2, "0");
  }
};

// Lifecycle
onMounted(() => {
  // Set up countdown timer
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Set up intersection observer for section tracking
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.value.findIndex(
            (section) => section === entry.target
          );
          if (index !== -1) {
            currentSection.value = index;
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.value.forEach((section) => {
    if (section) observer.observe(section);
  });

  // Keyboard navigation for lightbox
  const handleKeydown = (e: KeyboardEvent) => {
    if (!lightboxOpen.value) return;

    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowRight":
        nextImage();
        break;
      case "ArrowLeft":
        previousImage();
        break;
    }
  };

  document.addEventListener("keydown", handleKeydown);

  // Cleanup
  onUnmounted(() => {
    clearInterval(countdownInterval);
    observer.disconnect();
    document.removeEventListener("keydown", handleKeydown);
  });
});

// SEO
useHead({
  title: "Viet Hung & Lan Huyen - Wedding Invitation",
  meta: [
    {
      name: "description",
      content:
        "Join us in celebrating the wedding of Viet Hung and Lan Huyen on November 30, 2025",
    },
    {
      property: "og:title",
      content: "Viet Hung & Lan Huyen - Wedding Invitation",
    },
    {
      property: "og:description",
      content:
        "Join us in celebrating the wedding of Viet Hung and Lan Huyen on November 30, 2025",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>

<style scoped>
/* Wedding Website Styles */
.wedding-website {
  font-family: "Quicksand", sans-serif;
  line-height: 1.6;
  color: #2c3e50;
  overflow-x: hidden;
}

/* Navigation Dots */
.nav-dots {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #94a094;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.nav-dot:hover {
  background: rgba(148, 160, 148, 0.3);
  transform: scale(1.2);
}

.nav-dot.active {
  background: #94a094;
  transform: scale(1.3);
}

.nav-dot::after {
  content: "";
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 50%;
  border: 1px solid rgba(148, 160, 148, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-dot.active::after {
  opacity: 1;
}

/* Main Content */
.main-content {
  scroll-behavior: smooth;
}

/* Section Styles */
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

/* Hero Section */
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.lyrics-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.lyric-line {
  font-family: "Nunito", sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  line-height: 1.4;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.lyric-line:nth-child(even) {
  font-style: italic;
  font-weight: 200;
}

.lyric-line:nth-child(odd) {
  font-weight: 400;
}

/* Gallery Section */
.gallery-section {
  background: #f8f8f6;
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: #94a094;
  margin-bottom: 60px;
  font-family: "Nunito", sans-serif;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  aspect-ratio: 1;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(148, 160, 148, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-icon {
  width: 50px;
  height: 50px;
  color: white;
  opacity: 0.9;
}

.gallery-icon svg {
  width: 100%;
  height: 100%;
}

/* Info Section */
.info-section {
  background: linear-gradient(135deg, #94a094 0%, #7a8a7a 100%);
  color: white;
  text-align: center;
}

.wedding-info {
  max-width: 800px;
  margin: 0 auto;
}

.couple-names {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 600;
  margin-bottom: 40px;
  font-family: "Nunito", sans-serif;
  line-height: 1.2;
}

.groom-name,
.bride-name {
  display: block;
  margin: 10px 0;
}

.and {
  font-size: 0.6em;
  font-weight: 300;
  opacity: 0.8;
  display: block;
  margin: 20px 0;
}

.wedding-date {
  margin-bottom: 60px;
}

.date-label {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  margin-bottom: 30px;
  font-family: "Nunito", sans-serif;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.countdown-item {
  text-align: center;
  min-width: 80px;
}

.countdown-number {
  display: block;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 5px;
  font-family: "Nunito", sans-serif;
}

.countdown-label {
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.venue-info h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  margin-bottom: 20px;
  font-family: "Nunito", sans-serif;
}

.venue-address {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.6;
  opacity: 0.9;
}

/* Map Section */
.map-section {
  background: #f8f8f6;
  padding: 80px 0;
}

.map-container {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.venue-details {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.venue-details h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #94a094;
  margin-bottom: 20px;
  font-family: "Nunito", sans-serif;
}

.venue-details p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2c3e50;
  margin-bottom: 15px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.lightbox-close:hover {
  transform: scale(1.1);
}

.lightbox-close svg {
  width: 24px;
  height: 24px;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-nav svg {
  width: 20px;
  height: 20px;
}

.lightbox-prev {
  left: -70px;
}

.lightbox-next {
  right: -70px;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-dots {
    right: 15px;
    gap: 10px;
  }

  .nav-dot {
    width: 10px;
    height: 10px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  .countdown {
    gap: 20px;
  }

  .countdown-item {
    min-width: 60px;
  }

  .countdown-number {
    font-size: 1.8rem;
  }

  .countdown-label {
    font-size: 0.8rem;
  }

  .lightbox-nav {
    width: 40px;
    height: 40px;
  }

  .lightbox-prev {
    left: 10px;
  }

  .lightbox-next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .countdown {
    gap: 15px;
  }

  .countdown-item {
    min-width: 50px;
  }

  .countdown-number {
    font-size: 1.5rem;
  }

  .countdown-label {
    font-size: 0.7rem;
  }

  .couple-names .groom-name,
  .couple-names .bride-name {
    margin: 5px 0;
  }

  .couple-names .and {
    margin: 15px 0;
  }
}
</style>
