import { createContext, useContext } from "@/core/base";
import { ValueType } from "@contexts/modals/CreateMovie/";
import { Movie } from "@/modules/shared/interfaces";

export interface IGC_CreateMovie {
  value: ValueType | undefined;
  setValue: React.Dispatch<React.SetStateAction<ValueType | undefined>>;
  onOpen: (movie?: Movie) => void;
  onClose: () => void;
}

const INIT_VALUE: ValueType = {
  title: "",
  overview: "",
  poster_path: "",
  rate: 0,
  release_date: "2023-01-01",
  genres: [],
  cast: [],
};

const INIT_STATE = { value: INIT_VALUE, setValue: () => {}, onOpen: () => {}, onClose: () => {} };

export const GlobalContext = createContext<IGC_CreateMovie>(INIT_STATE);

export const useGlobalCreateMovie = () => {
  const context = useContext(GlobalContext);

  if (!context.value) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
