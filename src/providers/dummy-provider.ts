import { Dummy } from "@/gen/client";
import { KaretsakaDataProvider } from "./type";
import { healthApi } from "./api";

export const dummyProvider: KaretsakaDataProvider<Dummy> = {
  getList: async (page, pageSize) => {
    return healthApi()
      .getPrivateDummies(page, pageSize)
      .then((response) => response.data);
  },
  getOne: () => {
    throw new Error("Not Implemented");
  },
  saveOrUpdate: () => {
    throw new Error("Not Implemented");
  },
  delete: () => {
    throw new Error("Not Implemented");
  },
};
