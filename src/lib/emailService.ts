import { Resend } from 'resend';
import { ConsultationBooking } from './types/consultation';
import { getAdminEmailTemplate } from './emailTemplates/adminNotification';
import { getClientEmailTemplate } from './emailTemplates/clientConfirmation';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'gauravsinghitis@gmail.com';

export async function sendContactFormEmail(formData: ContactFormData) {
  console.log('Sending contact form email with data:', { ...formData, message: '[truncated]' });
  
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  try {
    // Email to admin
    const result = await resend.emails.send({
      from: 'Adv. Ajay Kumar Singh <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      replyTo: formData.email,
      subject: `New Contact Form Message: ${formData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Contact Form Message</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #4B6BFB; margin-bottom: 20px;">New Contact Form Message</h2>
              <p><strong>From:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Subject:</strong> ${formData.subject}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
                <h3 style="margin-top: 0;">Message:</h3>
                <p style="white-space: pre-wrap;">${formData.message}</p>
              </div>
            </div>
          </body>
        </html>
      `
    });

    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

export async function sendConsultationEmail(booking: ConsultationBooking) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  // Email to admin
  await resend.emails.send({
    from: 'Adv. Ajay Kumar Singh <onboarding@resend.dev>',
    to: ADMIN_EMAIL,
    subject: 'New Consultation Booking',
    html: getAdminEmailTemplate(booking)
  });

  // Confirmation email to client
  await resend.emails.send({
    from: 'Adv. Ajay Kumar Singh <onboarding@resend.dev>',
    to: booking.email,
    subject: 'Your Consultation is Confirmed!',
    html: getClientEmailTemplate(booking)
  });
}
