import { Resend } from 'resend';
import { ConsultationBooking } from './types/consultation';
import { getAdminEmailTemplate } from './emailTemplates/adminNotification';
import { getClientEmailTemplate } from './emailTemplates/clientConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConsultationEmail(booking: ConsultationBooking) {
  const adminEmail = 'gauravsinghitis@gmail.com'; // Your email for testing
  
  // Email to admin
  await resend.emails.send({
    from: 'Adv. Ajay Kumar Singh <onboarding@resend.dev>',
    to: adminEmail,
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
