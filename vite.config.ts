import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/pitch/",  // Correct base path for GitHub Pages
  build: {
    outDir: "dist",  // Output folder should be 'dist'
  },
})