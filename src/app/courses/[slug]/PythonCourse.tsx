import InstructorCard from '@/components/InstructorCard';

export default function PythonCourse() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <header id="top" className="relative overflow-hidden rounded-card border bg-white">
        <div className="absolute inset-x-0 -top-32 h-[60%] bg-[radial-gradient(900px_400px_at_20%_10%,rgba(34,197,94,.18),transparent_60%),radial-gradient(700px_320px_at_90%_0,rgba(59,130,246,.18),transparent_60%)] pointer-events-none" />
        <div className="relative grid gap-8 md:grid-cols-2 p-8 md:p-12 lg:p-16">
          <div>
            <span className="inline-flex items-center gap-2 text-green-600 font-semibold bg-white border border-border rounded-full px-3 py-1">Programa · 18 módulos · 18 clases c/u</span>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Programación con Python desde Cero</h1>
            <p className="mt-1 text-muted font-semibold">Aprende los fundamentos de la programación con el lenguaje más popular del mundo.</p>
            <p className="mt-3 text-ink/80">Desde variables y funciones hasta proyectos reales y aplicaciones web. Ideal para jóvenes de 12 años en adelante que quieren iniciarse en el mundo de la programación.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://forms.gle/TaqbtTGu3As1gHbp6" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-action transition-colors">Inscribirme ahora</a>
              <a href="#temario" className="bg-white border border-border px-4 py-2.5 rounded-action hover:border-green-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-600/30 transition">
                Ver temario
              </a>
              <a href="#certificaciones" className="bg-white border border-border px-4 py-2.5 rounded-action hover:border-green-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-600/30 transition">
                Certificaciones
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">100% práctico</span>
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">Proyectos reales</span>
              <span className="text-sm border border-border bg-white text-muted px-2.5 py-1 rounded-full">Sin experiencia previa</span>
            </div>
          </div>
          <div
            aria-label="Imagen hero del curso"
            className="rounded-card border bg-gradient-to-br from-[#f0fff4] to-white shadow-soft overflow-hidden min-h-56"
            style={{
              backgroundImage: `url(${encodeURI('/fotos/Escena Tecnológica Isométrica.jpg.png')})`,
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
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0]">🐍</div>
            <h3 className="mt-3 font-semibold">Python desde Cero</h3>
            <p className="text-muted text-sm">Aprende el lenguaje de programación más popular y versátil.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]">🎯</div>
            <h3 className="mt-3 font-semibold">Algoritmos</h3>
            <p className="text-muted text-sm">Resuelve problemas y desarrolla lógica de programación.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A]">💻</div>
            <h3 className="mt-3 font-semibold">Proyectos Reales</h3>
            <p className="text-muted text-sm">Crea aplicaciones, juegos y herramientas útiles.</p>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-action grid place-items-center bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF]">🌐</div>
            <h3 className="mt-3 font-semibold">Aplicaciones Web</h3>
            <p className="text-muted text-sm">Desarrolla tus primeras páginas web con Python.</p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="temario" className="space-y-6">
        <h2 className="text-2xl font-bold">Temario del curso</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold text-green-600">Módulos 1-4: Fundamentos</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Introducción a Python y programación</li>
              <li>• Variables, tipos de datos y operadores</li>
              <li>• Estructuras de control (if, while, for)</li>
              <li>• Funciones y modularidad</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-green-600">Módulos 5-8: Estructuras de Datos</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Listas, tuplas y diccionarios</li>
              <li>• Manipulación de strings</li>
              <li>• Archivos y manejo de datos</li>
              <li>• Excepciones y debugging</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-green-600">Módulos 9-12: Programación Orientada a Objetos</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Clases y objetos</li>
              <li>• Herencia y polimorfismo</li>
              <li>• Métodos especiales y propiedades</li>
              <li>• Diseño de aplicaciones con POO</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-green-600">Módulos 13-18: Proyectos y Aplicaciones</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Juegos interactivos con Pygame</li>
              <li>• Aplicaciones de escritorio con Tkinter</li>
              <li>• Web scraping y APIs</li>
              <li>• Introducción a desarrollo web con Flask</li>
              <li>• Análisis de datos básico</li>
              <li>• Proyecto final personalizado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">¿Qué aprenderás?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 grid place-items-center text-sm font-semibold">1</div>
              <div>
                <h3 className="font-semibold">Fundamentos sólidos</h3>
                <p className="text-sm text-muted">Variables, funciones, estructuras de control y buenas prácticas de programación.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 grid place-items-center text-sm font-semibold">2</div>
              <div>
                <h3 className="font-semibold">Resolución de problemas</h3>
                <p className="text-sm text-muted">Desarrolla lógica computacional y aprende a descomponer problemas complejos.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 grid place-items-center text-sm font-semibold">3</div>
              <div>
                <h3 className="font-semibold">Proyectos prácticos</h3>
                <p className="text-sm text-muted">Crea juegos, aplicaciones de escritorio y herramientas útiles desde el primer día.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 grid place-items-center text-sm font-semibold">4</div>
              <div>
                <h3 className="font-semibold">Programación orientada a objetos</h3>
                <p className="text-sm text-muted">Aprende a estructurar código de manera profesional y escalable.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 grid place-items-center text-sm font-semibold">5</div>
              <div>
                <h3 className="font-semibold">Desarrollo web básico</h3>
                <p className="text-sm text-muted">Crea tus primeras aplicaciones web con Flask y conecta con bases de datos.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 grid place-items-center text-sm font-semibold">6</div>
              <div>
                <h3 className="font-semibold">Base para especializaciones</h3>
                <p className="text-sm text-muted">Prepárate para áreas como inteligencia artificial, ciencia de datos o desarrollo web.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Tu instructor</h2>
        <InstructorCard 
          name="Laury Emmanuel Jaquez"
          title="Desarrollador Full-Stack"
          imageSrc="/fotos/director.jpg"
          description="Especialista en Python y desarrollo web, con experiencia en enseñanza de programación a jóvenes. +6 años desarrollando aplicaciones con Python."
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
              <li>• Python 3.x (gratuito, te ayudamos a instalarlo)</li>
              <li>• Editor de código (recomendamos VS Code)</li>
              <li>• Ganas de aprender y experimentar</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Conocimientos previos</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>• Uso básico de computadora</li>
              <li>• Matemáticas básicas (suma, resta, multiplicación)</li>
              <li>• Curiosidad por la tecnología</li>
              <li>• No se requiere experiencia en programación</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Herramientas y tecnologías</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-green-100 to-green-200 mb-3">
              🐍
            </div>
            <h3 className="font-semibold">Python 3.x</h3>
            <p className="text-sm text-muted mt-1">Lenguaje de programación principal, fácil de aprender y muy potente</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-green-100 to-green-200 mb-3">
              💻
            </div>
            <h3 className="font-semibold">VS Code</h3>
            <p className="text-sm text-muted mt-1">Editor de código profesional con herramientas para Python</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-green-100 to-green-200 mb-3">
              📚
            </div>
            <h3 className="font-semibold">Librerías Python</h3>
            <p className="text-sm text-muted mt-1">Pygame, Tkinter, Flask y más para crear proyectos increíbles</p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Proyectos que crearás</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-blue-100 to-blue-200 mb-3">
              🎮
            </div>
            <h3 className="font-semibold">Juego de Aventuras</h3>
            <p className="text-sm text-muted mt-1">Crea un juego interactivo con Pygame con gráficos y sonidos</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-purple-100 to-purple-200 mb-3">
              🖥️
            </div>
            <h3 className="font-semibold">Calculadora Avanzada</h3>
            <p className="text-sm text-muted mt-1">Aplicación de escritorio con interfaz gráfica usando Tkinter</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-yellow-100 to-yellow-200 mb-3">
              🌐
            </div>
            <h3 className="font-semibold">Blog Personal</h3>
            <p className="text-sm text-muted mt-1">Sitio web dinámico con Flask para publicar contenido</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-red-100 to-red-200 mb-3">
              📊
            </div>
            <h3 className="font-semibold">Analizador de Datos</h3>
            <p className="text-sm text-muted mt-1">Herramienta para procesar y visualizar información</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-indigo-100 to-indigo-200 mb-3">
              🤖
            </div>
            <h3 className="font-semibold">Bot de Telegram</h3>
            <p className="text-sm text-muted mt-1">Chatbot automatizado que responde mensajes</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-action grid place-items-center bg-gradient-to-br from-teal-100 to-teal-200 mb-3">
              🎲
            </div>
            <h3 className="font-semibold">Generador de Contraseñas</h3>
            <p className="text-sm text-muted mt-1">Aplicación de seguridad con interfaz amigable</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificaciones" className="space-y-6">
        <h2 className="text-2xl font-bold">Certificaciones</h2>
        <div className="card">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-action bg-gradient-to-br from-green-100 to-green-200 grid place-items-center text-2xl">
              🏆
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Certificado de Programación en Python</h3>
              <p className="text-sm text-muted mt-1">Al completar el curso recibirás un certificado digital que valida tus conocimientos en Python, programación orientada a objetos y desarrollo de aplicaciones. Ideal para tu portafolio académico o profesional.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Python</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">POO</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Algoritmos</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Desarrollo Web</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4 bg-gradient-to-br from-green-50 to-white p-8 rounded-card border">
        <h2 className="text-2xl font-bold">¿Listo para comenzar tu aventura en programación?</h2>
        <p className="text-muted max-w-2xl mx-auto">
          Únete a nuestro curso de Python y aprende a programar desde cero. 
          Crea proyectos increíbles y obtén las bases para cualquier especialización en tecnología.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a href="https://forms.gle/TaqbtTGu3As1gHbp6" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-action font-semibold transition-colors">
            Inscribirme ahora
          </a>
          <a href="#top" className="bg-white border border-border px-6 py-3 rounded-action hover:border-green-600 transition">
            Ver detalles del programa
          </a>
        </div>
      </section>
    </div>
  );
}
