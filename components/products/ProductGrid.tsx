import ProductCard from './ProductCard';
import { Plus } from 'lucide-react';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  isAdmin: boolean;
  onAddToCart: (product: Product) => void;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
  onNewProduct: () => void;
}

export default function ProductGrid({ 
  products, 
  isAdmin, 
  onAddToCart, 
  onEdit, 
  onDelete, 
  onToggleStatus,
  onNewProduct 
}: ProductGridProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {isAdmin && (
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-3xl font-bold text-stone-800">Panel de Administración</h2>
            <button
              onClick={onNewProduct}
              className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Nuevo Producto</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isAdmin={isAdmin}
              onAddToCart={onAddToCart}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-600 text-lg">No se encontraron productos</p>
          </div>
        )}
      </div>
    </section>
  );
}