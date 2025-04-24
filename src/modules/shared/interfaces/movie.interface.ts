import { Cast } from "./cast.interface";
import { Genre } from "./genre.interface";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  rate: number;
  genres: Genre[];
  cast: Cast[];
}


//? Responses from API
export type MovieResponse = Movie;

export type MoviesResponse = Movie[];