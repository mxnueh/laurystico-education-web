import { notFound } from 'next/navigation';
import Image from 'next/image';
import { courses } from '@/data/courses';
import WeDoCourse from './WeDoCourse';
import RobloxCourse from './RobloxCourse';
import ElectronicsCourse from './ElectronicsCourse';
import PythonCourse from './PythonCourse';

type Params = { params: { slug: string } };

export default function CourseDetailPage({ params }: Params) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return notFound();

  if (course.slug === 'robotica-lego-wedo-2') {
    return <WeDoCourse />;
  }

  if (course.slug === 'roblox-studio-creacion-juegos') {
    return <RobloxCourse />;
  }

  if (course.slug === 'robotica-electronica-avanzada') {
    return <ElectronicsCourse />;
  }

  if (course.slug === 'programacion-python-desde-cero') {
    return <PythonCourse />;
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">{course.title}</h1>
        <p className="text-muted">{course.category} · {course.level} · {course.durationLabel ?? `${course.durationHours}h`}</p>
      </header>
      <div className="rounded-card overflow-hidden border">
        {course.image ? (
          <Image 
            src={course.image} 
            alt={course.title} 
            width={800}
            height={450}
            className="w-full h-auto"
            priority
          />
        ) : null}
      </div>
      <p className="text-ink/80">{course.description}</p>
    </article>
  );
}

