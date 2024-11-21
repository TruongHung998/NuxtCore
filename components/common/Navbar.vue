<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container o-hidden">
      <a class="logo icon-img-100" href="#">
        <span class="tulen-text">Tulen Garcia</span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">APIS</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/blog-classic">API Ecomerce</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/page-contact">
              <span class="rolling-text">Github</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="contact-button"></div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { ref } from "vue";

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector(".navbar");

  if (bodyScroll > 300) navbar.classList.add("nav-scroll");
  else navbar.classList.remove("nav-scroll");
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector(".dropdown-menu").classList.remove("show");
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style lang="scss" scoped>
.tulen-text {
  font-family: "Anonymus Pro", sans-serif;
}
</style>
