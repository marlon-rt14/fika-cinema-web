import { useEffect } from "@/core/base";
import { useMutation } from "@tanstack/react-query";
import { PostMovie, PutMovie, deleteMovie as deleteMovieRequest, patchRate as patchRateRequest, postMovie, putMovie } from "@movies/services/api";
import { useStoreMovies } from "@/store";

export const useMovieMutations = () => {
  const { createMovie: createMovieStore, updateMovie: updateMovieStore, deleteMovie: deleteMovieStore, patchRate: patchRateStore } = useStoreMovies();

  const createMovie = useMutation({
    mutationFn: (payload: PostMovie) => postMovie(payload),
  });

  const updateMovie = useMutation({
    mutationFn: ({ payload, id }: { payload: PutMovie; id: number }) => putMovie(payload, id),
  });

  const deleteMovie = useMutation({
    mutationFn: (id: number) => deleteMovieRequest(id),
  });

  const patchRate = useMutation({
    mutationFn: ({ rate, id }: { rate: number; id: number }) => patchRateRequest(rate, id),
  });

  useEffect(() => {
    if (createMovie.data) {
      createMovieStore(createMovie.data);
    }
  }, [createMovieStore, createMovie.data]);

  useEffect(() => {
    if (updateMovie.data) {
      updateMovieStore(updateMovie.data, updateMovie.data.id);
    }
  }, [updateMovieStore, updateMovie.data]);

  useEffect(() => {
    if (deleteMovie.data) {
      deleteMovieStore(deleteMovie.data.id);
    }
  }, [deleteMovieStore, deleteMovie.data]);

  useEffect(() => {
    if (patchRate.data) {
      const { rate, id } = patchRate.data;
      patchRateStore(rate, id);
    }
  }, [patchRateStore, patchRate.data]);

  return { createMovie, updateMovie, deleteMovie, patchRate };
};
