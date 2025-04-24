import { fakeApi } from "@/api/fakeApi";
import { Cast } from "@/modules/shared/interfaces";
import { sleep } from "@/modules/shared/utils";
import { toCastsModel } from "@cast/services/api/adapters";

export const getCasts = async (): Promise<Cast[]> => {
  await sleep();
  const data = await fakeApi.get("/cast.json");
  return toCastsModel(data.data);
};
