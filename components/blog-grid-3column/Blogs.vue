<template>
  <section class="blog-main blog section-padding" style="padding-top: 0">
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
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
              <div class="item">
                <div style="padding-top: 1rem">
                  <div class="text">
                    <ul>
                      <li
                        v-for="description in tech.descriptions"
                        style="list-style-type: circle"
                      >
                        {{ description }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="info">
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="img"
                        style="
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          width: 60px;
                          height: 60px;
                        "
                      >
                        <img
                          :src="tech.image"
                          alt=""
                          style="object-fit: contain"
                        />
                      </div>
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
        <template v-if="isLoading">
          <div v-for="n in 6" :key="n" class="col-md-6 col-lg-4">
            <div class="item mb-50">
              <div
                class="img fit-img align-items-center justify-center d-flex skeleton-box"
                style="width: 70%; height: 180px"
              ></div>
              <div class="cont pt-40">
                <h4
                  class="fz-30 skeleton-box"
                  style="width: 70%; height: 32px"
                ></h4>
                <p class="skeleton-box" style="width: 100%; height: 18px"></p>
                <div
                  class="butn-crev d-flex align-items-center mt-40 skeleton-box"
                  style="width: 40%; height: 32px"
                ></div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="col-md-6 col-lg-4 blog-item-click"
            @click="$router.push(`/blog/${blog.slug}`)"
            style="cursor: pointer"
          >
            <div class="item mb-50">
              <div class="img fit-img align-items-center justify-center d-flex">
                <img
                  :src="
                    blog.cover
                      ? blog.cover
                      : 'https://static-00.iconduck.com/assets.00/notion-icon-2048x2048-bi8b4fm1.png'
                  "
                  alt=""
                  class="align-items-center justify-center d-flex"
                  style="
                    width: 70%;
                    height: 70%;
                    object-fit: contain !important;
                  "
                />
              </div>
              <div class="cont pt-40">
                <h4 class="fz-30">{{ blog.title }}</h4>
                <p>{{ blog.description }}</p>
                <a
                  :href="`/blog/${blog.slug}`"
                  class="butn-crev d-flex align-items-center mt-40"
                  @click.stop.prevent="$router.push(`/blog/${blog.slug}`)"
                >
                  <span class="hover-this">
                    <span class="circle hover-anim">
                      <i class="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span class="text">{{ $t("readmore") }}</span>
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="pagination">
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

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: "auto",
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

const fetchBlogs = async () => {
  try {
    const response = await axios.get(
      `https://env4buy.shop/api/articles?pagination[page]=${currentPage.value}&pagination[pageSize]=${itemsPerPage.value}`,
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
  }
};

const changePage = async (page) => {
  if (page >= 1 && page <= totalPages.value) {
    isLoading.value = true;
    currentPage.value = page;
    await fetchBlogs();
    isLoading.value = false;
  }
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
.item:hover .cont h4.fz-30 {
  transform: scale(1.025) rotate(-1deg);
  text-shadow: 0 1px 4px #00eaff33, 0 0px 1px #fff;
}
.item:hover .cont p {
  transform: scale(1.01) rotate(0.5deg);
  text-shadow: 0 1px 3px #007bff22;
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
</style>
