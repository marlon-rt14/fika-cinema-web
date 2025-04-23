import { TableRow } from ".";
import { EmptyList } from "../../../../components/Partials";
import { LoaderTailChase } from "../../../../components/loaders/LoaderTailChase";
import { useStoreQuery } from "../../../../store/useStoreQuery";
import { filterByQuery } from "../../../../utils";
import { useQueryMovies } from "../../../movies/hooks";

export const TableRowBody = () => {
  const { queryMovies, movies, handleUpdate, handleDelete } = useQueryMovies();
  const { query } = useStoreQuery();

  const filteredMovies = filterByQuery({ array: movies, predicate: "title", query });

  if (!movies || movies.length === 0) {
    return <EmptyList message="No movies available" />;
  }

  if (queryMovies.isLoading) {
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
