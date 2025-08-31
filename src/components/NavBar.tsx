"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  async function logout() {
    try {
      const response = await fetch('/api/logout', { method: 'POST' });
      if (response.ok) {
        window.location.href = '/login';
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="inline-flex items-center gap-2">
            <Image src="/fotos/Logo.png" alt="Logo Laurystico Education" width={28} height={28} className="rounded-action" />
            <span className="font-semibold text-xl group-hover:text-brand-primary transition-colors">Laurystico Education</span>
          </span>
        </Link>
        <nav className="flex gap-6 text-sm items-center">
          <Link href="/courses" className="hover:text-brand-primary">Catálogo de cursos</Link>
          <Link href="/live" className="hover:text-brand-primary">Clases en vivo</Link>
          <Link href="/dashboard" className="inline-flex items-center gap-1 hover:text-brand-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Dashboard
          </Link>
          <Link href="/create-course" className="inline-flex items-center gap-1 bg-brand-primary text-white px-3 py-1.5 rounded-action font-medium hover:bg-brand-hover transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Aula Virtual
          </Link>
          <button onClick={logout} type="button" className="ml-4 px-3 py-1.5 rounded-md border hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 transition-colors duration-200">Cerrar sesión</button>
        </nav>
      </div>
    </header>
  );
}

