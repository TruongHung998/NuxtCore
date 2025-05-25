<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container o-hidden">
      <a class="logo icon-img-100" href="/">
        <span class="tulen-text">No Codding No Life</span>
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
          <!-- <li
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
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/" target="_blank">
              <span class="rolling-text">Github</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/hung-truong-3231b3209/"
              target="_blank"
            >
              <span class="rolling-text">Linkedin</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/">
              <span class="rolling-text">Facebook</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="contact-button">
        <!-- <el-dropdown placement="bottom-start">
          <el-button class="text-upper-case"> {{ $t("language") }}</el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="changeLanguage('vi')"
                >Tiếng Việt</el-dropdown-item
              >
              <el-dropdown-item @click="changeLanguage('en')"
                >English</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

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

function changeLanguage(lang) {
  locale.value = lang;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.tulen-text {
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  background: linear-gradient(270deg, #007bff, #00c3ff, #ff6b6b, #f7b42c, #007bff);
  background-size: 1000% 1000%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: tulen-gradient 6s ease-in-out infinite, tulen-scale 2s ease-in-out infinite;
  display: inline-block;
}

@keyframes tulen-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes tulen-scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15) rotate(-2deg); }
}

.contact-button button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.contact-button button:hover {
  background-color: #0056b3;
}
</style>
