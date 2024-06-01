import { CarBrand } from "@/gen/client";
import { KaretsakaDataProvider } from "./type";
import { carsApi } from "./api";

export const carBrandProvider: KaretsakaDataProvider<CarBrand> = {
  getList: async (page, pageSize, filter) => {
    return (
      carsApi()
        .getCarBrands(filter.name, page, pageSize)
        //FIXME: remove || [] after fix backend
        .then((response) => response.data || [])
    );
  },
  getOne: async () => {
    throw new Error("Not implemented");
  },
  saveOrUpdate: async (carBrand) => {
    return carsApi()
      .crupdateCarBrands(carBrand)
      .then((response) => response.data);
  },
  delete: async () => {
    throw new Error("Not implemented");
  },
};
