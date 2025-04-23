import { CastItem } from ".";
import { useStoreQuery } from "../../../../store/useStoreQuery";
import { filterByQuery } from "../../../../utils";
import { useQueryCasts } from "../../../cast/hooks";

export const ListCasts = () => {
  const { casts } = useQueryCasts();

  const { query } = useStoreQuery();

  const filteredCasts = filterByQuery({ array: casts, predicate: "name", query });

  return (
    <div className="flex flex-wrap gap-5">
      {filteredCasts.map((cast) => {
        return <CastItem key={cast.id} cast={cast} />;
      })}
    </div>
  );
};
