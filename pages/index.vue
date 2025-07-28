<template>
  <div class="wedding-website">
    <!-- Loading Screen -->
    <LoadingScreen :images="allImages" @loading-complete="onLoadingComplete" />

    <CustomCursor />
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
    <main class="main-content" :class="{ 'content-hidden': isLoading }">
      <!-- Section 1: Hero with Karaoke Lyrics -->
      <section
        ref="heroSection"
        class="section hero-section"
        :class="{ 'section-visible': sectionVisible[0] }"
      >
        <div class="hero-background">
          <img
            src="/assets/hinhcuoi/HUG00052.webp"
            alt="Viet Hung and Lan Huyen Wedding"
            class="hero-image"
          />
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <div class="karaoke-lyrics">
            <transition name="karaoke-fade" mode="out-in">
              <div :key="currentLyricIndex" class="karaoke-line">
                <span
                  v-for="(char, i) in karaokeCharArray"
                  :key="i"
                  class="karaoke-char"
                  :class="{ active: i < karaokeCharIndex }"
                  v-html="char === ' ' ? '&nbsp;' : char"
                ></span>
              </div>
            </transition>
          </div>
        </div>
      </section>

      <!-- Section 2: Photo Gallery Carousel -->
      <section
        ref="gallerySection"
        class="section gallery-section"
        :class="{ 'section-visible': sectionVisible[1] }"
      >
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <div
              v-for="(image, index) in galleryImages"
              :key="index"
              class="carousel-card"
              :class="{
                active: currentCardIndex === index,
                prev: currentCardIndex - 1 === index,
                next: currentCardIndex + 1 === index,
              }"
              :style="getCardTransform(index)"
              @click="handleCardClick(index)"
            >
              <div class="card-image-container">
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="card-image"
                  loading="lazy"
                />
                <div class="card-overlay">
                  <div class="card-info">
                    <h3 class="card-title">{{ image.alt }}</h3>
                    <p class="card-description">Click to view details</p>
                  </div>
                  <div class="card-actions">
                    <button
                      class="action-btn like-btn"
                      @click.stop="likeCard(index)"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        />
                      </svg>
                    </button>
                    <button
                      class="action-btn view-btn"
                      @click.stop="openLightbox(index)"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Carousel Progress -->
          <div class="carousel-progress">
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{
                  width: `${
                    ((currentCardIndex + 1) / galleryImages.length) * 100
                  }%`,
                }"
              ></div>
            </div>
            <span class="progress-text"
              >{{ currentCardIndex + 1 }} / {{ galleryImages.length }}</span
            >
          </div>

          <!-- Carousel Navigation -->
          <div class="carousel-nav">
            <button
              class="nav-btn prev-btn"
              @click="previousCard"
              :disabled="currentCardIndex === 0"
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
            <div class="carousel-indicators">
              <button
                v-for="(image, index) in galleryImages"
                :key="index"
                class="indicator-dot"
                :class="{ active: currentCardIndex === index }"
                @click="goToCard(index)"
              ></button>
            </div>
            <button
              class="nav-btn next-btn"
              @click="nextCard"
              :disabled="currentCardIndex === galleryImages.length - 1"
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
      </section>

      <!-- Section 3: Wedding Information -->
      <section
        ref="infoSection"
        class="section info-section"
        :class="{ 'section-visible': sectionVisible[2] }"
      >
        <div class="container">
          <div class="wedding-info">
            <h2 class="couple-names artistic-font">
              <span class="groom-name">Viet Hung</span>
              <span class="and">&</span>
              <span class="bride-name">Lan Huyen</span>
            </h2>
            <div class="wedding-date">
              <div class="date-label">November 30, 2025</div>
              <div class="countdown" ref="countdown">
                <div class="countdown-item">
                  <transition name="count-fade" mode="out-in">
                    <span
                      class="countdown-number"
                      ref="days"
                      :key="countdown.days"
                      >{{ countdown.days }}</span
                    >
                  </transition>
                  <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                  <transition name="count-fade" mode="out-in">
                    <span
                      class="countdown-number"
                      ref="hours"
                      :key="countdown.hours"
                      >{{ countdown.hours }}</span
                    >
                  </transition>
                  <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                  <transition name="count-fade" mode="out-in">
                    <span
                      class="countdown-number"
                      ref="minutes"
                      :key="countdown.minutes"
                      >{{ countdown.minutes }}</span
                    >
                  </transition>
                  <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-item">
                  <transition name="count-fade" mode="out-in">
                    <span
                      class="countdown-number"
                      ref="seconds"
                      :key="countdown.seconds"
                      >{{ countdown.seconds }}</span
                    >
                  </transition>
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
      <section
        ref="mapSection"
        class="section map-section"
        :class="{ 'section-visible': sectionVisible[3] }"
      >
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
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { useHead } from "#imports";
import CustomCursor from "@/components/UI/CustomCursor.vue";
import LoadingScreen from "@/components/common/LoadingScreen.vue";

// Artistic font for couple names
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap",
    },
  ],
});

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
const currentLyricIndex = ref(0);
const karaokeCharIndex = ref(0);
const karaokeCharArray = computed(() =>
  Array.from(lyrics[currentLyricIndex.value])
);
let karaokeInterval: NodeJS.Timeout | null = null;
let karaokeLineTimeout: NodeJS.Timeout | null = null;

const startKaraoke = () => {
  karaokeCharIndex.value = 0;
  if (karaokeInterval) clearInterval(karaokeInterval);
  if (karaokeLineTimeout) clearTimeout(karaokeLineTimeout);
  karaokeInterval = setInterval(() => {
    if (karaokeCharIndex.value < karaokeCharArray.value.length) {
      karaokeCharIndex.value++;
    } else {
      clearInterval(karaokeInterval!);
      karaokeLineTimeout = setTimeout(() => {
        karaokeCharIndex.value = 0;
        currentLyricIndex.value = (currentLyricIndex.value + 1) % lyrics.length;
        startKaraoke();
      }, 1200);
    }
  }, 40);
};
onMounted(() => {
  startKaraoke();
});
onUnmounted(() => {
  if (karaokeInterval) clearInterval(karaokeInterval);
  if (karaokeLineTimeout) clearTimeout(karaokeLineTimeout);
});

// Gallery images with varied aspect classes
const galleryImages = [
  {
    src: "/assets/hinhcuoi/HUG00025.webp",
    alt: "Love Story 1",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG00163.webp",
    alt: "Love Story 2",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG00192.webp",
    alt: "Love Story 3",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG00221.webp",
    alt: "Love Story 4",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG00246.webp",
    alt: "Love Story 5",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG00263.webp",
    alt: "Love Story 6",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG00293.webp",
    alt: "Love Story 7",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG00324.webp",
    alt: "Love Story 8",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG00353.webp",
    alt: "Love Story 9",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG00374.webp",
    alt: "Love Story 10",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG00410.webp",
    alt: "Love Story 11",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG00532.webp",
    alt: "Love Story 12",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG00637.webp",
    alt: "Love Story 13",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG00805.webp",
    alt: "Love Story 14",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG00818.webp",
    alt: "Love Story 15",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG00930.webp",
    alt: "Love Story 16",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG01017.webp",
    alt: "Love Story 17",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09101.webp",
    alt: "Love Story 18",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG09122.webp",
    alt: "Love Story 19",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09133.webp",
    alt: "Love Story 20",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG09183.webp",
    alt: "Love Story 21",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09192.webp",
    alt: "Love Story 22",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG09271.webp",
    alt: "Love Story 23",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09300.webp",
    alt: "Love Story 24",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG09350.webp",
    alt: "Love Story 25",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09395.webp",
    alt: "Love Story 26",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG09401.webp",
    alt: "Love Story 27",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09441.webp",
    alt: "Love Story 28",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG09461.webp",
    alt: "Love Story 29",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09482.webp",
    alt: "Love Story 30",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG09557.webp",
    alt: "Love Story 31",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09606.webp",
    alt: "Love Story 32",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG09695.webp",
    alt: "Love Story 33",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09738.webp",
    alt: "Love Story 34",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG09767.webp",
    alt: "Love Story 35",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09799.webp",
    alt: "Love Story 36",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG09905.webp",
    alt: "Love Story 37",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09943.webp",
    alt: "Love Story 38",
    aspect: "horizontal",
  },
  {
    src: "/assets/hinhcuoi/HUG09970.webp",
    alt: "Love Story 39",
    aspect: "vertical",
  },
  {
    src: "/assets/hinhcuoi/HUG09986.webp",
    alt: "Love Story 40",
    aspect: "square",
  },
  {
    src: "/assets/hinhcuoi/HUG09999.webp",
    alt: "Love Story 41",
    aspect: "vertical",
  },
];

// All images for preloading
const allImages = computed(() => [
  "/assets/hinhcuoi/HUG00052.webp", // Hero image
  ...galleryImages.map((img) => img.src),
]);

// Loading state
const isLoading = ref(true);

const onLoadingComplete = () => {
  isLoading.value = false;
};

// Countdown state and animation
const countdown = ref({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});
let countdownInterval: NodeJS.Timeout | null = null;
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
    countdown.value = {
      days: daysValue.toString().padStart(2, "0"),
      hours: hoursValue.toString().padStart(2, "0"),
      minutes: minutesValue.toString().padStart(2, "0"),
      seconds: secondsValue.toString().padStart(2, "0"),
    };
  }
};
onMounted(() => {
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
});
onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval);
});

// Section refs and scroll trigger animation
const currentSection = ref(0);
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);
const heroSection = ref<HTMLElement>();
const gallerySection = ref<HTMLElement>();
const infoSection = ref<HTMLElement>();
const mapSection = ref<HTMLElement>();
const sectionRefs = [heroSection, gallerySection, infoSection, mapSection];
const sectionVisible = ref([true, false, false, false]); // Always show first section on load
const sections = computed(() => [
  heroSection.value,
  gallerySection.value,
  infoSection.value,
  mapSection.value,
]);
const scrollToSection = (index: number) => {
  sections.value[index]?.scrollIntoView({ behavior: "smooth" });
  currentSection.value = index;
};

// Carousel functionality
const currentCardIndex = ref(0);

const getCardTransform = (index: number) => {
  const diff = index - currentCardIndex.value;
  const translateX = diff * 100;
  const scale = diff === 0 ? 1 : 0.85;
  const opacity = Math.abs(diff) <= 1 ? 1 : 0.2;
  const zIndex = diff === 0 ? 10 : 10 - Math.abs(diff);

  return {
    transform: `translateX(${translateX}%) scale(${scale})`,
    opacity: opacity.toString(),
    zIndex: zIndex.toString(),
  };
};

const nextCard = () => {
  if (currentCardIndex.value < galleryImages.length - 1) {
    currentCardIndex.value++;
  }
};

const previousCard = () => {
  if (currentCardIndex.value > 0) {
    currentCardIndex.value--;
  }
};

const goToCard = (index: number) => {
  currentCardIndex.value = index;
};

const handleCardClick = (index: number) => {
  openLightbox(index);
};

const likeCard = (index: number) => {
  // Add like functionality here
  console.log(`Liked card ${index}`);
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

// Intersection observer for nav dots and scroll-trigger animation
onMounted(() => {
  // Fallback: if observer fails, show all after 1s
  setTimeout(() => {
    if (sectionVisible.value.filter(Boolean).length === 1) {
      sectionVisible.value = [true, true, true, true];
    }
  }, 1200);
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const idx = sections.value.findIndex(
          (section) => section === entry.target
        );
        if (idx !== -1) {
          if (entry.isIntersecting) {
            currentSection.value = idx;
            sectionVisible.value[idx] = true;
          }
        }
      });
    },
    { threshold: 0.3 }
  );
  nextTick(() => {
    sections.value.forEach((section, idx) => {
      if (section) observer.observe(section);
    });
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
  onUnmounted(() => {
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
  height: 100vh; /* Ensure main content takes full height */
  overflow-y: auto; /* Allow scrolling for content */
  transition: opacity 0.5s ease-out;
}

.content-hidden {
  opacity: 0;
  pointer-events: none;
}

/* Section Styles */
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

.karaoke-lyrics {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Nunito", sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.karaoke-line {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
}

.karaoke-line.active {
  opacity: 1;
  transform: translateY(0);
}

.karaoke-char {
  display: inline-block;
  transition: color 0.2s ease-in-out;
}

.karaoke-char.active {
  color: #94a094; /* Highlight color for active characters */
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

/* Carousel Styles */
.carousel-container {
  width: 100vw;
  margin: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.carousel-wrapper {
  position: relative;
  height: 85vh;
  min-height: 600px;
  max-height: 900px;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
}

.carousel-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  user-select: none;
  will-change: transform, opacity;
}

.card-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
  background: linear-gradient(135deg, #f8f8f6 0%, #e8e8e6 100%);
}

.card-image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(14, 52, 25, 0.15) 100%,
    rgba(14, 147, 52, 0.08) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.3s ease;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  position: relative;
  z-index: 2;
}

.carousel-card:hover .card-image {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  color: white;
  padding: 30px 20px 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 3;
}

.carousel-card:hover .card-overlay {
  transform: translateY(0);
}

.card-info {
  margin-bottom: 15px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
  font-family: "Nunito", sans-serif;
}

.card-description {
  font-size: 0.9rem;
  opacity: 0.8;
}

.card-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.action-btn svg {
  width: 20px;
  height: 20px;
}

.like-btn:hover {
  background: rgba(255, 105, 180, 0.3);
}

.view-btn:hover {
  background: rgba(148, 160, 148, 0.3);
}

/* Carousel Navigation */
.carousel-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #94a094;
  background: white;
  color: #94a094;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.nav-btn:hover:not(:disabled) {
  background: #94a094;
  color: white;
  transform: scale(1.1);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-btn svg {
  width: 24px;
  height: 24px;
}

.carousel-indicators {
  display: flex;
  gap: 8px;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(148, 160, 148, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  background: #94a094;
  transform: scale(1.2);
}

.indicator-dot:hover {
  background: #94a094;
  transform: scale(1.1);
}

/* Carousel Progress */
.carousel-progress {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;
}

.progress-bar {
  flex: 1;
  max-width: 200px;
  height: 4px;
  background: rgba(148, 160, 148, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #94a094, #7a8a7a);
  border-radius: 2px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-text {
  font-size: 0.9rem;
  color: #94a094;
  font-weight: 500;
  min-width: 60px;
  text-align: center;
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

.couple-names.artistic-font {
  font-family: "Great Vibes", cursive;
  font-size: clamp(4rem, 8vw, 6rem);
  color: #f8f8f6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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

.countdown-number.count-flip-enter-active,
.countdown-number.count-flip-leave-active {
  transition: all 0.5s ease;
}

.countdown-number.count-flip-enter-from,
.countdown-number.count-flip-leave-to {
  transform: scale(0.9);
  opacity: 0;
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
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(10px);
  animation: lightboxFadeIn 0.3s ease-out;
}

.lightbox-content {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  animation: lightboxScaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.lightbox-image {
  max-width: 100%;
  max-height: 95vh;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
}

.lightbox-image:hover {
  transform: scale(1.02);
}

.lightbox-close {
  position: absolute;
  top: -60px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1) rotate(90deg);
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-nav svg {
  width: 24px;
  height: 24px;
}

.lightbox-prev {
  left: -80px;
}

.lightbox-next {
  right: -80px;
}

/* Lightbox Animations */
@keyframes lightboxFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes lightboxScaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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

  .carousel-container {
    width: 100vw;
  }

  .carousel-wrapper {
    height: 75vh;
    min-height: 450px;
    max-height: 700px;
  }

  .carousel-nav {
    padding: 0 10px;
  }

  .nav-btn {
    width: 45px;
    height: 45px;
  }

  .carousel-progress {
    margin-top: 15px;
  }

  .progress-bar {
    max-width: 150px;
  }

  .card-overlay {
    padding: 20px 15px 15px;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .action-btn {
    width: 35px;
    height: 35px;
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

  .carousel-wrapper {
    height: 65vh;
    min-height: 400px;
    max-height: 600px;
  }

  .carousel-nav {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
  }

  .carousel-indicators {
    order: -1;
  }

  .carousel-progress {
    margin-top: 15px;
  }

  .progress-bar {
    max-width: 120px;
  }

  .card-overlay {
    padding: 15px 10px 10px;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-description {
    font-size: 0.8rem;
  }

  .action-btn {
    width: 30px;
    height: 30px;
  }

  .action-btn svg {
    width: 16px;
    height: 16px;
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
