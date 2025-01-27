import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for src directory
    },
  },
  base: "/pitch",  // GitHub Pages requires this base path
  build: {
    outDir: "dist",  // Make sure the build output is in the 'dist' folder
  },
})
