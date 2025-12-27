/* import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
}

export default function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(username, password);
    if (!success) {
      alert('Credenciales incorrectas');
    } else {
      setUsername('');
      setPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-stone-700 font-medium mb-2">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-stone-400 hover:text-stone-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-rose-200 text-stone-700 rounded-full font-semibold hover:bg-rose-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-rose-400 to-amber-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} */

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => boolean;
};

export default function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = onLogin(username, password);

    if (!success) {
      alert("Credenciales incorrectas");
      return;
    }

    setUsername("");
    setPassword("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-stone-700 font-medium mb-2">Contraseña</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3.5 text-stone-400 hover:text-stone-600"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-rose-200 text-stone-700 rounded-full font-semibold hover:bg-rose-50 transition-colors"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-rose-400 to-amber-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
