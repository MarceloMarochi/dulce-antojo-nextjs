import ProductGrid from '@/components/products/ProductGrid';
import { Product } from '@/types';

interface ProductsPreviewProps {
  products: Product[];
  hasMoreProducts: boolean;
  onViewAll: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductsPreview({ 
  products, 
  hasMoreProducts, 
  onViewAll,
  onAddToCart 
}: ProductsPreviewProps) {
  return (
    <section className="relative py-20 bg-white/40 backdrop-blur-sm">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-stone-800 mb-4">
            Nuestros Productos
          </h3>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Una vista rápida de lo que tenemos disponible para ti
          </p>
        </div>

        {/* Grilla de productos */}
        <ProductGrid
          products={products}
          isAdmin={false}
          onAddToCart={onAddToCart}
          onEdit={() => {}}
          onDelete={() => {}}
          onToggleStatus={() => {}}
          onNewProduct={() => {}}
        />

        {/* Botón "Ver más" */}
        {hasMoreProducts && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onViewAll}
              className="group relative bg-gradient-to-r from-rose-400 to-amber-400 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <span className="relative z-10">Ver todos los productos</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        )}
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
    </section>
  );
}