import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	integrations: [
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		tailwind(),
		vue(),
	],
	server: {
		port: 3001,
		host: true,
	},
	image: {
		domains: ['cloudinary.com'],
	},
});
