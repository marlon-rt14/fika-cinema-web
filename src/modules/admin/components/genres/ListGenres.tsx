import { GenreItem } from ".";
import { useStoreQuery } from "../../../../store/useStoreQuery";
import { filterByQuery } from "../../../../utils";
import { useQueryGenres } from "../../../genres/hooks";

export const ListGenres = () => {
  const { genres } = useQueryGenres();
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
