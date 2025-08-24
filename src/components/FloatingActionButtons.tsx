'use client';

export default function FloatingActionButtons() {
  return (
    <>
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/emmajr660?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram emmajr660"
        className="fixed right-5 bottom-24 z-50 w-14 h-14 rounded-full grid place-items-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
      >
        <span className="sr-only">Instagram</span>
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm12 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/18496391204?text=Hola%20Laurystico%2C%20quiero%20más%20información%20sobre%20los%20cursos"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp 849 639 1204"
        className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full grid place-items-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        style={{ background: '#25D366' }}
      >
        <span className="sr-only">WhatsApp</span>
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden="true">
          <path d="M19.11 17.54c-.28-.14-1.65-.81-1.9-.9s-.44-.14-.63.14c-.19.28-.72.9-.88 1.08-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49-.16-.01-.35-.01-.54-.01s-.49.07-.75.35c-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.31.19 1.8.12.55-.08 1.65-.68 1.88-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33zM16 3c7.18 0 13 5.82 13 13 0 2.31-.61 4.48-1.68 6.35L28 29l-6.86-1.8A12.94 12.94 0 0 1 16 29C8.82 29 3 23.18 3 16S8.82 3 16 3zm0 2.3C10.05 5.3 5.3 10.05 5.3 16c0 2.2.74 4.23 1.98 5.87l-.78 2.85 2.94-.77A10.63 10.63 0 0 0 16 26.7c5.95 0 10.7-4.75 10.7-10.7S21.95 5.3 16 5.3z"/>
        </svg>
      </a>
    </>
  );
}

