import { NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/emailService';

export async function POST(request: Request) {
  console.log('Contact API route hit');
  
  try {
    const formData = await request.json();
    console.log('Received contact form data:', formData);

    if (!formData.email || !formData.name || !formData.message) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    try {
      await sendContactFormEmail(formData);
      console.log('Email sent successfully');
      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      return NextResponse.json(
        { error: `Failed to send email: ${emailError.message}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in contact form API:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
