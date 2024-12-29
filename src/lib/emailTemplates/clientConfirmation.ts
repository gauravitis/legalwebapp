import { ConsultationBooking } from '../types/consultation';

export function getClientEmailTemplate(booking: ConsultationBooking): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Consultation Booking Confirmation</title>
        <style>
          body { 
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9fafb;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
          }
          .header {
            background-color: #4B6BFB;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 0 0 5px 5px;
          }
          .booking-details {
            background-color: #f8fafc;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
          }
          .detail-row {
            margin: 10px 0;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 10px;
          }
          .label {
            font-weight: bold;
            color: #4a5568;
          }
          .value {
            color: #1a202c;
          }
          .preparation {
            background-color: #f3f4f6;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
          }
          .preparation ul {
            margin: 10px 0;
            padding-left: 20px;
          }
          .preparation li {
            margin: 5px 0;
            color: #4a5568;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #718096;
            font-size: 0.875rem;
          }
          .contact {
            margin-top: 20px;
            padding: 15px;
            background-color: #f8fafc;
            border-radius: 5px;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #4B6BFB;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 15px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">Consultation Confirmed!</h1>
          </div>
          <div class="content">
            <p>Dear ${booking.name},</p>
            
            <p>Thank you for booking a consultation with Adv. Ajay Kumar Singh. Your appointment has been confirmed.</p>
            
            <div class="booking-details">
              <h2 style="margin-top: 0;">Booking Details</h2>
              <div class="detail-row">
                <span class="label">Consultation Type:</span>
                <span class="value">${booking.consultationType}</span>
              </div>
              <div class="detail-row">
                <span class="label">Date:</span>
                <span class="value">${new Date(booking.date).toLocaleDateString('en-IN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div class="detail-row">
                <span class="label">Time:</span>
                <span class="value">${booking.time}</span>
              </div>
              <div class="detail-row">
                <span class="label">Case Type:</span>
                <span class="value">${booking.caseType}</span>
              </div>
            </div>
            
            <div class="preparation">
              <h3 style="margin-top: 0;">How to Prepare</h3>
              <p>To make the most of your consultation, please:</p>
              <ul>
                <li>Gather all relevant documents related to your case</li>
                <li>Prepare a brief timeline of events</li>
                <li>Write down your key questions and concerns</li>
                <li>Be ready 5 minutes before the scheduled time</li>
              </ul>
            </div>

            <div class="contact">
              <h3 style="margin-top: 0;">Need to Reschedule?</h3>
              <p>If you need to reschedule or have any questions, please contact us:</p>
              <p>📞 Phone: +91 XXXXXXXXXX</p>
              <p>📧 Email: contact@example.com</p>
            </div>
          </div>
          
          <div class="footer">
            <p>We look forward to assisting you with your legal matters.</p>
            <p>Best regards,<br>Adv. Ajay Kumar Singh</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
