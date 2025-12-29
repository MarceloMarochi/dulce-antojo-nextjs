import { useState, useEffect } from 'react';

interface Product {
  id?: number;
  name: string;
  category: 'budines' | 'tartas' | 'tortas';
  price: number | string;
  image: string;
  description: string;
  active: boolean;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  editingProduct: Product | null;
}

export default function ProductModal({ 
  isOpen, 
  onClose, 
  onSave, 
  editingProduct 
}: ProductModalProps) {
  const [formData, setFormData] = useState<Product>({
    name: '',
    category: 'budines',
    price: '',
    image: '',
    description: '',
    active: true
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData({
        name: '',
        category: 'budines',
        price: '',
        image: '',
        description: '',
        active: true
      });
    }
  }, [editingProduct, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl my-8">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-stone-700 font-medium mb-2">Nombre del Producto</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-500"
                required
              />
            </div>
            <div>
              <label className="block text-stone-700 font-medium mb-2">Categoría</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value as 'budines' | 'tartas' | 'tortas'})}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-500"
                required
              >
                <option value="budines">Budines</option>
                <option value="tartas">Tartas</option>
                <option value="tortas">Tortas</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Precio</label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Ruta de la Imagen</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-500"
              placeholder="/images/nombre-producto.jpg"
              required
            />
            <p className="text-sm text-stone-500 mt-1">
              Ejemplo: /images/budines.jpeg
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Descripción</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-500"
              rows={3}
              required
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.active}
                onChange={(e) => setFormData({...formData, active: e.target.checked})}
                className="w-5 h-5 text-rose-500 rounded focus:ring-2 focus:ring-rose-300"
              />
              <span className="text-stone-700 font-medium">Producto activo</span>
            </label>
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
              {editingProduct ? 'Guardar Cambios' : 'Crear Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}