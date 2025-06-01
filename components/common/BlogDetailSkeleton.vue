<template>
  <div class="blog-detail-skeleton">
    <BaseSkeleton
      width="55%"
      height="36px"
      :border-radius="10"
      theme="dark"
      variant="shimmer"
      custom-class="skeleton-title"
    />
    <BaseSkeleton
      width="38%"
      height="22px"
      :border-radius="8"
      theme="dark"
      variant="shimmer"
      custom-class="skeleton-subtitle"
    />
    <div class="skeleton-content-group">
      <BaseSkeleton
        width="100%"
        height="18px"
        :border-radius="8"
        theme="dark"
        variant="shimmer"
      />
      <BaseSkeleton
        width="68%"
        height="18px"
        :border-radius="8"
        theme="dark"
        variant="shimmer"
      />
      <BaseSkeleton
        width="100%"
        height="18px"
        :border-radius="8"
        theme="dark"
        variant="shimmer"
      />
      <BaseSkeleton
        width="85%"
        height="18px"
        :border-radius="8"
        theme="dark"
        variant="shimmer"
      />
      <BaseSkeleton
        width="92%"
        height="18px"
        :border-radius="8"
        theme="dark"
        variant="shimmer"
      />
    </div>
  </div>
</template>

<script setup>
import BaseSkeleton from "@/components/common/BaseSkeleton.vue";
</script>

<style scoped>
.blog-detail-skeleton {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 28px;
  background: rgba(30, 32, 38, 0.85);
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.18);
  min-height: 320px;
  margin: 24px 0;
}

.skeleton-title {
  margin-bottom: 8px;
}

.skeleton-subtitle {
  margin-bottom: 12px;
}

.skeleton-content-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .blog-detail-skeleton {
    padding: 24px 20px;
    gap: 16px;
  }

  .skeleton-content-group {
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .blog-detail-skeleton {
    padding: 20px 16px;
    margin: 16px 0;
    border-radius: 12px;
  }
}
</style>
