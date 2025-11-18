// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
		  plugins: [catppuccin({
          dark: { flavor: "mocha", accent: "maroon" },
          light: { flavor: "latte", accent: "maroon" },
        })],
			title: 'A Little Coffee Guidebook',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/brianshumate/a-little-coffee-guidebook' }],
			sidebar: [
  			{
  				label: 'Acknowledgements', slug: 'acknowledgments'
  			},
        {
          label: 'Preface', slug: 'preface'
        },
        {
          label: 'Introduction', slug: 'introduction'
        },
				{
					label: 'Brewing techniques',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Aeropress', slug: 'brewing-techniques/aeropress' },
						{ label: 'French Press', slug: 'brewing-techniques/french-press' },
						{ label: 'Pour Over', slug: 'brewing-techniques/pour-over' },
						{ label: 'Vietnamese', slug: 'brewing-techniques/vietnamese' },
					],
				},
				{
					label: 'Equipment',
					items: [
						{ label: 'Introduction', slug: 'equipment/introduction' },
					],
				},
				{
					label: 'Raw Materials',
					items: [
						{ label: 'Introduction', slug: 'raw-materials/introduction' },
					],
				},
			],
		}),
	],
});
