'use client';

import { useState } from 'react';
import { Eye, EyeOff, Edit2, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  isAdmin: boolean;
  onAddToCart: (product: Product, quantity: number) => void;
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
  const [quantity, setQuantity] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCartClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmAddToCart = () => {
    onAddToCart(product, quantity);
    setShowConfirmModal(false);
    setQuantity(1); // Resetear cantidad después de agregar
  };

  const handleCancelAddToCart = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
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
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-rose-500">${product.price}</span>
            
            {!isAdmin && (
              <div className="flex items-center space-x-2 bg-stone-100 rounded-full px-3 py-1">
                <button
                  onClick={handleDecrement}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-stone-600 hover:bg-rose-100 hover:text-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold text-stone-800 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-stone-600 hover:bg-rose-100 hover:text-rose-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            {isAdmin ? (
              <div className="flex space-x-2 w-full justify-end">
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
                onClick={handleAddToCartClick}
                className="w-full bg-gradient-to-r from-rose-400 to-amber-400 text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Agregar al carrito</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all animate-scaleIn">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">
                ¿Agregar al carrito?
              </h3>
              <p className="text-stone-600">
                ¿Estás seguro que deseas agregar este producto al carrito?
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 mb-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-stone-800">{product.name}</h4>
                  <p className="text-sm text-stone-600">Cantidad: {quantity}</p>
                  <p className="text-lg font-bold text-rose-500 mt-1">
                    ${(product.price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleCancelAddToCart}
                className="flex-1 px-6 py-3 border-2 border-stone-200 text-stone-700 rounded-full font-semibold hover:bg-stone-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmAddToCart}
                className="flex-1 bg-gradient-to-r from-rose-400 to-amber-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}