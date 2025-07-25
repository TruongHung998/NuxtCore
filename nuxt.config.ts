import { fileURLToPath } from "node:url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  typescript: {
    shim: false,
  },

  nitro: {},

  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },

  app: {
    head: {
      title: "No Coding No Life",
      htmlAttrs: {
        lang: "vi",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
      ],
      link: [
        { rel: "shortcut icon", href: "/assets/imgs/favicon.ico" },
        // Google Fonts
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        },
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
      ],
      script: [
        { src: "/assets/js/plugins.js" },
        { src: "/assets/js/TweenMax.min.js" },
        { src: "/assets/js/charming.min.js" },
        { src: "/assets/js/countdown.js" },
        { src: "/assets/js/ScrollTrigger.min.js" },
        { src: "/assets/js/gsap.min.js" },
        { src: "/assets/js/splitting.min.js" },
        { src: "/assets/js/isotope.pkgd.min.js" },
        { src: "/assets/js/imgReveal/imagesloaded.pkgd.min.js" },
        { src: "/assets/js/ScrollSmoother.min.js" },
        // { src: '/showcase/assets/js/anime.min.js' },
        { src: "/assets/js/scripts.js", defer: true },
      ],
    },
  },

  webpack: {
    extractCSS: true,
  },

  // Register the Element Plus plugin
  plugins: ["~/plugins/element-plus.ts"],

  // i18n configuration
  modules: ["@nuxtjs/i18n"],

  i18n: {
    locales: [
      { code: "en", name: "English", iso: "en-US", file: "en.json" },
      { code: "vi", name: "Vietnamese", iso: "vi-VN", file: "vi.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
  },

  css: ["~/public/assets/scss/global.scss", "~/assets/css/wedding.css"],
  compatibilityDate: "2025-07-25",
});