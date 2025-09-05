// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	i18n: {
		defaultLocale: 'zh-cn',
		locales: ['zh-cn', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
		fallback: {
			'en': "zh-cn"
		},
	},

	integrations: [
		mdx(),
		sitemap(),
		react(),
		tailwind({
			applyBaseStyles: false, // 我们将使用自定义的全局样式
			configFile: './tailwind.config.mjs'
		})
	],
	vite: {
		resolve: {
			alias: {
				'@': '/src'
			}
		}
	}
});
