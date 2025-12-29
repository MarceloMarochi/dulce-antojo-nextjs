import { useState } from 'react';
import { Product, CartItem } from '@/types';

interface UseCartReturn {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, change: number) => void;
  getTotalPrice: () => string;
  clearCart: () => void;
}

export const useCart = (): UseCartReturn => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1): void => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId: number): void => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, change: number): void => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotalPrice = (): string => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const clearCart = (): void => {
    setCart([]);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart
  };
};