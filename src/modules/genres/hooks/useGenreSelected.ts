import { Genre } from "@/modules/shared/interfaces";
import { useCallback, useState } from "react";

export const useGenreSelected = (genres?: Genre[]) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>(genres?.[0]);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

  const handleChange = useCallback((item: { id: number; name: string }) => {
    setSelectedGenre(item);
  }, []);

  // const handleChangeMultiple = useCallback((item: { id: number; name: string }) => {
  //   setSelectedGenres((prev) => {
  //     if (prev.some((genre) => genre.id === item.id)) {
  //       return prev.filter((genre) => genre.id !== item.id);
  //     } else {
  //       return [...prev, item];
  //     }
  //   });
  // }, []);

  const handleChangeMultiple = useCallback((items: { id: number; name: string }[]) => {
    setSelectedGenres(items);
  }, []);

  return {
    selectedGenre,
    selectedGenres,
    setSelectedGenre,
    setSelectedGenres,
    handleChange,
    handleChangeMultiple,
  };
};
