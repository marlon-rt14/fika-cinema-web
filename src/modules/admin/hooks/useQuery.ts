import { useEffect, useRef, useTransition } from "react";
import { useStoreQuery } from "../../../store/useStoreQuery";

export const useQuery = (query: string) => {
  const { query: queryStore, setQuery, setQueryDebounce, setIsPending } = useStoreQuery();
  const [isPending, startTransition] = useTransition();

  const debounceTimeout = useRef<number | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      const newQuery = e.target.value;
      setQuery(newQuery);

      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        setQueryDebounce(newQuery);
      }, 400);
    });
  };

  useEffect(() => {
    setIsPending(isPending);
  }, [isPending, setIsPending]);

  useEffect(() => {
    setQuery(query);
    setQueryDebounce(query);
  }, [query, setQuery, setQueryDebounce]);

  return {
    query: queryStore,
    handleSearch,
  };
};
