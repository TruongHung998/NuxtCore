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
                  <h4> {{ blog.description || 'Đang tải...' }}</h4>
                </div>
              </article>
            </div>

            <div class="info-area flex pt-50 bord-thin-top"></div>
            <div v-html="blog.blocks[0].body"></div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="sidebar">
            <div class="widget last-post-thum" style="margin-top: 0rem">
              <h6 class="title-widget">Orther Projects</h6>
              <div class="item d-flex align-items-center">
                <div>
                  <div class="img">
                    <a href="/project/vnvc">
                      <img
                        src="https://cdn.e-plus.vn/48a234396a694c33922bde29171069ab.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="cont">
                  <span class="tag">
                    <a href="/project/vnvc">Web - App</a>
                  </span>
                  <h6>
                    <a href="/project/vnvc">VNVC </a>
                  </h6>
                </div>
              </div>
              <div class="item d-flex align-items-center">
                <div>
                  <div class="img">
                    <a href="/project/tamanh">
                      <img
                        src="https://cdn.e-plus.vn/c462ec7dae144d8c9ae922d41efe2ac7.png"
                        alt=""
                        style="object-fit: contain; background-color: #fff"
                      />
                    </a>
                  </div>
                </div>
                <div class="cont">
                  <span class="tag">
                    <a href="/project/tamanh">Web - App</a>
                  </span>
                  <h6>
                    <a href="/project/tamanh"> Web - App Tam Anh Hospital </a>
                  </h6>
                </div>
              </div>
              <div class="item d-flex align-items-center">
                <div>
                  <div class="img">
                    <a href="/project/ecogreen">
                      <img
                        src="https://cdn.e-plus.vn/1ad243846a6f432d96387ebe4ed1c0e8.jpg"
                        alt=""
                        style="object-fit: contain; background-color: #fff"
                      />
                    </a>
                  </div>
                </div>
                <div class="cont">
                  <span class="tag">
                    <a href="/project/ecogreen">Web</a>
                  </span>
                  <h6>
                    <a href="/project/ecogreen"> Ecogreen </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";

const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const data = [
  {
    img: "https://cdn.e-plus.vn/94ee3ca467c8458b9cc34ae9689624e9.png",
  },
  {
    img: "https://cdn.e-plus.vn/6a4516f5d7284ae0b8ad3f830ecd14cc.png",
  },
  {
    img: "https://cdn.e-plus.vn/6a80f5387b7242f388f8d425bc396e0f.png",
  },
  {
    img: "https://cdn.e-plus.vn/9220e03372fd4cd4b11bda55e1ab0d9a.png",
  },
];
console.log(props.blog, "blogDevelop");

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
</script>
