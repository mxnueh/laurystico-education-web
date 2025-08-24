import InstructorCard from '@/components/InstructorCard';

export default function ElectronicsCourse() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <header id="top" className="relative overflow-hidden rounded-card border bg-white">
        <div className="absolute inset-x-0 -top-32 h-[60%] bg-[radial-gradient(900px_400px_at_20%_10%,rgba(168,85,247,.18),transparent_60%),radial-gradient(700px_320px_at_90%_0,rgba(124,58,237,.18),transparent_60%)] pointer-events-none" />
        <div className="relative grid gap-8 md:grid-cols-2 p-8 md:p-12 lg:p-16">
          <div>
            <span className="inline-flex items-center gap-2 text-purple-600 font-semibold bg-white border border-border rounded-full px-3 py-1">Programa · 20 módulos · 20 clases c/u</span>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Robótica Electrónica Avanzada</h1>
            <p className="mt-1 text-muted font-semibold">Diseña y construye robots con Arduino, sensores avanzados y programación en C++.</p>
            <p className="mt-3 text-ink/80">Aprende electrónica aplicada, programación en C++, y control de robots. Ideal para jóvenes de 12 años en adelante con ganas de crear tecnología del futuro.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://forms.gle/TaqbtTGu3As1gHbp6" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-action transition-colors">Inscribirme ahora</a>
              <a href="#temario" className="bg-white border border-border px-4 py-2.5 rounded-action hover:border-purple-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-600/30 transition">
                Ver temario
              </a>
              <a href="#certificaciones" className="bg-white border border-border px-4 py-2.5 rounded-action hover:border-purple-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-600/30 transition">
                Certificaciones
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">100% práctico</span>
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">Arduino + C++</span>
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">Proyectos reales</span>
            </div>
          </div>
          <div
            aria-label="Imagen hero del curso"
            className="rounded-card border bg-gradient-to-br from-[#f3e8ff] to-white shadow-soft overflow-hidden min-h-56"
            style={{
              backgroundImage: `url(${encodeURI('/fotos/imagen robotica electronica.JPG')})`,
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
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF]">🔌</div>
            <h3 className="mt-3 font-semibold">Arduino + C++</h3>
            <p className="text-muted text-sm">Programación profesional con microcontroladores Arduino.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5]">⚡</div>
            <h3 className="mt-3 font-semibold">Circuitos Electrónicos</h3>
            <p className="text-muted text-sm">Diseña y construye circuitos con LEDs, resistencias y sensores.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A]">🤖</div>
            <h3 className="mt-3 font-semibold">Robots Autónomos</h3>
            <p className="text-muted text-sm">Crea robots que pueden moverse y tomar decisiones solos.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">📡</div>
            <h3 className="mt-3 font-semibold">Sensores Avanzados</h3>
            <p className="text-muted text-sm">Ultrasonido, temperatura, luz y movimiento en tus proyectos.</p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="temario" className="space-y-6">
        <h2 className="text-2xl font-bold">Temario del curso</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold text-purple-600">Módulos 1-5: Fundamentos</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Introducción a Arduino y C++</li>
              <li>• Primeros circuitos con LEDs</li>
              <li>• Control de motores básicos</li>
              <li>• Lectura de sensores digitales</li>
              <li>• Programación condicional</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-purple-600">Módulos 6-10: Sensores</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Sensor ultrasónico (distancia)</li>
              <li>• Sensor de temperatura y humedad</li>
              <li>• Fotorresistencia (sensor de luz)</li>
              <li>• Acelerómetro y giroscopio</li>
              <li>• Integración múltiples sensores</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-purple-600">Módulos 11-15: Robótica</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Chasis y estructura del robot</li>
              <li>• Control de motores servo</li>
              <li>• Robot evita obstáculos</li>
              <li>• Seguidor de líneas</li>
              <li>• Robot controlado por smartphone</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-purple-600">Módulos 16-20: Proyectos</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Casa domótica con sensores</li>
              <li>• Brazo robótico controlado</li>
              <li>• Robot con cámara y visión</li>
              <li>• Sistema de alarma inteligente</li>
              <li>• Proyecto final personalizado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Tu instructor</h2>
        <InstructorCard 
          name="Laury Emmanuel Jaquez"
          title="Ingeniero en Electrónica"
          imageSrc="/fotos/director.jpg"
          description="Especialista en robótica educativa, Arduino y desarrollo de proyectos electrónicos. +5 años enseñando tecnología a jóvenes."
        />
      </section>

      {/* Requirements */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">¿Qué necesitas?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold">Requisitos técnicos</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>• Computadora con conexión a internet</li>
              <li>• Software Arduino IDE (gratuito)</li>
              <li>• Kit de Arduino (se proporciona lista)</li>
              <li>• Ganas de experimentar y crear</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Conocimientos previos</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>• Conceptos básicos de matemáticas</li>
              <li>• Uso básico de computadora</li>
              <li>• Curiosidad por la tecnología</li>
              <li>• No se requiere experiencia previa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tools & Equipment */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Herramientas y equipo</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-purple-100 to-purple-200 mb-3">
              🔧
            </div>
            <h3 className="font-semibold">Arduino Uno R3</h3>
            <p className="text-sm text-muted mt-1">Microcontrolador principal para todos los proyectos</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-purple-100 to-purple-200 mb-3">
              📐
            </div>
            <h3 className="font-semibold">Kit de Sensores</h3>
            <p className="text-sm text-muted mt-1">Ultrasonido, temperatura, luz y movimiento</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-purple-100 to-purple-200 mb-3">
              ⚙️
            </div>
            <h3 className="font-semibold">Componentes</h3>
            <p className="text-sm text-muted mt-1">LEDs, resistencias, motores y cables</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificaciones" className="space-y-6">
        <h2 className="text-2xl font-bold">Certificaciones</h2>
        <div className="card">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-action bg-gradient-to-br from-purple-100 to-purple-200 grid place-items-center text-2xl">
              🏆
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Certificado de Robótica Electrónica</h3>
              <p className="text-sm text-muted mt-1">Al completar el curso recibirás un certificado digital que valida tus conocimientos en Arduino, electrónica y robótica. Perfecto para tu portafolio académico o profesional.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Arduino</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">C++</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Electrónica</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Robótica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4 bg-gradient-to-br from-purple-50 to-white p-8 rounded-card border">
        <h2 className="text-2xl font-bold">¿Listo para crear robots increíbles?</h2>
        <p className="text-muted max-w-2xl mx-auto">
          Únete a nuestro curso de Robótica Electrónica y convierte tus ideas en robots reales. 
          Aprende Arduino, C++ y electrónica de forma práctica y divertida.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a href="https://forms.gle/TaqbtTGu3As1gHbp6" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-action font-semibold transition-colors">
            Inscribirme ahora
          </a>
          <a href="#top" className="bg-white border border-border px-6 py-3 rounded-action hover:border-purple-600 transition">
            Ver detalles del programa
          </a>
        </div>
      </section>
    </div>
  );
}
