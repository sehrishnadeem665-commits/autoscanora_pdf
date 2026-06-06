import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get database connection
    const connection = await getConnection();

    try {
      // Insert into database
      const [result] = await connection.execute(
        'INSERT INTO contacts (firstName, lastName, email, subject, message) VALUES (?, ?, ?, ?, ?)',
        [firstName, lastName, email, subject, message]
      );

      await connection.end();

      return NextResponse.json(
        {
          success: true,
          message: 'Message submitted successfully',
          id: (result as any).insertId,
        },
        { status: 201 }
      );
    } catch (dbError) {
      await connection.end();
      console.error('Database error:', dbError);
      throw dbError;
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit message. Please try again later.' },
      { status: 500 }
    );
  }
}
