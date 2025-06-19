// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // SWC version
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@uswds/uswds.css': path.resolve(
        __dirname,
        'node_modules/@uswds/uswds/dist/css/uswds.min.css'
      ),
    },
  },
});
