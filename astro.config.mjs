import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import embeds from 'astro-embed/integration';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import starlightImageZoomPlugin from 'starlight-image-zoom';
import AstroPWA from '@vite-pwa/astro';
import inoxToolsStarWarp from '@inox-tools/star-warp';

// https://astro.build/config
export default defineConfig({
	site: 'https://thegreatoutdoors.guide/',
	prefetch: {
		prefetchAll: true,
	},
	integrations: [
		// AstroPWA({
		// 	mode: 'production',
		// 	registerType: 'autoUpdate',
		// 	includeAssets: ['favicon.svg'],
		// 	workbox: {
		// 		globPatterns: ['**/!(404).{css,js,html,svg,png,ico,txt,json}'],
		// 		runtimeCaching: [
		// 			{
		// 				urlPattern: '.*',
		// 				handler: 'NetworkFirst',
		// 			},
		// 		],
		// 	},
		// 	experimental: {
		// 		directoryAndTrailingSlashHandler: true,
		// 	},
		// 	manifest: {
		// 		id: 'the-great-outdoors',
		// 		name: 'The Great Outdoors',
		// 		short_name: 'TGO',
		// 		description: 'Your guide to camping, hiking, and backpacking.',
		// 		orientation: 'portrait',
		// 		display: 'standalone',
		// 		theme_color: '#137c5a',
		// 		background_color: '#222222',
		// 		icons: [
		// 			{
		// 				src: 'pwa-64x64.png',
		// 				sizes: '64x64',
		// 				type: 'image/png',
		// 			},
		// 			{
		// 				src: 'pwa-192x192.png',
		// 				sizes: '192x192',
		// 				type: 'image/png',
		// 			},
		// 			{
		// 				src: 'pwa-512x512.png',
		// 				sizes: '512x512',
		// 				type: 'image/png',
		// 				purpose: 'any',
		// 			},
		// 			{
		// 				src: 'maskable-icon-512x512.png',
		// 				sizes: '512x512',
		// 				type: 'image/png',
		// 				purpose: 'maskable',
		// 			},
		// 		],
		// 	},
		// }),
		
		starlight({
      plugins: [starlightImageZoomPlugin(), inoxToolsStarWarp()],
			title: 'The Great Outdoors',
			logo: {
				src: './src/assets/brand/wordmark.svg',
				replacesTitle: true,
			},
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			customCss: ['./src/tailwind.css'],
			social: {
				discord:
					'https://discord.gg/the-great-outdoors-345621611770282004',
				github: 'https://github.com/tgoHQ/knowledgebase',
			},
			components: {
				Head: './src/components/starlight/Head.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
				PageTitle: './src/components/starlight/PageTitle.astro',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Getting Started',
					autogenerate: {
						directory: 'beginner',
					},
				},
				{
					label: 'Clothing',
					autogenerate: {
						directory: 'clothing',
					},
				},
				{
					label: 'Miscellaneous',
					autogenerate: {
						directory: 'misc',
					},
				},
				{
					label: 'Contributing',
					badge: {
						text: 'New',
						variant: 'note',
					},
					autogenerate: {
						directory: 'contribute',
					},
				},
			],
		}),
		// embeds({
		// 	services: {
        // LinkPreview: true,
		// 		YouTube: true,
		// 	},
		// }),
		tailwind({
			applyBaseStyles: false,
		}),
		metaTags(),
	],
});
