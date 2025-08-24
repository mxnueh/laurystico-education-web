'use client';

import { useState } from 'react';
import { CourseCreationData } from '@/types/CourseCreation';

interface ManagedCourse extends CourseCreationData {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
  enrollments: number;
  revenue: number;
}

// Mock data - En producción vendría de una base de datos
const mockCourses: ManagedCourse[] = [
  {
    id: '1',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    status: 'published',
    enrollments: 45,
    revenue: 13500,
    basicInfo: {
      title: 'Robótica con Arduino Avanzado',
      subtitle: 'Construye robots inteligentes con sensores y actuadores',
      description: 'Construye robots reales con Arduino, sensores y actuadores. Desde robots básicos hasta sistemas autónomos inteligentes.',
      category: 'robotics',
      level: 'intermediate',
      duration: 12,
      language: 'spanish',
      thumbnail: '/fotos/assets_task_01k2gjw3k5f6drcz8hqnh49js3_1755050907_img_1.jpg',
      tags: ['arduino', 'robótica', 'sensores', 'programación']
    },
    instructor: {
      name: 'Laury Emmanuel Jaquez',
      bio: 'Experto en robótica educativa con 8 años de experiencia',
      avatar: '/fotos/director.jpg',
      credentials: ['Ingeniero en Mecatrónica', 'Certificado Arduino'],
      socialLinks: {
        linkedin: '',
        twitter: '',
        website: ''
      }
    },
    content: {
      modules: [
        {
          id: '1',
          title: 'Introducción a Arduino',
          description: 'Conceptos básicos y configuración',
          lessons: [],
          duration: 180
        }
      ]
    },
    assessments: {
      quizzes: [],
      projects: [],
      certificates: {
        enabled: true,
        requirements: {
          minScore: 80,
          completedLessons: 100
        }
      }
    },
    pricing: {
      type: 'paid',
      price: 299,
      currency: 'USD',
      discounts: []
    },
    settings: {
      visibility: 'public',
      enrollment: {
        maxStudents: 50,
        autoApproval: true,
        prerequisites: []
      },
      features: {
        downloadableResources: true,
        discussionForum: true,
        liveQA: true,
        mobileAccess: true
      }
    }
  },
  {
    id: '2',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18',
    status: 'draft',
    enrollments: 0,
    revenue: 0,
    basicInfo: {
      title: 'Desarrollo de Juegos en Roblox Studio',
      subtitle: 'Crea experiencias 3D profesionales',
      description: 'Crea juegos 3D profesionales con Lua. Aprende scripting, diseño de niveles y monetización de experiencias.',
      category: 'game-development',
      level: 'beginner',
      duration: 8,
      language: 'spanish',
      thumbnail: '/fotos/hero roblox.JPG',
      tags: ['roblox', 'lua', 'game-development', '3d']
    },
    instructor: {
      name: 'Laury Emmanuel Jaquez',
      bio: 'Desarrollador de juegos y experto en Roblox Studio',
      avatar: '/fotos/director.jpg',
      credentials: ['Roblox Developer', 'Lua Expert'],
      socialLinks: {
        linkedin: '',
        twitter: '',
        website: ''
      }
    },
    content: {
      modules: []
    },
    assessments: {
      quizzes: [],
      projects: [],
      certificates: {
        enabled: true,
        requirements: {
          minScore: 75,
          completedLessons: 90
        }
      }
    },
    pricing: {
      type: 'paid',
      price: 199,
      currency: 'USD',
      discounts: []
    },
    settings: {
      visibility: 'private',
      enrollment: {
        maxStudents: 30,
        autoApproval: true,
        prerequisites: []
      },
      features: {
        downloadableResources: true,
        discussionForum: false,
        liveQA: true,
        mobileAccess: true
      }
    }
  }
];

export default function CourseManagementDashboard() {
  const [courses, setCourses] = useState<ManagedCourse[]>(mockCourses);
  const [selectedCourse, setSelectedCourse] = useState<ManagedCourse | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');

  const filteredCourses = courses.filter(course => 
    filter === 'all' ? true : course.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'Publicado';
      case 'draft': return 'Borrador';
      case 'archived': return 'Archivado';
      default: return status;
    }
  };

  const handleStatusChange = (courseId: string, newStatus: 'draft' | 'published' | 'archived') => {
    setCourses(courses.map(course => 
      course.id === courseId 
        ? { ...course, status: newStatus, updatedAt: new Date().toISOString().split('T')[0] }
        : course
    ));
  };

  const handleDeleteCourse = (courseId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {
      setCourses(courses.filter(course => course.id !== courseId));
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-ink tracking-tight">Gestión de Cursos</h1>
              <p className="text-muted mt-2 text-lg">
                Administra y controla todos tus cursos desde un solo lugar
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="/create-course"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-action font-semibold hover:bg-brand-hover transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Nuevo Curso
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-card border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-base font-medium">Total Cursos</p>
                <p className="text-3xl font-bold text-ink">{courses.length}</p>
              </div>
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-card border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-base font-medium">Publicados</p>
                <p className="text-3xl font-bold text-ink">
                  {courses.filter(c => c.status === 'published').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-card border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-base font-medium">Estudiantes</p>
                <p className="text-3xl font-bold text-ink">
                  {courses.reduce((total, course) => total + course.enrollments, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-card border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-base font-medium">Ingresos</p>
                <p className="text-3xl font-bold text-ink">
                  ${courses.reduce((total, course) => total + course.revenue, 0).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and View Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-muted text-base font-medium">Filtrar por:</span>
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value as any)}
              className="border border-border rounded-action px-4 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 font-medium"
            >
              <option value="all">Todos</option>
              <option value="published">Publicados</option>
              <option value="draft">Borradores</option>
              <option value="archived">Archivados</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-muted text-base font-medium">Vista:</span>
            <div className="flex border border-border rounded-action overflow-hidden">
              <button
                onClick={() => setView('grid')}
                className={`px-4 py-2 text-base font-medium transition-colors ${
                  view === 'grid' 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white text-muted hover:bg-gray-50'
                }`}
              >
                Tarjetas
              </button>
              <button
                onClick={() => setView('list')}
                className={`px-4 py-2 text-base font-medium transition-colors ${
                  view === 'list' 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white text-muted hover:bg-gray-50'
                }`}
              >
                Lista
              </button>
            </div>
          </div>
        </div>

        {/* Courses Grid/List */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-card border overflow-hidden hover:shadow-lg transition-shadow">
                {/* Course Thumbnail */}
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  {course.basicInfo.thumbnail ? (
                    <img 
                      src={course.basicInfo.thumbnail} 
                      alt={course.basicInfo.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                      {getStatusText(course.status)}
                    </span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-ink mb-3 line-clamp-2">
                    {course.basicInfo.title}
                  </h3>
                  <p className="text-muted text-base mb-4 line-clamp-2">
                    {course.basicInfo.subtitle}
                  </p>
                  
                  <div className="flex items-center justify-between text-base text-muted mb-4 font-medium">
                    <span>{course.enrollments} estudiantes</span>
                    <span>${course.revenue.toLocaleString()}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <a 
                      href={`/create-course?edit=${course.id}`}
                      className="flex-1 bg-brand-primary text-white text-center py-2.5 px-4 rounded-action text-base font-semibold hover:bg-brand-hover transition-colors"
                    >
                      Editar
                    </a>
                    <div className="relative">
                      <select 
                        value={course.status}
                        onChange={(e) => handleStatusChange(course.id, e.target.value as any)}
                        className="border border-border rounded-action px-3 py-2.5 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      >
                        <option value="draft">Borrador</option>
                        <option value="published">Publicar</option>
                        <option value="archived">Archivar</option>
                      </select>
                    </div>
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      className="p-2.5 text-red-600 hover:bg-red-50 rounded-action transition-colors"
                      title="Eliminar curso"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="bg-white rounded-card border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-ink uppercase tracking-wider">
                      Curso
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-ink uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-ink uppercase tracking-wider">
                      Estudiantes
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-ink uppercase tracking-wider">
                      Ingresos
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-ink uppercase tracking-wider">
                      Actualizado
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-ink uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded bg-gray-100 flex-shrink-0 mr-4">
                            {course.basicInfo.thumbnail ? (
                              <img 
                                src={course.basicInfo.thumbnail} 
                                alt={course.basicInfo.title}
                                className="w-10 h-10 rounded object-cover"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="text-base font-semibold text-ink">
                              {course.basicInfo.title}
                            </div>
                            <div className="text-base text-muted">
                              {course.basicInfo.subtitle}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(course.status)}`}>
                          {getStatusText(course.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-base font-medium text-ink">
                        {course.enrollments}
                      </td>
                      <td className="px-6 py-4 text-base font-medium text-ink">
                        ${course.revenue.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-base text-muted">
                        {new Date(course.updatedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a 
                            href={`/create-course?edit=${course.id}`}
                            className="text-brand-primary hover:text-brand-hover text-base font-semibold"
                          >
                            Editar
                          </a>
                          <select 
                            value={course.status}
                            onChange={(e) => handleStatusChange(course.id, e.target.value as any)}
                            className="border border-border rounded px-3 py-1.5 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                          >
                            <option value="draft">Borrador</option>
                            <option value="published">Publicar</option>
                            <option value="archived">Archivar</option>
                          </select>
                          <button
                            onClick={() => handleDeleteCourse(course.id)}
                            className="text-red-600 hover:text-red-800 text-base"
                            title="Eliminar curso"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-20 h-20 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-2xl font-bold text-ink mb-3">No hay cursos</h3>
            <p className="text-muted mb-6 text-lg">
              {filter === 'all' 
                ? 'Aún no has creado ningún curso.'
                : `No hay cursos con estado "${getStatusText(filter)}".`
              }
            </p>
            <a 
              href="/create-course"
              className="inline-flex items-center gap-3 bg-brand-primary text-white px-6 py-3 rounded-action font-semibold hover:bg-brand-hover transition-colors text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Crear tu primer curso
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

