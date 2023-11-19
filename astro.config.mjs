import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind(), robotsTxt(), sitemap(), mdx()],
  server: {
    port: 3001,
    host: true
  },
  image: {
    domains: ['cloudinary.com']
  }
});