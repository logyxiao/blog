// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://logyxiao.cc', // 你可以稍后在 Vercel 中配置自定义域名
	i18n: {
		defaultLocale: 'zh-cn',
		locales: ['zh-cn', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
		fallback: {
			'en': 'zh-cn',
		},
	},
	markdown: {
		remarkPlugins: [
			remarkGfm, // GitHub Flavored Markdown 支持
		],
		rehypePlugins: [
			rehypeSlug, // 为标题添加 ID
			[rehypeAutolinkHeadings, { 
				behavior: 'wrap',
				properties: {
					className: 'heading-link',
					ariaLabel: '链接到此标题'
				}
			}], // 标题自动链接
			[rehypeExternalLinks, { 
				target: '_blank',
				rel: ['noopener', 'noreferrer'],
				properties: {
					className: 'external-link'
				}
			}], // 外部链接优化
		],
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
		syntaxHighlight: 'shiki',
	},
	integrations: [
		mdx(),
		sitemap(),
		react(),
		tailwind({
			applyBaseStyles: false, // 我们将使用自定义的全局样式
			configFile: './tailwind.config.mjs',
		}),
	],
	vite: {
		resolve: {
			alias: {
				'@': '/src',
			},
		},
	},
	output: 'static',
});
