export default function StatsSection() {
  const stats = [
    { 
      number: "300+", 
      label: "Estudiantes graduados",
      icon: "👥",
      description: "Han completado exitosamente nuestros cursos"
    },
    { 
      number: "150+", 
      label: "Proyectos completados",
      icon: "🤖",
      description: "Robots y juegos reales creados"
    },
    { 
      number: "98%", 
      label: "Tasa de finalización",
      icon: "🎯",
      description: "De nuestros estudiantes completan los cursos"
    },
    { 
      number: "24/7", 
      label: "Soporte disponible",
      icon: "💬",
      description: "Ayuda cuando la necesites"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/50 to-emerald-50/50 rounded-card border">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 300 estudiantes ya han transformado su futuro con nuestros cursos prácticos
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-3 p-6 bg-white rounded-xl shadow-soft hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {stat.icon}
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-brand-primary">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <a 
            href="/courses" 
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-action font-semibold hover:bg-brand-hover transition-colors duration-200"
          >
            <span>Únete a nosotros</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

