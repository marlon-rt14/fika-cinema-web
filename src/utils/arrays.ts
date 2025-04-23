interface Props<T> {
  array: T[];
  predicate: keyof T;
  query: string;
}

export const filterByQuery = <T extends Record<keyof T, unknown>>({ array, predicate, query }: Props<T>): T[] => {
  if (!array || array.length === 0) return [];

  const normalizedQuery = query.toLowerCase().trim();

  return array.filter((item) => {
    const value = item[predicate];

    // Verificar que el valor es string y no null/undefined
    if (typeof value !== "string" || value == null) {
      return false;
    }

    return value.toLowerCase().includes(normalizedQuery);
  });
};
