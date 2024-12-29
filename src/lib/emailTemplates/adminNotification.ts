import { ConsultationBooking } from '../types/consultation';

export function getAdminEmailTemplate(booking: ConsultationBooking): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Consultation Booking</title>
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
          .message-box {
            background-color: #f3f4f6;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #718096;
            font-size: 0.875rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Consultation Booking</h1>
          </div>
          <div class="content">
            <div class="booking-details">
              <div class="detail-row">
                <span class="label">Client Name:</span>
                <span class="value">${booking.name}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value">${booking.email}</span>
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span class="value">${booking.phone}</span>
              </div>
              <div class="detail-row">
                <span class="label">Consultation Type:</span>
                <span class="value">${booking.consultationType}</span>
              </div>
              <div class="detail-row">
                <span class="label">Case Type:</span>
                <span class="value">${booking.caseType}</span>
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
            </div>
            
            <div class="message-box">
              <h3 style="margin-top: 0;">Client's Message:</h3>
              <p style="margin-bottom: 0;">${booking.message}</p>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated notification from your website's booking system.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
