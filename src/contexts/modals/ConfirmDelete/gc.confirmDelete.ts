import { createContext, useContext } from "react";

export interface IGC_ConfirmDelete {
  message: string | undefined;
  onOpen: (message?: string, onConfirm?: () => void) => void;
}

const INIT_STATE = { message: "", onOpen: () => {} };

export const GC_ConfirmDelete = createContext<IGC_ConfirmDelete>(INIT_STATE);

export const useGlobalConfirmDelete = () => {
  const context = useContext(GC_ConfirmDelete);

  if (typeof context === "undefined") {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
