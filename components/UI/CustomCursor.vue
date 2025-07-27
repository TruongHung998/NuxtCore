<template>
  <div
    ref="cursor"
    class="custom-cursor"
    :class="{ 'cursor-hover': isHovering }"
    aria-hidden="true"
  ></div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const cursor = ref<HTMLElement>();
const isHovering = ref(false);
let mouseX = 0;
let mouseY = 0;
let raf: number;
const moveCursor = (e: MouseEvent) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};
const animate = () => {
  if (cursor.value) {
    cursor.value.style.transform = `translate3d(${mouseX - 16}px, ${
      mouseY - 16
    }px, 0)`;
  }
  raf = requestAnimationFrame(animate);
};
onMounted(() => {
  document.addEventListener("mousemove", moveCursor);
  raf = requestAnimationFrame(animate);
  // Interactive elements
  const setHover = (v: boolean) => {
    isHovering.value = v;
  };
  const selectors =
    "a, button, .gallery-item, .gallery-masonry-item, .nav-dot, .lightbox-close, .lightbox-nav";
  document.querySelectorAll(selectors).forEach((el) => {
    el.addEventListener("mouseenter", () => setHover(true));
    el.addEventListener("mouseleave", () => setHover(false));
  });
});
onUnmounted(() => {
  document.removeEventListener("mousemove", moveCursor);
  cancelAnimationFrame(raf);
});
</script>
<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(148, 160, 148, 0.18);
  border: 2px solid #94a094;
  pointer-events: none;
  z-index: 3000;
  transition: background 0.2s, border 0.2s,
    transform 0.15s cubic-bezier(0.22, 1, 0.36, 1);
  mix-blend-mode: multiply;
  will-change: transform;
}
.cursor-hover {
  background: rgba(148, 160, 148, 0.35);
  border-width: 3px;
  transform: scale(1.5);
}
@media (max-width: 900px) {
  .custom-cursor {
    display: none;
  }
}
</style>
