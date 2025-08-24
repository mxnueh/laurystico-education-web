import { NextRequest, NextResponse } from 'next/server';
import { sendNewsletterWelcome, sendNewsletterNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }



    // Enviar emails
    try {
      // Email de bienvenida al suscriptor
      await sendNewsletterWelcome(email);
      
      // Notificación a tu email
      await sendNewsletterNotification(email);
      
      console.log('✅ Emails enviados exitosamente');
    } catch (emailError) {
      console.error('⚠️ Error enviando emails:', emailError);
      // Continuamos aunque falle el email - la suscripción es válida
    }

    return NextResponse.json(
      { 
        success: true, 
        message: '¡Suscripción exitosa! Revisa tu email para confirmar.',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en newsletter:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
