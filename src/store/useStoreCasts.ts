import { create, persist, StateStorage, createJSONStorage, secureLocalStorage } from "@/core/state-management";
import { Cast } from "@/modules/shared/interfaces";

interface IStoreCasts {
  casts: Cast[];
  createCast: (cast: Cast) => void;
  updateCast: (payload: Cast, id: number) => void;
  deleteCast: (id: number) => void;
  setCasts: (casts: Cast[]) => void;
}

export const useStoreCasts = create(
  persist<IStoreCasts>(
    (set) => ({
      createCast: (cast) => set((state) => ({ casts: [...state.casts, cast] })),
      updateCast: (payload, id) => set((state) => ({ casts: state.casts.map((cast) => (cast.id === id ? payload : cast)) })),
      deleteCast: (id) => set((state) => ({ casts: state.casts.filter((cast) => cast.id !== id) })),
      setCasts: (casts) => set(() => ({ casts })),
      casts: [],
    }),
    {
      name: "casts",
      storage: createJSONStorage(() => secureLocalStorage as StateStorage),
    }
  )
);
