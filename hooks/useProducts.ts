import { useState } from 'react';
import { Product } from '@/types';
import { INITIAL_PRODUCTS } from '@/utils/constants';

interface UseProductsReturn {
  products: Product[];
  addProduct: (newProduct: Omit<Product, 'id' | 'reviews' | 'rating'>) => void;
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (productId: number) => void;
  toggleProductStatus: (productId: number) => void;
  filterProducts: (searchTerm: string, category: string, isAdmin: boolean) => Product[];
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  const addProduct = (newProduct: Omit<Product, 'id' | 'reviews' | 'rating'>): void => {
    const product: Product = {
      ...newProduct,
      id: Date.now(),
      reviews: 0,
      rating: 5,
      price: typeof newProduct.price === 'string' ? parseFloat(newProduct.price) : newProduct.price
    };
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product): void => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? {
        ...updatedProduct,
        price: typeof updatedProduct.price === 'string' ? parseFloat(updatedProduct.price) : updatedProduct.price
      } : p
    ));
  };

  const deleteProduct = (productId: number): void => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const toggleProductStatus = (productId: number): void => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, active: !p.active } : p
    ));
  };

  const filterProducts = (searchTerm: string, category: string, isAdmin: boolean): Product[] => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'all' || product.category === category;
      const isActive = isAdmin || product.active;
      return matchesSearch && matchesCategory && isActive;
    });
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleProductStatus,
    filterProducts
  };
};