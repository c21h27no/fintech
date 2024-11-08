import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: false
		}),
		csrf: {
			checkOrigin: true
		},
		prerender: {
			crawl: false
		},
		alias: {
			components: path.resolve('./src/lib/components'),
			constants: path.resolve('./src/lib/constants'),
			utils: path.resolve('./src/lib/utils')
		}
	}
};

export default config;
