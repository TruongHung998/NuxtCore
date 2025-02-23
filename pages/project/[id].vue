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
        <BlogVNVC v-if="slug === 'vnvc'" />
        <BlogTamAnh v-if="slug === 'tamanh'" />
        <BlogEco v-if="slug === 'ecogreen'" />
        <BlogDevelop
          v-if="slug === 'pwa' || slug === 'zalominiapp' || slug === 'rmic'"
        />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/blog-details/Header";
import Blog from "@/components/blog-details/Blog";
import BlogVNVC from "@/components/blog-details/BlogVNVC";
import BlogTamAnh from "@/components/blog-details/BlogTamAnh";
import BlogEco from "@/components/blog-details/BlogEco";
import BlogDevelop from "@/components/blog-details/BlogDevelop";

const route = useRoute();

const slug = computed(() => {
  return route.params.id;
});

const titleLabel = computed(() => {
  switch (route.params.id) {
    case "vnvc":
      return {
        title: "App - Website",
        subtitle: "VNVC",
      };
    case "tamanh":
      return {
        title: "App - Website",
        subtitle: "Tam Anh Hospital",
      };
    case "ecogreen":
      return {
        title: "Website",
        subtitle: "Ecogreen",
      };
    case "pwa":
      return {
        title: "Web PWA",
        subtitle: "PWA Ecommerce Web",
      };
    case "zalominiapp":
      return {
        title: "Zalo mini app",
        subtitle: "Zalo mini app",
      };
    case "rmic":
      return {
        title: "Web",
        subtitle: "Web resource management",
      };
    default:
      return {
        title: "VNVC",
        subtitle: "VNVC",
      };
  }
});
console.log(slug.value, "slug123");

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
