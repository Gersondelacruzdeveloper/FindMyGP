import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@reduxjs/toolkit"],
  },
  resolve: {
    alias: {
      "@reduxjs_toolkit": "@reduxjs/toolkit", // catch Vite’s mistake
    },
  },
});
