'use client';

import { useState, useEffect } from 'react';
import { CourseCreationData, COURSE_CATEGORIES, VALIDATION_RULES } from '@/types/CourseCreation';

interface Props {
  data: Partial<CourseCreationData>;
  onUpdate: (data: Partial<CourseCreationData>) => void;
  onNext: () => void;
}

export default function BasicInfoStep({ data, onUpdate, onNext }: Props) {
  const [formData, setFormData] = useState({
    title: data.title || '',
    shortDescription: data.shortDescription || '',
    description: data.description || '',
    category: data.category || '',
    subcategory: data.subcategory || '',
    language: data.language || 'es',
    level: data.level || 'Principiante',
    tags: data.tags || [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [newTag, setNewTag] = useState('');

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      onUpdate({ ...formData, slug });
    }
  }, [formData.title, formData, onUpdate]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'El título es requerido';
    } else if (formData.title.length < VALIDATION_RULES.title.minLength) {
      newErrors.title = `El título debe tener al menos ${VALIDATION_RULES.title.minLength} caracteres`;
    } else if (formData.title.length > VALIDATION_RULES.title.maxLength) {
      newErrors.title = `El título no puede exceder ${VALIDATION_RULES.title.maxLength} caracteres`;
    }

    // Short description validation
    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = 'La descripción corta es requerida';
    } else if (formData.shortDescription.length < VALIDATION_RULES.shortDescription.minLength) {
      newErrors.shortDescription = `Debe tener al menos ${VALIDATION_RULES.shortDescription.minLength} caracteres`;
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    } else if (formData.description.length < VALIDATION_RULES.description.minLength) {
      newErrors.description = `Debe tener al menos ${VALIDATION_RULES.description.minLength} caracteres`;
    }

    // Category validation
    if (!formData.category) {
      newErrors.category = 'La categoría es requerida';
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
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      const updatedTags = [...formData.tags, newTag.trim()];
      setFormData(prev => ({ ...prev, tags: updatedTags }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = formData.tags.filter(tag => tag !== tagToRemove);
    setFormData(prev => ({ ...prev, tags: updatedTags }));
  };

  const selectedCategory = COURSE_CATEGORIES.find(cat => cat.id === formData.category);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-ink mb-3 tracking-tight">Aula Virtual - Información básica</h2>
        <p className="text-muted text-lg">
          Bienvenido al Aula Virtual. Proporciona la información esencial que ayudará a los estudiantes a encontrar y entender tu curso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Título del curso *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="Ej: Programación de Robots con Arduino para Principiantes"
            className={`w-full px-4 py-3 border rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          <p className="text-gray-500 text-sm mt-1">
            {formData.title.length}/{VALIDATION_RULES.title.maxLength} caracteres
          </p>
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción corta *
          </label>
          <textarea
            value={formData.shortDescription}
            onChange={(e) => handleInputChange('shortDescription', e.target.value)}
            placeholder="Una descripción breve que aparecerá en las tarjetas de curso..."
            rows={2}
            className={`w-full px-4 py-3 border rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
              errors.shortDescription ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.shortDescription && <p className="text-red-500 text-sm mt-1">{errors.shortDescription}</p>}
          <p className="text-gray-500 text-sm mt-1">
            {formData.shortDescription.length}/{VALIDATION_RULES.shortDescription.maxLength} caracteres
          </p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción completa *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe detalladamente qué aprenderán los estudiantes, qué proyectos realizarán, y por qué este curso es valioso..."
            rows={6}
            className={`w-full px-4 py-3 border rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          <p className="text-gray-500 text-sm mt-1">
            {formData.description.length}/{VALIDATION_RULES.description.maxLength} caracteres
          </p>
        </div>

        {/* Category and Level Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoría *
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className={`w-full px-4 py-3 border rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
                errors.category ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Seleccionar categoría</option>
              {COURSE_CATEGORIES.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
          </div>

          {/* Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nivel *
            </label>
            <select
              value={formData.level}
              onChange={(e) => handleInputChange('level', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
              <option value="Todos los niveles">Todos los niveles</option>
            </select>
          </div>
        </div>

        {/* Subcategory */}
        {selectedCategory && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subcategoría
            </label>
            <select
              value={formData.subcategory || ''}
              onChange={(e) => handleInputChange('subcategory', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="">Seleccionar subcategoría (opcional)</option>
              {selectedCategory.subcategories.map(sub => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Idioma del curso
          </label>
          <select
            value={formData.language}
            onChange={(e) => handleInputChange('language', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="pt">Portugués</option>
            <option value="fr">Francés</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Etiquetas (Tags)
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Agregar etiqueta..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            />
            <button
              type="button"
              onClick={addTag}
              className="px-4 py-2 bg-brand-primary text-white rounded-action hover:bg-brand-hover transition-colors"
            >
              Agregar
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-blue-900"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Las etiquetas ayudan a los estudiantes a encontrar tu curso (máximo 10)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end pt-6 border-t">
          <button
            type="submit"
            className="px-8 py-3 bg-brand-primary text-white rounded-action font-medium hover:bg-brand-hover transition-colors"
          >
            Continuar al siguiente paso
          </button>
        </div>
      </form>
    </div>
  );
}
