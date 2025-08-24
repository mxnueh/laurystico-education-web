export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      age: "14 años",
      course: "Robótica con LEGO WeDo 2.0",
      quote: "Mi robot puede bailar, caminar y hasta jugar fútbol. ¡Nunca pensé que programar fuera tan divertido!",
      avatar: "MG",
      project: "Robot bailarín con sensores"
    },
    {
      name: "Carlos Ramírez",
      age: "12 años", 
      course: "Roblox Studio Avanzado",
      quote: "Ya publiqué mi primer juego y tiene más de 1000 jugadores. Mis amigos no pueden creerlo.",
      avatar: "CR",
      project: "Juego de aventuras multijugador"
    },
    {
      name: "Ana Sofía Torres",
      age: "15 años",
      course: "Robótica Avanzada",
      quote: "Construí un robot que riega las plantas automáticamente. Ahora quiero estudiar ingeniería.",
      avatar: "AT",
      project: "Sistema de riego inteligente"
    }
  ];

  return (
    <section className="py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Lo que dicen nuestros estudiantes
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Historias reales de jóvenes que están creando el futuro
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-soft border hover-lift animate-scale-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Quote */}
            <div className="space-y-4">
              <div className="text-brand-primary text-3xl font-bold">"</div>
              <blockquote className="text-ink text-lg leading-relaxed font-medium">
                {testimonial.quote}
              </blockquote>
            </div>

            {/* Student Info */}
            <div className="flex items-start gap-3 mt-6 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                {testimonial.avatar}
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg text-ink">
                  {testimonial.name}
                </div>
                <div className="text-base text-muted font-medium">
                  {testimonial.age} • {testimonial.course}
                </div>
                <div className="text-sm text-brand-primary font-semibold mt-1">
                  Proyecto: {testimonial.project}
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="mt-4 inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certificado completado
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 p-8 rounded-xl border">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          ¿Listo para crear tu propio proyecto?
        </h3>
        <p className="text-gray-600 mb-4">
          Únete a cientos de estudiantes que ya están construyendo el futuro
        </p>
        <a 
          href="/courses" 
          className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-action font-semibold hover:bg-brand-hover transition-colors duration-200"
        >
          <span>Comenzar mi proyecto</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}


