import { Image } from "@/gen/client";
import { KaretsakaDataProvider } from "./type";
import { imagesApi } from "./api";

export const imageProvider: KaretsakaDataProvider<Image> = {
  getList: async (page, pageSize) => {
    return imagesApi()
      .getImages(page, pageSize)
      .then((response) => response.data);
  },
  getOne: async (id) => {
    return (
      imagesApi()
        //TODO: change the name of this api
        .get(id)
        .then((response) => response.data)
    );
  },
  saveOrUpdate: async (image) => {
    return imagesApi()
      .saveOrUpdate(image)
      .then((response) => response.data);
  },
  delete: async (id) => {
    return imagesApi()
      .deleteImageById(id)
      .then((response) => response.data);
  },
};
