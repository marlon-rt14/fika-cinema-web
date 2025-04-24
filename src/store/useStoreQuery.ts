import { create } from "@core/state-management";

interface IStoreQuery {
  query: string;
  queryDebounce: string;
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  setQueryDebounce: (query: string) => void;
  setQuery: (query: string) => void;
}

export const useStoreQuery = create<IStoreQuery>((set) => ({
  query: "",
  queryDebounce: "",
  isPending: false,
  setIsPending: (isPending) => set(() => ({ isPending })),
  setQuery: (query) => set(() => ({ query })),
  setQueryDebounce: (query) => set(() => ({ queryDebounce: query })),
}));
