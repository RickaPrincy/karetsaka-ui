import { User } from "@/gen/client";
import { usersApi } from "./api";
import { KaretsakaDataProvider } from "./type";

export const usersProvider: KaretsakaDataProvider<User> = {
  getList: async (page, pageSize) => {
    return usersApi()
      .getUsers(undefined, page, pageSize)
      .then((response) => response.data);
  },
  getOne: async (id) => {
    return usersApi()
      .getUserById(id)
      .then((response) => response.data);
  },
  delete: async (id) => {
    throw new Error("Not Implemented");
  },
  saveOrUpdate: async (payload, meta) => {
    throw new Error("Not Implemented");
  },
};
