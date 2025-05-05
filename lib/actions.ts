"use server";

import { z } from "zod";
import { formSchema } from "@/lib/schemas";

export async function sendEmail(emailFormData: z.infer<typeof formSchema>) {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailFormData),
    });

    if (!response.ok) {
      const error = await response.json();
      return Response.json({ error }, { status: response.status });
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}