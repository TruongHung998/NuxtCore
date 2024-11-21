<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header />
        <Blogs />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Blogs from "@/components/blog-grid-3column/Blogs";
import Header from "@/components/blog-grid-3column/Header";
import Footer from "@/components/common/Footer";
import Lines from "@/components/common/Lines";
import Navbar from "@/components/common/Navbar";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";

useHead({
  script: [{ src: "/assets/js/smoother-script.js", defer: true }],
});
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
