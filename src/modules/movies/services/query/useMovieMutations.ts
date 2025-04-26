import { useEffect } from "@/core/base";
import { useStoreMovies } from "@/store";
import { PostMovie, PutMovie, deleteMovie as deleteMovieRequest, patchRate as patchRateRequest, postMovie, putMovie } from "@movies/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMovieMutations = () => {
  const { createMovie: createMovieStore, updateMovie: updateMovieStore, deleteMovie: deleteMovieStore, patchRate: patchRateStore } = useStoreMovies();
  const queryClient = useQueryClient();

  const createMovie = useMutation({
    mutationFn: (payload: PostMovie) => postMovie(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] }); // Invalida la caché
    },
  });

  const updateMovie = useMutation({
    mutationFn: ({ payload, id }: { payload: PutMovie; id: number }) => putMovie(payload, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] }); // Invalida la caché
    },
  });

  const deleteMovie = useMutation({
    mutationFn: (id: number) => deleteMovieRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] }); // Invalida la caché
    },
  });

  const patchRate = useMutation({
    mutationFn: ({ rate, id }: { rate: number; id: number }) => patchRateRequest(rate, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] }); // Invalida la caché
    },
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
