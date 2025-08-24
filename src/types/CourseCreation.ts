// Modelo completo para creación de cursos
export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: number; // en minutos
  order: number;
  lessons: CourseLesson[];
  isPublished: boolean;
}

export interface CourseLesson {
  id: string;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
  documentUrls?: string[];
  duration: number; // en minutos
  order: number;
  type: 'video' | 'text' | 'quiz' | 'assignment' | 'live';
  isPreview: boolean; // si es gratis para preview
  resources: CourseResource[];
}

export interface CourseResource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'audio' | 'image' | 'code' | 'link';
  url: string;
  description?: string;
  downloadable: boolean;
}

export interface CourseQuiz {
  id: string;
  lessonId: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number; // en minutos
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'text' | 'code';
  question: string;
  options?: string[]; // para multiple choice
  correctAnswer: string | number;
  explanation?: string;
  points: number;
}

export interface CourseAssignment {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  instructions: string;
  dueDate?: Date;
  maxPoints: number;
  allowedFileTypes: string[];
  submissionType: 'file' | 'text' | 'link' | 'code';
}

export interface CoursePricing {
  type: 'free' | 'paid' | 'subscription' | 'tiered';
  price?: number;
  currency: string;
  discountPrice?: number;
  subscriptionPeriod?: 'monthly' | 'yearly';
  paymentPlans?: {
    name: string;
    price: number;
    features: string[];
  }[];
}

export interface CourseSettings {
  enrollmentType: 'open' | 'approval' | 'invite-only';
  certificateEnabled: boolean;
  completionCriteria: {
    minimumProgress: number; // porcentaje
    requiredQuizzes: string[];
    requiredAssignments: string[];
  };
  accessDuration?: number; // días, null = lifetime
  maxStudents?: number;
  prerequisites: string[]; // IDs de otros cursos
}

export interface CourseAnalytics {
  totalEnrollments: number;
  activeStudents: number;
  completionRate: number;
  averageRating: number;
  totalRevenue: number;
  monthlyEnrollments: number[];
}

// Modelo principal del curso
export interface CourseCreationData {
  // Información básica
  id?: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  subcategory?: string;
  tags: string[];
  language: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Todos los niveles';
  
  // Media
  thumbnailUrl?: string;
  trailerVideoUrl?: string;
  imageGallery: string[];
  
  // Instructor
  instructorId: string;
  instructorName: string;
  instructorBio: string;
  instructorAvatar?: string;
  coInstructors?: {
    name: string;
    bio: string;
    avatar?: string;
  }[];
  
  // Contenido
  modules: CourseModule[];
  totalDuration: number; // calculado automáticamente
  totalLessons: number; // calculado automáticamente
  
  // Evaluación
  quizzes: CourseQuiz[];
  assignments: CourseAssignment[];
  
  // Precios y acceso
  pricing: CoursePricing;
  settings: CourseSettings;
  
  // Metadata
  status: 'draft' | 'review' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  
  // SEO y marketing
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;
  
  // Requisitos y resultados
  requirements: string[];
  learningObjectives: string[];
  targetAudience: string[];
  
  // Analytics (solo lectura)
  analytics?: CourseAnalytics;
}

// Estados del formulario
export interface CourseCreationStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  validationErrors?: string[];
}

export const COURSE_CREATION_STEPS: CourseCreationStep[] = [
  {
    id: 'basic-info',
    title: 'Información básica',
    description: 'Título, descripción y categoría del curso',
    isCompleted: false,
    isActive: true,
  },
  {
    id: 'instructor',
    title: 'Información del instructor',
    description: 'Datos del instructor y co-instructores',
    isCompleted: false,
    isActive: false,
  },
  {
    id: 'content',
    title: 'Contenido del curso',
    description: 'Módulos, lecciones y materiales',
    isCompleted: false,
    isActive: false,
  },
  {
    id: 'assessments',
    title: 'Evaluaciones',
    description: 'Quizzes, tareas y certificaciones',
    isCompleted: false,
    isActive: false,
  },
  {
    id: 'pricing',
    title: 'Precios y acceso',
    description: 'Configuración de precios y restricciones',
    isCompleted: false,
    isActive: false,
  },
  {
    id: 'settings',
    title: 'Configuración',
    description: 'Configuraciones avanzadas y SEO',
    isCompleted: false,
    isActive: false,
  },
  {
    id: 'preview',
    title: 'Vista previa',
    description: 'Revisar antes de publicar',
    isCompleted: false,
    isActive: false,
  },
];

// Categorías predefinidas
export const COURSE_CATEGORIES = [
  {
    id: 'technology',
    name: 'Tecnología',
    subcategories: [
      'Programación',
      'Robótica',
      'Inteligencia Artificial',
      'Desarrollo Web',
      'Desarrollo de Juegos',
      'Ciberseguridad',
      'Bases de Datos',
    ],
  },
  {
    id: 'creativity',
    name: 'Creatividad',
    subcategories: [
      'Diseño Gráfico',
      'Animación',
      'Fotografía',
      'Video Edición',
      'Arte Digital',
      'Música',
    ],
  },
  {
    id: 'business',
    name: 'Negocios',
    subcategories: [
      'Emprendimiento',
      'Marketing Digital',
      'Finanzas',
      'Liderazgo',
      'Productividad',
    ],
  },
  {
    id: 'science',
    name: 'Ciencia',
    subcategories: [
      'Matemáticas',
      'Física',
      'Química',
      'Biología',
      'Ingeniería',
    ],
  },
];

// Tipos de archivos permitidos
export const ALLOWED_FILE_TYPES = {
  video: ['.mp4', '.avi', '.mov', '.wmv'],
  audio: ['.mp3', '.wav', '.ogg'],
  document: ['.pdf', '.doc', '.docx', '.ppt', '.pptx'],
  image: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
  code: ['.zip', '.rar', '.js', '.py', '.html', '.css'],
};

// Validaciones
export const VALIDATION_RULES = {
  title: {
    minLength: 10,
    maxLength: 100,
    required: true,
  },
  description: {
    minLength: 50,
    maxLength: 5000,
    required: true,
  },
  shortDescription: {
    minLength: 20,
    maxLength: 200,
    required: true,
  },
  moduleTitle: {
    minLength: 5,
    maxLength: 80,
    required: true,
  },
  lessonTitle: {
    minLength: 5,
    maxLength: 80,
    required: true,
  },
  price: {
    min: 0,
    max: 10000,
  },
};






