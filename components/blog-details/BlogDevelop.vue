<template>
  <section
    class="blog section-padding"
    style="padding-top: 2rem; padding-bottom: 1rem"
  >
    <div class="container-fluid px-4">
      <div class="row xlg-marg flex-row">
        <div class="col-lg-8">
          <div class="main-post">
            <article class="blog-article">
              <div class="article-header">
                <template v-if="!blog || !blog.description">
                  <div class="title-skeleton">
                    <div class="skeleton-shimmer main-title-skeleton"></div>
                    <div class="skeleton-shimmer sub-title-skeleton"></div>
                    <div class="skeleton-shimmer decoration-skeleton"></div>
                  </div>
                </template>
                <template v-else>
                  <div class="article-title">
                    <h1 class="main-title">{{ blog.description }}</h1>
                    <div class="title-decoration"></div>
                  </div>
                </template>
              </div>

              <template v-if="!blog || !blog.description">
                <div class="article-meta-skeleton">
                  <div class="meta-skeleton-item">
                    <div class="skeleton-shimmer icon-skeleton"></div>
                    <div class="skeleton-shimmer text-skeleton"></div>
                  </div>
                  <div class="meta-skeleton-item">
                    <div class="skeleton-shimmer icon-skeleton"></div>
                    <div class="skeleton-shimmer text-skeleton"></div>
                  </div>
                  <div class="meta-skeleton-item">
                    <div class="skeleton-shimmer icon-skeleton"></div>
                    <div class="skeleton-shimmer text-skeleton"></div>
                  </div>
                </div>

                <div class="content-skeleton">
                  <div class="skeleton-shimmer content-line full"></div>
                  <div class="skeleton-shimmer content-line"></div>
                  <div class="skeleton-shimmer content-line medium"></div>
                  <div class="skeleton-shimmer content-line full"></div>
                  <div class="skeleton-shimmer content-line short"></div>
                  <div class="skeleton-shimmer content-line"></div>
                  <div class="skeleton-shimmer content-line medium"></div>
                  <div class="skeleton-shimmer content-line full"></div>
                  <div class="skeleton-shimmer content-line short"></div>
                  <div class="skeleton-shimmer content-line"></div>
                  <div class="skeleton-shimmer content-line medium"></div>
                  <div class="skeleton-shimmer content-line full"></div>
                  <div class="skeleton-shimmer content-image"></div>
                  <div class="skeleton-shimmer content-line"></div>
                  <div class="skeleton-shimmer content-line short"></div>
                  <div class="skeleton-shimmer content-line medium"></div>
                </div>
              </template>
              <template v-else>
                <div class="article-meta">
                  <div class="meta-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>{{ new Date(blog.createdAt).toLocaleDateString("vi-VN") }}</span>
                  </div>
                  <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>5 phút đọc</span>
                  </div>
                  <div class="meta-item">
                    <i class="fas fa-tag"></i>
                    <span>Blog</span>
                  </div>
                </div>

                <div class="article-content">
                  <div class="content-wrapper" v-html="markedHtml"></div>
                </div>
              </template>
            </article>
          </div>
        </div>
        <div class="col-lg-4" style="padding-left: .5rem;">
          <div
            class="sidebar related-post"
            :class="{ 'sticky-related-post': isScrolledDown }"
          >
            <div class="widget last-post-thum">
              <div class="widget-header">
                <h6 class="title-widget">Bài viết khác</h6>
                <div class="widget-divider"></div>
              </div>
              <div class="related-posts-container">
                <template v-if="isLoadingRandomBlogs">
                  <div
                    v-for="n in 3"
                    :key="n"
                    class="related-post-item loading"
                    :style="{ animationDelay: `${n * 0.1}s` }"
                  >
                    <div class="post-image-container">
                      <div
                        class="skeleton-shimmer img-skeleton"
                        :style="{ animationDelay: `${n * 0.05}s` }"
                      ></div>
                    </div>
                    <div class="post-content">
                      <div
                        class="skeleton-shimmer tag-skeleton"
                        :style="{ animationDelay: `${n * 0.1 + 0.1}s` }"
                      ></div>
                      <div
                        class="skeleton-shimmer description-skeleton-1"
                        :style="{ animationDelay: `${n * 0.1 + 0.15}s` }"
                      ></div>
                      <div
                        class="skeleton-shimmer description-skeleton-2"
                        :style="{ animationDelay: `${n * 0.1 + 0.2}s` }"
                      ></div>
                      <div
                        class="skeleton-shimmer description-skeleton-3"
                        :style="{ animationDelay: `${n * 0.1 + 0.25}s` }"
                      ></div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div
                    class="related-post-item"
                    v-for="(randomBlog, index) in randomBlogs"
                    :key="index"
                  >
                    <div class="post-image-container">
                      <a :href="`/blog/${randomBlog.slug}`" class="image-link">
                        <img
                          :src="randomBlog.cover"
                          :alt="randomBlog.title"
                          class="post-image"
                        />
                        <div class="image-overlay">
                          <i class="fas fa-external-link-alt"></i>
                        </div>
                      </a>
                    </div>
                    <div class="post-content">
                      <span class="post-tag">
                        <a :href="`/blog/${randomBlog.slug}`">{{
                          randomBlog.title
                        }}</a>
                      </span>
                      <h6 class="post-description">
                        <a :href="`/blog/${randomBlog.slug}`">
                          {{ randomBlog.description }}
                        </a>
                      </h6>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import axios from "axios";
import { marked } from "marked";
import { Autoplay, Navigation, Pagination } from "swiper";
import { defineProps, onMounted, ref, onUnmounted } from "vue";

const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const markedHtml = marked(props.blog.blocks[0].body, {
  gfm: true,
  breaks: true,
  headerIds: false,
  mangle: false,
});
const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  speed: 1000,
  centeredSlides: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
};

const randomBlogs = ref([]);
const isLoadingRandomBlogs = ref(true);
const isScrolledDown = ref(false);

const fetchRandomBlogs = async () => {
  isLoadingRandomBlogs.value = true;
  try {
    const response = await axios.get(
      `https://env4buy.shop/api/articles?pagination[page]=1&pagination[pageSize]=100`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer e2fb542445502f15e84956b8230c9675e0bc9c0ad9be548fbdf6372a9bad394661b5e974db0cae9f3cc52bda6a6f74446d17e58ee5e95a1f0157c5aa5953af61d86e74c68b82a19b847516d58e5ca6fbb0632114ffd57df3912dad85477d97e4c55f5940ea0576e06defa737fbe6b2e864d2470ffc1d0f8a99fb04fa6cffeb66`,
        },
      }
    );
    const blogs = response.data.data;
    const shuffled = blogs.sort(() => 0.5 - Math.random());
    randomBlogs.value = shuffled.slice(0, 3);
  } catch (error) {
    console.error("Error fetching random blogs:", error);
  } finally {
    isLoadingRandomBlogs.value = false;
  }
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.5; // 40vh
  isScrolledDown.value = scrollY > threshold;
};

onMounted(() => {
  fetchRandomBlogs();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
  background-color: #2b2b2b;
  color: #e0e0e0;
}

table th,
table td {
  padding: 12px 15px;
  border: 1px solid #444;
}

table th {
  background-color: #3c3c3c;
  color: #ffffff;
  font-weight: bold;
}

table tr:nth-child(even) {
  background-color: #333333;
}

table tr:hover {
  background-color: #444444;
}

/* Enhanced Skeleton Loading Styles */
.skeleton-shimmer {
  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0.03) 8%,
    rgba(0, 234, 255, 0.1) 18%,
    rgba(255, 255, 255, 0.03) 33%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite ease-in-out, pulse 3s infinite ease-in-out;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.skeleton-shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 234, 255, 0.15),
    transparent
  );
  transform: translateX(-100%);
  animation: shimmer-wave 2s infinite ease-in-out;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes shimmer-wave {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Staggered animation for content lines */
.content-skeleton .content-line:nth-child(1) {
  animation-delay: 0s;
}
.content-skeleton .content-line:nth-child(2) {
  animation-delay: 0.1s;
}
.content-skeleton .content-line:nth-child(3) {
  animation-delay: 0.2s;
}
.content-skeleton .content-line:nth-child(4) {
  animation-delay: 0.3s;
}
.content-skeleton .content-line:nth-child(5) {
  animation-delay: 0.4s;
}
.content-skeleton .content-line:nth-child(6) {
  animation-delay: 0.5s;
}
.content-skeleton .content-line:nth-child(7) {
  animation-delay: 0.6s;
}
.content-skeleton .content-line:nth-child(8) {
  animation-delay: 0.7s;
}
.content-skeleton .content-line:nth-child(9) {
  animation-delay: 0.8s;
}
.content-skeleton .content-line:nth-child(10) {
  animation-delay: 0.9s;
}
.content-skeleton .content-line:nth-child(11) {
  animation-delay: 1s;
}
.content-skeleton .content-line:nth-child(12) {
  animation-delay: 1.1s;
}
.content-skeleton .content-image {
  animation-delay: 1.2s;
}

/* Main Title Skeleton */
.title-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.main-title-skeleton {
  width: 85%;
  height: 48px;
  border-radius: 12px;
  max-width: 600px;
  animation-delay: 0s;
}

.sub-title-skeleton {
  width: 65%;
  height: 24px;
  border-radius: 8px;
  max-width: 400px;
  animation-delay: 0.2s;
}

.decoration-skeleton {
  width: 80px;
  height: 4px;
  border-radius: 2px;
  margin-top: 8px;
  animation-delay: 0.4s;
}

/* Meta Section Skeleton */
.article-meta-skeleton {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.meta-skeleton-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.meta-skeleton-item:nth-child(1) .icon-skeleton,
.meta-skeleton-item:nth-child(1) .text-skeleton {
  animation-delay: 0.5s;
}
.meta-skeleton-item:nth-child(2) .icon-skeleton,
.meta-skeleton-item:nth-child(2) .text-skeleton {
  animation-delay: 0.6s;
}
.meta-skeleton-item:nth-child(3) .icon-skeleton,
.meta-skeleton-item:nth-child(3) .text-skeleton {
  animation-delay: 0.7s;
}

.icon-skeleton {
  width: 18px;
  height: 18px;
  border-radius: 4px;
}

.text-skeleton {
  width: 80px;
  height: 16px;
  border-radius: 6px;
}

/* Content Section Skeleton */
.content-skeleton {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.content-line {
  height: 18px;
  border-radius: 6px;
  width: 100%;
}

.content-line.short {
  width: 70%;
}

.content-line.medium {
  width: 85%;
}

.content-line.full {
  width: 100%;
}

.content-image {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin: 24px 0;
}

/* Sidebar Skeleton Improvements */
.img-skeleton {
  width: 100px;
  height: 100px;
  border-radius: 12px;
}

.tag-skeleton {
  width: 70%;
  height: 16px;
  border-radius: 6px;
  margin-bottom: 8px;
}

.description-skeleton-1 {
  width: 95%;
  height: 14px;
  border-radius: 6px;
  margin-bottom: 6px;
}

.description-skeleton-2 {
  width: 85%;
  height: 14px;
  border-radius: 6px;
  margin-bottom: 6px;
}

.description-skeleton-3 {
  width: 60%;
  height: 14px;
  border-radius: 6px;
}

/* Legacy skeleton box for backward compatibility */
.skeleton-box {
  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0.03) 8%,
    rgba(0, 234, 255, 0.1) 18%,
    rgba(255, 255, 255, 0.03) 33%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite ease-in-out;
  border-radius: 8px;
}

/* Enhanced loading state for related posts */
.related-post-item.loading {
  pointer-events: none;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  animation: fade-in 0.5s ease-in-out;
}

.related-post-item.loading::before {
  opacity: 0;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive skeleton adjustments */
@media (max-width: 768px) {
  .main-title-skeleton {
    width: 95%;
    height: 36px;
  }

  .sub-title-skeleton {
    width: 75%;
    height: 20px;
  }

  .article-meta-skeleton {
    flex-direction: column;
    gap: 16px;
  }

  .content-image {
    height: 150px;
  }

  .img-skeleton {
    width: 80px;
    height: 80px;
  }
}

.sidebar .item .cont .tag a,
.sidebar .item .cont h6 a {
  display: inline-block;
  transition: color 0.2s ease;
}
.sidebar .item .cont .tag a:hover,
.sidebar .item .cont h6 a:hover {
  color: #00eaff;
}

/* Enhanced Related Posts Styling */
.related-post {
  margin-top: 0 !important;
  transition: all 0.3s ease;
}

.sticky-related-post {
  position: fixed !important;
  top: 10vh !important;
  right: 1rem !important;
  width: calc(33.33% - 2rem) !important;
  z-index: 100 !important;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}

/* Blog section setup for sticky */
.blog.section-padding {
  position: relative;
  min-height: 100vh;
}

/* Ensure row has proper display and alignment */
.row.xlg-marg {
  display: flex !important;
  align-items: flex-start;
  position: relative;
}

.widget {
  margin-top: 0 !important;
}
.widget {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.widget-header {
  margin-bottom: 24px;
}

.title-widget {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #00eaff, #0099cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.widget-divider {
  height: 3px;
  background: linear-gradient(90deg, #00eaff, #0099cc, transparent);
  border-radius: 2px;
  width: 60px;
}

.related-posts-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.related-post-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.related-post-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 234, 255, 0.1),
    rgba(0, 153, 204, 0.1)
  );
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.related-post-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 234, 255, 0.15);
  border-color: rgba(0, 234, 255, 0.2);
}

.related-post-item:hover::before {
  opacity: 1;
}

.post-image-container {
  flex-shrink: 0;
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 12px;
}

.image-link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 234, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.image-overlay i {
  color: white;
  font-size: 20px;
}

.related-post-item:hover .post-image {
  transform: scale(1.05);
}

.related-post-item:hover .image-overlay {
  opacity: 1;
}

.post-content {
  flex: 1;
  min-width: 0;
}

.post-tag {
  display: block;
  margin-bottom: 8px;
}

.post-tag a {
  color: #00eaff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-tag a:hover {
  color: #ffffff;
}

.post-description {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
}

.post-description a {
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.2s ease;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-description a:hover {
  color: #ffffff;
}

/* Responsive design */
@media (max-width: 768px) {
  .sticky-sidebar {
    position: static;
    max-height: none;
    overflow-y: visible;
  }

  .sticky-related-post {
    position: static !important;
    width: 100% !important;
    right: auto !important;
    top: auto !important;
  }

  .related-post-item {
    flex-direction: column;
    text-align: center;
  }

  .post-image-container {
    width: 100%;
    height: 150px;
    margin: 0 auto;
  }

  .widget {
    padding: 16px;
  }
}

/* Medium screens - adjust sticky positioning */
@media (min-width: 769px) and (max-width: 991px) {
  .sticky-sidebar {
    top: 1.5rem;
    max-height: calc(100vh - 3rem);
  }

  .sticky-related-post {
    width: calc(33.33% - 1.5rem) !important;
    right: 0.75rem !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .sticky-related-post {
    width: calc(33.33% - 1.5rem) !important;
    right: 0.75rem !important;
  }
}

@media (min-width: 1200px) {
  .sticky-related-post {
    width: calc(33.33% - 1.5rem) !important;
    right: 0.75rem !important;
  }
}

@media (min-width: 1400px) {
  .sticky-related-post {
    width: calc(33.33% - 2rem) !important;
    right: 1rem !important;
  }
}

/* Enhanced Main Post Styling */
.main-post {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  max-width: none;
  width: 100%;
}

.main-post::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00eaff, #0099cc, #00eaff);
}

.main-post::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00eaff, #0099cc, #00eaff);
}

.blog-article {
  position: relative;
  z-index: 1;
}

.article-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.title-skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title-skeleton .main-title {
  width: 80%;
  height: 40px;
  border-radius: 8px;
}

.title-skeleton .sub-title {
  width: 60%;
  height: 20px;
  border-radius: 6px;
}

.article-title {
  text-align: center;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 16px 0;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff, #00eaff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.title-decoration {
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, #00eaff, #0099cc);
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 234, 255, 0.4);
}

.article-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b0b0b0;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.meta-item:hover {
  color: #00eaff;
}

.meta-item i {
  color: #00eaff;
  font-size: 16px;
}

.article-content {
  position: relative;
}

.content-wrapper {
  font-size: 16px;
  line-height: 1.8;
  color: #e0e0e0;
  white-space: break-spaces;
}

.content-wrapper h1,
.content-wrapper h2,
.content-wrapper h3,
.content-wrapper h4,
.content-wrapper h5,
.content-wrapper h6 {
  color: #ffffff;
  margin: 32px 0 16px 0;
  font-weight: 700;
}

.content-wrapper h1 {
  font-size: 2rem;
  border-bottom: 2px solid #00eaff;
  padding-bottom: 8px;
}

.content-wrapper h2 {
  font-size: 1.75rem;
  color: #00eaff;
}

.content-wrapper h3 {
  font-size: 1.5rem;
}

.content-wrapper p {
  margin-bottom: 20px;
  text-align: justify;
}

.content-wrapper a {
  color: #00eaff;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.content-wrapper a:hover {
  color: #ffffff;
  border-bottom-color: #00eaff;
}

.content-wrapper blockquote {
  background: rgba(0, 234, 255, 0.1);
  border-left: 4px solid #00eaff;
  padding: 20px;
  margin: 24px 0;
  border-radius: 8px;
  font-style: italic;
  color: #ffffff;
}

.content-wrapper code {
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  font-family: "Courier New", monospace;
  color: #00eaff;
  font-size: 14px;
}

.content-wrapper pre {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 20px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.content-wrapper pre code {
  background: none;
  padding: 0;
  color: #e0e0e0;
}

.content-wrapper ul,
.content-wrapper ol {
  margin: 16px 0;
  padding-left: 24px;
}

.content-wrapper li {
  margin-bottom: 8px;
  color: #e0e0e0;
}

.content-wrapper img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Responsive design for main post */
@media (max-width: 768px) {
  .main-post {
    padding: 24px;
    border-radius: 16px;
  }

  .main-title {
    font-size: 1.8rem;
  }

  .article-meta {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .content-wrapper {
    font-size: 15px;
  }

  .content-wrapper h1 {
    font-size: 1.6rem;
  }

  .content-wrapper h2 {
    font-size: 1.4rem;
  }
}

/* Container width adjustments */
@media (min-width: 1200px) {
  .container-fluid {
    max-width: 1400px;
    margin: 0 auto;
  }
}

@media (min-width: 1400px) {
  .container-fluid {
    max-width: 1600px;
  }
}
</style>
