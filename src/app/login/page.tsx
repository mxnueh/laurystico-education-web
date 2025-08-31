'use client';

import { useMemo, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Componente interno que usa useSearchParams
function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailPattern = useMemo(
    () => /^(?:[a-zA-Z0-9_'^&+/=!?$%#`{|}~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
    []
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get('email') || '').trim();
    const password = String(formData.get('password') || '');

    if (!emailPattern.test(email)) {
      setError('Por favor ingresa un correo válido.');
      return;
    }
    if (!password) {
      setError('Ingresa tu contraseña.');
      return;
    }

    setLoading(true);
    const res = await fetch('/api/login', { method: 'POST', body: formData });
    setLoading(false);
    if (res.ok) {
      const next = searchParams.get('next') || '/';
      router.replace(next);
    } else {
      const { error: err } = await res.json().catch(() => ({ error: 'Error desconocido' }));
      setError(err || 'Correo o contraseña incorrectos');
    }
  }

  return (
    <div className="w-full max-w-md card">
      <div className="mb-6 text-center space-y-1">
        <div className="mx-auto h-12 w-12 overflow-hidden rounded-action">
          <img src="/fotos/Logo.png" alt="Logo Laurystico Education" className="h-12 w-12 object-cover" />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold">Bienvenido a Laurystico Education</h1>
        <p className="text-sm text-muted">Aprende Robótica y Roblox Studio</p>
      </div>
      <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby={error ? 'form-error' : undefined}>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm text-ink">Correo</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!error}
            aria-describedby={error ? 'form-error' : undefined}
            className="w-full border border-border rounded-lg px-3 py-2.5 outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/25 focus-visible:border-brand-primary placeholder:text-muted-2 transition-shadow duration-200"
            placeholder="tu@correo.com"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="password" className="block text-sm text-ink">Contraseña</label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              aria-invalid={!!error}
              aria-describedby={error ? 'form-error' : undefined}
              className="w-full border border-border rounded-lg pr-24 px-3 py-2.5 outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/25 focus-visible:border-brand-primary placeholder:text-muted-2 transition-shadow duration-200"
              placeholder="••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-pressed={showPassword}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              aria-controls="password"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-muted hover:text-ink px-2 py-1 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/25 transition-colors duration-200"
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <label htmlFor="remember" className="inline-flex items-center gap-2 select-none">
            <input id="remember" name="remember" type="checkbox" className="h-4 w-4 rounded border-border text-brand-primary focus-visible:ring-brand-primary/40" />
            <span className="text-muted">Recuérdame</span>
          </label>
          <a href="/forgot-password" className="text-brand-primary hover:text-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 rounded-sm transition-colors duration-200">¿Olvidaste tu contraseña?</a>
        </div>
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="group w-full bg-brand-primary hover:bg-brand-hover text-white py-2.5 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/30"
        >
          <span className="inline-flex items-center justify-center gap-2">
            {loading ? 'Entrando...' : 'Entrar'}
            <svg className="size-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </button>
        {error && (
          <p id="form-error" role="alert" aria-live="polite" className="text-sm text-red-600">{error}</p>
        )}
        <p className="text-xs text-muted-2 text-center">
          <span className="inline-block rounded-full bg-gray-100 px-2.5 py-1 text-muted border border-border">Demo: admin@laurystico.com / 123456</span>
        </p>
      </form>
    </div>
  );
}

// Componente principal envuelto en Suspense
export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] grid place-items-center bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.07),_transparent_60%)] px-4">
      <Suspense fallback={<div className="w-full max-w-md card p-6">Cargando...</div>}>
        <LoginForm />
      </Suspense>
      <p className="mt-6 text-xs text-muted-2 text-center">© {new Date().getFullYear()} Laurystico Education</p>
    </div>
  );
}

