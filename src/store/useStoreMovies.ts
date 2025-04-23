import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import secureLocalStorage from "react-secure-storage";
import { IMovie } from "../modules/movies/entities";

interface IStoreMovies {
  movies: IMovie[];
  createMovie: (movie: IMovie) => void;
  updateMovie: (payload: IMovie, id: number) => void;
  deleteMovie: (id: number) => void;
  patchRate: (rate: number, id: number) => void;
  getMovie: (id: number) => IMovie | undefined;
  setMovies: (movies: IMovie[]) => void;
}

export const useStoreMovies = create(
  persist<IStoreMovies>(
    (set, get) => ({
      createMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
      updateMovie: (payload, id) => set((state) => ({ movies: state.movies.map((movie) => (movie.id === id ? payload : movie)) })),
      deleteMovie: (id) => set((state) => ({ movies: state.movies.filter((movie) => movie.id !== id) })),
      patchRate: (rate, id) => set((state) => ({ movies: state.movies.map((movie) => (movie.id === id ? { ...movie, rate } : movie)) })),
      setMovies: (movies) => set(() => ({ movies })),
      getMovie: (id) => get().movies.find((movie) => movie.id === id),
      movies: [],
    }),
    {
      name: "movies",
      storage: createJSONStorage(() => secureLocalStorage as StateStorage),
    }
  )
);
