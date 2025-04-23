import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useStoreMovies } from "../../../store";
import { IMovie } from "../entities";
import { getMovies } from "../services/requests";
import { useGlobalCreateMovie } from "../../../contexts/modals";
import { useGlobalConfirmDelete } from "../../../contexts/modals/ConfirmDelete/gc.confirmDelete";
import { useMutationMovies } from "./useMutationMovies";

export const useQueryMovies = () => {
  const { setMovies, movies } = useStoreMovies();
  const { onOpen } = useGlobalCreateMovie();
  const { onOpen: onOpenDelete } = useGlobalConfirmDelete();
  const { deleteMovie } = useMutationMovies();

  const queryMovies = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  // const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (queryMovies.data && queryMovies.data.length > 0) {
      // setMovies(queryMovies.data);
      setMovies(queryMovies.data);
    }
  }, [queryMovies.data, setMovies]);

  const handleUpdate = useCallback(
    (movie: IMovie) => {
      onOpen(movie);
    },
    [onOpen]
  );

  const handleDelete = useCallback(
    (movieId: number) => {
      onOpenDelete("Are you sure you want to delete this movie?", () => deleteMovie.mutate(movieId));
    },
    [onOpenDelete, deleteMovie]
  );

  return { movies, queryMovies, handleUpdate, handleDelete };
};
