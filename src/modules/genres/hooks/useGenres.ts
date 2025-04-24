import { useGenresQuery } from "@genres/services/query";
import { useGenreSelected } from "./useGenreSelected";

export const useGenres = () => {
  const genreQueries = useGenresQuery();
  const genreSelected = useGenreSelected(genreQueries.genres);

  return { ...genreQueries, genreSelected };
};
