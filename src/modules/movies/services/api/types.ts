import { Movie } from "@/modules/shared/interfaces";

export interface PostMovie extends Omit<Movie, "id" | "rate" | "genres" | "cast"> {
  genres: number[];
  cast: number[];
}

export interface PutMovie extends Partial<Omit<Movie, | "genres" | "cast">> {
  genres: number[];
  cast: number[];
}
