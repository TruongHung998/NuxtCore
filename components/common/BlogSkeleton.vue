<template>
  <div class="blog-skeleton-card">
    <div class="blog-skeleton-image">
      <BaseSkeleton
        width="100%"
        height="100%"
        :border-radius="12"
        theme="dark"
        variant="shimmer"
      />
    </div>
    <div class="blog-skeleton-content">
      <div class="blog-skeleton-meta">
        <BaseSkeleton
          width="80px"
          height="20px"
          :border-radius="20"
          theme="dark"
          variant="shimmer"
        />
        <BaseSkeleton
          width="60px"
          height="16px"
          :border-radius="4"
          theme="dark"
          variant="shimmer"
        />
      </div>
      <BaseSkeleton
        :width="titleWidth"
        height="32px"
        :border-radius="8"
        theme="dark"
        variant="shimmer"
        custom-class="blog-skeleton-title"
      />
      <div class="blog-skeleton-description">
        <BaseSkeleton
          width="100%"
          height="18px"
          :border-radius="6"
          theme="dark"
          variant="shimmer"
        />
        <BaseSkeleton
          width="85%"
          height="18px"
          :border-radius="6"
          theme="dark"
          variant="shimmer"
        />
        <BaseSkeleton
          width="60%"
          height="18px"
          :border-radius="6"
          theme="dark"
          variant="shimmer"
        />
      </div>
      <BaseSkeleton
        width="120px"
        height="24px"
        :border-radius="12"
        theme="dark"
        variant="shimmer"
        custom-class="blog-skeleton-button"
      />
    </div>
  </div>
</template>

<script setup>
import BaseSkeleton from "@/components/common/BaseSkeleton.vue";

const props = defineProps({
  titleWidth: {
    type: String,
    default: "70%",
  },
});
</script>

<style scoped>
.blog-skeleton-card {
  background: rgba(30, 32, 38, 0.95);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  display: flex;
  min-height: 200px;
  padding: 16px;
  gap: 16px;
  margin-bottom: 1rem;
}

.blog-skeleton-image {
  width: 280px;
  height: 168px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
}

.blog-skeleton-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 8px 8px 0;
}

.blog-skeleton-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.blog-skeleton-title {
  margin-bottom: 4px;
}

.blog-skeleton-description {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
}

.blog-skeleton-button {
  margin-top: auto;
  align-self: flex-start;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .blog-skeleton-card {
    flex-direction: column;
    min-height: auto;
    gap: 12px;
  }

  .blog-skeleton-image {
    width: 100%;
    height: 180px;
  }

  .blog-skeleton-content {
    padding: 0 8px 8px 8px;
  }
}

@media (max-width: 480px) {
  .blog-skeleton-card {
    padding: 12px;
    margin: 8px 0;
  }

  .blog-skeleton-image {
    height: 160px;
  }
}
</style>
