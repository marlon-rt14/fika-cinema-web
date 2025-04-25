import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@navigation": path.resolve(__dirname, "./src/navigation"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      
      //? MODULES
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@admin": path.resolve(__dirname, "./src/modules/admin"),
      "@cast": path.resolve(__dirname, "./src/modules/cast"),
      "@genres": path.resolve(__dirname, "./src/modules/genres"),
      "@movies": path.resolve(__dirname, "./src/modules/movies"),
      "@shared": path.resolve(__dirname, "./src/modules/shared"),
      
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendors": ["react", "react-dom", "react-router", "react-router-dom", "react-error-boundary"],
          "ui-components": [
            "@headlessui/react",
            "@heroicons/react",
            "@heroui/button",
            "@heroui/drawer",
            "@heroui/system",
            "@heroui/theme",
            "@heroui/tooltip",
            "framer-motion",
          ],
          "form-management": ["react-hook-form", "@hookform/resolvers", "zod"],
          "state-management": ["zustand", "react-secure-storage"],
          "data-fetching": ["@tanstack/react-query", "@tanstack/react-query-devtools", "axios"],
          // utilities: ["lodash.debounce", "ldrs"],
          carousel: ["swiper"],
          // styling: ["tailwindcss"],
        },
      },
    },
  },
});
