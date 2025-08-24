'use client';

import { useState, useEffect } from 'react';

type LiveClass = {
  id: string;
  title: string;
  instructor: string;
  category: 'Robotica' | 'Roblox';
  date: string;
  time: string;
  duration: number;
  status: 'En vivo' | 'Próximamente' | 'Finalizada';
  participants: number;
  maxParticipants: number;
  description: string;
  requirements: string[];
  zoomLink?: string;
  recordingLink?: string;
};

export default function LiveClassesHub() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock data for live classes
  const liveClasses: LiveClass[] = [
    {
      id: '1',
      title: 'Programación de Sensores con Arduino',
      instructor: 'Carlos Rodríguez',
      category: 'Robotica',
      date: '2024-01-15',
      time: '19:00',
      duration: 90,
      status: 'En vivo',
      participants: 23,
      maxParticipants: 30,
      description: 'Aprende a programar sensores ultrasónicos, de temperatura y luz con Arduino.',
      requirements: ['Arduino Uno', 'Sensores básicos', 'IDE Arduino instalado'],
      zoomLink: 'https://zoom.us/j/123456789',
    },
    {
      id: '2',
      title: 'Creando NPCs Inteligentes en Roblox',
      instructor: 'Sofia Gutierrez',
      category: 'Roblox',
      date: '2024-01-15',
      time: '20:30',
      duration: 60,
      status: 'Próximamente',
      participants: 18,
      maxParticipants: 25,
      description: 'Programa NPCs que respondan a los jugadores y tomen decisiones inteligentes.',
      requirements: ['Roblox Studio', 'Conocimientos básicos de Lua'],
    },
    {
      id: '3',
      title: 'Robot Seguidor de Líneas Avanzado',
      instructor: 'Ana Martinez',
      category: 'Robotica',
      date: '2024-01-16',
      time: '18:00',
      duration: 120,
      status: 'Próximamente',
      participants: 15,
      maxParticipants: 20,
      description: 'Construye un robot que pueda seguir líneas complejas con múltiples sensores.',
      requirements: ['Kit de robótica', 'Sensores infrarrojos', 'Conocimientos previos'],
    },
    {
      id: '4',
      title: 'Monetización en Roblox - Developer Exchange',
      instructor: 'Diego Fernandez',
      category: 'Roblox',
      date: '2024-01-17',
      time: '19:30',
      duration: 75,
      status: 'Próximamente',
      participants: 32,
      maxParticipants: 40,
      description: 'Aprende a generar ingresos reales con tus juegos en Roblox.',
      requirements: ['Juego publicado', '+13 años', 'Grupo Developer Exchange'],
    },
  ];

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En vivo': return 'bg-red-500 text-white animate-pulse';
      case 'Próximamente': return 'bg-blue-500 text-white';
      case 'Finalizada': return 'bg-gray-400 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Robotica': return 'bg-blue-100 text-blue-700';
      case 'Roblox': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTimeUntilClass = (date: string, time: string) => {
    const classDateTime = new Date(`${date}T${time}`);
    const diff = classDateTime.getTime() - currentTime.getTime();
    
    if (diff <= 0) return null;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const liveClass = liveClasses.find(c => c.status === 'En vivo');
  const upcomingClasses = liveClasses.filter(c => c.status === 'Próximamente').slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Clases en vivo
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Únete a nuestras sesiones interactivas en tiempo real. Aprende junto a otros estudiantes 
          y recibe feedback inmediato de nuestros instructores expertos.
        </p>
      </div>

      {/* Live Now Section */}
      {liveClass && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white p-8 animate-scale-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            <span className="font-semibold text-lg">¡EN VIVO AHORA!</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{liveClass.title}</h2>
              <p className="text-red-100">{liveClass.description}</p>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{liveClass.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{liveClass.duration} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{liveClass.participants}/{liveClass.maxParticipants} estudiantes</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <a 
                href={liveClass.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-action font-bold text-lg hover:bg-red-50 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Unirse a la clase
              </a>
              <p className="text-center text-red-100 text-sm mt-2">
                Se abrirá en Zoom
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Classes */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Próximas clases</h2>
          <div className="text-sm text-gray-600">
            Hora actual: {currentTime.toLocaleTimeString('es-ES')}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingClasses.map((classItem, index) => {
            const timeUntil = getTimeUntilClass(classItem.date, classItem.time);
            
            return (
              <div 
                key={classItem.id}
                className="bg-white rounded-xl shadow-soft border p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(classItem.category)}`}>
                    {classItem.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(classItem.status)}`}>
                    {classItem.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {classItem.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {classItem.description}
                </p>

                {/* Class Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{classItem.instructor}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4h3a2 2 0 012 2v1l-1-1h-3v1a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1H4a2 2 0 012 2z" />
                    </svg>
                    <span>{new Date(classItem.date).toLocaleDateString('es-ES')} • {classItem.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{classItem.duration} minutos</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{classItem.participants}/{classItem.maxParticipants}</span>
                  </div>
                </div>

                {/* Countdown */}
                {timeUntil && (
                  <div className="mt-4 p-3 bg-brand-primary/10 rounded-md text-center">
                    <div className="text-xs text-brand-primary font-medium mb-1">Comienza en:</div>
                    <div className="text-lg font-bold text-brand-primary">{timeUntil}</div>
                  </div>
                )}

                {/* Requirements */}
                <div className="mt-4">
                  <div className="text-xs font-medium text-gray-700 mb-2">Requisitos:</div>
                  <div className="flex flex-wrap gap-1">
                    {classItem.requirements.slice(0, 2).map((req, reqIndex) => (
                      <span 
                        key={reqIndex}
                        className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {req}
                      </span>
                    ))}
                    {classItem.requirements.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{classItem.requirements.length - 2} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-brand-primary text-white px-4 py-2 rounded-action font-medium hover:bg-brand-hover transition-colors">
                  Recordarme
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Schedule Overview */}
      <div className="bg-white rounded-xl shadow-soft border p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Horario semanal</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, index) => (
            <div key={day} className="space-y-2">
              <div className="text-center font-medium text-gray-700 pb-2 border-b">
                {day}
              </div>
              {index % 2 === 0 && (
                <div className="bg-brand-primary/10 p-2 rounded text-xs">
                  <div className="font-medium text-brand-primary">19:00</div>
                  <div className="text-gray-600">Robótica</div>
                </div>
              )}
              {index % 3 === 0 && (
                <div className="bg-purple-100 p-2 rounded text-xs">
                  <div className="font-medium text-purple-700">20:30</div>
                  <div className="text-gray-600">Roblox</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 p-8 rounded-xl border">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          ¿Tu primera clase en vivo?
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Las clases en vivo son gratuitas para estudiantes inscritos. ¡Únete y aprende en tiempo real!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="/courses" 
            className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-action font-semibold hover:bg-brand-hover transition-colors"
          >
            <span>Ver cursos disponibles</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a 
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-action font-semibold hover:bg-brand-primary hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
            </svg>
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}






