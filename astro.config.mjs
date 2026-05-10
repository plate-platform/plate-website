import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://plate-platform.github.io',
  base: '/plate-website',
  integrations: [tailwind()],
  output: 'static',
});
