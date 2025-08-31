export type Course = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  category: 'Robotica' | 'Roblox' | 'Electronica' | 'Python';
  level: 'Inicial' | 'Intermedio' | 'Avanzado';
  durationHours: number;
  durationLabel?: string;
  tags: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  prerequisite?: string;
  age: string;
  featured?: boolean;
  status: 'Disponible' | 'Proximamente' | 'Agotado';
  instructor: string;
  certificated: boolean;
};

export const courses: Course[] = [
  {
    slug: 'robotica-lego-wedo-2',
    title: 'Robótica con LEGO WeDo 2.0',
    description: 'Construye y programa modelos con motores y sensores usando LEGO WeDo 2.0. Perfecto para iniciar en robótica.',
    image: '/fotos/Porgtade de lego en cursos.jpg',
    category: 'Robotica',
    level: 'Inicial',
    durationHours: 12,
    durationLabel: '12 clases',
    tags: ['LEGO', 'Sensores', 'Motores'],
    price: 299,
    rating: 4.8,
    studentsCount: 0,
    age: '6-12 años',
    featured: true,
    status: 'Disponible',
    instructor: 'Laury Emmanuel Jaquez',
    certificated: true,
  },
  {
    slug: 'roblox-studio-creacion-juegos',
    title: 'Creación de Juegos con Roblox Studio',
    description: 'Aprende a crear juegos increíbles con Roblox Studio. Desde modelado 3D hasta programación con Lua.',
    image: '/fotos/hero roblox.JPG',
    category: 'Roblox',
    level: 'Inicial',
    durationHours: 16,
    durationLabel: '16 clases',
    tags: ['Roblox Studio', 'Lua', 'Modelado 3D', 'Game Design'],
    price: 399,
    rating: 4.9,
    studentsCount: 0,
    age: '10 en adelante',
    featured: true,
    status: 'Disponible',
    instructor: 'Laury Emmanuel Jaquez',
    certificated: true,
  },
  {
    slug: 'programacion-python-desde-cero',
    title: 'Programación con Python desde Cero',
    description: 'Aprende programación desde los fundamentos con Python. Desde variables y funciones hasta proyectos reales y aplicaciones web.',
    image: '/fotos/Escena Tecnológica Isométrica.jpg.png',
    category: 'Python',
    level: 'Inicial',
    durationHours: 18,
    durationLabel: '18 clases',
    tags: ['Python', 'Programación', 'Algoritmos', 'Proyectos', 'Web'],
    price: 349,
    rating: 4.8,
    studentsCount: 0,
    age: '12 en adelante',
    featured: true,
    status: 'Disponible',
    instructor: 'Laury Emmanuel Jaquez',
    certificated: true,
  },
];

