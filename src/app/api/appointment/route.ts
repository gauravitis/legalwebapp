import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'gauravsinghitis@gmail.com';

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  type: 'online' | 'in-person';
  date: string;
  time: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const data: AppointmentData = await request.json();

    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set');
    }

    const result = await resend.emails.send({
      from: 'Adv. Ajay Kumar Singh <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New Appointment Request: ${data.type} consultation`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>New Appointment Request</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2563eb;">New Appointment Request</h2>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Type:</strong> ${data.type}</p>
                <p><strong>Date:</strong> ${data.date}</p>
                <p><strong>Time:</strong> ${data.time}</p>
                <div style="margin-top: 20px;">
                  <h3 style="color: #4b5563;">Description:</h3>
                  <p style="white-space: pre-wrap;">${data.description}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Appointment notification sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send appointment notification:', error);
    return NextResponse.json(
      { error: 'Failed to send appointment notification' },
      { status: 500 }
    );
  }
}
