import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { z } from 'zod';
import { formSchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  const payload = await getPayload({ config: configPromise });

  try {
    // Parse and validate the request body using the form schema
    const body = await req.json();
    const emailFormData = formSchema.parse(body);

    // Send the email using Payload's built-in Resend adapter
    await payload.sendEmail({
      to: 'szaranpiotr@gmail.com',
      from: `DJ Contact Form <${emailFormData.email}>`,
      subject: emailFormData.subject,
      html: `<p>${emailFormData.message}</p>`, // You can customize this or use a template
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}