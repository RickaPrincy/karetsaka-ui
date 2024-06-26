import { CarBrand } from "@/gen/client";
import { KaretsakaDataProvider } from "./type";
import { carsApi } from "./api";
import axios from "axios";
import authFirebase from "@/security/auth-firebase";
import { storageProvider } from "./storage-provider";

export const BRAND_KEY = "brands";

export const createBrandPath = (name: string) => {
  return `${BRAND_KEY}/${name}`;
};

export const carBrandProvider: KaretsakaDataProvider<CarBrand> = {
  getList: async (page, pageSize, filter) => {
    return carsApi()
      .getCarBrands(filter.name, page, pageSize)
      .then((response) => response.data);
  },
  getOne: async (id) => {
    return carsApi()
      .getCarBrandsById(id)
      .then((response) => response.data);
  },
  saveOrUpdate: async (carBrand) => {
    return carsApi()
      .crupdateCarBrands(carBrand)
      .then((response) => response.data);
  },
  delete: async (id) => {
    try {
      await storageProvider.deleteFile(createBrandPath(id));
    } catch {
      console.error("File cannot be deleted");
    }

    return axios
      .delete(`${process.env.API_URL!}/cars/brands/${id}`, {
        headers: {
          Authorization: `Bearer ${authFirebase.getCachedCredential().token}`,
        },
      })
      .then((response) => response.data);
  },
};
