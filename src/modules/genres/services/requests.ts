import { fakeApi } from "../../../api/fakeApi";
import { sleep } from "../../../utils";
import { IGenre } from "../entities";

export const getGenres = async (): Promise<IGenre[]> => {
  await sleep();
  const data = await fakeApi.get("/genres.json");
  return data.data;
};
