import { Car, CrupdateCar } from "@/gen/client";
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
  getOne: async (id) => {
    return carsApi()
      .getCarById(id)
      .then((response) => response.data);
  },
  saveOrUpdate: async (car) => {
    return carsApi()
      .crupdateCar(car as any)
      .then((response) => response.data);
  },
  delete: async (id) => {
    return carsApi()
      .deleteCarById(id)
      .then((response) => response.data);
  },
};
