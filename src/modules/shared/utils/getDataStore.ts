import secureLocalStorage from "react-secure-storage";

export const getDataStore = <T>(key: string): T | null => {
  const data = secureLocalStorage.getItem(key) as string;
  if (!data) return null;
  const parsedData = JSON.parse(data);
  return parsedData.state[key];
};
