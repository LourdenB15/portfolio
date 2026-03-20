"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Data = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail(data: Data) {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "lourdenbaydal15@gmail.com",
    subject: `Portfolio Contact from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  });
}
