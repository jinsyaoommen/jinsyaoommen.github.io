// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

// Draft posts (draft: true) are excluded from the sitemap
const blogDir = './src/content/blog';
const draftSlugs = fs.readdirSync(blogDir)
  .filter((f) => f.endsWith('.md') && /^draft:\s*true\s*$/m.test(fs.readFileSync(`${blogDir}/${f}`, 'utf8')))
  .map((f) => f.replace(/\.md$/, ''));

// https://astro.build/config
export default defineConfig({
  site: 'https://thegoodoommen.com',
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/writing') &&
        !page.includes('/drafts') &&
        !draftSlugs.some((slug) => page.includes(`/reflections/${slug}/`))
    })
  ]
});
