import { Image } from "@/gen/client";
import { KaretsakaDataProvider } from "./type";
import { imagesApi } from "./api";
import { storageProvider } from "./storage-provider";

export const IMAGE_KEY = "cars";

export const createImagePath = (name: string) => {
  return `${IMAGE_KEY}/${name}`;
};

export const imageProvider: KaretsakaDataProvider<Image> = {
  getList: async (page, pageSize, filter: { name?: string }) => {
    return imagesApi()
      .getImages(filter.name, page, pageSize)
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
  //TODO: do multiple image creation
  saveOrUpdate: async (image) => {
    return imagesApi()
      .saveOrUpdate([image])
      .then((response) => response.data[0]);
  },
  delete: async (id) => {
    try {
      await storageProvider.deleteFile(createImagePath(id));
    } catch {
      console.error("File cannot be deleted");
    }

    return imagesApi()
      .deleteImageById(id)
      .then((response) => response.data);
  },
};
