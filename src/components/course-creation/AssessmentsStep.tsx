'use client';

import { useState } from 'react';
import { CourseCreationData } from '@/types/CourseCreation';

interface Props {
  data: Partial<CourseCreationData>;
  onUpdate: (data: Partial<CourseCreationData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function AssessmentsStep({ data, onUpdate, onNext, onPrev }: Props) {
  const [quizzes] = useState(data.quizzes || []);
  const [assignments] = useState(data.assignments || []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ quizzes, assignments });
    onNext();
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Evaluaciones</h2>
        <p className="text-gray-600">
          Configura quizzes, tareas y criterios de evaluación para tu curso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Coming Soon Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">🚧</div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Próximamente</h3>
          <p className="text-blue-700">
            Las funciones de evaluación avanzadas estarán disponibles en la próxima versión.
            Por ahora, puedes continuar y agregar evaluaciones más tarde.
          </p>
        </div>

        {/* Basic Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Configuración básica</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span>Requerir evaluaciones para certificación</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span>Permitir intentos múltiples</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded" />
              <span>Evaluación por pares</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span>Feedback automático</span>
            </label>
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
          <button
            type="submit"
            className="px-8 py-3 bg-brand-primary text-white rounded-action font-medium hover:bg-brand-hover transition-colors"
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}






