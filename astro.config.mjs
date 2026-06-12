import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GITHUB_PAGES=true wird nur im GitHub-Actions-Workflow gesetzt.
// Vercel und lokale Entwicklung benutzen keinen base-Pfad.
const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGithubPages ? 'https://aetics.github.io' : undefined,
  base: isGithubPages ? '/smma-malerbetriebe' : undefined,
  integrations: [tailwind()],
});
