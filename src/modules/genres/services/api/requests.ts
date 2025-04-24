import { fakeApi } from "@/api/fakeApi";
import { Genre } from "@/modules/shared/interfaces";
import { sleep } from "@/modules/shared/utils";
import { toGenresModel } from "@genres/services/api/adapters";

export const getGenres = async (): Promise<Genre[]> => {
  await sleep();
  const data = await fakeApi.get("/genres.json");
  return toGenresModel(data.data);
};
