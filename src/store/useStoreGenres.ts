import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import secureLocalStorage from "react-secure-storage";
import { IGenre } from "../modules/genres/entities";

interface IStoreGenres {
  genres: IGenre[];
  selectedGenre?: IGenre;
  setSelectedGenre: (genre?: IGenre) => void;
  createGenre: (genre: IGenre) => void;
  updateGenre: (payload: IGenre, id: number) => void;
  deleteGenre: (id: number) => void;
  setGenres: (genres: IGenre[]) => void;
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
