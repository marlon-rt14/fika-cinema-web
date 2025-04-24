import { Movie } from "@/modules/shared/interfaces";
import { createContext, useContext } from "@core/imports";

export interface IGC_MovieDetails {
  movie: Movie | null;
  setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
  onOpen: (movie: Movie) => void;
}

const INIT_STATE = { onOpen: () => {}, movie: null, setMovie: () => {} };

export const GC_MovieDetails = createContext<IGC_MovieDetails>(INIT_STATE);

export const useGlobalMovieDetails = () => {
  const context = useContext(GC_MovieDetails);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
