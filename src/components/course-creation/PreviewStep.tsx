'use client';

import { CourseCreationData } from '@/types/CourseCreation';

interface Props {
  data: Partial<CourseCreationData>;
  onUpdate: (data: Partial<CourseCreationData>) => void;
  onPrev: () => void;
  onPublish: () => void;
  onSaveDraft: () => void;
  isSaving: boolean;
}

export default function PreviewStep({ data, onPrev, onPublish, onSaveDraft, isSaving }: Props) {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const totalDuration = data.modules?.reduce((total, module) => 
    total + module.lessons.reduce((moduleTotal, lesson) => moduleTotal + lesson.duration, 0), 0
  ) || 0;

  const totalLessons = data.modules?.reduce((total, mod) => total + mod.lessons.length, 0) || 0;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Vista previa del curso</h2>
        <p className="text-gray-600">
          Revisa toda la información antes de publicar tu curso.
        </p>
      </div>

      <div className="space-y-8">
        {/* Course Preview Card */}
        <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
          {/* Course Header */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
                <p className="text-white/90 mb-4">{data.shortDescription}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full">{data.category}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">{data.level}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">{data.language}</span>
                </div>
              </div>
              <div className="text-right">
                {data.pricing?.type === 'paid' ? (
                  <div>
                    {data.pricing.discountPrice && (
                      <div className="text-white/70 line-through text-lg">
                        ${data.pricing.price} {data.pricing.currency}
                      </div>
                    )}
                    <div className="text-3xl font-bold">
                      ${data.pricing.discountPrice || data.pricing.price} {data.pricing.currency}
                    </div>
                  </div>
                ) : (
                  <div className="text-3xl font-bold">GRATIS</div>
                )}
              </div>
            </div>
          </div>

          {/* Course Stats */}
          <div className="bg-gray-50 px-8 py-4 border-b">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-brand-primary">{data.modules?.length || 0}</div>
                <div className="text-gray-600 text-sm">Módulos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-primary">{totalLessons}</div>
                <div className="text-gray-600 text-sm">Lecciones</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-primary">{formatDuration(totalDuration)}</div>
                <div className="text-gray-600 text-sm">Duración</div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
                  <p className="text-gray-700 leading-relaxed">{data.description}</p>
                </div>

                {/* Learning Objectives */}
                {data.learningObjectives && data.learningObjectives.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Qué aprenderás</h3>
                    <ul className="space-y-2">
                      {data.learningObjectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                {data.requirements && data.requirements.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Requisitos</h3>
                    <ul className="space-y-2">
                      {data.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Instructor */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Instructor</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      {data.instructorAvatar ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img 
                          src={data.instructorAvatar} 
                          alt="Instructor" 
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{data.instructorName}</div>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-3">{data.instructorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {data.tags && data.tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Etiquetas</h3>
                    <div className="flex flex-wrap gap-2">
                      {data.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Course Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Configuración</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inscripción:</span>
                      <span className="font-medium">
                        {data.settings?.enrollmentType === 'open' ? 'Abierta' :
                         data.settings?.enrollmentType === 'approval' ? 'Por aprobación' :
                         'Solo por invitación'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certificado:</span>
                      <span className="font-medium">
                        {data.settings?.certificateEnabled ? 'Incluido' : 'No incluido'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Progreso mínimo:</span>
                      <span className="font-medium">{data.settings?.completionCriteria.minimumProgress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            {data.modules && data.modules.length > 0 && (
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contenido del curso</h3>
                <div className="space-y-4">
                  {data.modules.map((module, index) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg">
                      <div className="bg-gray-50 px-4 py-3 rounded-t-lg">
                        <h4 className="font-semibold text-gray-900">
                          Módulo {index + 1}: {module.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {module.lessons.length} lecciones • {formatDuration(module.lessons.reduce((total, lesson) => total + lesson.duration, 0))}
                        </p>
                      </div>
                      <div className="px-4 py-3">
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lesson.id} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-400">{lessonIndex + 1}.</span>
                                <span className="text-gray-700">{lesson.title}</span>
                                {lesson.isPreview && (
                                  <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs">
                                    Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-gray-500">{formatDuration(lesson.duration)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Publication Checklist */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Lista de verificación</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-800">Información básica completa</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-800">Instructor configurado</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${(data.modules?.length || 0) > 0 ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-800">Al menos un módulo con lecciones</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-800">Precio configurado</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <button
            type="button"
            onClick={onPrev}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-action hover:bg-gray-50 transition-colors"
          >
            Anterior
          </button>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onSaveDraft}
              disabled={isSaving}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-action hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              {isSaving ? 'Guardando...' : 'Guardar borrador'}
            </button>
            
            <button
              type="button"
              onClick={onPublish}
              disabled={isSaving || (data.modules?.length || 0) === 0}
              className="px-8 py-3 bg-green-600 text-white rounded-action font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? 'Publicando...' : '🚀 Publicar curso'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}






