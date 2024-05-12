import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite/config';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'import.meta.env.APP_VERSION': JSON.stringify(process.env.npm_package_version)
	}
});
