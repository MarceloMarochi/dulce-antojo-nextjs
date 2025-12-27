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
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">{feature.icon}</span>
          </div>
          <h3 className="text-xl font-bold text-stone-800 mb-2">{feature.title}</h3>
          <p className="text-stone-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}