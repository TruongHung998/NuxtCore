<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header :titleLabel="titleLabel" />
        <div class="blogdevelopcontainer">
          <template v-if="!blogData">
            <div class="skeleton-blogdevelop">
              <div class="skeleton-title"></div>
              <div class="skeleton-subtitle"></div>
              <div class="skeleton-content"></div>
              <div class="skeleton-content short"></div>
              <div class="skeleton-content"></div>
            </div>
          </template>
          <BlogDevelop v-else :blog="blogData" />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import BlogDevelop from "@/components/blog-details/BlogDevelop";
import Header from "@/components/blog-details/Header";
import Footer from "@/components/common/Footer";
import Lines from "@/components/common/Lines";
import Navbar from "@/components/common/Navbar";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import axios from "axios";
import { onMounted, ref } from "vue";

const route = useRoute();

const slug = computed(() => {
  return route.params.id;
});

const titleLabel = computed(() => {
  return {
    title: blogData.value?.title || "Đang tải...",
    subtitle: blogData.value?.description || "Đang tải...",
  };
});
console.log(slug.value, "slug123");

const blogData = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://14.225.204.82:1337/api/articles?filters[slug]=${slug.value}&populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer e2fb542445502f15e84956b8230c9675e0bc9c0ad9be548fbdf6372a9bad394661b5e974db0cae9f3cc52bda6a6f74446d17e58ee5e95a1f0157c5aa5953af61d86e74c68b82a19b847516d58e5ca6fbb0632114ffd57df3912dad85477d97e4c55f5940ea0576e06defa737fbe6b2e864d2470ffc1d0f8a99fb04fa6cffeb66`,
        },
      }
    );
    blogData.value = response.data.data[0];
    console.log(blogData.value, "blogData");
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
});

// useHead({
//   script: [{ src: '/assets/js/smoother-script.js', defer: true }],
// });
// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//   ScrollTrigger.normalizeScroll(true);
//   ScrollSmoother.create({
//     smooth: 2,
//     effects: true,
//   });
// });
</script>

<style scoped>
.skeleton-blogdevelop {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 28px;
  background: rgba(30, 32, 38, 0.85);
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.18);
  min-height: 320px;
  margin: 24px 0;
}
.skeleton-title {
  width: 55%;
  height: 36px;
  background: linear-gradient(90deg, #23242a 25%, #35363c 50%, #23242a 75%);
  border-radius: 10px;
  animation: skeleton-loading 1.2s infinite linear alternate;
}
.skeleton-subtitle {
  width: 38%;
  height: 22px;
  background: linear-gradient(90deg, #23242a 25%, #35363c 50%, #23242a 75%);
  border-radius: 8px;
  animation: skeleton-loading 1.2s infinite linear alternate;
}
.skeleton-content {
  width: 100%;
  height: 18px;
  background: linear-gradient(90deg, #23242a 25%, #35363c 50%, #23242a 75%);
  border-radius: 8px;
  animation: skeleton-loading 1.2s infinite linear alternate;
}
.skeleton-content.short {
  width: 68%;
}
@keyframes skeleton-loading {
  0% {
    filter: brightness(0.95);
    background-position: 0% 50%;
  }
  100% {
    filter: brightness(1.15);
    background-position: 100% 50%;
  }
}
</style>
