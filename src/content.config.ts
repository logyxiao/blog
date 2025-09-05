import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
		}),
});

const movies = defineCollection({
	// Load Markdown and MDX files in the `src/content/movies/` directory.
	loader: glob({ base: './src/content/movies', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			year: z.number(),
			myRating: z.number().min(0).max(10),
			doubanRating: z.number().min(0).max(10),
			review: z.string(),
			director: z.string(),
			duration: z.string(),
			category: z.enum(['Movie', 'TV Series', 'Documentary', 'Variety Show', 'Animation', 'Short Film']),
			poster: z.union([
				image(), // 支持本地图片
				z.string().url() // 也支持远程URL
			]),
			watchedDate: z.coerce.date(),
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = { blog, movies };
