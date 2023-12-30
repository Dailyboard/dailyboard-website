import { z, defineCollection } from 'astro:content';

const openGraph = {
	og: {
		title: z.string(),
		description: z.string(),
	},
};

const documentsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
	}),
});

export const collections = {
	documents: documentsCollection,
	posts: postsCollection,
};
