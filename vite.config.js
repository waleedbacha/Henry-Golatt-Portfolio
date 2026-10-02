import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Animation libraries
          "animation-vendor": ["framer-motion", "gsap", "lenis"],
          // Icon library
          "icons-vendor": ["lucide-react"],
        },
      },
    },
    // Raise the warning limit since chunks are split
    chunkSizeWarningLimit: 700,
  },
});
