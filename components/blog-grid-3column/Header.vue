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
              <div class="title-group-animation">
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
                  {{ typingText }}<span class="typing-cursor">|</span>
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
import { ref, onMounted } from "vue";
import loadBackgroudImages from "@/common/loadBackgroudImages";

const fullText = `I am a Software Engineer with 4 years of experience in software development, specializing in React Native and modern web technologies such as React.js, Vue.js, Ionic and Node.js.
I have worked on large-scale projects, from mobile application development to building complex web systems.`;
const typingText = ref("");
let typingIndex = 0;
let typingInterval = null;

function typeStep() {
  if (typingIndex < fullText.length) {
    typingText.value += fullText[typingIndex];
    typingIndex++;
  } else {
    clearInterval(typingInterval);
  }
}

function startTyping() {
  typingText.value = "";
  typingIndex = 0;
  if (typingInterval) clearInterval(typingInterval);
  typingInterval = setInterval(typeStep, 24);
}

onMounted(() => {
  loadBackgroudImages();
  startTyping();
});
</script>
<style lang="scss" scoped>
@import "styles.scss";
.header-content {
  font-family: "Fira Mono", "Consolas", "Menlo", "Monaco", monospace;
  font-size: 18px;
  min-height: 120px;
  white-space: pre-line;
  display: inline-block;
}
.typing-cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
  color: #007bff;
  font-weight: bold;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.title-group-animation {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: filter 0.3s, transform 0.3s;
}
.title-group-animation:hover {
  filter: brightness(1.2) contrast(1.1) drop-shadow(0 0 8px #0084ffcc);
  transform: scale(1.03) rotate(-1deg) skewY(1deg);
}
</style>
