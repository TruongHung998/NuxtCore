<template>
  <div class="loading-screen" :class="{ 'loading-hidden': !isLoading }">
    <div class="loading-container">
      <!-- Wedding Logo/Title -->
      <div class="loading-header">
        <h1 class="loading-title">
          <span class="groom-name">Viet Hung</span>
          <span class="and">&</span>
          <span class="bride-name">Lan Huyen</span>
        </h1>
        <p class="loading-subtitle">Wedding Invitation</p>
      </div>

      <!-- Loading Animation -->
      <div class="loading-animation">
        <div class="loading-hearts">
          <div class="heart heart-1"></div>
          <div class="heart heart-2"></div>
          <div class="heart heart-3"></div>
        </div>
        <div class="loading-spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="loading-progress">
        <div class="progress-container">
          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: `${loadingProgress}%` }"
            ></div>
          </div>
          <span class="progress-text">{{ Math.round(loadingProgress) }}%</span>
        </div>
        <p class="loading-status">{{ loadingStatus }}</p>
      </div>

      <!-- Background Pattern -->
      <div class="loading-background">
        <div class="floating-hearts">
          <div
            v-for="i in 20"
            :key="i"
            class="floating-heart"
            :style="getFloatingHeartStyle(i)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

interface Props {
  images: string[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  loadingComplete: [];
}>();

const isLoading = ref(true);
const loadingProgress = ref(0);
const loadingStatus = ref("Initializing...");
const loadedImages = ref(0);

const totalImages = computed(() => props.images.length);

const getFloatingHeartStyle = (index: number) => {
  const delay = Math.random() * 3;
  const duration = 3 + Math.random() * 2;
  const left = Math.random() * 100;

  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

const preloadImages = async () => {
  loadingStatus.value = "Loading images...";

  const imagePromises = props.images.map((src, index) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        loadedImages.value++;
        loadingProgress.value = (loadedImages.value / totalImages.value) * 100;
        resolve();
      };
      img.onerror = () => {
        loadedImages.value++;
        loadingProgress.value = (loadedImages.value / totalImages.value) * 100;
        resolve();
      };
      img.src = src;
    });
  });

  await Promise.all(imagePromises);

  loadingStatus.value = "Almost ready...";

  // Add a small delay for smooth transition
  setTimeout(() => {
    isLoading.value = false;
    emit("loadingComplete");
  }, 500);
};

onMounted(() => {
  preloadImages();
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f8f6 0%, #e8e8e6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.8s ease-out, visibility 0.8s ease-out;
}

.loading-hidden {
  opacity: 0;
  visibility: hidden;
}

.loading-container {
  text-align: center;
  max-width: 500px;
  padding: 40px 20px;
  position: relative;
}

.loading-header {
  margin-bottom: 60px;
}

.loading-title {
  font-family: "Great Vibes", cursive;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #94a094;
  margin-bottom: 10px;
  line-height: 1.2;
}

.groom-name,
.bride-name {
  display: block;
  margin: 5px 0;
}

.and {
  font-size: 0.6em;
  font-weight: 300;
  opacity: 0.8;
  display: block;
  margin: 10px 0;
}

.loading-subtitle {
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  color: #7a8a7a;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.loading-animation {
  margin-bottom: 60px;
  position: relative;
  height: 120px;
}

.loading-hearts {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #94a094;
  transform: rotate(45deg);
  animation: heartBeat 1.5s ease-in-out infinite;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: #94a094;
  border-radius: 50%;
}

.heart::before {
  top: -10px;
  left: 0;
}

.heart::after {
  top: 0;
  left: -10px;
}

.heart-1 {
  animation-delay: 0s;
}

.heart-2 {
  animation-delay: 0.5s;
  transform: rotate(45deg) scale(0.8);
}

.heart-3 {
  animation-delay: 1s;
  transform: rotate(45deg) scale(0.6);
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.spinner-ring {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 3px solid transparent;
  border-top: 3px solid #94a094;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

.spinner-ring:nth-child(2) {
  width: 60px;
  height: 60px;
  animation-delay: 0.2s;
  border-top-color: #7a8a7a;
}

.spinner-ring:nth-child(3) {
  width: 40px;
  height: 40px;
  animation-delay: 0.4s;
  border-top-color: #94a094;
}

.loading-progress {
  margin-bottom: 40px;
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(148, 160, 148, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #94a094, #7a8a7a);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: #94a094;
  font-weight: 600;
  min-width: 50px;
}

.loading-status {
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: #7a8a7a;
  font-weight: 400;
}

.loading-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.floating-hearts {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-heart {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(148, 160, 148, 0.3);
  transform: rotate(45deg);
  animation: float 4s ease-in-out infinite;
}

.floating-heart::before,
.floating-heart::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(148, 160, 148, 0.3);
  border-radius: 50%;
}

.floating-heart::before {
  top: -4px;
  left: 0;
}

.floating-heart::after {
  top: 0;
  left: -4px;
}

@keyframes heartBeat {
  0%,
  100% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(1.1);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: rotate(45deg) translateY(0px) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: rotate(45deg) translateY(-20px) scale(1.2);
    opacity: 0.8;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .loading-container {
    padding: 20px 15px;
  }

  .loading-title {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  .loading-subtitle {
    font-size: 1rem;
  }

  .loading-animation {
    height: 100px;
  }

  .spinner-ring {
    width: 60px;
    height: 60px;
  }

  .spinner-ring:nth-child(2) {
    width: 45px;
    height: 45px;
  }

  .spinner-ring:nth-child(3) {
    width: 30px;
    height: 30px;
  }

  .heart {
    width: 15px;
    height: 15px;
  }

  .heart::before,
  .heart::after {
    width: 15px;
    height: 15px;
  }

  .heart::before {
    top: -7.5px;
  }

  .heart::after {
    left: -7.5px;
  }
}

@media (max-width: 480px) {
  .loading-header {
    margin-bottom: 40px;
  }

  .loading-animation {
    margin-bottom: 40px;
    height: 80px;
  }

  .progress-container {
    flex-direction: column;
    gap: 10px;
  }

  .progress-text {
    order: -1;
  }
}
</style>
