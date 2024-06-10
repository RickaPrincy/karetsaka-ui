import { emailjsInstance } from "@/config/emailjs";

export enum EmailType {
  AUTHENTICATION,
  CONTACT_US,
  //Another type
}

export const getEmailTemplateId = (type: EmailType) => {
  switch (type) {
    case EmailType.AUTHENTICATION:
      return process.env.EMAILJS_AUTHENTICATION_ID!;
    case EmailType.CONTACT_US:
      return process.env.EMAILJS_CONTACT_US_ID!;
    default:
      throw new Error("Unknown email service");
  }
};

//TODO: Add more data type of EmailType
type EmailProviderArgsType =
  | {
      type: EmailType.AUTHENTICATION;
      data: {
        destination_email: string;
        temporary_password: string;
      };
    }
  | {
      type: EmailType.CONTACT_US;
      data: {
        email: string;
        message: string;
        name: string;
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
