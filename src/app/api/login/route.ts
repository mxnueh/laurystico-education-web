import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get('email') || '').trim();
  const password = String(form.get('password') || '');

  // Demo auth: replace with real provider later
  if (email === 'admin@laurystico.com' && password === '123456') {
    const res = NextResponse.json({ ok: true });
    const remember = String(form.get('remember') || '') === 'on';
    res.cookies.set('le_session', 'demo-session', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: remember ? 60 * 60 * 24 * 14 : 60 * 60 * 8, // 14d o 8h
    });
    return res;
  }

  return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
}

