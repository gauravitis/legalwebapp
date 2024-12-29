import { NextResponse } from 'next/server';
import { sendConsultationEmail } from '@/lib/emailService';

export async function POST(request: Request) {
  try {
    const booking = await request.json();
    
    // Send email notifications
    await sendConsultationEmail(booking);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Consultation booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
