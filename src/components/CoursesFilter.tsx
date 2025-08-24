'use client';

import { useState, useMemo } from 'react';
import { courses, type Course } from '@/data/courses';
import CourseCardAdvanced from '@/components/CourseCardAdvanced';

type FilterState = {
  category: 'Todos' | 'Robotica' | 'Roblox';
  level: 'Todos' | 'Inicial' | 'Intermedio' | 'Avanzado';
  status: 'Todos' | 'Disponible' | 'Proximamente';
  priceRange: 'Todos' | 'Hasta $300' | '$300-$400' | '$400+';
  sortBy: 'Destacados' | 'Precio: Menor a mayor' | 'Precio: Mayor a menor' | 'Calificación';
};

export default function CoursesFilter() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'Todos',
    level: 'Todos',
    status: 'Todos',
    priceRange: 'Todos',
    sortBy: 'Destacados',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      // Category filter
      if (filters.category !== 'Todos' && course.category !== filters.category) {
        return false;
      }

      // Level filter
      if (filters.level !== 'Todos' && course.level !== filters.level) {
        return false;
      }

      // Status filter
      if (filters.status !== 'Todos' && course.status !== filters.status) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 'Todos') {
        const price = course.price;
        switch (filters.priceRange) {
          case 'Hasta $300':
            if (price > 300) return false;
            break;
          case '$300-$400':
            if (price <= 300 || price > 400) return false;
            break;
          case '$400+':
            if (price <= 400) return false;
            break;
        }
      }

      return true;
    });

    // Sorting
    switch (filters.sortBy) {
      case 'Destacados':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
        break;
      case 'Precio: Menor a mayor':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Precio: Mayor a menor':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Calificación':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [filters]);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Filters Bar */}
      <div className="bg-white rounded-xl shadow-soft border p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
            <select
              value={filters.category}
              onChange={(e) => updateFilter('category', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option>Todos</option>
              <option>Robotica</option>
              <option>Roblox</option>
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nivel</label>
            <select
              value={filters.level}
              onChange={(e) => updateFilter('level', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option>Todos</option>
              <option>Inicial</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
            <select
              value={filters.status}
              onChange={(e) => updateFilter('status', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option>Todos</option>
              <option>Disponible</option>
              <option>Proximamente</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Precio</label>
            <select
              value={filters.priceRange}
              onChange={(e) => updateFilter('priceRange', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option>Todos</option>
              <option>Hasta $300</option>
              <option>$300-$400</option>
              <option>$400+</option>
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ordenar por</label>
            <select
              value={filters.sortBy}
              onChange={(e) => updateFilter('sortBy', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option>Destacados</option>
              <option>Precio: Menor a mayor</option>
              <option>Precio: Mayor a menor</option>
              <option>Calificación</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header & View Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {filteredAndSortedCourses.length} cursos encontrados
          </h3>
          <p className="text-gray-600">
            {filters.category !== 'Todos' && `Categoría: ${filters.category} • `}
            {filters.level !== 'Todos' && `Nivel: ${filters.level} • `}
            {filters.status !== 'Todos' && `Estado: ${filters.status}`}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-action p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'grid'
                ? 'bg-white text-brand-primary shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'list'
                ? 'bg-white text-brand-primary shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Courses Grid/List */}
      {filteredAndSortedCourses.length > 0 ? (
        <div className={
          viewMode === 'grid' 
            ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
            : 'space-y-4'
        }>
          {filteredAndSortedCourses.map((course, index) => (
            <CourseCardAdvanced 
              key={course.slug} 
              course={course} 
              viewMode={viewMode}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No encontramos cursos
          </h3>
          <p className="text-gray-600 mb-4">
            Intenta ajustar los filtros para encontrar más opciones
          </p>
          <button
            onClick={() => setFilters({
              category: 'Todos',
              level: 'Todos',
              status: 'Todos',
              priceRange: 'Todos',
              sortBy: 'Destacados',
            })}
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-action font-medium hover:bg-brand-hover transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}






