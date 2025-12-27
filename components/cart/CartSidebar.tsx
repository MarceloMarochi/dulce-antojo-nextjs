import { X } from 'lucide-react';
import CartItem from './CartItem';

interface CartItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItemType[];
  onUpdateQuantity: (id: number, change: number) => void;
  onRemove: (id: number) => void;
  totalPrice: string;
  onCheckout: () => void;
}

export default function CartSidebar({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemove, 
  totalPrice, 
  onCheckout 
}: CartSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-rose-100">
            <h2 className="text-2xl font-bold text-stone-800">Carrito de Compras</h2>
            <button onClick={onClose} className="text-stone-600 hover:text-rose-500">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">🛒</span>
                </div>
                <p className="text-stone-600">Tu carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                  />
                ))}
              </div>
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="border-t border-rose-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-stone-800">Total:</span>
                <span className="text-2xl font-bold text-rose-500">${totalPrice}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-rose-400 to-amber-400 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Finalizar en WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}