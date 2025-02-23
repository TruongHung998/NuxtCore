// plugins/element-plus.ts
import { defineNuxtPlugin } from "#app";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { inject } from "@vercel/analytics";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);
  inject();
});
