import InstructorCard from '@/components/InstructorCard';

export default function RobloxCourse() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <header id="top" className="relative overflow-hidden rounded-card border bg-white">
        <div className="absolute inset-x-0 -top-32 h-[60%] bg-[radial-gradient(900px_400px_at_20%_10%,rgba(59,130,246,.18),transparent_60%),radial-gradient(700px_320px_at_90%_0,rgba(168,85,247,.18),transparent_60%)] pointer-events-none" />
        <div className="relative grid gap-8 md:grid-cols-2 p-8 md:p-12 lg:p-16">
          <div>
            <span className="inline-flex items-center gap-2 text-brand-primary font-semibold bg-white border border-border rounded-full px-3 py-1">Programa · 16 módulos · 16 clases c/u</span>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Creación de Juegos con Roblox Studio</h1>
            <p className="mt-1 text-muted font-semibold">Diseña, programa y publica tus propios juegos en la plataforma Roblox.</p>
            <p className="mt-3 text-ink/80">Aprende programación en Lua, modelado 3D, diseño de niveles y mecánicas de juego. Ideal para jóvenes de 10 años en adelante que quieren crear sus propios mundos virtuales.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://forms.gle/TaqbtTGu3As1gHbp6" target="_blank" rel="noopener noreferrer" className="bg-brand-primary hover:bg-brand-hover text-white px-4 py-2.5 rounded-action transition-colors">Inscribirme ahora</a>
              <a href="#temario" className="bg-white border border-border px-4 py-2.5 rounded-action hover:border-brand-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/30 transition">
                Ver temario
              </a>
              <a href="#certificaciones" className="bg-white border border-border px-4 py-2.5 rounded-action hover:border-brand-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/30 transition">
                Certificaciones
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">100% práctico</span>
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">Publica tu juego</span>
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">Programación Lua</span>
            </div>
          </div>
          <div
            aria-label="Imagen hero del curso"
            className="rounded-card border bg-gradient-to-br from-[#f0f4ff] to-white shadow-soft overflow-hidden min-h-56"
            style={{
              backgroundImage: `url(${encodeURI('/fotos/hero roblox.JPG')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </header>

      {/* Features */}
      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🎮</div>
            <h3 className="mt-3 font-semibold">Crea + Programa</h3>
            <p className="text-muted text-sm">Diseña mundos 3D y programa mecánicas con Lua Script.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🏗️</div>
            <h3 className="mt-3 font-semibold">Modelado 3D</h3>
            <p className="text-muted text-sm">Construye estructuras, personajes y objetos interactivos.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🧑‍💻</div>
            <h3 className="mt-3 font-semibold">10+ años</h3>
            <p className="text-muted text-sm">Proyectos por niveles, desde principiantes hasta creadores avanzados.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🚀</div>
            <h3 className="mt-3 font-semibold">Publica tu juego</h3>
            <p className="text-muted text-sm">Lanza tu juego en Roblox para que millones lo jueguen.</p>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="temario" className="space-y-3">
        <h2 className="text-2xl font-semibold">Programa (16 módulos · 16 clases c/u)</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            ['Módulo 1 — Introducción a Roblox Studio', 'Interface, herramientas básicas y primer proyecto.'],
            ['Módulo 2 — Fundamentos de Construcción', 'Parts, materiales, texturas y propiedades básicas.'],
            ['Módulo 3 — Modelado con Terrain', 'Creación de paisajes, montañas y ambientes naturales.'],
            ['Módulo 4 — Primeros Scripts en Lua', 'Variables, funciones y eventos básicos.'],
            ['Módulo 5 — Mecánicas de Movimiento', 'Plataformas móviles, puertas y elevadores.'],
            ['Módulo 6 — Sistema de Puntuación', 'Leaderboards, estadísticas y recompensas.'],
            ['Módulo 7 — Personajes y Animaciones', 'Customización y animaciones de avatares.'],
            ['Módulo 8 — Interfaz de Usuario (GUI)', 'Menús, botones y elementos interactivos.'],
            ['Módulo 9 — Efectos Visuales y Sonido', 'Partículas, iluminación y audio.'],
            ['Módulo 10 — Juego Multijugador', 'RemoteEvents y sincronización de jugadores.'],
            ['Módulo 11 — Monetización y GamePass', 'Developer Products y sistemas de compra.'],
            ['Módulo 12 — Testing y Debugging', 'Pruebas, optimización y solución de errores.'],
            ['Módulo 13 — Diseño de Niveles Avanzado', 'Balanceamiento y experiencia de usuario.'],
            ['Módulo 14 — Sistemas de Guardado', 'DataStores y persistencia de datos.'],
            ['Módulo 15 — Pulimento y Optimización', 'Performance, detalles finales y mejoras.'],
            ['Módulo 16 — Publicación y Marketing', 'Lanzamiento del juego y estrategias de promoción.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white border border-border rounded-action p-4">
              <strong className="block">{title}</strong>
              <span className="text-sm text-muted">{desc}</span>
            </div>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold">Lo que aprenderán</h3>
            <ul className="list-disc pl-6 text-ink/80 text-sm mt-2 space-y-1">
              <li>Programación en Lua desde cero hasta nivel intermedio.</li>
              <li>Diseño de juegos y mecánicas de gameplay.</li>
              <li>Modelado 3D y construcción de ambientes.</li>
              <li>Publicación y monetización de juegos en Roblox.</li>
              <li>Trabajo colaborativo en proyectos digitales.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Incluye</h3>
            <ul className="list-disc pl-6 text-ink/80 text-sm mt-2 space-y-1">
              <li>Proyectos guiados paso a paso.</li>
              <li>Recursos y assets para tus juegos.</li>
              <li>Apoyo para publicar tu primer juego.</li>
              <li>Comunidad de creadores estudiantes.</li>
            </ul>
            <div className="mt-3 rounded-action border border-border overflow-hidden min-h-32 grid place-items-center text-muted text-sm">
              Preview del proyecto final
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section id="certificaciones" className="space-y-4">
        <h2 className="text-2xl font-semibold">Certificaciones</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[['🏗️','Constructor de Mundos','Se otorga al completar los módulos 1–4.'],
            ['💻','Programador Lua Junior','Se otorga al completar los módulos 5–8.'],
            ['🎨','Diseñador de Experiencias','Se otorga al completar los módulos 9–12.'],
            ['🚀','Desarrollador Roblox Certificado','Se otorga al completar los módulos 13–16.'],].map(([icon,title,desc])=> (
            <div key={String(title)} className="card">
              <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">{icon as string}</div>
              <h3 className="mt-3 font-semibold">{title as string}</h3>
              <p className="text-muted text-sm">{desc as string}</p>
            </div>
          ))}
        </div>
        <p className="text-muted">Certificados digitales con validación blockchain y certificados físicos entregados en clase.</p>
      </section>

      {/* Instructor */}
      <InstructorCard
        name="Laury Emmanuel Jaquez"
        title="Director del Programa"
        imageSrc="/fotos/director.jpg"
        description="Experto en desarrollo de juegos y programación. Creador de múltiples experiencias exitosas en Roblox con millones de visitas."
      />

      {/* Horarios */}
      <section className="space-y-4" aria-labelledby="horarios-title">
        <h2 id="horarios-title" className="text-2xl font-semibold">Horarios</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🗓️</div>
              <div>
                <h3 className="font-semibold">Martes · 3:00 PM – 5:00 PM</h3>
                <p className="text-sm text-muted m-0">2h Roblox Studio intensivo</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">📍</div>
              <div>
                <h3 className="font-semibold">Sábados · 2:00 PM – 4:00 PM</h3>
                <p className="text-sm text-muted m-0">Creación de Juegos con Roblox Studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Proyectos que crearás</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold">🏃‍♂️ Obby Adventure</h3>
            <p className="text-muted text-sm">Juego de plataformas con obstáculos, checkpoints y sistema de vidas.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">🏠 Tycoon Simulator</h3>
            <p className="text-muted text-sm">Simulador de construcción con economía y sistemas de progresión.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">⚔️ Battle Arena</h3>
            <p className="text-muted text-sm">Arena de combate multijugador con armas y power-ups.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inscripcion" className="rounded-card border bg-gradient-to-br from-[#EFF6FF] to-white shadow-soft p-6 md:p-8 grid gap-4 md:grid-cols-[1fr,auto] items-center">
        <div>
          <h3 className="text-xl font-semibold">¡Conviértete en desarrollador de juegos!</h3>
          <p className="text-muted m-0">Cupos limitados. Inicio próximo mes. Modalidad presencial y virtual.</p>
        </div>
        <div className="text-right">
          <a href="https://forms.gle/TaqbtTGu3As1gHbp6" target="_blank" rel="noopener noreferrer" className="inline-flex bg-brand-primary hover:bg-brand-hover text-white px-4 py-2.5 rounded-action transition-colors">Inscríbete aquí</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
        <details className="bg-white border border-border rounded-action p-3">
          <summary className="font-semibold cursor-pointer">¿Necesito experiencia previa en programación?</summary>
          <p className="text-sm text-muted mt-2">No es necesario. Empezamos desde cero con conceptos básicos y avanzamos gradualmente.</p>
        </details>
        <details className="bg-white border border-border rounded-action p-3">
          <summary className="font-semibold cursor-pointer">¿Qué necesito para tomar el curso?</summary>
          <p className="text-sm text-muted mt-2">Una computadora con Windows/Mac, conexión a internet y una cuenta gratuita de Roblox.</p>
        </details>
        <details className="bg-white border border-border rounded-action p-3">
          <summary className="font-semibold cursor-pointer">¿Podré ganar dinero con mis juegos?</summary>
          <p className="text-sm text-muted mt-2">Sí, te enseñamos las estrategias de monetización que usan los desarrolladores exitosos de Roblox.</p>
        </details>
        <details className="bg-white border border-border rounded-action p-3">
          <summary className="font-semibold cursor-pointer">¿El curso incluye publicación del juego?</summary>
          <p className="text-sm text-muted mt-2">Absolutamente. Te acompañamos en todo el proceso hasta que tu juego esté live en Roblox.</p>
        </details>
      </section>
    </div>
  );
}
