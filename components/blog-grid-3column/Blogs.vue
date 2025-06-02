<template>
  <section class="blog-main blog section-padding" style="padding-top: 0">
    <section
      style="padding-top: 1rem; padding-bottom: 2rem"
      class="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd"
    >
      <div class="container">
        <div class="sec-head mb-40">
          <div class="d-flex align-items-center">
            <div>
              <span class="sub-title main-color mb-5">Technologies</span>
              <h3 class="fw-600 fz-50 text-u d-rotate wow">
                <span class="rotate-text">
                  What <span class="fw-200">I do best.</span>
                </span>
              </h3>
            </div>
            <div class="ml-auto">
              <div class="swiper-arrow-control">
                <div class="swiper-button-prev">
                  <span class="ti-arrow-left"></span>
                </div>
                <div class="swiper-button-next">
                  <span class="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            loop
            v-bind="swiperOptions"
            id="content-carousel-container-unq-testim"
            class="swiper-container"
            data-swiper="container"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false,
            }"
          >
            <SwiperSlide class="swiper-slide" v-for="tech in listTech">
              <div class="item tech-item">
                <div class="text">
                  <ul>
                    <li v-for="description in tech.descriptions">
                      {{ description }}
                    </li>
                  </ul>
                </div>
                <div class="info">
                  <div class="d-flex align-items-center">
                    <div class="img">
                      <img :src="tech.image" :alt="tech.title" />
                    </div>
                    <div class="ml-20">
                      <h6 class="fz-18">{{ tech.title }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-60 search-content">
          <div class="search-container">
            <div class="search-wrapper">
              <div class="search-box">
                <input
                  type="text"
                  v-model="searchQuery"
                  @input="debouncedSearch"
                  @keyup.enter="handleSearch"
                  placeholder="Tìm kiếm nội dung..."
                  class="search-input"
                />
                <div class="search-icon-wrapper" @click="handleSearch">
                  <i class="ti-search search-icon" v-if="!isLoading"></i>
                  <div class="search-loading" v-else></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <template v-if="isLoading">
          <div v-for="n in 6" :key="n" class="col-12">
            <BlogSkeleton />
          </div>
        </template>
        <template v-else>
          <div
            v-if="isSearching && blogs.length === 0 && !isLoading"
            class="col-12"
          >
            <div class="no-results">
              <div class="no-results-icon">
                <i class="ti-search"></i>
              </div>
              <h4>Không tìm thấy kết quả</h4>
              <p>Hãy thử tìm kiếm với từ khóa khác</p>
              <button @click="clearSearch" class="clear-search-btn">
                Xóa tìm kiếm
              </button>
            </div>
          </div>
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="col-12 blog-item-click"
            @click="$router.push(`/blog/${blog.slug}`)"
          >
            <div class="blog-card">
              <div class="blog-image-wrapper">
                <img
                  :src="
                    blog.cover
                      ? blog.cover
                      : 'https://static-00.iconduck.com/assets.00/notion-icon-2048x2048-bi8b4fm1.png'
                  "
                  :alt="blog.title"
                  class="blog-image"
                />
                <div class="image-overlay">
                  <div class="read-indicator">
                    <i class="ti-arrow-top-right"></i>
                  </div>
                </div>
              </div>
              <div class="blog-content">
                <div class="blog-meta">
                  <span class="blog-date">{{
                    formatDate(blog.createdAt)
                  }}</span>
                  <span class="blog-category">{{
                    blog.category ? blog.category.name : "Tech"
                  }}</span>
                </div>
                <h4 class="blog-title">{{ blog.title }}</h4>
                <p class="blog-description">
                  {{ truncateText(blog.description, 120) }}
                </p>
                <div class="blog-footer">
                  <div class="read-more-wrapper">
                    <span class="read-more-text">{{ $t("readmore") }}</span>
                    <div class="read-more-arrow">
                      <i class="ti-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="pagination" v-if="!isSearching">
        <button
          v-if="currentPage > 1"
          @click="changePage(currentPage - 1)"
          class="prev"
        >
          &laquo; Previous
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
        <button
          v-if="currentPage < totalPages"
          @click="changePage(currentPage + 1)"
          class="next"
        >
          Next &raquo;
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import BlogSkeleton from "@/components/common/BlogSkeleton.vue";

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 3,
  loop: true,
  speed: 1000,
  centeredSlides: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};
const listTech = [
  {
    title: "React Native",
    descriptions: [
      "Used Firebase for authentication, real-time database, and cloud messaging.",
      "Integrated SignalR for live chat, notifications, and real-time updates.",
    ],
    image: "https://reactnative.dev/img/header_logo.svg",
  },
  {
    title: "ReactJS",
    descriptions: [
      "Styled with Tailwind CSS and component libraries like Ant Design and Element UI.",
      "Enhanced UX with GSAP animations, Swiper sliders, and real-time updates via SignalR.",
    ],
    image: "https://reactnative.dev/img/header_logo.svg",
  },
  {
    title: "VueJS",
    descriptions: [
      "Built responsive UIs using Bootstrap, Tailwind CSS, and Element UI.",
      "Added interactivity with GSAP, Swiper, and real-time features using Firebase & SignalR.",
    ],
    image: "https://vuejs.org/images/logo.png",
  },
  {
    title: "NodeJS",
    descriptions: [
      "Developed APIs with NestJS and ExpressJS, following clean architecture patterns.",
      "Used Redis for caching, MinIO for file storage, and Elasticsearch for search.",
    ],
    image: "https://nodejs.org/static/images/logo.svg",
  },
  {
    title: "Ionic",
    descriptions: [
      "Built cross-platform apps with Angular, integrated Firebase for backend services.",
      "Used Capacitor and Cordova to access native device features like camera and push notifications.",
    ],
    image: "https://ionicframework.com/img/meta/ionic-framework-og.png",
  },
];

const blogs = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(6);
const totalPages = ref(0);
const isLoading = ref(false);
const searchQuery = ref("");
const isSearching = ref(false);

let searchTimeout = null;

const debouncedSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    handleSearch();
  }, 500);
};

const handleSearch = async () => {
  if (searchQuery.value.trim()) {
    isSearching.value = true;
    await searchBlogs(searchQuery.value);
  } else {
    isSearching.value = false;
    currentPage.value = 1;
    await fetchBlogs();
  }
};

const searchBlogs = async (query) => {
  try {
    isLoading.value = true;
    const response = await axios.get(
      `https://env4buy.shop/api/articles?filters[title][$containsi]=${query}&populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer e2fb542445502f15e84956b8230c9675e0bc9c0ad9be548fbdf6372a9bad394661b5e974db0cae9f3cc52bda6a6f74446d17e58ee5e95a1f0157c5aa5953af61d86e74c68b82a19b847516d58e5ca6fbb0632114ffd57df3912dad85477d97e4c55f5940ea0576e06defa737fbe6b2e864d2470ffc1d0f8a99fb04fa6cffeb66`,
        },
      }
    );
    blogs.value = response.data.data;
    totalPages.value = Math.ceil(
      response.data.data.length / itemsPerPage.value
    );
  } catch (error) {
    console.error("Error searching blogs:", error);
  } finally {
    isLoading.value = false;
  }
};

const fetchBlogs = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(
      `https://env4buy.shop/api/articles?pagination[page]=${currentPage.value}&pagination[pageSize]=${itemsPerPage.value}&populate=*&sort=createdAt:desc`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer e2fb542445502f15e84956b8230c9675e0bc9c0ad9be548fbdf6372a9bad394661b5e974db0cae9f3cc52bda6a6f74446d17e58ee5e95a1f0157c5aa5953af61d86e74c68b82a19b847516d58e5ca6fbb0632114ffd57df3912dad85477d97e4c55f5940ea0576e06defa737fbe6b2e864d2470ffc1d0f8a99fb04fa6cffeb66`,
        },
      }
    );
    blogs.value = response.data.data;
    totalPages.value = response.data.meta.pagination.pageCount;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  } finally {
    isLoading.value = false;
  }
};

const clearSearch = () => {
  searchQuery.value = "";
  isSearching.value = false;
  currentPage.value = 1;
  fetchBlogs();
};

const changePage = async (page) => {
  if (page >= 1 && page <= totalPages.value && !isSearching.value) {
    currentPage.value = page;
    await fetchBlogs();
  }
};

// Utility functions
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const truncateText = (text, maxLength) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

onMounted(() => {
  fetchBlogs();
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination button {
  padding: 10px 15px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;
}

.pagination button:hover {
  background-color: #007bff;
  color: #fff;
  transform: scale(1.1);
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pagination button.prev,
.pagination button.next {
  font-size: 14px;
  font-weight: bold;
  background-color: #e0e0e0;
}

.pagination button.prev:hover,
.pagination button.next:hover {
  background-color: #0056b3;
  color: #fff;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Changed to semi-black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.skeleton-box {
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.2s infinite linear;
  border-radius: 6px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.rotate-text {
  display: inline-block;
  position: relative;
  animation: rotateColorWave 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(90deg, #00eaff, #007bff, #ff00cc, #00eaff);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

@keyframes rotateColorWave {
  0% {
    filter: none;
    transform: scale(1) rotate(0deg);
    background-position: 0% 50%;
  }
  20% {
    filter: brightness(1.1) drop-shadow(0 0 6px #00eaffcc);
    transform: scale(1.04) rotate(-2deg);
    background-position: 50% 50%;
  }
  40% {
    filter: none;
    transform: scale(0.98) rotate(2deg);
    background-position: 100% 50%;
  }
  60% {
    filter: brightness(1.1) drop-shadow(0 0 8px #ff00cc99);
    transform: scale(1.03) rotate(-1deg);
    background-position: 50% 50%;
  }
  80% {
    filter: none;
    transform: scale(1.01) rotate(1deg);
    background-position: 0% 50%;
  }
  100% {
    filter: none;
    transform: scale(1) rotate(0deg);
    background-position: 0% 50%;
  }
}
.cont h4.fz-30,
.cont p {
  transition: transform 0.22s, text-shadow 0.22s;
}

.img.fit-img {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s;
}
.item:hover .img.fit-img {
  transform: scale(1.07) translateY(-4px);
  z-index: 2;
}
.butn-crev {
  transition: transform 0.22s, box-shadow 0.22s;
}
.butn-crev:hover,
.butn-crev:focus {
  transform: scale(1.06) translateY(-2px) rotate(-1deg);
  z-index: 2;
}

/* Search Content Styles */
.search-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
}

.search-container {
  width: 100%;
  max-width: 600px;
  position: relative;
}

.search-wrapper {
  position: relative;
  background: rgba(30, 32, 38, 0.95);
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.search-wrapper:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.search-wrapper:focus-within {
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.2);
  border-color: rgba(0, 123, 255, 0.5);
}

.search-box {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0 24px;
  height: 64px;
  position: relative;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding-right: 20px;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  transition: color 0.3s ease;
}

.search-input:focus::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.search-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #007bff;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.search-icon-wrapper:hover {
  background: #0056b3;
}

.search-icon {
  color: #ffffff;
  font-size: 18px;
}

.search-loading {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-left-color: #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  background: rgba(30, 32, 38, 0.1);
  border-radius: 16px;
  margin: 40px 0;
}

.no-results-icon {
  font-size: 48px;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
}

.no-results h4 {
  color: #ffffff;
  margin-bottom: 12px;
  font-size: 24px;
}

.no-results p {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 24px;
}

.clear-search-btn {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.clear-search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.search-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(30, 32, 38, 0.95);
  border-radius: 0 0 16px 16px;
  padding: 12px 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  animation: slideDown 0.3s ease;
}

.suggestion-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-style: italic;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tech Item Styles */
.tech-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.tech-item:hover {
  border-color: rgba(0, 123, 255, 0.3);
  box-shadow: 0 8px 24px rgba(0, 123, 255, 0.15);
}

.tech-item .text {
  flex: 1;
  margin-bottom: 20px;
}

.tech-item .text ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tech-item .text li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.tech-item .text li:before {
  content: "•";
  color: #00eaff;
  font-size: 16px;
  position: absolute;
  left: 0;
  top: 0;
}

.tech-item .text li:last-child {
  margin-bottom: 0;
}

.tech-item .info {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-item .info .img {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-item .info .img img {
  width: 44px;
  height: 44px;
  object-fit: contain;
  filter: brightness(0.9);
}

.tech-item .info h6 {
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  letter-spacing: 0.5px;
}

.tech-item .info .d-flex {
  align-items: center;
}

.tech-item .info .ml-20 {
  margin-left: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .tech-item {
    padding: 20px;
  }

  .tech-item .text li {
    font-size: 13px;
    padding-left: 18px;
  }

  .tech-item .info h6 {
    font-size: 16px;
  }

  .tech-item .info .img img {
    width: 36px;
    height: 36px;
  }

  .search-container {
    max-width: 90%;
  }

  .search-box {
    height: 56px;
    padding: 0 20px;
  }

  .search-input {
    font-size: 15px;
  }

  .search-icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .search-icon {
    font-size: 16px;
  }
}

/* Optimized Blog Card Styles */
.blog-item-click {
  cursor: pointer;
  padding: 15px;
  transition: transform 0.2s ease;
}

.blog-item-click:hover {
  transform: translateY(-2px);
}

.blog-card {
  background: rgba(30, 32, 38, 0.95);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  position: relative;
  display: flex;
  min-height: 200px;
}

.blog-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 123, 255, 0.3);
}

.blog-image-wrapper {
  position: relative;
  width: 280px;
  height: 200px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 12px;
  margin: 16px;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.02);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 123, 255, 0.1);
  opacity: 0;
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.blog-card:hover .image-overlay {
  opacity: 1;
}

.read-indicator {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007bff;
  font-size: 16px;
}

.blog-content {
  flex: 1;
  padding: 24px 24px 24px 0;
  display: flex;
  flex-direction: column;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.blog-date {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: 500;
  background: rgba(0, 123, 255, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid rgba(0, 123, 255, 0.2);
}

.blog-category {
  color: #00eaff;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.blog-title {
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 12px;
  transition: color 0.2s ease;
}

.blog-card:hover .blog-title {
  color: #00eaff;
}

.blog-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.blog-footer {
  margin-top: auto;
}

.read-more-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #007bff;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.2s ease;
}

.blog-card:hover .read-more-wrapper {
  color: #00eaff;
}

.read-more-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #007bff;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  transition: background-color 0.2s ease;
}

.blog-card:hover .read-more-arrow {
  background: #00eaff;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .blog-card {
    flex-direction: column;
    min-height: auto;
  }

  .blog-image-wrapper {
    width: 100%;
    height: 200px;
    margin: 16px 16px 0 16px;
  }

  .blog-content {
    padding: 16px 24px 24px 24px;
  }

  .blog-title {
    font-size: 20px;
  }

  .blog-description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .blog-item-click {
    padding: 8px;
  }

  .blog-card {
    margin: 8px 0;
  }

  .blog-image-wrapper {
    margin: 12px;
    height: 180px;
  }

  .blog-content {
    padding: 12px 20px 20px 20px;
  }

  .blog-title {
    font-size: 18px;
  }
}
</style>
