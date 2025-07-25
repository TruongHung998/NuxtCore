<template>
  <nav class="wedding-nav" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="nav-logo">
        <span class="script-font">L & V</span>
      </div>

      <div class="nav-menu" :class="{ active: mobileMenuOpen }">
        <a href="#hero" @click="closeMenu" class="nav-link">Home</a>
        <a href="#story" @click="closeMenu" class="nav-link">Our Story</a>
        <a href="#gallery" @click="closeMenu" class="nav-link">Gallery</a>
        <a href="#details" @click="closeMenu" class="nav-link">Details</a>
        <a href="#venue" @click="closeMenu" class="nav-link">Venue</a>
      </div>

      <button
        class="mobile-toggle"
        @click="toggleMobileMenu"
        :class="{ active: mobileMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  document.body.style.overflow = mobileMenuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.wedding-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(248, 248, 246, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 1rem 0;
}

.wedding-nav.scrolled {
  background: rgba(248, 248, 246, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 700;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-color);
  transition: all 0.3s ease;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .mobile-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--secondary-color);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 1.5rem;
  }
}
</style>
