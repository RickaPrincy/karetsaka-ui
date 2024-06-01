import { Car } from "@/gen/client";
import { KaretsakaDataProvider } from "./type";
import { carsApi } from "./api";

export const carProvider: KaretsakaDataProvider<Car> = {
  getList: async (page, pageSize, filter) => {
    return carsApi()
      .getCars(
        filter.brandName,
        filter.motorType,
        filter.type,
        filter.model,
        filter.priceFrom,
        filter.priceTo,
        page,
        pageSize
      )
      .then((response) => response.data);
  },
  getOne: async () => {
    throw new Error("Not implemented");
  },
  saveOrUpdate: async () => {
    throw new Error("Not implemented");
  },
  delete: async () => {
    throw new Error("Not implemented");
  },
};
