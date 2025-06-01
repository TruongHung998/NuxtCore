<template>
  <header
    class="blog-detail-header bg-img section-padding valign"
    data-background="/assets/imgs/background/bg3.jpg"
    data-overlay-dark="7"
  >
    <div class="container">
      <!-- Breadcrumb Navigation -->
      <div class="breadcrumb-nav mb-40">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="breadcrumb-link">
                <i class="ti-home"></i>
                Trang chủ
              </NuxtLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{
                titleLabel?.title
                  ? truncateText(titleLabel.title, 50)
                  : "Chi tiết bài viết"
              }}
            </li>
          </ol>
        </nav>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="article-header text-center">
            <!-- Category Badge -->
            <div class="article-category mb-20" v-if="titleLabel?.category">
              <span class="category-badge">
                {{ titleLabel.category.name || "Blog" }}
              </span>
            </div>

            <!-- Article Title -->
            <div class="article-title-wrapper">
              <h1 class="article-title" v-if="titleLabel?.title">
                {{ titleLabel.title }}
              </h1>
              <div class="title-skeleton" v-else>
                <div class="skeleton-title-main"></div>
                <div class="skeleton-title-sub"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-dot">
        <i class="ti-angle-down"></i>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import loadBackgroudImages from "@/common/loadBackgroudImages";

const props = defineProps({
  titleLabel: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  loadBackgroudImages();
});

// Utility functions
const formatDate = (dateString) => {
  if (!dateString) return new Date().toLocaleDateString("vi-VN");

  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const estimateReadingTime = (text) => {
  if (!text) return 5;
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute) || 5;
};

const truncateText = (text, maxLength) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    "_blank",
    "width=600,height=400"
  );
};

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(props.titleLabel?.title || "Bài viết hay");
  window.open(
    `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    "_blank",
    "width=600,height=400"
  );
};

const shareToLinkedIn = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    "_blank",
    "width=600,height=400"
  );
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  } catch (err) {
    console.error("Failed to copy link:", err);
  }
};
</script>

<style scoped>
.blog-detail-header {
  position: relative;
  min-height: 30vh;
  display: flex;
  align-items: center;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.blog-detail-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 50, 100, 0.6) 100%
  );
  z-index: 1;
}

.blog-detail-header .container {
  position: relative;
  z-index: 2;
}

/* Breadcrumb Styles */
.breadcrumb-nav {
  animation: fadeInUp 0.6s ease-out;
}

.breadcrumb {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 12px 24px;
  margin: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.breadcrumb-item {
  font-size: 14px;
  font-weight: 500;
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.breadcrumb-link:hover {
  color: #00eaff;
}

.breadcrumb-item.active {
  color: #00eaff;
  font-weight: 600;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "→";
  color: rgba(255, 255, 255, 0.5);
  margin: 0 12px;
}

/* Article Header Styles */
.article-header {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.article-category {
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #00eaff, #0099cc);
  color: #000;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Title Styles */
.article-title-wrapper {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.article-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Skeleton Styles */
.title-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.skeleton-title-main {
  width: 60%;
  height: 40px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

.skeleton-title-sub {
  width: 40%;
  height: 24px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite 0.2s;
  border-radius: 6px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Meta Information Styles */
.article-meta {
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.meta-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.meta-item i {
  color: #00eaff;
  font-size: 14px;
}

.meta-divider {
  color: rgba(255, 255, 255, 0.4);
  font-weight: 300;
}

/* Social Share Styles */
.social-share {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 6px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-btn:hover {
  background: #00eaff;
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 234, 255, 0.3);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeInUp 1s ease-out 0.8s both;
}

.scroll-dot {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  animation: bounce 2s infinite;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-dot:hover {
  border-color: #00eaff;
  color: #00eaff;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

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
@media (max-width: 992px) {
  .article-title {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }
}

@media (max-width: 768px) {
  .blog-detail-header {
    min-height: 60vh;
    background-attachment: scroll;
  }

  .breadcrumb {
    padding: 10px 16px;
    font-size: 13px;
  }

  .meta-info {
    flex-direction: column;
    gap: 12px;
  }

  .meta-divider {
    display: none;
  }

  .social-btn {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .blog-detail-header {
    min-height: 50vh;
  }

  .article-title {
    font-size: clamp(1.2rem, 3vw, 2rem);
  }

  .category-badge {
    padding: 6px 16px;
    font-size: 12px;
  }
}
</style>
