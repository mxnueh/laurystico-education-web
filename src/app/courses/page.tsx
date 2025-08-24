import CoursesFilter from '@/components/CoursesFilter';

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Catálogo de cursos
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubre nuestras formaciones especializadas en Robótica y Roblox Studio. 
          Desde principiantes hasta creadores avanzados, tenemos el curso perfecto para ti.
        </p>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>8 cursos disponibles</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>600+ estudiantes</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Certificación incluida</span>
          </div>
        </div>
      </header>

      {/* Courses Filter Component */}
      <CoursesFilter />
    </div>
  );
}

