import { useCallback, useState } from "@core/imports";
import { Cast } from "@/modules/shared/interfaces";

export const useCastSelected = (casts?: Cast[]) => {
  const [selectedCast, setSelectedCast] = useState(casts?.[0]);
  const [selectedCasts, setSelectedCasts] = useState<Cast[]>([]);

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
