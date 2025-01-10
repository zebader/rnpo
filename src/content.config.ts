import { defineCollection, z } from "astro:content";

const useCases = defineCollection({
    schema: z.object({
        client: z.string(),
        title: z.string(),
        img: z.string(),
    })
})

export const collections = { useCases }