import { resolve } from 'path';
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        privacyPolicy: resolve(root, 'privacy-policy', 'index.html'),
        termsOfService: resolve(root, 'terms-of-service', 'index.html')
      }
    }
  }
})