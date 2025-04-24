import { memo, useMemo } from "@/core/base";
import { useMovies } from "@movies/hooks";
import { getFilteredMovies } from "@movies/services/utils";
import { useStoreQuery } from "@/store";
import { MovieItem } from "@movies/components";
import "./styles.css";

interface Props {
  selectedGenre?: { id: number; name: string };
}

const ListMovies = memo(({ selectedGenre }: Props) => {
  const {
    movieQueries: { movies },
  } = useMovies();

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
