import { useStoreQuery } from "@/store";
import { useEffect, useRef, useTransition } from "@/core/base";

export const useQuery = (query: string) => {
  const { query: queryStore, setQuery, setQueryDebounce, setIsPending } = useStoreQuery();
  const [isPending, startTransition] = useTransition();

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

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
