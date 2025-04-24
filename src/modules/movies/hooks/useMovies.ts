import { useMovieMutations, useMoviesQuery } from "@movies/services/query";

export const useMovies = () => {
  const movieQueries = useMoviesQuery();
  const movieMutations = useMovieMutations();

  return {
    movieQueries,
    movieMutations,
  };
};
