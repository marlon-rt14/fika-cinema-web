import { IMovie } from "./../entities/common";

export interface PostMovie extends Omit<IMovie, "id" | "rate" | "genres" | "cast"> {
  genres: number[];
  cast: number[];
}

export interface PutMovie extends Partial<Omit<IMovie, | "genres" | "cast">> {
  genres: number[];
  cast: number[];
}
