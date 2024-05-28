import { usersApi } from "./api";

export const usersProvider = {
  getUserById: async (userId: string) => {
    return usersApi()
      .getUserById(userId)
      .then((response) => response.data);
  },
};
