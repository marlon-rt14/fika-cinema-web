import { fakeApi } from "../../../api/fakeApi";
import { getDataStore, sleep } from "../../../utils";
import { ICast } from "../../cast/entities";
import { IGenre } from "../../genres/entities";
import { IMovie } from "../entities";
import { PostMovie, PutMovie } from "./interfaces";

export const getMovies = async (): Promise<IMovie[]> => {
  await sleep();
  const data = await fakeApi.get("/movies.json");
  return data.data;
};

export const postMovie = async (payload: PostMovie): Promise<IMovie> => {
  // await sleep();
  const data = await fakeApi.get("/movies.json");
  const movies = getDataStore<IMovie[]>("movies") || data.data;
  let lastMovie: IMovie | undefined;
  if (movies.length > 0) {
    lastMovie = movies[movies.length - 1];
  }
  const newId = lastMovie ? lastMovie.id + 1 : 1;

  const genres = await fakeApi.get(`/genres.json`);
  const genresList: IGenre[] = getDataStore<IGenre[]>("genres") || genres.data;
  const genresFiltered = genresList.filter((genre) => payload.genres.includes(genre.id));

  const casts = await fakeApi.get(`/cast.json`);
  const castsList: ICast[] = getDataStore<ICast[]>("casts") || casts.data;
  const castFiltered = castsList.filter((cast) => payload.cast.includes(cast.id));

  const newMovie = { ...payload, id: newId, rate: 0, genres: genresFiltered, cast: castFiltered };
  return newMovie;
};

export const putMovie = async (payload: PutMovie, id: number): Promise<IMovie> => {
  // await sleep();
  const data = await fakeApi.get("/movies.json");
  const movies: IMovie[] = getDataStore<IMovie[]>("movies") || data.data;
  const movie: IMovie = movies.find((movie) => movie.id === id)!;

  const genres = await fakeApi.get(`/genres.json`);
  const genresList: IGenre[] = getDataStore<IGenre[]>("genres") || genres.data;
  const genresFiltered = genresList.filter((genre) => payload.genres.includes(genre.id));

  const casts = await fakeApi.get(`/cast.json`);
  const castsList: ICast[] = getDataStore<ICast[]>("casts") || casts.data;
  const castFiltered = castsList.filter((cast) => payload.cast.includes(cast.id));

  return { ...movie, ...payload, id, genres: genresFiltered, cast: castFiltered };
};

export const deleteMovie = async (id: number): Promise<IMovie> => {
  // await sleep();
  const data = await fakeApi.get("/movies.json");
  const movies: IMovie[] = getDataStore<IMovie[]>("movies") || data.data;
  const movie: IMovie = movies.find((movie) => movie.id === id)!;
  return movie;
};

export const patchRate = async (rate: number, id: number): Promise<{ id: number; rate: number }> => {
  // await sleep(2);
  //? CALLING THE API TO UPDATE THE MOVIE STATUS  (RATE)
  // const data = await fakeApi.get("/movies.json");
  // const movies: IMovie[] = getDataStore<IMovie[]>("movies") || data.data;
  // const movie: IMovie = movies.find((movie) => movie.id === id)!;

  return { id, rate };
};
