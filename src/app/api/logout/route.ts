import { NextResponse } from 'next/server';

export function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set('le_session', '', { path: '/', maxAge: 0 });
  return res;
}





