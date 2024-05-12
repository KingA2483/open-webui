import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:8080'
	},
	video: true
});
export default defineConfig({
	/**
 * Configures the SvelteKit plugin for the Vite build system.
 * This plugin enables the use of Svelte components and features in the application.
 */
	plugins: [sveltekit()],
	define: {
		'import.meta.env.APP_VERSION': JSON.stringify(process.env.npm_package_version)
	}
});
