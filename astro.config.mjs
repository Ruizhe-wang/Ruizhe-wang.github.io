import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ruizhe-wang.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
