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
                      <div class="img fit-img">
                        <img :src="tech.image" alt="" />
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
        <div v-for="blog in blogs" :key="blog.id" class="col-md-6 col-lg-4">
          <div class="item mb-50">
            <div class="img fit-img align-items-center justify-center d-flex">
              <img
                :src="
                  blog.cover
                    ? blog.cover
                    : 'https://static-00.iconduck.com/assets.00/notion-icon-2048x2048-bi8b4fm1.png'
                "
                alt=""
                style="width: 50%; height: 50%; object-fit: contain"
              />
            </div>
            <div class="cont pt-40">
              <h4 class="fz-30">{{ blog.title }}</h4>
              <p>{{ blog.description }}</p>
              <a
                :href="`/project/${blog.slug}`"
                class="butn-crev d-flex align-items-center mt-40"
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
    title: "React native",
    descriptions: [
      "Tool: Xcode, Android Studio, VSCode",
      "Tech: Firebase, SignalR",
    ],
    image: "https://images.viblo.asia/f1f7004c-cd83-4a78-8d99-27f0247e872a.png",
  },
  {
    title: "ReactJs",
    descriptions: [
      "Tool: VSCode",
      "Tech: Firebase, SignalR, Boostrap, Tailwind, GSAP, Swiper, ElementUI, AntDesign",
    ],
    image:
      "https://s3-sgn09.fptcloud.com/codelearnstorage/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg",
  },
  {
    title: "VueJs",
    descriptions: [
      "Tool: VSCode",
      "Tech: Firebase, SignalR, Boostrap, Tailwind, GSAP, Swiper, ElementUI, AntDesign",
    ],
    image:
      "https://careers.techvify.com.vn/wp-content/uploads/2022/07/vuejs-la-gi-2.jpg",
  },
  {
    title: "NodeJs",
    descriptions: [
      "Tool: VSCode, Docker, OrbStack",
      "Tech: NestJs, ExpressJs, MiniO, Redis, Elastic search",
    ],
    image: "https://www.mindrops.com/images/nodejs-image.webp",
  },
];

const blogs = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(6);
const totalPages = ref(0);

const fetchBlogs = async () => {
  try {
    const response = await axios.get(
      `https://public-cms.onrender.com/api/articles?pagination[page]=${currentPage.value}&pagination[pageSize]=${itemsPerPage.value}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer e2fb542445502f15e84956b8230c9675e0bc9c0ad9be548fbdf6372a9bad394661b5e974db0cae9f3cc52bda6a6f74446d17e58ee5e95a1f0157c5aa5953af61d86e74c68b82a19b847516d58e5ca6fbb0632114ffd57df3912dad85477d97e4c55f5940ea0576e06defa737fbe6b2e864d2470ffc1d0f8a99fb04fa6cffeb66`,
        },
      }
    );
    blogs.value = response.data.data;
    totalPages.value = response.data.totalPages;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchBlogs();
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
  transition: background-color 0.3s;
}

.pagination button:hover {
  background-color: #007bff;
  color: #fff;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
}

.pagination button.prev,
.pagination button.next {
  font-size: 14px;
}
</style>
