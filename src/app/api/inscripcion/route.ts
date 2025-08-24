import { NextResponse } from 'next/server';
export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const studentName = String(form.get('studentName') || '');
    const guardian = String(form.get('guardian') || '');
    const phone = String(form.get('phone') || '');
    const email = String(form.get('email') || '');
    const course = String(form.get('course') || '');
    const mode = String(form.get('mode') || '');
    const schedule = String(form.get('schedule') || '');
    const notes = String(form.get('notes') || '');

    if (!studentName || !guardian || !phone || !email || !course) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    // Webhook a Google Sheets (Apps Script)
    const webhookUrl = process.env.GSHEETS_WEBHOOK_URL;
    const webhookSecret = process.env.GSHEETS_WEBHOOK_SECRET || '';
    if (webhookUrl) {
      const payload = {
        timestamp: new Date().toISOString(),
        studentName,
        guardian,
        phone,
        email,
        course,
        mode,
        schedule,
        notes,
        'x-secret': webhookSecret,
      };
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-secret': webhookSecret,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return NextResponse.json({ error: 'No se pudo registrar en Google Sheets' }, { status: 502 });
      }
    }

    // Notificación por WhatsApp Cloud API (opcional)
    const waToken = process.env.WHATSAPP_TOKEN;
    const waPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const waTo = process.env.WHATSAPP_TO;

    if (waToken && waPhoneId && waTo) {
      const body = `Nueva inscripción\nCurso: ${course}\nEstudiante: ${studentName} (${email})\nResponsable: ${guardian} (${phone})\nModalidad: ${mode}\nHorario: ${schedule}\nNotas: ${notes || '-'}\nFecha: ${new Date().toLocaleString()}`;
      try {
        await fetch(`https://graph.facebook.com/v20.0/${waPhoneId}/messages`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${waToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: waTo,
            type: 'text',
            text: { body },
          }),
        });
      } catch {
        // Silencio si falla WA, no bloquea la inscripción
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Error procesando la solicitud' }, { status: 500 });
  }
}

