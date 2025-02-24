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
                    The <strong>VNVC App</strong> is the official vaccination
                    information portal of the VNVC Vaccination System, offering
                    various useful features to help users manage and track their
                    vaccination records conveniently.
                  </p>
                </div>
              </article>
              <div class="unorder-list mb-30 mt-4">
                <h4 class="mb-15">Link Project</h4>
                <ul class="rest">
                  <li>
                    <strong>Link IOS: </strong> <a style="color: cyan" href="https://apps.apple.com/vn/app/vnvc/id1563851266?l=vit" target="_blank">
                      Apple
                    </a>
                  </li>
                  <li>
                    <strong>Link Android: </strong> <a style="color: cyan" href="https://play.google.com/store/apps/details?id=com.eco.eplus&;hl=vi" target="_blank">
                      Android
                    </a>
                  </li>
                  <li>
                    <strong>Link Website: </strong> <a style="color: cyan" href="https://vax.vnvc.vn/" target="_blank">
                      Web
                    </a>
                  </li>
                </ul>
              </div>
              <div class="unorder-list mb-30 mt-4">
                <h4 class="mb-15">Main Features</h4>
                <ul class="rest">
                  <li>
                    <strong>1,5+ million user</strong>
                  </li>
                  <li>
                    <strong>1000+ orders/day </strong>
                  </li>
                  <li>
                    <strong>Easy Account Registration:</strong> Users can
                    quickly create an account to access VNVC services.
                  </li>
                  <li>
                    <strong>Online Vaccine Booking:</strong> Allows users to
                    purchase vaccines easily and conveniently through the app.
                  </li>
                  <li>
                    <strong> Vaccination History Tracking: </strong> Manage and
                    look up vaccination records for yourself and your family
                    members.
                  </li>
                  <li>
                    <strong>Reward Points & Accumulation:</strong> View and
                    manage reward points that can be redeemed for VNVC services.
                  </li>
                  <li>
                    <strong>Recommended Vaccines:</strong> The app suggests
                    suitable vaccines for children and adults based on age and
                    epidemiological conditions.
                  </li>
                  <li>
                    <strong> Vaccination Journal: </strong> Save important
                    milestones and information throughout your vaccination
                    journey with VNVC.
                  </li>
                  <li>
                    <strong>News & Promotions Updates:</strong> Stay informed
                    about the latest disease outbreaks, vaccine updates, health
                    care tips from experts, and exclusive promotions for loyal
                    customers.
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
                  <li><strong>Front End:</strong> Nuxt Js, Socket.io</li>
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
                    <a href="/project/tamanh">
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
    img: "https://cdn.e-plus.vn/4e90393be6e94924b07b9fb9033e61dc.png",
  },
  {
    img: "https://cdn.e-plus.vn/001339d5bb9946edbca0afd98337a0ab.png",
  },
  {
    img: "https://cdn.e-plus.vn/b6e26f25735c436b9379cd30641b17a1.png",
  },
  {
    img: "https://cdn.e-plus.vn/893041fec43940acb5afb78bc5bf8858.png",
  },
  {
    img: "https://cdn.e-plus.vn/1d7fd759d91b4460bb6c0fd1642a667e.png",
  },
  {
    img: "https://cdn.e-plus.vn/5e490a49b49a443c9091647af30e8697.png",
  },
  {
    img: "https://cdn.e-plus.vn/9d25245e89fc42009ae18f2eb9b984aa.png",
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
