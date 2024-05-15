import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  renderers: ['@astrojs/renderer-react'],
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), tailwind({ nesting: true, applyBaseStyles: false })],

  
});
