import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/residency-thesis/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
});
