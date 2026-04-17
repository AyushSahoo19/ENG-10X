import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const roadmaps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/roadmaps' }),
  schema: z.object({
    title: z.string(),
    phase: z.number().min(1).max(3),
    duration: z.string(),
    difficulty: z.enum(['Intro', 'Intermediate', 'Frontier']),
    lastUpdated: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    abstract: z.string(),
    url: z.string().url(),
    date: z.coerce.date(),
    arxiv_id: z.string().optional(),
    category: z.string().optional(),
  }),
});

const minds = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/minds' }),
  schema: z.object({
    name: z.string(),
    field: z.string(),
    contribution: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { roadmaps, news, minds };
