import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
  optimizeDeps: {
    exclude: ['jquery'],
  },
  build: {
    rollupOptions: {
      external: [path.resolve(__dirname, '/node_modules/jquery')],
    },
  },
});
