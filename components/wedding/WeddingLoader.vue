<template>
  <div class="wedding-loading" :class="{ 'fade-out': isLoaded }">
    <div class="loading-content">
      <div class="couple-rings">
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
      </div>
      <div class="loading-text">
        <h2 class="script-font">Sarah & John</h2>
        <p>Loading our love story...</p>
      </div>
      <div class="loading-progress">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoaded = ref(false);
const progress = ref(0);

const emit = defineEmits(["loaded"]);

onMounted(() => {
  // Simulate loading progress
  const interval = setInterval(() => {
    progress.value += Math.random() * 15;
    if (progress.value >= 100) {
      progress.value = 100;
      clearInterval(interval);

      // Wait a moment then fade out
      setTimeout(() => {
        isLoaded.value = true;
        // Emit loaded event after fade animation
        setTimeout(() => {
          emit("loaded");
        }, 500);
      }, 300);
    }
  }, 100);

  // Fallback to ensure loading doesn't take too long
  setTimeout(() => {
    if (!isLoaded.value) {
      progress.value = 100;
      isLoaded.value = true;
      setTimeout(() => {
        emit("loaded");
      }, 500);
    }
  }, 3000);
});
</script>

<style scoped>
.wedding-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--secondary-color) 0%, #f0f0ee 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;
}

.wedding-loading.fade-out {
  opacity: 0;
  pointer-events: none;
}

.loading-content {
  text-align: center;
  max-width: 400px;
  padding: 2rem;
}

.couple-rings {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
}

.ring {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: rotate 2s linear infinite;
}

.ring-1 {
  top: 0;
  left: 0;
  animation-delay: 0s;
}

.ring-2 {
  top: 10px;
  left: 20px;
  border-color: var(--accent-gold);
  animation-delay: -1s;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.loading-text p {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.loading-progress {
  width: 100%;
  height: 3px;
  background: rgba(148, 160, 148, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-gold));
  border-radius: 2px;
  transition: width 0.3s ease;
  position: relative;
}

.progress-bar::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 768px) {
  .loading-content {
    padding: 1rem;
  }

  .couple-rings {
    width: 60px;
    height: 60px;
  }

  .ring {
    width: 45px;
    height: 45px;
  }

  .loading-text h2 {
    font-size: 2rem;
  }
}
</style>
