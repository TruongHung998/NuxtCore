import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("webp")) {
          return new URLSearchParams({
            format: "webp",
            quality: "80",
          });
        }
        return new URLSearchParams();
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
            extType = "images";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
    // Tăng kích thước chunk để cache tốt hơn
    chunkSizeWarningLimit: 1000,
  },
  // Cấu hình cache cho assets
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000",
    },
  },
  // Tối ưu hóa dependencies
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
