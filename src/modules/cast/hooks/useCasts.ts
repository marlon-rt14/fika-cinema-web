import { useCastQueries } from "@cast/services/query";
import { useCastSelected } from "@cast/hooks";

export const useCasts = () => {
  const castsQuery = useCastQueries();
  const castSelected = useCastSelected(castsQuery.casts);

  return { castsQuery, castSelected };
};
