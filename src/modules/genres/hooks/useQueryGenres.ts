import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useStoreGenres } from "../../../store";
import { getGenres } from "../services/requests";

export const useQueryGenres = () => {
  const { genres, setGenres } = useStoreGenres();
  const { setSelectedGenre } = useStoreGenres();

  const queryGenres = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  useEffect(() => {
    if (queryGenres.data) {
      setGenres(queryGenres.data);
      if (queryGenres.data.length > 0) setSelectedGenre(queryGenres.data[0]);
    }
  }, [queryGenres.data, setGenres, setSelectedGenre]);

  return { queryGenres, genres };
};
