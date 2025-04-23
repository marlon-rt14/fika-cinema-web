import { memo, useMemo } from "react";
import { useStoreQuery } from "../../../store";
import { useQueryMovies } from "../hooks";
import { getFilteredMovies } from "../utils";
import { MovieItem } from "./MovieItem/MovieItem";
import "./styles.css";

interface IProps {
  selectedGenre?: { id: number; name: string };
}

const ListMovies = memo(({ selectedGenre }: IProps) => {
  const { movies } = useQueryMovies();
  const { queryDebounce } = useStoreQuery();

  const filteredMovies = useMemo(() => getFilteredMovies({ movies, selectedGenre: selectedGenre, query: queryDebounce }), [movies, selectedGenre, queryDebounce]);

  return (
    <div className="movie-grid">
      {filteredMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
});

export default ListMovies;
