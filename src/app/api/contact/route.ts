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
      let errorMessage = 'Failed to send email notification';
      
      // Type guard to check if emailError is an Error object
      if (emailError instanceof Error) {
        errorMessage = emailError.message;
      } else if (typeof emailError === 'string') {
        errorMessage = emailError;
      } else if (emailError && typeof emailError === 'object' && 'message' in emailError) {
        errorMessage = String(emailError.message);
      }
      
      return NextResponse.json(
        { error: `Failed to send email: ${errorMessage}` },
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
