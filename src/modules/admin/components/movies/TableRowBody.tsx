import { EmptyList, LoaderTailChase } from "@/components";
import { useMovies } from "@/modules/movies/hooks";
import { filterByQuery } from "@/modules/shared/utils";
import { useStoreQuery } from "@/store";
import { TableRow } from "@admin/components/movies";

export const TableRowBody = () => {
  const { movieQueries } = useMovies();

  const { movies, handleUpdate, handleDelete, moviesQuery } = movieQueries;
  const { query } = useStoreQuery();

  const filteredMovies = filterByQuery({ array: movies, predicate: "title", query });

  if (!movies || movies.length === 0) {
    return <EmptyList message="No movies available" />;
  }

  if (moviesQuery.isLoading) {
    return <LoaderTailChase />;
  }

  return (
    <div className="">
      {filteredMovies.map((movie) => {
        return <TableRow key={movie.id} movie={movie} onUpdate={handleUpdate} onDelete={handleDelete} />;
      })}
    </div>
  );
};
