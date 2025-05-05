"use server";

import { DjEmailTemplate } from "@/components/email-template";
import { z } from "zod";
import { formSchema } from "./schemas";

import { getPayload } from 'payload';
import configPromise from '@payload-config';

export async function sendEmailPayload(emailFormData: z.infer<typeof formSchema>) {
  const payload = await getPayload({ config: configPromise });

  try {
    await payload.sendEmail({
      to: 'szaranpiotr@gmail.com',
      subject: emailFormData.subject,
      html: `<h1>DJ Contact Form <${emailFormData.email}></h1><p>${emailFormData.message}</p>`, // You can customize this or use a template
    });

  } catch (error) {
    throw error;
  }
}
