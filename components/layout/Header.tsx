'use client';

import { useState } from 'react';
import { ShoppingCart, User, Menu, LogOut } from 'lucide-react';

interface HeaderProps {
  view: 'home' | 'products' | 'admin';
  setView: (view: 'home' | 'products' | 'admin') => void;
  isAuthenticated: boolean;
  onLogout: () => void;
  onShowAuth: () => void;
  cartCount: number;
  onShowCart: () => void;
}

export default function Header({ 
  view, 
  setView, 
  isAuthenticated, 
  onLogout, 
  onShowAuth, 
  cartCount, 
  onShowCart 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img 
                src="/images/logo-sinfondo.png" 
                alt="Dulce Antojo Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-stone-800">Dulce Antojo</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setView('home')} 
              className={`text-sm font-medium transition-colors ${
                view === 'home' ? 'text-rose-500' : 'text-stone-600 hover:text-rose-400'
              }`}
            >
              Inicio
            </button>
            <button 
              onClick={() => setView('products')} 
              className={`text-sm font-medium transition-colors ${
                view === 'products' ? 'text-rose-500' : 'text-stone-600 hover:text-rose-400'
              }`}
            >
              Productos
            </button>
            {isAuthenticated ? (
              <>
                <button 
                  onClick={() => setView('admin')} 
                  className={`text-sm font-medium transition-colors ${
                    view === 'admin' ? 'text-rose-500' : 'text-stone-600 hover:text-rose-400'
                  }`}
                >
                  Panel Admin
                </button>
                <button 
                  onClick={onLogout}
                  className="text-sm font-medium text-stone-600 hover:text-rose-400 transition-colors flex items-center space-x-1"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Salir</span>
                </button>
              </>
            ) : (
              <button 
                onClick={onShowAuth}
                className="text-sm font-medium text-stone-600 hover:text-rose-400 transition-colors flex items-center space-x-1"
              >
                <User className="w-4 h-4" />
                <span>Admin</span>
              </button>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onShowCart}
              className="relative p-2 text-stone-600 hover:text-rose-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-rose-100 pt-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => { setView('home'); setMobileMenuOpen(false); }} 
                className="text-left text-sm font-medium text-stone-600 hover:text-rose-400"
              >
                Inicio
              </button>
              <button 
                onClick={() => { setView('products'); setMobileMenuOpen(false); }} 
                className="text-left text-sm font-medium text-stone-600 hover:text-rose-400"
              >
                Productos
              </button>
              {isAuthenticated ? (
                <>
                  <button 
                    onClick={() => { setView('admin'); setMobileMenuOpen(false); }} 
                    className="text-left text-sm font-medium text-stone-600 hover:text-rose-400"
                  >
                    Panel Admin
                  </button>
                  <button 
                    onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                    className="text-left text-sm font-medium text-stone-600 hover:text-rose-400"
                  >
                    Salir
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => { onShowAuth(); setMobileMenuOpen(false); }}
                  className="text-left text-sm font-medium text-stone-600 hover:text-rose-400"
                >
                  Admin
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}