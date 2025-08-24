import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: 'Archivo no enviado' }, { status: 400 });
    }
    return NextResponse.json({ ok: true, name: (file as any).name ?? 'archivo' });
  } catch (error) {
    return NextResponse.json({ error: 'Fallo al procesar archivo' }, { status: 500 });
  }
}






