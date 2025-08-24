export default function ProjectsShowcase() {
  const projects = [
    {
      title: "Robot Jardinero Inteligente",
      description: "Sistema automatizado que riega plantas según la humedad del suelo",
      student: "Ana Sofía, 15 años",
      technology: "Arduino + Sensores",
      image: "🌱",
      category: "Robótica",
      difficulty: "Avanzado",
      features: ["Sensor de humedad", "Sistema de riego", "App móvil"]
    },
    {
      title: "Adventure Quest RPG",
      description: "Juego multijugador con sistema de misiones y combate en tiempo real",
      student: "Carlos, 12 años",
      technology: "Roblox Studio + Lua",
      image: "⚔️",
      category: "Gaming", 
      difficulty: "Intermedio",
      features: ["Multijugador", "Sistema de combate", "Misiones dinámicas"]
    },
    {
      title: "Robot Mascota Virtual",
      description: "Compañero robótico que responde a comandos de voz y gestos",
      student: "María, 14 años", 
      technology: "LEGO WeDo 2.0",
      image: "🐕",
      category: "Robótica",
      difficulty: "Intermedio",
      features: ["Reconocimiento de voz", "Sensores de movimiento", "LED expresivos"]
    },
    {
      title: "Space Explorer Simulator",
      description: "Simulador de exploración espacial con física realista",
      student: "Diego, 13 años",
      technology: "Roblox Studio",
      image: "🚀",
      category: "Gaming",
      difficulty: "Avanzado", 
      features: ["Física realista", "Exploración libre", "Sistema de recursos"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante': return 'bg-green-100 text-green-700';
      case 'Intermedio': return 'bg-yellow-100 text-yellow-700';
      case 'Avanzado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Robótica': return 'bg-blue-100 text-blue-700';
      case 'Gaming': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Proyectos increíbles creados por estudiantes
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          De la idea a la realidad: robots funcionales y juegos exitosos
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-soft border overflow-hidden hover-lift animate-scale-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Project Header */}
            <div className="relative p-6 pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{project.image}</div>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                        {project.difficulty}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="px-6 pb-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">Características principales:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Student & Tech Info */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-medium text-xs">
                      {project.student.split(',')[0].split(' ')[0][0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Creado por {project.student}
                    </div>
                    <div className="text-gray-600">
                      Tecnología: {project.technology}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-purple-100/20 p-8 rounded-xl border">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Tu próximo proyecto podría estar aquí
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Con nuestros cursos prácticos, en 12 semanas podrás crear proyectos increíbles como estos
        </p>
        <div className="flex justify-center">
          <a 
            href="/courses" 
            className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-action font-semibold hover:bg-brand-hover transition-colors duration-200"
          >
            <span>Ver todos los cursos</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

