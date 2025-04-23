import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useStoreMovies } from "../../../store";
import { PostMovie, PutMovie } from "../services/interfaces";
import { deleteMovie as deleteMovieRequest, patchRate as patchRateRequest, postMovie, putMovie } from "../services/requests";

export const useMutationMovies = () => {
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
