import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useStoreGenres } from "@/store";
import { getGenres } from "@genres/services/api";

export const useGenresQuery = () => {
  const { genres, setGenres } = useStoreGenres();
  const { setSelectedGenre } = useStoreGenres();

  const genreQuery = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  useEffect(() => {
    if (genreQuery.data) {
      setGenres(genreQuery.data);
      if (genreQuery.data.length > 0) setSelectedGenre(genreQuery.data[0]);
    }
  }, [genreQuery.data, setGenres, setSelectedGenre]);

  return { genreQuery, genres };
};
