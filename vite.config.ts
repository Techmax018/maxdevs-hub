import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Keep React and all UI/framework libraries that rely on React together
            if (
              id.includes('react') || 
              id.includes('radix-ui') || 
              id.includes('tanstack')
            ) {
              return 'vendor-react';
            }
            if (id.includes('lucide') || id.includes('chart.js')) {
              return 'vendor-ui';
            }
            return 'vendor';
          }
        }
      }
    }
  }
}));
