import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useStoreCasts } from "../../../store";
import { ICast } from "../entities";
import { getCasts } from "../services/requests";

export const useQueryCasts = () => {
  const { casts, setCasts } = useStoreCasts();

  const queryCasts = useQuery({
    queryKey: ["casts"],
    queryFn: getCasts,
  });

  useEffect(() => {
    if (queryCasts.data && queryCasts.data.length > 0) {
      setCasts(queryCasts.data);
    }
  }, [queryCasts.data, setCasts]);

  const handleUpdate = useCallback((cast: ICast) => {
    console.log("cast", cast);
  }, []);

  const handleDelete = useCallback((castId: number) => {
    console.log("Delete cast", castId);
  }, []);

  return { casts, queryCasts, handleUpdate, handleDelete };
};
