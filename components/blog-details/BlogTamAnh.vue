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
                    The <strong>Tam Anh App</strong> is the official vaccination
                    information portal of the Tam Anh Vaccination System,
                    offering various useful features to help users manage and
                    track their vaccination records conveniently.
                  </p>
                </div>
              </article>
              <div class="unorder-list mb-30 mt-4">
                <h4 class="mb-15">Link Project</h4>
                <ul class="rest">
                  <li>
                    <strong>Link IOS: </strong>
                    <a style="color: cyan"> Not officially released yet </a>
                  </li>
                  <li>
                    <strong>Link Android: </strong>
                    <a style="color: cyan"> Not officially released yet </a>
                  </li>
                  <li>
                    <strong>Link Website: </strong>
                    <a
                      style="color: cyan"
                      href="https://tamanhhospital.vn/"
                      target="_blank"
                    >
                      Web
                    </a>
                  </li>
                </ul>
              </div>
              <div class="unorder-list mb-30 mt-4">
                <h4 class="mb-15">Main Features</h4>
                <ul class="rest">
                  <li>
                    <strong>500+ bookings/day</strong>
                  </li>
                  <li>
                    <strong>Introduction to the hospital:</strong> Provides
                    details about the hospital's vision, mission, organizational
                    structure, and recruitment information.
                  </li>
                  <li>
                    <strong>Medical specialties: </strong> Lists the hospital’s
                    specialties with detailed information about services and
                    medical experts.
                  </li>
                  <li>
                    <strong> Doctors & specialists: </strong> Offers information
                    about leading doctors and specialists working at the
                    hospital.
                  </li>
                  <li>
                    <strong>Special services:</strong> Introduces premium
                    healthcare services and high-end amenities for patients.
                  </li>
                  <li>
                    <strong>News & events:</strong> Updates on hospital
                    activities, promotions, community events, and online
                    consultations.
                  </li>
                  <li>
                    <strong>Online appointment booking:</strong> Allows users to
                    conveniently book medical appointments through the website.
                  </li>
                  <li>
                    <strong>Result lookup:</strong> Supports patients in
                    checking their medical test and diagnosis results online.
                  </li>
                  <li>
                    <strong>Pricing information:</strong> Provides details about
                    the costs of medical services at the hospital.
                  </li>
                  <li>
                    <strong>Contact information:</strong> Displays contact
                    details and directions to the hospital’s various branches.
                  </li>
                </ul>
              </div>
              <div class="unorder-list mb-30 mt-4">
                <h4 class="mb-15">Technology</h4>
                <ul class="rest">
                  <li>
                    <strong>Mobile:</strong> React native, Socket.io, Firebase,
                    Log rocket, SignalR, GG Map Api, etc
                  </li>
                  <li>
                    <strong>Front End:</strong> Nuxt Js, Socket.io,
                    MicrofrontEnd
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
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";

const data = [
  {
    img: "https://cdn.e-plus.vn/90e14057c12045779cd97a8dacb7a1ee.png",
  },
  {
    img: "https://cdn.e-plus.vn/795452ae0bfa48c5b66408397f90f4fa.png",
  },
  {
    img: "https://cdn.e-plus.vn/8c4703149168496996a59523921754f9.png",
  },
  {
    img: "https://cdn.e-plus.vn/0f53c61ce0c04d27bdcd00bf02ec4eb2.png",
  },
  {
    img: "https://cdn.e-plus.vn/fa17e3d7c5704909b69ba03b7e028b98.png",
  },
  {
    img: "https://cdn.e-plus.vn/40a0d311cab34d568e89c0a6d0911ed0.png",
  },
  {
    img: "https://cdn.e-plus.vn/325ab0df74384f1db53e5aed754d309e.png",
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
