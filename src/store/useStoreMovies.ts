import { create, persist, StateStorage, createJSONStorage, secureLocalStorage } from "@/core/state-management";
import { Movie } from "@/modules/shared/interfaces";

interface IStoreMovies {
  movies: Movie[];
  createMovie: (movie: Movie) => void;
  updateMovie: (payload: Movie, id: number) => void;
  deleteMovie: (id: number) => void;
  patchRate: (rate: number, id: number) => void;
  getMovie: (id: number) => Movie | undefined;
  setMovies: (movies: Movie[]) => void;
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
