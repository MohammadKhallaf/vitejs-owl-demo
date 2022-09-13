import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';
export default defineConfig({
  optimizeDeps: {
    exclude: ['jquery'],
  },
  resolve: {
    alias: {
      $: 'jQuery',
    },
  },
  plugins: [
    // Add it first
    inject({
      $: 'jquery',
    }),
    // Other plugins...
  ],
});
