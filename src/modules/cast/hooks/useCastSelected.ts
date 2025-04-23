import { useCallback, useState } from "react";
import { ICast } from "../entities";

export const useCastSelected = (casts: ICast[]) => {
  const [selectedCast, setSelectedCast] = useState(casts[0]);
  const [selectedCasts, setSelectedCasts] = useState<ICast[]>([]);

  const handleChange = useCallback((item: { id: number; name: string }) => {
    setSelectedCast(item);
  }, []);

  const handleChangeMultiple = useCallback((items: { id: number; name: string }[]) => {
    setSelectedCasts(items);
  }, []);

  return {
    selectedCast,
    selectedCasts,
    setSelectedCast,
    setSelectedCasts,
    handleChange,
    handleChangeMultiple,
  };
};
