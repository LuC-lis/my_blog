import { sites } from '@openai/sites-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  plugins: [sites()],
  build: {
    ssr: 'worker.js',
    rollupOptions: {
      output: { entryFileNames: 'server/index.js' },
    },
  },
});
