<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <Header />
        <Demos />
        <Pages />
        <Show />
        <Marq />
        <!-- <Testimonials /> -->
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Demos from '@/components/landing/Demos';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Marq from '@/components/landing/Marq';
import Navbar from '@/components/landing/Navbar';
import Pages from '@/components/landing/Pages';
import Show from '@/components/landing/Show';
import Testimonials from '@/components/landing/Testimonials';
import { onMounted } from 'vue';

useHead({
  link: [{ rel: 'stylesheet', href: '/landing-preview/css/preview-style.css' }],
  // script: [{ src: '/assets/js/smoother-script.js', defer: true }],
});
// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//   ScrollTrigger.normalizeScroll(true);
//   ScrollSmoother.create({
//     smooth: 2,
//     effects: true,
//   });
// });
</script>
