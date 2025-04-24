import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import secureLocalStorage from "react-secure-storage";
import { Genre } from "../modules/genres/entities";

interface IStoreGenres {
  genres: Genre[];
  selectedGenre?: Genre;
  setSelectedGenre: (genre?: Genre) => void;
  createGenre: (genre: Genre) => void;
  updateGenre: (payload: Genre, id: number) => void;
  deleteGenre: (id: number) => void;
  setGenres: (genres: Genre[]) => void;
}

export const useStoreGenres = create(
  persist<IStoreGenres>(
    (set) => ({
      createGenre: (genre) => set((state) => ({ genres: [...state.genres, genre] })),
      updateGenre: (payload, id) => set((state) => ({ genres: state.genres.map((genre) => (genre.id === id ? payload : genre)) })),
      deleteGenre: (id) => set((state) => ({ genres: state.genres.filter((genre) => genre.id !== id) })),
      setGenres: (genres) => set(() => ({ genres: genres })),
      setSelectedGenre: (genre) => set(() => ({ selectedGenre: genre })),
      genres: [],
    }),
    {
      name: "genres",
      storage: createJSONStorage(() => secureLocalStorage as StateStorage),
    }
  )
);
