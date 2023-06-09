import { z, defineCollection } from 'astro:content';

const strategiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lastChangeDate: z.date().optional(),
    version: z.string(),
    order: z.number().optional().default(2),
    authors: z.array(z.string()).optional(),
    icon: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  strategies: strategiesCollection,
};
