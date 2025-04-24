import { filterByQuery } from "@/modules/shared/utils";
import { useStoreQuery } from "@/store";
import { GenreItem } from "@admin/components/genres";
import { useGenres } from "@genres/hooks";

export const ListGenres = () => {
  const { genres } = useGenres();
  const { query } = useStoreQuery();

  const filteredGenres = filterByQuery({ array: genres, predicate: "name", query });

  return (
    <div className="flex flex-wrap gap-5">
      {filteredGenres.map((genre) => {
        return <GenreItem key={genre.id} genre={genre} />;
      })}
    </div>
  );
};
