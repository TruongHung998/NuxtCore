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
                  <h4>General</h4>
                </div>
                <div class="text mt-20">
                  <p>
                    The website <strong>Ecogreen</strong> offers various useful
                    features that make it easy for users to shop and take care
                    of their health:
                  </p>
                </div>
              </article>
              <div class="unorder-list mb-30 mt-4">
                <h4 class="mb-15">Main Features</h4>
                <ul class="rest">
                  <li>
                    <strong>500+ bookings/day</strong>
                  </li>
                  <li>
                    <strong>Online Shopping: </strong> Users can purchase
                    high-quality, genuine health care products from Eco Pharma,
                    such as Angela Gold, Alipas Platinum, Jex Max, Lic, Hewel,
                    OTiV, Wit, and FAZ.
                  </li>
                  <li>
                    <strong>Loyalty Points & Rewards Program: </strong>
                    Customers can accumulate points by entering the unique code
                    found on the "Anti-counterfeit & Reward Points Label" and
                    redeem them for attractive gifts. Points can be collected
                    via SMS or directly on the website.
                  </li>
                  <li>
                    <strong>Promotions & Discounts: </strong> The website
                    frequently updates special promotions and exclusive deals,
                    ensuring customers don't miss out on great shopping
                    opportunities.
                  </li>
                  <li>
                    <strong>Expert Consultation:</strong> Users can receive free
                    and dedicated health consultations from experts to choose
                    the right products for their needs.
                  </li>
                  <li>
                    <strong>News & events:</strong> Updates on hospital
                    activities, promotions, community events, and online
                    consultations.
                  </li>
                  <li>
                    <strong>Pharmacy Network: </strong> Provides information on
                    affiliated pharmacies, making it easy for customers to
                    locate and purchase products in-store.
                  </li>
                  <li>
                    <strong>Ordering & Shipping Policies: </strong> Detailed
                    information on terms of use, privacy policy, purchasing, and
                    delivery policies is clearly outlined to ensure customer
                    rights and satisfaction.
                  </li>
                  <li>
                    <strong>Frequently Asked Questions (FAQ):</strong> Answers
                    common customer queries about products and services,
                    enhancing the overall shopping experience.
                  </li>
                </ul>
              </div>
              <div class="unorder-list mb-30 mt-4">
                <h4 class="mb-15">Technology</h4>
                <ul class="rest">
                  <li>
                    <strong>Front End:</strong> Nuxt Js, Socket.io,
                    MicrofrontEnd, Boostrap
                  </li>
                  <li>
                    <strong>Back End:</strong> Nest Js, .Net, Redis, Elastic
                    search, etc
                  </li>
                </ul>
              </div>
              <div
                style="
                  display: flex;
                  display: flex;
                  align-items: center;
                  width: 100%;
                  justify-content: space-between;
                  margin: 1rem 0;
                "
              >
                <h4 class="mb-15">Project Mockup</h4>
                <div>
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
              <div>
                <div
                  style="
                    width: 100%;
                    overflow: hidden;
                    background-color: black;
                    height: 600px;
                  "
                >
                  <Swiper
                    loop
                    v-bind="swiperOptions"
                    :autoplay="{
                      delay: 2000,
                      disableOnInteraction: false,
                    }"
                  >
                    <SwiperSlide
                      v-for="(item, i) in data"
                      :key="i"
                      class="swiper-slide"
                    >
                      <div>
                        <div class="img">
                          <img
                            :src="item.img"
                            alt=""
                            class="radius-15"
                            style="object-fit: contain; height: 600px"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div class="info-area flex pt-50 bord-thin-top"></div>
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
                    <a href="/blog-grid-sidebar">Web - App</a>
                  </span>
                  <h6>
                    <a href="/blog-grid-sidebar">VNVC </a>
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
                    <a href="/blog-grid-sidebar">Web - App</a>
                  </span>
                  <h6>
                    <a href="/blog-grid-sidebar">
                      Web - App Tam Anh Hospital
                    </a>
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
                    <a href="/blog-grid-sidebar">Web</a>
                  </span>
                  <h6>
                    <a href="/blog-grid-sidebar"> Ecogreen </a>
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
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";

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
