import Link from 'next/link';
import { type Course } from '@/data/courses';

type Props = {
  course: Course;
  viewMode: 'grid' | 'list';
  animationDelay?: number;
};

export default function CourseCardAdvanced({ course, viewMode, animationDelay = 0 }: Props) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Inicial': return 'bg-green-100 text-green-700';
      case 'Intermedio': return 'bg-yellow-100 text-yellow-700';
      case 'Avanzado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponible': return 'bg-green-100 text-green-700';
      case 'Proximamente': return 'bg-blue-100 text-blue-700';
      case 'Agotado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Robotica': return '🤖';
      case 'Roblox': return '🎮';
      default: return '💻';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (viewMode === 'list') {
    return (
      <Link href={`/courses/${course.slug}`}>
        <div 
          className="bg-white rounded-xl shadow-soft border p-6 hover-lift animate-scale-in flex gap-6"
          style={{ animationDelay: `${animationDelay}s` }}
        >
          {/* Course Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-24 bg-gradient-to-br from-brand-primary/15 to-brand-secondary/15 rounded-card flex items-center justify-center text-3xl">
              {course.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover rounded-card"
                />
              ) : (
                getCategoryIcon(course.category)
              )}
            </div>
          </div>

          {/* Course Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  {course.featured && (
                    <span className="inline-flex items-center gap-1 bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full text-xs font-medium">
                      ⭐ Destacado
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Info */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.durationLabel || `${course.durationHours}h`}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{course.age}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{course.instructor}</span>
                  </div>
                </div>
              </div>

              {/* Price & Rating */}
              <div className="text-right">
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(course.rating)}
                  <span className="text-sm text-gray-600 ml-1">
                    {course.rating}
                  </span>
                </div>
                <div className="space-y-1">
                  {course.originalPrice && (
                    <div className="text-sm text-gray-400 line-through">
                      ${course.originalPrice}
                    </div>
                  )}
                  <div className="text-xl font-bold text-brand-primary">
                    ${course.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid view
  return (
    <Link href={`/courses/${course.slug}`}>
      <div 
        className="bg-white rounded-xl shadow-soft border overflow-hidden hover-lift animate-scale-in"
        style={{ animationDelay: `${animationDelay}s` }}
      >
        {/* Course Image */}
        <div className="relative aspect-video bg-gradient-to-br from-brand-primary/15 to-brand-secondary/15">
          {course.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">
              {getCategoryIcon(course.category)}
            </div>
          )}
          
          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex gap-2">
            {course.featured && (
              <span className="inline-flex items-center gap-1 bg-brand-primary text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                ⭐ Destacado
              </span>
            )}
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
              {course.status}
            </span>
          </div>

          {/* Discount Badge */}
          {course.originalPrice && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
            <div className="flex items-center gap-1">
              {renderStars(course.rating)}
              <span className="text-sm text-gray-600 ml-1">
                {course.rating}
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
            {course.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[4rem]">
            {course.description}
          </p>

          {/* Course Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.durationLabel || `${course.durationHours}h`}</span>
              <span className="text-gray-400">•</span>
              <span>{course.age}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Instructor: {course.instructor}</span>
            </div>
          </div>

          {/* Prerequisites */}
          {course.prerequisite && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <div className="text-xs font-medium text-yellow-800">Prerequisito:</div>
                  <div className="text-xs text-yellow-700">{course.prerequisite}</div>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {course.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-end pt-4 border-t">
            <div className="flex items-center gap-2">
              {course.certificated && (
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              <span className="text-xs font-medium text-brand-primary">
                Ver curso →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}




