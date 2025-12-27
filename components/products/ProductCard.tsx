import { Eye, EyeOff, Edit2, Trash2 } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  isAdmin: boolean;
  onAddToCart: (product: Product) => void;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

export default function ProductCard({ 
  product, 
  isAdmin, 
  onAddToCart, 
  onEdit, 
  onDelete, 
  onToggleStatus 
}: ProductCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {!product.active && isAdmin && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Inactivo
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-stone-800 mb-2">{product.name}</h3>
        <div className="flex items-center mb-3">
          <div className="flex text-amber-400">
            {'★'.repeat(product.rating)}
          </div>
          <span className="text-sm text-stone-500 ml-2">({product.reviews} reseñas)</span>
        </div>
        <p className="text-stone-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-rose-500">${product.price}</span>
          {isAdmin ? (
            <div className="flex space-x-2">
              <button
                onClick={() => onToggleStatus(product.id)}
                className={`p-2 rounded-full transition-colors ${
                  product.active 
                    ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                    : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
                title={product.active ? 'Desactivar producto' : 'Activar producto'}
              >
                {product.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
              <button
                onClick={() => onEdit(product)}
                className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                title="Editar producto"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                title="Eliminar producto"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(product)}
              className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}