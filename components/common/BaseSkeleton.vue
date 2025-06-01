<template>
  <div :class="skeletonClass" :style="skeletonStyle"></div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: [String, Number],
    default: "100%",
  },
  height: {
    type: [String, Number],
    default: "20px",
  },
  borderRadius: {
    type: [String, Number],
    default: "8px",
  },
  theme: {
    type: String,
    default: "dark", // 'light' or 'dark'
    validator: (value) => ["light", "dark"].includes(value),
  },
  variant: {
    type: String,
    default: "shimmer", // 'shimmer', 'pulse', or 'wave'
    validator: (value) => ["shimmer", "pulse", "wave"].includes(value),
  },
  customClass: {
    type: String,
    default: "",
  },
});

const skeletonClass = computed(() => {
  const baseClass = "base-skeleton";
  const themeClass = `skeleton-${props.theme}`;
  const variantClass = `skeleton-${props.variant}`;

  return [baseClass, themeClass, variantClass, props.customClass]
    .filter(Boolean)
    .join(" ");
});

const skeletonStyle = computed(() => {
  const widthValue =
    typeof props.width === "number" ? `${props.width}px` : props.width;
  const heightValue =
    typeof props.height === "number" ? `${props.height}px` : props.height;
  const borderRadiusValue =
    typeof props.borderRadius === "number"
      ? `${props.borderRadius}px`
      : props.borderRadius;

  return {
    width: widthValue,
    height: heightValue,
    borderRadius: borderRadiusValue,
  };
});
</script>

<style scoped>
.base-skeleton {
  display: block;
  background-size: 200% 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

/* Theme Variants */
.skeleton-light {
  background: linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%);
}

.skeleton-dark {
  background: linear-gradient(90deg, #23242a 25%, #35363c 50%, #23242a 75%);
}

/* Animation Variants */
.skeleton-shimmer {
  animation: shimmer 1.2s infinite linear;
}

.skeleton-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-wave {
  animation: wave 1.6s linear infinite;
}

/* Keyframe Animations */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .base-skeleton {
    border-radius: 6px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .base-skeleton {
    animation: none;
  }

  .skeleton-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
}
</style>
