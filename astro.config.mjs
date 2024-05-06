import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/ps',
	integrations: [
		starlight({
			title: 'PS',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
			sidebar: [
				{
					label: 'Practicas',
					autogenerate: { directory: 'practicas' },
				},
				{
					label: 'Proyecto',
					autogenerate: { directory: 'proyecto' },
				},
			],
		}),
	],
});
