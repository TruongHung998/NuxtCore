<template>
  <header
    class="header page-header bg-img section-padding valign"
    data-background="/assets/imgs/background/bg4.jpg"
    data-overlay-dark="8"
  >
    <div class="container pt-80">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div class="header-wrap">
              <div>
                <div class="header-title">
                  Hi, I'm <a style="text-decoration: underline">Hung Truong</a
                  ><span>,</span>
                </div>
                <div class="header-title">Software engineer<span>.</span></div>
                <div class="header-title">
                  Find me on
                  <a
                    style="text-decoration: underline"
                    href="http://github.com/truongHung998/"
                    target="_blank"
                    >Github</a
                  ><span>.</span>
                </div>
              </div>
              <div>
                <div class="header-content">
                  I am a Software Engineer with 4 years of experience in
                  software development, specializing in React Native and modern
                  web technologies such as React.js, Vue.js, and Node.js. I have
                  worked on large-scale projects, from mobile application
                  development to building complex web systems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import loadBackgroudImages from "@/common/loadBackgroudImages";

onMounted(() => {
  loadBackgroudImages();
});
</script>
<style lang="scss" scoped>
@import "styles.scss";
</style>
