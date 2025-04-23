import { fakeApi } from "../../../api/fakeApi";
import { sleep } from "../../../utils";
import { ICast } from "../entities";

export const getCasts = async (): Promise<ICast[]> => {
  await sleep();
  const data = await fakeApi.get("/cast.json");
  return data.data;
};
