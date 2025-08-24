'use client';

import { useState } from 'react';
import { CourseCreationData, CourseModule, CourseLesson } from '@/types/CourseCreation';

interface Props {
  data: Partial<CourseCreationData>;
  onUpdate: (data: Partial<CourseCreationData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ContentStep({ data, onUpdate, onNext, onPrev }: Props) {
  const [modules, setModules] = useState<CourseModule[]>(data.modules || []);
  const [showAddModule, setShowAddModule] = useState(false);
  const [editingModule, setEditingModule] = useState<number | null>(null);
  const [showAddLesson, setShowAddLesson] = useState<number | null>(null);

  const [newModule, setNewModule] = useState({
    title: '',
    description: '',
    duration: 0,
  });

  const [newLesson, setNewLesson] = useState({
    title: '',
    description: '',
    content: '',
    videoUrl: '',
    duration: 0,
    type: 'video' as const,
    isPreview: false,
  });

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const calculateTotalDuration = (moduleList: CourseModule[]) => {
    return moduleList.reduce((total, module) => 
      total + module.lessons.reduce((moduleTotal, lesson) => moduleTotal + lesson.duration, 0), 0
    );
  };

  const addModule = () => {
    if (newModule.title.trim()) {
      const module: CourseModule = {
        id: generateId(),
        title: newModule.title,
        description: newModule.description,
        duration: newModule.duration,
        order: modules.length + 1,
        lessons: [],
        isPublished: false,
      };
      
      const updatedModules = [...modules, module];
      setModules(updatedModules);
      onUpdate({ 
        modules: updatedModules,
        totalDuration: calculateTotalDuration(updatedModules),
        totalLessons: updatedModules.reduce((total, mod) => total + mod.lessons.length, 0),
      });
      
      setNewModule({ title: '', description: '', duration: 0 });
      setShowAddModule(false);
    }
  };

  const updateModule = (moduleIndex: number, updatedModule: Partial<CourseModule>) => {
    const updatedModules = modules.map((module, index) => 
      index === moduleIndex ? { ...module, ...updatedModule } : module
    );
    setModules(updatedModules);
    onUpdate({ 
      modules: updatedModules,
      totalDuration: calculateTotalDuration(updatedModules),
    });
  };

  const deleteModule = (moduleIndex: number) => {
    const updatedModules = modules.filter((_, index) => index !== moduleIndex);
    setModules(updatedModules);
    onUpdate({ 
      modules: updatedModules,
      totalDuration: calculateTotalDuration(updatedModules),
      totalLessons: updatedModules.reduce((total, mod) => total + mod.lessons.length, 0),
    });
  };

  const addLesson = (moduleIndex: number) => {
    if (newLesson.title.trim()) {
      const lesson: CourseLesson = {
        id: generateId(),
        title: newLesson.title,
        description: newLesson.description,
        content: newLesson.content,
        videoUrl: newLesson.videoUrl || undefined,
        duration: newLesson.duration,
        order: modules[moduleIndex].lessons.length + 1,
        type: newLesson.type,
        isPreview: newLesson.isPreview,
        resources: [],
        documentUrls: [],
      };

      const updatedModules = modules.map((module, index) => 
        index === moduleIndex 
          ? { ...module, lessons: [...module.lessons, lesson] }
          : module
      );
      
      setModules(updatedModules);
      onUpdate({ 
        modules: updatedModules,
        totalDuration: calculateTotalDuration(updatedModules),
        totalLessons: updatedModules.reduce((total, mod) => total + mod.lessons.length, 0),
      });
      
      setNewLesson({
        title: '',
        description: '',
        content: '',
        videoUrl: '',
        duration: 0,
        type: 'video',
        isPreview: false,
      });
      setShowAddLesson(null);
    }
  };

  const deleteLesson = (moduleIndex: number, lessonIndex: number) => {
    const updatedModules = modules.map((module, index) => 
      index === moduleIndex 
        ? { ...module, lessons: module.lessons.filter((_, lIndex) => lIndex !== lessonIndex) }
        : module
    );
    
    setModules(updatedModules);
    onUpdate({ 
      modules: updatedModules,
      totalDuration: calculateTotalDuration(updatedModules),
      totalLessons: updatedModules.reduce((total, mod) => total + mod.lessons.length, 0),
    });
  };

  const moveModule = (fromIndex: number, toIndex: number) => {
    const updatedModules = [...modules];
    const [movedModule] = updatedModules.splice(fromIndex, 1);
    updatedModules.splice(toIndex, 0, movedModule);
    
    // Update order numbers
    updatedModules.forEach((module, index) => {
      module.order = index + 1;
    });
    
    setModules(updatedModules);
    onUpdate({ modules: updatedModules });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modules.length > 0) {
      onNext();
    }
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const totalDuration = calculateTotalDuration(modules);
  const totalLessons = modules.reduce((total, mod) => total + mod.lessons.length, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Contenido del curso</h2>
        <p className="text-gray-600">
          Organiza tu curso en módulos y lecciones. Cada módulo debe tener un tema específico y las lecciones deben seguir una progresión lógica.
        </p>
      </div>

      {/* Course Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">{modules.length}</div>
          <div className="text-blue-800 text-sm">Módulos</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">{totalLessons}</div>
          <div className="text-green-800 text-sm">Lecciones</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600">{formatDuration(totalDuration)}</div>
          <div className="text-purple-800 text-sm">Duración total</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Modules List */}
        <div className="space-y-4">
          {modules.map((module, moduleIndex) => (
            <div key={module.id} className="border border-gray-200 rounded-xl">
              {/* Module Header */}
              <div className="bg-gray-50 px-6 py-4 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    {editingModule === moduleIndex ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={module.title}
                          onChange={(e) => updateModule(moduleIndex, { title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        />
                        <textarea
                          value={module.description}
                          onChange={(e) => updateModule(moduleIndex, { description: e.target.value })}
                          placeholder="Descripción del módulo"
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setEditingModule(null)}
                            className="px-3 py-1 bg-brand-primary text-white rounded text-sm hover:bg-brand-hover transition-colors"
                          >
                            Guardar
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingModule(null)}
                            className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50 transition-colors"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Módulo {module.order}: {module.title}
                        </h3>
                        {module.description && (
                          <p className="text-gray-600 text-sm mt-1">{module.description}</p>
                        )}
                        <div className="text-gray-500 text-sm mt-2">
                          {module.lessons.length} lecciones • {formatDuration(module.lessons.reduce((total, lesson) => total + lesson.duration, 0))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    {/* Move buttons */}
                    <button
                      type="button"
                      onClick={() => moveModule(moduleIndex, moduleIndex - 1)}
                      disabled={moduleIndex === 0}
                      className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => moveModule(moduleIndex, moduleIndex + 1)}
                      disabled={moduleIndex === modules.length - 1}
                      className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setEditingModule(moduleIndex)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => deleteModule(moduleIndex)}
                      className="p-1 text-red-400 hover:text-red-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Module Lessons */}
              <div className="p-6">
                {module.lessons.length > 0 ? (
                  <div className="space-y-3 mb-4">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lesson.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-gray-900">
                              {lessonIndex + 1}. {lesson.title}
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              lesson.type === 'video' ? 'bg-blue-100 text-blue-700' :
                              lesson.type === 'text' ? 'bg-green-100 text-green-700' :
                              lesson.type === 'quiz' ? 'bg-purple-100 text-purple-700' :
                              lesson.type === 'assignment' ? 'bg-orange-100 text-orange-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {lesson.type === 'video' ? '📹 Video' :
                               lesson.type === 'text' ? '📝 Texto' :
                               lesson.type === 'quiz' ? '❓ Quiz' :
                               lesson.type === 'assignment' ? '📋 Tarea' :
                               '🔴 En vivo'}
                            </span>
                            {lesson.isPreview && (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                                👀 Preview
                              </span>
                            )}
                          </div>
                          <div className="text-gray-600 text-sm mt-1">
                            {lesson.description} • {formatDuration(lesson.duration)}
                          </div>
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => deleteLesson(moduleIndex, lessonIndex)}
                          className="p-1 text-red-400 hover:text-red-600 ml-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    Este módulo no tiene lecciones aún
                  </div>
                )}

                {/* Add Lesson Form */}
                {showAddLesson === moduleIndex ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Agregar lección</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={newLesson.title}
                        onChange={(e) => setNewLesson(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Título de la lección"
                        className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      />
                      <textarea
                        value={newLesson.description}
                        onChange={(e) => setNewLesson(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Descripción de la lección"
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <select
                          value={newLesson.type}
                          onChange={(e) => setNewLesson(prev => ({ ...prev, type: e.target.value as any }))}
                          className="px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        >
                          <option value="video">📹 Video</option>
                          <option value="text">📝 Texto</option>
                          <option value="quiz">❓ Quiz</option>
                          <option value="assignment">📋 Tarea</option>
                          <option value="live">🔴 En vivo</option>
                        </select>
                        <input
                          type="number"
                          value={newLesson.duration}
                          onChange={(e) => setNewLesson(prev => ({ ...prev, duration: parseInt(e.target.value) || 0 }))}
                          placeholder="Duración (min)"
                          className="px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        />
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={newLesson.isPreview}
                            onChange={(e) => setNewLesson(prev => ({ ...prev, isPreview: e.target.checked }))}
                            className="rounded"
                          />
                          <span className="text-sm">Preview gratuito</span>
                        </label>
                      </div>
                      {newLesson.type === 'video' && (
                        <input
                          type="url"
                          value={newLesson.videoUrl}
                          onChange={(e) => setNewLesson(prev => ({ ...prev, videoUrl: e.target.value }))}
                          placeholder="URL del video (opcional)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        />
                      )}
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => addLesson(moduleIndex)}
                          className="px-4 py-2 bg-brand-primary text-white rounded-action hover:bg-brand-hover transition-colors"
                        >
                          Agregar lección
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowAddLesson(null)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-action hover:bg-gray-50 transition-colors"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowAddLesson(moduleIndex)}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    + Agregar lección
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Module */}
        {showAddModule ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-medium text-gray-900 mb-4">Agregar nuevo módulo</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newModule.title}
                onChange={(e) => setNewModule(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Título del módulo"
                className="w-full px-4 py-3 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <textarea
                value={newModule.description}
                onChange={(e) => setNewModule(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Descripción del módulo"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={addModule}
                  className="px-6 py-3 bg-brand-primary text-white rounded-action font-medium hover:bg-brand-hover transition-colors"
                >
                  Crear módulo
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModule(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-action hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowAddModule(true)}
            className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-colors font-medium"
          >
            + Agregar nuevo módulo
          </button>
        )}

        {/* Validation Message */}
        {modules.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              ⚠️ Debes agregar al menos un módulo con lecciones para continuar.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <button
            type="button"
            onClick={onPrev}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-action hover:bg-gray-50 transition-colors"
          >
            Anterior
          </button>
          <button
            type="submit"
            disabled={modules.length === 0}
            className="px-8 py-3 bg-brand-primary text-white rounded-action font-medium hover:bg-brand-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}






