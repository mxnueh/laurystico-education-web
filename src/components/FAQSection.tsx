'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué edad necesito para empezar?",
      answer: "Nuestros cursos están diseñados para edades de 6 a 18 años. Tenemos diferentes niveles: Principiante (6-12 años), Intermedio (12-15 años) y Avanzado (15+ años). No se requiere experiencia previa."
    },
    {
      question: "¿Necesito comprar equipos o software?",
      answer: "Para Roblox Studio solo necesitas una computadora con internet. Para robótica, ofrecemos kits en préstamo durante el curso o puedes adquirir el tuyo. Todo el software que usamos es gratuito o incluido en el curso."
    },
    {
      question: "¿Cómo funcionan las clases en vivo?",
      answer: "Las clases son interactivas por videollamada, 2 veces por semana de 1.5 horas cada una. Incluyen teoría, práctica en tiempo real y sesiones de dudas. Todas las clases se graban para que puedas repasarlas."
    },
    {
      question: "¿Qué pasa si me pierdo una clase?",
      answer: "No hay problema. Todas las clases se graban y tienes acceso a la grabación de inmediato. También puedes agendar una sesión 1-a-1 con el instructor para ponerte al día."
    },
    {
      question: "¿Realmente voy a crear proyectos funcionales?",
      answer: "¡Absolutamente! Cada curso culmina con un proyecto final que funciona de verdad. En robótica construyes robots que se mueven y responden a sensores. En Roblox publicas juegos reales que otros pueden jugar."
    },
    {
      question: "¿Ofrecen certificaciones?",
      answer: "Sí, al completar cada curso recibes un certificado digital verificable. Para estudiantes destacados, también ofrecemos cartas de recomendación para universidades o programas especializados."
    },
    {
      question: "¿Hay descuentos o becas disponibles?",
      answer: "Ofrecemos becas del 50% para estudiantes de alto rendimiento académico y del 30% para hermanos. También tenemos planes de pago flexibles. Contáctanos para conocer las opciones disponibles."
    },
    {
      question: "¿Qué nivel de soporte recibo?",
      answer: "Soporte completo: chat 24/7, sesiones de tutorías 1-a-1, comunidad de estudiantes, acceso a todos los materiales de por vida, y seguimiento personalizado de tu progreso."
    }
  ];

  return (
    <section className="py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Preguntas frecuentes
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Todo lo que necesitas saber antes de comenzar tu aventura tecnológica
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white border rounded-xl shadow-soft overflow-hidden animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 p-8 rounded-xl border">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          ¿Tienes más preguntas?
        </h3>
        <p className="text-gray-600 mb-4">
          Nuestro equipo está aquí para ayudarte a tomar la mejor decisión
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="https://wa.me/18496391204" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-action font-semibold hover:bg-green-600 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
            </svg>
            <span>Chat por WhatsApp</span>
          </a>
          <a 
            href="https://forms.gle/FeiawfVAfVeocfFPA" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-action font-semibold hover:bg-brand-primary hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z" />
            </svg>
            <span>Escribir comentario</span>
          </a>
        </div>
      </div>
    </section>
  );
}


