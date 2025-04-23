import { z } from "zod";

export const schemaCreateMovie = z.object({
  id: z.number().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  overview: z.string().min(1, { message: "Overview is required" }),
  poster_path: z.string().url().min(1, { message: "Poster path is required" }),
  release_date: z.string().min(1, { message: "Release date is required" }),
  rate: z.number().optional(),
  genres: z.array(z.number()).min(1, { message: "Genres are required" }),
  cast: z.array(z.number()).min(1, { message: "Cast is required" }),
});

export type TFormValues = z.infer<typeof schemaCreateMovie>;
