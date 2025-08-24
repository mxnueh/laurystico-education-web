import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import './globals.css';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Laurystico Education',
  description: 'Plataforma e-learning tecnológica',
};

const font = Poppins({ subsets: ['latin'], weight: ['400','600'], variable: '--font-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${font.variable} min-h-screen bg-surface text-ink`}
      >
        <NavBar />
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
        <FloatingActionButtons />
      </body>
    </html>
  );
}

