import Link from 'next/link';
import Image from 'next/image';
import { type Course } from '@/data/courses';

type Props = Course;

export default function CourseCard(course: Props) {
  const { slug, title, description, image, category, level, durationHours, durationLabel, tags, price, originalPrice, rating } = course;
  return (
    <Link href={`/courses/${slug}`} className="block card overflow-hidden">
      <div className="aspect-video rounded-t-[inherit] overflow-hidden bg-surface">
        {image ? (
          <Image 
            src={image} 
            alt={title} 
            width={400}
            height={225}
            className="h-full w-full object-cover"
            priority={course.featured}
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-muted">Sin imagen</div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-muted-2">
          <span>{category}</span>
          <span>{level} · {durationLabel ?? `${durationHours}h`}</span>
        </div>
        <h3 className="mt-1 font-bold text-xl text-ink tracking-tight">{title}</h3>
        <p className="mt-2 text-base text-muted leading-relaxed">{description}</p>
        
        {/* Rating */}
        <div className="mt-2 flex items-center gap-4 text-xs text-muted-2">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-action border border-border text-muted">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

