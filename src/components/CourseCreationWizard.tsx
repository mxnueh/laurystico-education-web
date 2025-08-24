'use client';

import { useState, useCallback } from 'react';
import { 
  CourseCreationData, 
  CourseCreationStep, 
  COURSE_CREATION_STEPS 
} from '@/types/CourseCreation';

// Import step components
import BasicInfoStep from '@/components/course-creation/BasicInfoStep';
import InstructorStep from '@/components/course-creation/InstructorStep';
import ContentStep from '@/components/course-creation/ContentStep';
import AssessmentsStep from '@/components/course-creation/AssessmentsStep';
import PricingStep from '@/components/course-creation/PricingStep';
import SettingsStep from '@/components/course-creation/SettingsStep';
import PreviewStep from '@/components/course-creation/PreviewStep';

const initialCourseData: Partial<CourseCreationData> = {
  title: '',
  slug: '',
  description: '',
  shortDescription: '',
  category: '',
  tags: [],
  language: 'es',
  level: 'Principiante',
  modules: [],
  requirements: [],
  learningObjectives: [],
  targetAudience: [],
  pricing: {
    type: 'free',
    currency: 'USD',
  },
  settings: {
    enrollmentType: 'open',
    certificateEnabled: true,
    completionCriteria: {
      minimumProgress: 80,
      requiredQuizzes: [],
      requiredAssignments: [],
    },
    prerequisites: [],
  },
  status: 'draft',
  imageGallery: [],
  quizzes: [],
  assignments: [],
};

export default function CourseCreationWizard() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps, setSteps] = useState<CourseCreationStep[]>(COURSE_CREATION_STEPS);
  const [courseData, setCourseData] = useState<Partial<CourseCreationData>>(initialCourseData);
  const [isSaving, setIsSaving] = useState(false);

  const currentStep = steps[currentStepIndex];

  const updateCourseData = useCallback((data: Partial<CourseCreationData>) => {
    setCourseData(prev => ({ ...prev, ...data }));
  }, []);

  const markStepCompleted = useCallback((stepIndex: number) => {
    setSteps(prev => prev.map((step, index) => 
      index === stepIndex ? { ...step, isCompleted: true } : step
    ));
  }, []);

  const goToStep = useCallback((stepIndex: number) => {
    setSteps(prev => prev.map((step, index) => ({
      ...step,
      isActive: index === stepIndex,
    })));
    setCurrentStepIndex(stepIndex);
  }, []);

  const nextStep = useCallback(() => {
    if (currentStepIndex < steps.length - 1) {
      markStepCompleted(currentStepIndex);
      goToStep(currentStepIndex + 1);
    }
  }, [currentStepIndex, steps.length, markStepCompleted, goToStep]);

  const prevStep = useCallback(() => {
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    }
  }, [currentStepIndex, goToStep]);

  const saveDraft = async () => {
    setIsSaving(true);
    // Simular guardado
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Curso guardado como borrador:', courseData);
    setIsSaving(false);
  };

  const publishCourse = async () => {
    setIsSaving(true);
    // Simular publicación
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Curso publicado:', { ...courseData, status: 'published' });
    setIsSaving(false);
  };

  const renderStepContent = () => {
    switch (currentStep.id) {
      case 'basic-info':
        return (
          <BasicInfoStep
            data={courseData}
            onUpdate={updateCourseData}
            onNext={nextStep}
          />
        );
      case 'instructor':
        return (
          <InstructorStep
            data={courseData}
            onUpdate={updateCourseData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 'content':
        return (
          <ContentStep
            data={courseData}
            onUpdate={updateCourseData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 'assessments':
        return (
          <AssessmentsStep
            data={courseData}
            onUpdate={updateCourseData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 'pricing':
        return (
          <PricingStep
            data={courseData}
            onUpdate={updateCourseData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 'settings':
        return (
          <SettingsStep
            data={courseData}
            onUpdate={updateCourseData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 'preview':
        return (
          <PreviewStep
            data={courseData}
            onUpdate={updateCourseData}
            onPrev={prevStep}
            onPublish={publishCourse}
            onSaveDraft={saveDraft}
            isSaving={isSaving}
          />
        );
      default:
        return <div>Paso no encontrado</div>;
    }
  };

  const getProgressPercentage = () => {
    const completedSteps = steps.filter(step => step.isCompleted).length;
    return Math.round((completedSteps / steps.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/courses" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </a>
              <div>
                <h1 className="text-2xl font-bold text-ink tracking-tight">
                  Aula Virtual - {courseData.title || 'Nuevo curso'}
                </h1>
                <p className="text-base text-muted font-medium">
                  Paso {currentStepIndex + 1} de {steps.length}: {currentStep.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Progress */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-gray-600">Progreso:</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {getProgressPercentage()}%
                </span>
              </div>

              {/* Save Draft Button */}
              <button
                onClick={saveDraft}
                disabled={isSaving}
                className="px-4 py-2 border border-gray-300 rounded-action text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                {isSaving ? 'Guardando...' : 'Guardar borrador'}
              </button>
            </div>
          </div>

          {/* Progress Bar Mobile */}
          <div className="md:hidden mt-3">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
              <span>Progreso</span>
              <span>{getProgressPercentage()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Steps Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-soft border p-6 sticky top-32">
              <h3 className="font-semibold text-gray-900 mb-4">Pasos para crear curso</h3>
              <nav className="space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => goToStep(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      step.isActive 
                        ? 'bg-brand-primary/10 border border-brand-primary/20 text-brand-primary' 
                        : step.isCompleted
                        ? 'bg-green-50 border border-green-200 text-green-700'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        step.isCompleted 
                          ? 'bg-green-500 text-white'
                          : step.isActive
                          ? 'bg-brand-primary text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {step.isCompleted ? '✓' : index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{step.title}</div>
                        <div className="text-xs opacity-75 truncate">{step.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-soft border">
              {renderStepContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
