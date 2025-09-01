import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explora nuestras especialidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cursos diseñados para convertir tu curiosidad en habilidades del futuro
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <CategoryCard
            title="Robótica"
            description="Construye robots reales con Arduino, sensores y actuadores. Desde robots básicos hasta sistemas autónomos inteligentes."
            href="/courses?cat=robotica"
            color="green"
            image="/fotos/assets_task_01k2gjw3k5f6drcz8hqnh49js3_1755050907_img_1.jpg"
          />
          <CategoryCard
            title="Roblox Studio"
            description="Crea juegos 3D profesionales con Lua. Aprende scripting, diseño de niveles y monetización de experiencias."
            href="/courses?cat=roblox"
            color="cyan"
            image="/fotos/hero-roblox.jpg"
          />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Projects Showcase */}
      <ProjectsShowcase />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

