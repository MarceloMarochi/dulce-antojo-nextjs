interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: '🍞',
      title: 'Productos Frescos',
      description: 'Horneado diariamente con ingredientes de primera calidad'
    },
    {
      icon: '👨‍🍳',
      title: 'Recetas Artesanales',
      description: 'Elaborados con técnicas tradicionales y mucho cariño'
    },
    {
      icon: '📦',
      title: 'Pedidos Fáciles',
      description: 'Ordena por WhatsApp de manera rápida y sencilla'
    },
    {
      icon: '📤',
      title: 'Envíos y Retiros',
      description: 'Los envíos y retiros se acordarán con el cliente'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      description: 'Nos ubicamos en Córdoba Capital, Argentina'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
      
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-stone-800 mb-4">
            ¿Por qué elegirnos?
          </h3>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Calidad, tradición y servicio en cada producto
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100/50"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
    </section>
  );
}