import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aetics.github.io',
  base: '/smma-malerbetriebe',
  integrations: [tailwind()],
});
