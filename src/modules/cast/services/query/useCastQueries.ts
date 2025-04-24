import { useQuery, useCallback, useEffect } from "@/core";
import { Cast } from "@/modules/shared/interfaces";
import { useStoreCasts } from "@/store";
import { getCasts } from "@cast/services/api";

export const useCastQueries = () => {
  const { casts, setCasts } = useStoreCasts();

  const castsQuery = useQuery({
    queryKey: ["casts"],
    queryFn: getCasts,
  });

  useEffect(() => {
    if (castsQuery.data && castsQuery.data.length > 0) {
      setCasts(castsQuery.data);
    }
  }, [castsQuery.data, setCasts]);

  const handleUpdate = useCallback((cast: Cast) => {
    console.log("cast", cast);
  }, []);

  const handleDelete = useCallback((castId: number) => {
    console.log("Delete cast", castId);
  }, []);

  return { casts, castsQuery, handleUpdate, handleDelete };
};
