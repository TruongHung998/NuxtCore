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
        <div class="col-md-6 col-lg-4">
          <div class="item mb-50">
            <div class="img fit-img">
              <img
                src="https://cdn.e-plus.vn/48a234396a694c33922bde29171069ab.jpeg"
                alt=""
              />
            </div>
            <div class="cont pt-40">
              <h4 class="fz-30">Web - App VNVC</h4>
              <a
                href="/project/vnvc"
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
        <div class="col-md-6 col-lg-4">
          <div class="item mb-50">
            <div class="img fit-img">
              <img
                style="object-fit: contain; background-color: #fff"
                src="https://cdn.e-plus.vn/c462ec7dae144d8c9ae922d41efe2ac7.png"
                alt=""
              />
            </div>
            <div class="cont pt-40">
              <h4 class="fz-30">Web - App Tam Anh Hospital</h4>
              <a
                href="/project/tamanh"
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
        <div class="col-md-6 col-lg-4">
          <div class="item mb-50">
            <div class="img fit-img">
              <img
                style="object-fit: contain; background-color: #fff"
                src="https://cdn.e-plus.vn/1ad243846a6f432d96387ebe4ed1c0e8.jpg"
                alt=""
              />
            </div>
            <div class="cont pt-40">
              <h4 class="fz-30">Web Ecogreen</h4>
              <a
                href="/project/ecogreen"
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
        <div class="col-md-6 col-lg-4">
          <div class="item md-mb50">
            <div class="img fit-img">
              <img
                src="https://cdn.e-plus.vn/5efda627ae53400b91e2a81181ff642b.png"
                alt=""
                style="object-fit: contain; background-color: #fff"
              />
            </div>
            <div class="cont pt-40">
              <h4 class="fz-30">PWA website</h4>
              <a
                href="project/pwa"
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
        <div class="col-md-6 col-lg-4">
          <div class="item sm-mb50">
            <div class="img fit-img">
              <img
                src="https://cdn.e-plus.vn/c462ec7dae144d8c9ae922d41efe2ac7.png"
                alt=""
                style="object-fit: contain; background-color: #fff"
              />
            </div>
            <div class="cont pt-40">
              <h4 class="fz-30">Zalo mini app</h4>
              <a
                href="project/zalominapp"
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
        <div class="col-md-6 col-lg-4">
          <div class="item">
            <div class="img fit-img">
              <img
                src="https://cdn.e-plus.vn/e6baf6fb998e46a18bf14ceb3ebd2978.png"
                alt=""
                style="object-fit: contain; background-color: #fff"
              />
            </div>
            <div class="cont pt-40">
              <h4 class="fz-30">Web resource management</h4>
              <a
                href="project/rmic"
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
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";
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
      "Tool: Xcode, Android Studio, VSCode",
      "Tech: Firebase, SignalR",
    ],
    image:
      "https://s3-sgn09.fptcloud.com/codelearnstorage/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg",
  },
  {
    title: "VueJs",
    descriptions: [
      "Tool: Xcode, Android Studio, VSCode",
      "Tech: Firebase, SignalR",
    ],
    image:
      "https://careers.techvify.com.vn/wp-content/uploads/2022/07/vuejs-la-gi-2.jpg",
  },
  {
    title: "NodeJs",
    descriptions: [
      "Tool: Xcode, Android Studio, VSCode",
      "Tech: Firebase, SignalR",
    ],
    image: "https://www.mindrops.com/images/nodejs-image.webp",
  },
];
</script>
