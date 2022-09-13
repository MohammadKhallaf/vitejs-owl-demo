import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
  optimizeDeps: {
    exclude: ['jquery', 'owl.carousel'],
  },
  build: {
    rollupOptions: {
      external: [
        path.resolve(__dirname, '/node_modules/jquery'),
        path.resolve(
          __dirname,
          '/node_modules/owl.carousel/dist/owl.carousel.min.js'
        ),
      ],
    },
  },
});
