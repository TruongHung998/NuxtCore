<template>
  <section id="hero" class="hero-section">
    <div class="hero-background">
      <div class="hero-overlay"></div>
      <img
        src="/assets/hinhcuoi/HUG00052.jpg"
        alt="Lan Huyen and Viet Hung wedding couple"
        class="hero-image"
      />
    </div>

    <div class="hero-content">
      <div class="hero-text fade-in">
        <div class="wedding-date stagger-1">November 30, 2025</div>
        <h1 class="couple-names stagger-2">
          <span class="script-font">Lan Huyen</span>
          <span class="ampersand">&</span>
          <span class="script-font">Viet Hung</span>
        </h1>
        <p class="hero-subtitle stagger-3">
          Together with our families, we invite you to celebrate our love
        </p>
        <div class="hero-actions stagger-4">
          <a href="#details" class="cta-button primary">View Details</a>
          <a href="#gallery" class="cta-button secondary">See Photos</a>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Parallax effect for hero background
  const handleParallax = () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector(".hero-image");
    if (heroImage) {
      heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  };

  window.addEventListener("scroll", handleParallax);

  return () => {
    window.removeEventListener("scroll", handleParallax);
  };
});
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: -1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.wedding-date {
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.couple-names {
  font-size: clamp(3rem, 8vw, 6rem);
  margin: 1rem 0;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.ampersand {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 0.7em;
  opacity: 0.8;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin: 2rem 0;
  opacity: 0.95;
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
}

.cta-button.primary {
  background: var(--primary-color);
  color: white;
}

.cta-button.primary:hover {
  background: transparent;
  border-color: var(--primary-color);
  color: var(--primary-color);
  background: rgba(255, 255, 255, 0.9);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-button.secondary:hover {
  background: white;
  color: var(--primary-color);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.7;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: white;
  margin: 0 auto;
  position: relative;
  animation: scrollBounce 2s infinite;
}

.scroll-arrow::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -3px;
  width: 8px;
  height: 8px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
}

@keyframes scrollBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 1rem;
  }

  .couple-names {
    flex-direction: column;
    gap: 0.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 200px;
    text-align: center;
  }
}
</style>
