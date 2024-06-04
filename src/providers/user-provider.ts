import * as PASSWORD_GENERATOR from "generate-password-browser";
import { User } from "@/gen/client";
import { KaretsakaDataProvider } from "./type";
import { EmailType, emailProvider } from "./email-provider";
import { usersApi } from "./api";
import authFirebase from "@/security/auth-firebase";

export const createUserAndSendEmail = async ({ email }: { email: string }) => {
  const GENERATED_PASSWORD = PASSWORD_GENERATOR.generate({
    numbers: true,
    lowercase: true,
    uppercase: true,
    length: 25,
  });

  await authFirebase.signup({
    email,
    password: GENERATED_PASSWORD,
  });

  return emailProvider.send({
    type: EmailType.AUTHENTICATION,
    data: {
      destination_email: email,
      temporary_password: GENERATED_PASSWORD,
    },
  });
};

export const usersProvider: KaretsakaDataProvider<User> = {
  getList: async (page, pageSize, filter) => {
    return usersApi()
      .getUsers(filter.name, page, pageSize)
      .then((response) => response.data);
  },
  getOne: async (id) => {
    return usersApi()
      .getUserById(id)
      .then((response) => response.data);
  },
  delete: async () => {
    throw new Error("Not Implemented");
  },
  saveOrUpdate: async (payload, meta) => {
    if (meta.mutationType === "CREATE") {
      throw new Error("Not Implemented");
    }

    return usersApi()
      .updateProfile({
        name: payload.name,
        picture: payload.picture,
      })
      .then((response) => response.data);
  },
};
