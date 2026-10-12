// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Hospedagens que servem o site numa subpasta (ex.: GitHub Pages) definem BASE_PATH no build
  site: process.env.SITE_URL || 'https://virtusapex.com',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()]
  }
});