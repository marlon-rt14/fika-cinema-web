import { useCallback, useState } from "react";
import { IGenre } from "../entities";

export const useGenreSelected = (genres: IGenre[]) => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([]);

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
