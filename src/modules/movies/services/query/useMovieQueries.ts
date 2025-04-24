import { useStoreMovies } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { Movie } from "@/modules/shared/interfaces";
import { useGlobalConfirmDelete, useGlobalCreateMovie } from "@/contexts";
import { useMovieMutations } from "@movies/services/query";
import { getMovies } from "@movies/services/api";

export const useMoviesQuery = () => {
  const { setMovies, movies } = useStoreMovies();
  const { onOpen } = useGlobalCreateMovie();
  const { onOpen: onOpenDelete } = useGlobalConfirmDelete();
  const { deleteMovie } = useMovieMutations();

  const moviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  useEffect(() => {
    if (moviesQuery.data && moviesQuery.data.length > 0) {
      setMovies(moviesQuery.data);
    }
  }, [moviesQuery.data, setMovies]);

  const handleUpdate = useCallback(
    (movie: Movie) => {
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

  return { movies, moviesQuery, handleUpdate, handleDelete };
};
