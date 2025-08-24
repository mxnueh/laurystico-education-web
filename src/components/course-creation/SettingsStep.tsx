'use client';

import { useState } from 'react';
import { CourseCreationData, CourseSettings } from '@/types/CourseCreation';

interface Props {
  data: Partial<CourseCreationData>;
  onUpdate: (data: Partial<CourseCreationData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function SettingsStep({ data, onUpdate, onNext, onPrev }: Props) {
  const [formData, setFormData] = useState({
    requirements: data.requirements || [],
    learningObjectives: data.learningObjectives || [],
    targetAudience: data.targetAudience || [],
    settings: data.settings || {
      enrollmentType: 'open' as const,
      certificateEnabled: true,
      completionCriteria: {
        minimumProgress: 80,
        requiredQuizzes: [],
        requiredAssignments: [],
      },
    },
  });

  const [newRequirement, setNewRequirement] = useState('');
  const [newObjective, setNewObjective] = useState('');
  const [newAudience, setNewAudience] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    onNext();
  };

  const addToList = (listType: 'requirements' | 'learningObjectives' | 'targetAudience', value: string) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [listType]: [...prev[listType], value.trim()]
      }));
      
      if (listType === 'requirements') setNewRequirement('');
      if (listType === 'learningObjectives') setNewObjective('');
      if (listType === 'targetAudience') setNewAudience('');
    }
  };

  const removeFromList = (listType: 'requirements' | 'learningObjectives' | 'targetAudience', index: number) => {
    setFormData(prev => ({
      ...prev,
      [listType]: prev[listType].filter((_, i) => i !== index)
    }));
  };

  const updateSettings = (field: keyof CourseSettings, value: any) => {
    setFormData(prev => ({
      ...prev,
      settings: { ...prev.settings, [field]: value }
    }));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Configuración avanzada</h2>
        <p className="text-gray-600">
          Define los requisitos, objetivos y configuraciones adicionales del curso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Requirements */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Requisitos previos</h3>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                placeholder="Ej: Conocimientos básicos de programación"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToList('requirements', newRequirement))}
              />
              <button
                type="button"
                onClick={() => addToList('requirements', newRequirement)}
                className="px-4 py-2 bg-brand-primary text-white rounded-action hover:bg-brand-hover transition-colors"
              >
                Agregar
              </button>
            </div>
            <div className="space-y-2">
              {formData.requirements.map((req, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                  <span className="text-gray-700">• {req}</span>
                  <button
                    type="button"
                    onClick={() => removeFromList('requirements', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Objetivos de aprendizaje</h3>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={newObjective}
                onChange={(e) => setNewObjective(e.target.value)}
                placeholder="Ej: Construir un robot que pueda moverse autónomamente"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToList('learningObjectives', newObjective))}
              />
              <button
                type="button"
                onClick={() => addToList('learningObjectives', newObjective)}
                className="px-4 py-2 bg-brand-primary text-white rounded-action hover:bg-brand-hover transition-colors"
              >
                Agregar
              </button>
            </div>
            <div className="space-y-2">
              {formData.learningObjectives.map((obj, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                  <span className="text-gray-700">• {obj}</span>
                  <button
                    type="button"
                    onClick={() => removeFromList('learningObjectives', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Audiencia objetivo</h3>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={newAudience}
                onChange={(e) => setNewAudience(e.target.value)}
                placeholder="Ej: Estudiantes de 12 a 16 años interesados en robótica"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToList('targetAudience', newAudience))}
              />
              <button
                type="button"
                onClick={() => addToList('targetAudience', newAudience)}
                className="px-4 py-2 bg-brand-primary text-white rounded-action hover:bg-brand-hover transition-colors"
              >
                Agregar
              </button>
            </div>
            <div className="space-y-2">
              {formData.targetAudience.map((aud, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                  <span className="text-gray-700">• {aud}</span>
                  <button
                    type="button"
                    onClick={() => removeFromList('targetAudience', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Settings */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuraciones del curso</h3>
          
          <div className="space-y-6">
            {/* Enrollment Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Tipo de inscripción
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="enrollment"
                    checked={formData.settings.enrollmentType === 'open'}
                    onChange={() => updateSettings('enrollmentType', 'open')}
                    className="mr-2"
                  />
                  <span>Abierta - Cualquiera puede inscribirse</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="enrollment"
                    checked={formData.settings.enrollmentType === 'approval'}
                    onChange={() => updateSettings('enrollmentType', 'approval')}
                    className="mr-2"
                  />
                  <span>Por aprobación - Requiere revisión manual</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="enrollment"
                    checked={formData.settings.enrollmentType === 'invite-only'}
                    onChange={() => updateSettings('enrollmentType', 'invite-only')}
                    className="mr-2"
                  />
                  <span>Solo por invitación</span>
                </label>
              </div>
            </div>

            {/* Certificate */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.settings.certificateEnabled}
                  onChange={(e) => updateSettings('certificateEnabled', e.target.checked)}
                  className="mr-2"
                />
                <span>Emitir certificado de finalización</span>
              </label>
            </div>

            {/* Completion Criteria */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Progreso mínimo para certificación (%)
              </label>
              <input
                type="range"
                min="50"
                max="100"
                step="5"
                value={formData.settings.completionCriteria.minimumProgress}
                onChange={(e) => updateSettings('completionCriteria', {
                  ...formData.settings.completionCriteria,
                  minimumProgress: parseInt(e.target.value)
                })}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>50%</span>
                <span className="font-medium">{formData.settings.completionCriteria.minimumProgress}%</span>
                <span>100%</span>
              </div>
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






