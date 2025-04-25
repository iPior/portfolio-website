"use server"

import { z } from "zod"
import { formSchema } from "@/lib/schemas"
import { DjEmailTemplate } from "@/components/email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(emailFormData: z.infer<typeof formSchema>) {
  const emailContent = await DjEmailTemplate({ name: emailFormData.name, content: emailFormData.message });

  try {
    const { data, error } = await resend.emails.send({
      from: `DJ Contact Form <${emailFormData.email}>}`,
      to: ['szaranpiotr@gmail.com'],
      subject: emailFormData.subject,
      react: emailContent,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}