import { Movie } from "@/modules/shared/interfaces";

interface IFilterProps {
  selectedGenre?: { id: number; name: string };
  movies: Movie[];
  query: string;
}

export const getFilteredMovies = ({ movies, query, selectedGenre }: IFilterProps) => {
  // Filtrado por género
  const filteredByGenre = selectedGenre?.id !== 1 ? movies.filter((movie) => movie.genres.some((genre) => genre.id === selectedGenre?.id)) : movies;

  // Filtrado por query (búsqueda de texto, case-insensitive)
  const filteredByQuery = query ? filteredByGenre.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase())) : filteredByGenre;

  return filteredByQuery;
};
