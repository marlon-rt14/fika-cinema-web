import { fakeApi } from "@/api/fakeApi";
import { getDataStore, sleep } from "@/modules/shared/utils";
import { Cast, Genre, Movie } from "@/modules/shared/interfaces";
import { PostMovie, PutMovie } from "@movies/services/api/types";
import { toMovieModel, toMoviesModel } from "@movies/services/api/adapters";

export const getMovies = async (): Promise<Movie[]> => {
  await sleep();
  const data = await fakeApi.get("/movies.json");
  return toMoviesModel(data.data);
};

export const postMovie = async (payload: PostMovie): Promise<Movie> => {
  // await sleep();
  const data = await fakeApi.get("/movies.json");

  const movies = getDataStore<Movie[]>("movies") || data.data;

  let lastMovie: Movie | undefined;
  if (movies.length > 0) {
    lastMovie = movies[movies.length - 1];
  }
  const newId = lastMovie ? lastMovie.id + 1 : 1;

  const genres = await fakeApi.get(`/genres.json`);
  const genresList: Genre[] = getDataStore<Genre[]>("genres") || genres.data;
  const genresFiltered = genresList.filter((genre) => payload.genres.includes(genre.id));

  const casts = await fakeApi.get(`/cast.json`);
  const castsList: Cast[] = getDataStore<Cast[]>("casts") || casts.data;
  const castFiltered = castsList.filter((cast) => payload.cast.includes(cast.id));

  const newMovie = { ...payload, id: newId, rate: 0, genres: genresFiltered, cast: castFiltered };

  return toMovieModel(newMovie);
};

export const putMovie = async (payload: PutMovie, id: number): Promise<Movie> => {
  // await sleep();
  const data = await fakeApi.get("/movies.json");
  const movies: Movie[] = getDataStore<Movie[]>("movies") || data.data;
  const movie: Movie = movies.find((movie) => movie.id === id)!;

  const genres = await fakeApi.get(`/genres.json`);
  const genresList: Genre[] = getDataStore<Genre[]>("genres") || genres.data;
  const genresFiltered = genresList.filter((genre) => payload.genres.includes(genre.id));

  const casts = await fakeApi.get(`/cast.json`);
  const castsList: Cast[] = getDataStore<Cast[]>("casts") || casts.data;
  const castFiltered = castsList.filter((cast) => payload.cast.includes(cast.id));

  const updatedMovie = { ...movie, ...payload, id, genres: genresFiltered, cast: castFiltered };
  return toMovieModel(updatedMovie);
};

export const deleteMovie = async (id: number): Promise<Movie> => {
  // await sleep();
  const data = await fakeApi.get("/movies.json");
  const movies: Movie[] = getDataStore<Movie[]>("movies") || data.data;
  const movie: Movie = movies.find((movie) => movie.id === id)!;
  return toMovieModel(movie);
};

export const patchRate = async (rate: number, id: number): Promise<{ id: number; rate: number }> => {
  // await sleep(2);
  //? CALLING THE API TO UPDATE THE MOVIE STATUS  (RATE)
  // const data = await fakeApi.get("/movies.json");
  // const movies: Movie[] = getDataStore<Movie[]>("movies") || data.data;
  // const movie: Movie = movies.find((movie) => movie.id === id)!;

  return { id, rate };
};
