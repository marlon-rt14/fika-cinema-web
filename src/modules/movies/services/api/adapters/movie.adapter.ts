import { Movie, MovieResponse, MoviesResponse } from "@/modules/shared/interfaces";

export const toMovieModel = (movie: MovieResponse): Movie => movie;

export const toMoviesModel = (movies: MoviesResponse): Movie[] => movies.map(toMovieModel);
