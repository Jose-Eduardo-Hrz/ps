import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PS',
			sidebar: [
				{
					label: 'Practicas',
					autogenerate: { directory: 'practicas' },
				},
			],
		}),
	],
});
