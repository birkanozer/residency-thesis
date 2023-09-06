import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ssr } from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/residency-thesis/",
  plugins: [react(), ssr({ prerender: true })],
  server: {
    watch: {
      usePolling: true
    }
  }
});
