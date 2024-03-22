
import { sveltekit } from '@sveltejs/kit/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-auto';

export default defineConfig({
  plugins: [
    // sveltekit(),
    svelte({
      include: 'src/lib/WardDevTools.svelte',
      compilerOptions: {
        customElement: true,
      },
      emitCss: false,
      preprocess: vitePreprocess(),
    }),
  ],
  build: {
    lib: {
      entry: './src/lib/index.ts',
      name: '@uncover/ward-devtools',
      fileName: 'ward-devtools',
    },
  },
});
