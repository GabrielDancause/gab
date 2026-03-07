// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://gab.ae',
  build: {
    format: 'file',
  },
});
