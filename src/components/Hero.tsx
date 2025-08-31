'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-card border bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-secondary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative p-8 md:p-12 lg:p-16 grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-ping" />
            🚀 Nuevos cursos disponibles
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Domina la Robótica y Roblox Studio
            <span className="block text-gray-700 mt-2">con proyectos reales</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Únete a más de <strong className="text-brand-primary">300+ estudiantes</strong> que ya han aprendido a crear robots increíbles y juegos exitosos. Aprende haciendo, no solo viendo.
          </p>
          
          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Proyectos prácticos reales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Clases en vivo interactivas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Certificación incluida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Soporte 24/7</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/courses" className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary/90 text-white px-8 py-4 rounded-action font-semibold shadow-soft hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1">
              <span>Explorar catálogo</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/login" className="group relative inline-flex items-center justify-center gap-2 border-2 border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-action font-semibold hover:border-brand-primary hover:text-brand-primary hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Acceder al Aula Virtual</span>
            </a>
          </div>
        </div>
        
        {/* Right Visual Section */}
        <div className="relative animate-fade-in-delay">
          {/* Main Visual Card */}
          <div className="space-y-4">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-purple-100/20 border-2 border-white shadow-2xl overflow-hidden">
              {/* Hero Image */}
              <div className="h-full relative">
                <Image 
                  src="/fotos/escena-tecnologica-isometrica2.jpg" 
                  alt="Escena tecnológica isométrica con robótica y programación"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay with icons only */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-green-900/20">
                  <div className="h-full flex items-center justify-center relative">
                    <div className="flex justify-center gap-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center animate-bounce backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">🤖</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center animate-bounce delay-200 backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">💻</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center animate-bounce delay-500 backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">🎮</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text content below the image */}
            <div className="text-center space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-purple-600 bg-clip-text text-transparent leading-tight">
                Aprende Tecnología del Futuro
              </h3>
              <p className="text-lg md:text-xl text-gray-700 font-semibold tracking-wide">
                Robots • Sensores • Scripts de Roblox
              </p>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}

