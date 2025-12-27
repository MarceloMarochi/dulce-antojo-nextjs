'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid from '@/components/products/ProductGrid';
import ProductModal from '@/components/products/ProductModal';
import CartSidebar from '@/components/cart/CartSidebar';
import AuthModal from '@/components/auth/AuthModal';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';
import { useAuth } from '@/hooks/useAuth';
import { sendWhatsAppOrder } from '@/lib/whatsapp';
import Footer from '@/components/layout/Footer';


export default function Home() {
  const [view, setView] = useState<'home' | 'products' | 'admin'>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const { products, addProduct, updateProduct, deleteProduct, toggleProductStatus, filterProducts } = useProducts();
  const { isAuthenticated, login, logout } = useAuth();

  const filteredProducts = filterProducts(searchTerm, selectedCategory, view === 'admin');

  const HOME_PREVIEW_COUNT = 4;

  // Para el home preview: mostramos productos activos (no admin), sin filtros
  const homeAllProducts = filterProducts('', 'all', false);
  const homePreviewProducts = homeAllProducts.slice(0, HOME_PREVIEW_COUNT);
  const homeHasMoreProducts = homeAllProducts.length > HOME_PREVIEW_COUNT;

  const goToProducts = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setView('products');
  };


  const handleLogin = (username: string, password: string) => {
    const success = login(username, password);
    if (success) {
      setShowAuthModal(false);
      setView('admin');
    }
    return success;
  };

  const handleLogout = () => {
    logout();
    setView('home');
  };

  const handleSaveProduct = (productData: any) => {
    if (editingProduct) {
      updateProduct({ ...productData, id: editingProduct.id });
    } else {
      addProduct(productData);
    }
    setShowProductModal(false);
    setEditingProduct(null);
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    setShowProductModal(true);
  };

  const handleDeleteProduct = (productId: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      deleteProduct(productId);
    }
  };

  const handleCheckout = () => {
    sendWhatsAppOrder(cart);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-stone-50">
      <Header
        view={view}
        setView={setView}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        onShowAuth={() => setShowAuthModal(true)}
        cartCount={cart.length}
        onShowCart={() => setShowCart(true)}
      />

 {/*      {view === 'home' && (
        <>
          <HeroSection onViewProducts={goToProducts} />
          <FeaturesSection />
        </>
      )} */}

      {view === 'home' && (
        <>
          <HeroSection onViewProducts={goToProducts} />
          <FeaturesSection />

          {/* Preview de productos en Home */}
          <section className="mt-50 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-stone-800">Productos</h3>
                  <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8 mt-4">
                    Una vista rápida de lo que tenemos disponible.
                  </p>
                </div>

                {homeHasMoreProducts && (
                  <button
                    onClick={goToProducts}
                    className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Ver más
                  </button>
                )}
              </div>
            </div>

            <ProductGrid
              products={homePreviewProducts}
              isAdmin={false}
              onAddToCart={addToCart}
              // no-op handlers para cumplir la firma sin habilitar admin
              onEdit={() => {}}
              onDelete={() => {}}
              onToggleStatus={() => {}}
              onNewProduct={() => {}}
            />

            {homeHasMoreProducts && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex justify-center">
                <button
                  onClick={goToProducts}
                  className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Ver más productos
                </button>
              </div>
            )}
          </section>
        </>
      )}

      {(view === 'products' || view === 'admin') && (
        <>
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <ProductFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <ProductGrid
            products={filteredProducts}
            isAdmin={view === 'admin'}
            onAddToCart={addToCart}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            onToggleStatus={toggleProductStatus}
            onNewProduct={() => {
              setEditingProduct(null);
              setShowProductModal(true);
            }}
          />
        </>
      )}


      <CartSidebar
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={handleCheckout}
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />

      <ProductModal
        isOpen={showProductModal}
        onClose={() => {
          setShowProductModal(false);
          setEditingProduct(null);
        }}
        onSave={handleSaveProduct}
        editingProduct={editingProduct}
      />

      <Footer
        instagramUrl='https://www.instagram.com/agos.aliaga/'
        whatsappNumber='5493515147985'
      />
    </div>
  );
}