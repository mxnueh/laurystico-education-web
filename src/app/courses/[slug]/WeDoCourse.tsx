import InstructorCard from '@/components/InstructorCard';

export default function WeDoCourse() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <header id="top" className="relative overflow-hidden rounded-card border bg-white">
        <div className="absolute inset-x-0 -top-32 h-[60%] bg-[radial-gradient(900px_400px_at_20%_10%,rgba(37,99,235,.18),transparent_60%),radial-gradient(700px_320px_at_90%_0,rgba(59,130,246,.18),transparent_60%)] pointer-events-none" />
        <div className="relative grid gap-8 md:grid-cols-2 p-8 md:p-12 lg:p-16">
          <div>
            <span className="inline-flex items-center gap-2 text-brand-primary font-semibold bg-white border border-border rounded-full px-3 py-1">Programa · 12 módulos · 12 clases c/u</span>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Robótica con LEGO WeDo 2.0</h1>
            <p className="mt-1 text-muted font-semibold">Construye y programa modelos con motores y sensores usando LEGO WeDo 2.0.</p>
            <p className="mt-3 text-ink/80">Aprenden por proyectos: planean, construyen, programan y presentan. Ideal para niñas y niños de 6 a 12 años. Sin experiencia previa.</p>
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
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">Proyectos con sensores</span>
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">Aprendizaje STEAM</span>
            </div>
          </div>
          <div
            aria-label="Imagen hero del curso"
            className="rounded-card border bg-gradient-to-br from-[#eaf2ff] to-white shadow-soft overflow-hidden min-h-56"
            style={{
              backgroundImage: `url(${encodeURI('/fotos/Lego banner')})`,
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
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">⚙️</div>
            <h3 className="mt-3 font-semibold">Construye + Programa</h3>
            <p className="text-muted text-sm">Motores, engranajes y sensores con bloques de código visual.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🧠</div>
            <h3 className="mt-3 font-semibold">STEAM real</h3>
            <p className="text-muted text-sm">Ciencia, tecnología y creatividad en retos del mundo real.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">👧👦</div>
            <h3 className="mt-3 font-semibold">6–12 años</h3>
            <p className="text-muted text-sm">Actividades guiadas por niveles, ideales para iniciar en robótica.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🏅</div>
            <h3 className="mt-3 font-semibold">Proyecto final</h3>
            <p className="text-muted text-sm">Presentación y demo del robot con libreto y póster.</p>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="temario" className="space-y-3">
        <h2 className="text-2xl font-semibold">Programa (12 módulos · 12 clases c/u)</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            ['Módulo 1 — Exploradores de Engranajes', 'Construcción básica y transmisión de movimiento.'],
            ['Módulo 2 — Sensores en Acción', 'Movimiento e inclinación aplicados a retos.'],
            ['Módulo 3 — Código que Mueve', 'Secuencias y eventos con bloques.'],
            ['Módulo 4 — Ritmo y Bucles', 'Repeticiones y tiempos inteligentes.'],
            ['Módulo 5 — Robomóviles Exploradores', 'Vehículos guiados por sensores.'],
            ['Módulo 6 — Fábrica de Mecanismos', 'Grúas, poleas y engranajes compuestos.'],
            ['Módulo 7 — Robots que Deciden', 'Condicionales y variables simples.'],
            ['Módulo 8 — Misiones de Rescate', 'Diseño de retos y estrategias.'],
            ['Módulo 9 — Prototipado Ágil', 'Bocetos, roles y gestión del proyecto.'],
            ['Módulo 10 — Laboratorio de Pruebas', 'Depuración, medición y mejoras.'],
            ['Módulo 11 — Probamos nuestro robot', 'Hacemos pruebas y mejoramos.'],
            ['Módulo 12 — Misión Espacial: Entrega Final', 'Presentamos nuestro robot espacial al grupo.'],
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
              <li>Pensamiento lógico y resolución de problemas.</li>
              <li>Conceptos de mecánica: engranajes, palancas y transmisión.</li>
              <li>Programación por bloques: eventos, bucles y condicionales.</li>
              <li>Trabajo en equipo y presentación de proyectos.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Incluye</h3>
            <ul className="list-disc pl-6 text-ink/80 text-sm mt-2 space-y-1">
              <li>Guías paso a paso y retos por clase.</li>
              <li>Reporte de progreso para familias.</li>
            </ul>
            <div className="mt-3 rounded-action border border-border overflow-hidden min-h-32 grid place-items-center text-muted text-sm">
              Imagen módulo opcional
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section id="certificaciones" className="space-y-4">
        <h2 className="text-2xl font-semibold">Certificaciones</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[['🧩','Explorador de Engranajes','Se otorga al completar los módulos 1–4.'],
            ['📡','Piloto de Sensores','Se otorga al completar los módulos 5–6.'],
            ['🤖','Programador de Robots','Se otorga al completar los módulos 7–10.'],
            ['🚀','Comandante de Misión Espacial','Se otorga al completar los módulos 11–12.'],].map(([icon,title,desc])=> (
            <div key={String(title)} className="card">
              <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">{icon as string}</div>
              <h3 className="mt-3 font-semibold">{title as string}</h3>
              <p className="text-muted text-sm">{desc as string}</p>
            </div>
          ))}
        </div>
        <p className="text-muted">Certificados físicos con sello y firma, entregados en clase.</p>
      </section>

      {/* Instructor */}
      {/* Instructor */}
      <InstructorCard
        name="Laury Emmanuel Jaquez"
        title="Director del Programa"
        imageSrc="/fotos/director.jpg"
        description="Creador del programa. Responsable del currículo, la calidad pedagógica y la formación de instructores."
      />

      {/* Horarios */}
      <section className="space-y-4" aria-labelledby="horarios-title">
        <h2 id="horarios-title" className="text-2xl font-semibold">Horarios</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🗓️</div>
              <div>
                <h3 className="font-semibold">Lunes · 3:00 PM – 5:00 PM</h3>
                <p className="text-sm text-muted m-0">1h Robótica WeDo · 15 min Break · 45 min Roblox</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">📍</div>
              <div>
                <h3 className="font-semibold">Sábados · 9:00 AM – 11:00 AM</h3>
                <p className="text-sm text-muted m-0">Robótica LEGO WeDo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inscripcion" className="rounded-card border bg-gradient-to-br from-[#EFF6FF] to-white shadow-soft p-6 md:p-8 grid gap-4 md:grid-cols-[1fr,auto] items-center">
        <div>
          <h3 className="text-xl font-semibold">Inscríbelo hoy</h3>
          <p className="text-muted m-0">Cupos limitados. Inicio próximo mes. Modalidad presencial.</p>
        </div>
        <div className="text-right">
          <a href="https://forms.gle/TaqbtTGu3As1gHbp6" target="_blank" rel="noopener noreferrer" className="inline-flex bg-brand-primary hover:bg-brand-hover text-white px-4 py-2.5 rounded-action transition-colors">Inscríbete aquí</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
        <details className="bg-white border border-border rounded-action p-3">
          <summary className="font-semibold cursor-pointer">¿Necesitan traer el kit LEGO WeDo 2.0?</summary>
          <p className="text-sm text-muted mt-2">Trabajamos con kits en el aula. Si tienes uno en casa, también puedes usarlo para practicar.</p>
        </details>
        <details className="bg-white border border-border rounded-action p-3">
          <summary className="font-semibold cursor-pointer">¿Requiere conocimientos previos?</summary>
          <p className="text-sm text-muted mt-2">No. Empezamos desde cero y avanzamos por niveles.</p>
        </details>
        <details className="bg-white border border-border rounded-action p-3">
          <summary className="font-semibold cursor-pointer">¿Qué edad es recomendable?</summary>
          <p className="text-sm text-muted mt-2">De 6 a 12 años. Adaptamos las actividades según la edad.</p>
        </details>
      </section>


    </div>
  );
}

