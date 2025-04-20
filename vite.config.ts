import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({
    entryRoot: 'src',
    outDir: 'dist',
    insertTypesEntry: true
  })],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  build: {
    sourcemap: false,
    lib: {
      entry: 'src/index.ts',
      name: 'DesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
  }
});
