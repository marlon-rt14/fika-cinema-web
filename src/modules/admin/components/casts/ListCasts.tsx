// import { CastItem } from ".";
// import { useStoreQuery } from "../../../../store/useStoreQuery";
// import { filterByQuery } from "../../../shared/utils";
// import { useQueryCasts } from "../../../cast/hooks";

import { useStoreQuery } from "@/store";
import { filterByQuery } from "@/modules/shared/utils";
import { CastItem } from "@admin/components/casts";
import { useCasts } from "@cast/hooks";

export const ListCasts = () => {
  const {
    castsQuery: { casts },
  } = useCasts();

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
