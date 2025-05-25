<template>
  <section
    class="blog section-padding"
    style="padding-top: 2rem; padding-bottom: 1rem"
  >
    <div class="container">
      <div class="row xlg-marg">
        <div class="col-lg-8">
          <div class="main-post">
            <div class="item pb-60">
              <article>
                <div class="title mt-30">
                  <h4>{{ blog.description || "Đang tải..." }}</h4>
                </div>
              </article>
            </div>

            <div class="info-area flex pt-50 bord-thin-top"></div>
            <div v-html="markedHtml" style="white-space: break-spaces"></div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="sidebar">
            <div class="widget last-post-thum" style="margin-top: 2rem">
              <h6 class="title-widget">Bài viết khác</h6>
              <template v-if="isLoadingRandomBlogs">
                <div
                  v-for="n in 3"
                  :key="n"
                  class="item d-flex align-items-center"
                >
                  <div>
                    <div
                      class="img skeleton-box"
                      style="width: 100px; height: 100px"
                    ></div>
                  </div>
                  <div class="cont" style="width: 70%">
                    <span
                      class="tag skeleton-box"
                      style="
                        width: 60%;
                        height: 18px;
                        display: block;
                        margin-bottom: 8px;
                      "
                    ></span>
                    <h6
                      class="skeleton-box"
                      style="width: 90%; height: 16px"
                    ></h6>
                  </div>
                </div>
              </template>
              <template v-else>
                <div
                  class="item d-flex align-items-center"
                  v-for="(randomBlog, index) in randomBlogs"
                  :key="index"
                >
                  <div>
                    <div class="img">
                      <a :href="`/blog/${randomBlog.slug}`">
                        <img
                          :src="randomBlog.cover"
                          alt=""
                          style="object-fit: cover; width: 100%; height: 100px"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="cont">
                    <span class="tag">
                      <a :href="`/blog/${randomBlog.slug}`">{{
                        randomBlog.title
                      }}</a>
                    </span>
                    <h6>
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
  </section>
</template>
<script setup>
import axios from "axios";
import { marked } from "marked";
import { Autoplay, Navigation, Pagination } from "swiper";
import { defineProps, onMounted, ref } from "vue";

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

const fetchRandomBlogs = async () => {
  isLoadingRandomBlogs.value = true;
  try {
    const response = await axios.get(
      `http://14.225.204.82:1337/api/articles?pagination[page]=1&pagination[pageSize]=100`,
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

onMounted(() => {
  fetchRandomBlogs();
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

.skeleton-box {
  background: linear-gradient(90deg, #444 25%, #555 50%, #444 75%);
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

.sidebar .item .cont .tag a,
.sidebar .item .cont h6 a {
  display: inline-block;
  transition: color 0.3s, transform 0.3s, text-shadow 0.3s;
}
.sidebar .item .cont .tag a:hover,
.sidebar .item .cont h6 a:hover {
  color: #00eaff;
  transform: scale(1.06) rotate(-2deg);
  text-shadow: 0 2px 12px #00eaff88, 0 0px 2px #fff;
}
</style>
