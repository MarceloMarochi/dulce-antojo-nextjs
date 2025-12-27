interface HeroSectionProps {
  onViewProducts: () => void;
}

export default function HeroSection({ onViewProducts }: HeroSectionProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto - Izquierda */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              Dulce Antojo Pastelería
            </h2>
            <p className="text-xl text-stone-600 mb-8">
              Budines, tortas, tartas y muchas cosas más elaboradas con amor y dedicación
            </p>
            <button 
              onClick={onViewProducts}
              className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Ver Productos
            </button>
          </div>

          {/* Imagen - Derecha */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=800&fit=crop" 
                alt="Deliciosa torta artesanal"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
            </div>
            
            {/* Decoración adicional */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full blur-3xl opacity-60 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full blur-3xl opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}