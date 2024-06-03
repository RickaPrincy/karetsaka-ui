import * as emailjs from "@emailjs/browser";

emailjs.init(process.env.EMAILJS_PUBLIC_KEY_ID!);

export const emailjsInstance = emailjs;
