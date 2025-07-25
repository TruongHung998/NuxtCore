<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Memories</h2>
        <div class="section-subtitle script-font">Captured moments of love</div>
      </div>

      <div class="gallery-grid" ref="galleryContainer">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="gallery-item"
          :class="getItemClass(index)"
          @click="openLightbox(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            :loading="index > 6 ? 'lazy' : 'eager'"
            class="gallery-image"
          />
          <div class="gallery-overlay">
            <div class="overlay-icon">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path
                  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>

          <button
            class="lightbox-nav prev"
            @click="prevImage"
            v-if="currentImageIndex > 0"
          >
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <img
            :src="galleryImages[currentImageIndex].src"
            :alt="galleryImages[currentImageIndex].alt"
            class="lightbox-image"
          />

          <button
            class="lightbox-nav next"
            @click="nextImage"
            v-if="currentImageIndex < galleryImages.length - 1"
          >
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>

          <div class="lightbox-counter">
            {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const galleryContainer = ref(null);
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const galleryImages = [
  { src: "/assets/hinhcuoi/HUG00025.jpg", alt: "Wedding photo 1" },
  { src: "/assets/hinhcuoi/HUG00052.jpg", alt: "Wedding photo 2" },
  { src: "/assets/hinhcuoi/HUG00163.jpg", alt: "Wedding photo 3" },
  { src: "/assets/hinhcuoi/HUG00192.jpg", alt: "Wedding photo 4" },
  { src: "/assets/hinhcuoi/HUG00221.jpg", alt: "Wedding photo 5" },
  { src: "/assets/hinhcuoi/HUG00246.jpg", alt: "Wedding photo 6" },
  { src: "/assets/hinhcuoi/HUG00263.jpg", alt: "Wedding photo 7" },
  { src: "/assets/hinhcuoi/HUG00293.jpg", alt: "Wedding photo 8" },
  { src: "/assets/hinhcuoi/HUG00324.jpg", alt: "Wedding photo 9" },
  { src: "/assets/hinhcuoi/HUG00353.jpg", alt: "Wedding photo 10" },
  { src: "/assets/hinhcuoi/HUG00374.jpg", alt: "Wedding photo 11" },
  { src: "/assets/hinhcuoi/HUG00410.jpg", alt: "Wedding photo 12" },
  { src: "/assets/hinhcuoi/HUG09557.jpg", alt: "Wedding photo 13" },
];

const getItemClass = (index) => {
  const classes = ["gallery-item"];
  // Create varied grid sizes for masonry effect
  if (index % 7 === 0) classes.push("large");
  if (index % 5 === 0 && index % 7 !== 0) classes.push("wide");
  if (index % 3 === 0 && index % 5 !== 0 && index % 7 !== 0)
    classes.push("tall");
  return classes.join(" ");
};

const openLightbox = (index) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = "";
};

const nextImage = () => {
  if (currentImageIndex.value < galleryImages.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item, index) => {
    setTimeout(() => {
      observer.observe(item);
    }, index * 50);
  });
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.gallery-section {
  padding: 5rem 0;
  background: var(--secondary-color);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.5rem;
  color: var(--text-light);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  grid-auto-rows: 200px;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.gallery-item.animate {
  opacity: 1;
  transform: translateY(0);
}

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-item.tall {
  grid-row: span 2;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(148, 160, 148, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-icon {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(10px);
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav.prev {
  left: -60px;
}

.lightbox-nav.next {
  right: -60px;
}

.lightbox-counter {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.5rem;
    grid-auto-rows: 150px;
  }

  .gallery-item.large,
  .gallery-item.wide {
    grid-column: span 1;
  }

  .gallery-item.large,
  .gallery-item.tall {
    grid-row: span 1;
  }

  .lightbox-nav {
    display: none;
  }

  .lightbox-counter {
    bottom: 20px;
  }

  .lightbox-close {
    top: 20px;
    right: 20px;
  }
}
</style>
