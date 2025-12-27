interface HeroSectionProps {
  onViewProducts: () => void;
}

export default function HeroSection({ onViewProducts }: HeroSectionProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-4">
            El Arte de la Pastelería
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Budines, tortas, tartas y muchas cosas más elaboradas con amor y dedicación
          </p>
          <button 
            onClick={onViewProducts}
            className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Ver Productos
          </button>
        </div>
      </div>
    </section>
  );
}