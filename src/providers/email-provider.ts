import { emailjsInstance } from "@/config/emailjs";

export enum EmailType {
  AUTHENTICATION,
  //Another type
}

export const getEmailTemplateId = (type: EmailType) => {
  switch (type) {
    case EmailType.AUTHENTICATION:
      return process.env.EMAILJS_AUTHENTICATION_ID!;
    default:
      throw new Error("Unknown email service");
  }
};

//TODO: Add more data type of EmailType
type EmailProviderArgsType = {
  type: EmailType.AUTHENTICATION;
  data: {
    destination_email: string;
    temporary_password: string;
  };
};

export const emailProvider = {
  send: async ({ data, type }: EmailProviderArgsType) => {
    return emailjsInstance.send(
      process.env.EMAILJS_SERVICE_ID!,
      getEmailTemplateId(type),
      data
    );
  },
};
