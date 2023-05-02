import { z, defineCollection } from "astro:content";

const strategiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    version: z.string(),
    authors: z.array(z.string()).optional(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  strategies: strategiesCollection,
};