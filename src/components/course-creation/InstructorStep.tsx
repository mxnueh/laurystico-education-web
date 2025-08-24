'use client';

import { useState } from 'react';
import { CourseCreationData } from '@/types/CourseCreation';

interface Props {
  data: Partial<CourseCreationData>;
  onUpdate: (data: Partial<CourseCreationData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function InstructorStep({ data, onUpdate, onNext, onPrev }: Props) {
  const [formData, setFormData] = useState({
    instructorId: data.instructorId || 'current-user',
    instructorName: data.instructorName || 'Laury Emmanuel Jaquez',
    instructorBio: data.instructorBio || '',
    instructorAvatar: data.instructorAvatar || '',
    coInstructors: data.coInstructors || [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showAddCoInstructor, setShowAddCoInstructor] = useState(false);
  const [newCoInstructor, setNewCoInstructor] = useState({
    name: '',
    bio: '',
    avatar: '',
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.instructorName.trim()) {
      newErrors.instructorName = 'El nombre del instructor es requerido';
    }

    if (!formData.instructorBio.trim()) {
      newErrors.instructorBio = 'La biografía del instructor es requerida';
    } else if (formData.instructorBio.length < 50) {
      newErrors.instructorBio = 'La biografía debe tener al menos 50 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onUpdate(formData);
      onNext();
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addCoInstructor = () => {
    if (newCoInstructor.name.trim() && newCoInstructor.bio.trim()) {
      const updatedCoInstructors = [...formData.coInstructors, { ...newCoInstructor }];
      setFormData(prev => ({ ...prev, coInstructors: updatedCoInstructors }));
      setNewCoInstructor({ name: '', bio: '', avatar: '' });
      setShowAddCoInstructor(false);
    }
  };

  const removeCoInstructor = (index: number) => {
    const updatedCoInstructors = formData.coInstructors.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, coInstructors: updatedCoInstructors }));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Información del instructor</h2>
        <p className="text-gray-600">
          Los estudiantes quieren conocer a sus instructores. Proporciona información que genere confianza y credibilidad.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Instructor */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructor principal</h3>
          
          {/* Instructor Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              value={formData.instructorName}
              onChange={(e) => handleInputChange('instructorName', e.target.value)}
              placeholder="Nombre completo del instructor"
              className={`w-full px-4 py-3 border rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
                errors.instructorName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.instructorName && <p className="text-red-500 text-sm mt-1">{errors.instructorName}</p>}
          </div>

          {/* Instructor Bio */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Biografía profesional *
            </label>
            <textarea
              value={formData.instructorBio}
              onChange={(e) => handleInputChange('instructorBio', e.target.value)}
              placeholder="Describe tu experiencia, logros, certificaciones y por qué eres la persona ideal para enseñar este curso..."
              rows={6}
              className={`w-full px-4 py-3 border rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
                errors.instructorBio ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.instructorBio && <p className="text-red-500 text-sm mt-1">{errors.instructorBio}</p>}
            <p className="text-gray-500 text-sm mt-1">
              {formData.instructorBio.length}/2000 caracteres (mínimo 50)
            </p>
          </div>

          {/* Instructor Avatar */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Foto de perfil
            </label>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                {formData.instructorAvatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={formData.instructorAvatar} 
                    alt="Avatar" 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="url"
                  value={formData.instructorAvatar}
                  onChange={(e) => handleInputChange('instructorAvatar', e.target.value)}
                  placeholder="URL de la imagen (opcional)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
                <p className="text-gray-500 text-sm mt-1">
                  Recomendado: 400x400px, formato JPG o PNG
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Instructors */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Co-instructores (opcional)</h3>
            <button
              type="button"
              onClick={() => setShowAddCoInstructor(true)}
              className="px-4 py-2 border border-brand-primary text-brand-primary rounded-action hover:bg-brand-primary hover:text-white transition-colors"
            >
              + Agregar co-instructor
            </button>
          </div>

          {/* Existing Co-Instructors */}
          {formData.coInstructors.length > 0 && (
            <div className="space-y-4 mb-4">
              {formData.coInstructors.map((coInstructor, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{coInstructor.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">{coInstructor.bio}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeCoInstructor(index)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Co-Instructor Form */}
          {showAddCoInstructor && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Agregar co-instructor</h4>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={newCoInstructor.name}
                    onChange={(e) => setNewCoInstructor(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Nombre del co-instructor"
                    className="w-full px-4 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    value={newCoInstructor.bio}
                    onChange={(e) => setNewCoInstructor(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Biografía del co-instructor"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="url"
                    value={newCoInstructor.avatar}
                    onChange={(e) => setNewCoInstructor(prev => ({ ...prev, avatar: e.target.value }))}
                    placeholder="URL de la foto (opcional)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={addCoInstructor}
                    className="px-4 py-2 bg-brand-primary text-white rounded-action hover:bg-brand-hover transition-colors"
                  >
                    Agregar
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddCoInstructor(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-action hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-medium text-yellow-800 mb-2">💡 Consejos para una biografía efectiva</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Menciona tu experiencia relevante en el tema</li>
            <li>• Incluye certificaciones y logros importantes</li>
            <li>• Explica tu método de enseñanza</li>
            <li>• Agrega un toque personal que genere conexión</li>
            <li>• Mantén un tono profesional pero cercano</li>
          </ul>
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






