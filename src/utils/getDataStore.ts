import secureLocalStorage from "react-secure-storage";

export const getDataStore = <T>(key: string): T => {
  const data = secureLocalStorage.getItem(key) as string;
  const parsedData = JSON.parse(data);
  return parsedData.state[key];
};
