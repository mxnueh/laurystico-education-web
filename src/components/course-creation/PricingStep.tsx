'use client';

import { useState } from 'react';
import { CourseCreationData, CoursePricing } from '@/types/CourseCreation';

interface Props {
  data: Partial<CourseCreationData>;
  onUpdate: (data: Partial<CourseCreationData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PricingStep({ data, onUpdate, onNext, onPrev }: Props) {
  const [pricing, setPricing] = useState<CoursePricing>(data.pricing || {
    type: 'free',
    currency: 'USD',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ pricing });
    onNext();
  };

  const updatePricing = (field: keyof CoursePricing, value: any) => {
    setPricing(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Precios y acceso</h2>
        <p className="text-gray-600">
          Define cómo los estudiantes podrán acceder a tu curso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Pricing Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Tipo de acceso *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              className={`border-2 rounded-xl p-4 cursor-pointer transition-colors ${
                pricing.type === 'free' ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => updatePricing('type', 'free')}
            >
              <div className="flex items-center mb-2">
                <input 
                  type="radio" 
                  name="pricing-type" 
                  checked={pricing.type === 'free'}
                  onChange={() => updatePricing('type', 'free')}
                  className="mr-2"
                />
                <span className="font-semibold">Gratuito</span>
              </div>
              <p className="text-gray-600 text-sm">
                Perfecto para construir audiencia y recibir feedback
              </p>
            </div>

            <div 
              className={`border-2 rounded-xl p-4 cursor-pointer transition-colors ${
                pricing.type === 'paid' ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => updatePricing('type', 'paid')}
            >
              <div className="flex items-center mb-2">
                <input 
                  type="radio" 
                  name="pricing-type" 
                  checked={pricing.type === 'paid'}
                  onChange={() => updatePricing('type', 'paid')}
                  className="mr-2"
                />
                <span className="font-semibold">Pago único</span>
              </div>
              <p className="text-gray-600 text-sm">
                Los estudiantes pagan una vez y tienen acceso completo
              </p>
            </div>
          </div>
        </div>

        {/* Price Settings */}
        {pricing.type === 'paid' && (
          <div className="space-y-4 bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">Configuración de precio</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Precio *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={pricing.price || ''}
                    onChange={(e) => updatePricing('price', parseFloat(e.target.value) || 0)}
                    placeholder="99"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Precio con descuento (opcional)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={pricing.discountPrice || ''}
                    onChange={(e) => updatePricing('discountPrice', parseFloat(e.target.value) || undefined)}
                    placeholder="79"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Moneda
              </label>
              <select
                value={pricing.currency}
                onChange={(e) => updatePricing('currency', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-action focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              >
                <option value="USD">USD - Dólar estadounidense</option>
                <option value="EUR">EUR - Euro</option>
                <option value="MXN">MXN - Peso mexicano</option>
                <option value="COP">COP - Peso colombiano</option>
                <option value="ARS">ARS - Peso argentino</option>
              </select>
            </div>

            {/* Price Preview */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Vista previa del precio</h4>
              <div className="flex items-center gap-2">
                {pricing.discountPrice && (
                  <span className="text-gray-400 line-through">
                    ${pricing.price} {pricing.currency}
                  </span>
                )}
                <span className="text-2xl font-bold text-brand-primary">
                  ${pricing.discountPrice || pricing.price || 0} {pricing.currency}
                </span>
                {pricing.discountPrice && pricing.price && (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm">
                    {Math.round(((pricing.price - pricing.discountPrice) / pricing.price) * 100)}% OFF
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">💡 Consejos de precio</h4>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Investiga precios de cursos similares en el mercado</li>
            <li>• Considera empezar con un precio más bajo y aumentarlo gradualmente</li>
            <li>• Los descuentos de lanzamiento pueden generar más inscripciones iniciales</li>
            <li>• Cursos gratuitos son excelentes para construir reputación</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <button
            type="button"
            onClick={onPrev}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-action hover:bg-gray-50 transition-colors"
          >
            Anterior
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-brand-primary text-white rounded-action font-medium hover:bg-brand-hover transition-colors"
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}






