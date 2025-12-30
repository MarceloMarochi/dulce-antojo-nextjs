/* import { useState, useEffect } from 'react';

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
} */

  import { useState, useEffect } from 'react';
import { Upload, X } from 'lucide-react';

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
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
      setImagePreview(editingProduct.image);
      setImageFile(null);
    } else {
      setFormData({
        name: '',
        category: 'budines',
        price: '',
        image: '',
        description: '',
        active: true
      });
      setImagePreview('');
      setImageFile(null);
    }
  }, [editingProduct, isOpen]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona una imagen válida');
        return;
      }

      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen no debe superar 5MB');
        return;
      }

      setImageFile(file);

      // Crear preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    setFormData({ ...formData, image: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let finalImagePath = formData.image;

    // Si hay una nueva imagen, procesarla
    if (imageFile) {
      setIsUploading(true);
      
      try {
        // Crear nombre único para la imagen
        const timestamp = Date.now();
        const sanitizedName = imageFile.name
          .toLowerCase()
          .replace(/[^a-z0-9.]/g, '-')
          .replace(/-+/g, '-');
        const fileName = `${timestamp}-${sanitizedName}`;
        
        // Crear FormData para enviar
        const uploadData = new FormData();
        uploadData.append('file', imageFile);
        uploadData.append('fileName', fileName);

        // Llamar a la API de upload
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: uploadData,
        });

        if (!response.ok) {
          throw new Error('Error al subir la imagen');
        }

        const data = await response.json();
        finalImagePath = data.filePath; // Ruta de la imagen guardada
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error al subir la imagen. Intenta nuevamente.');
        setIsUploading(false);
        return;
      }
      
      setIsUploading(false);
    }

    // Guardar producto con la ruta de imagen
    const productToSave = {
      ...formData,
      image: finalImagePath
    };

    onSave(productToSave);
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
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>
            <div>
              <label className="block text-stone-700 font-medium mb-2">Categoría</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value as 'budines' | 'tartas' | 'tortas'})}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
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
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              required
            />
          </div>

          {/* Upload de Imagen */}
          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Imagen del Producto</label>
            
            {!imagePreview ? (
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-rose-200 rounded-xl cursor-pointer hover:border-rose-400 transition-colors bg-rose-50/50"
                >
                  <Upload className="w-10 h-10 text-rose-400 mb-2" />
                  <span className="text-sm text-stone-600">Haz clic para subir una imagen</span>
                  <span className="text-xs text-stone-500 mt-1">PNG, JPG, JPEG (máx. 5MB)</span>
                </label>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Descripción</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
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
              disabled={isUploading}
              className="flex-1 px-6 py-3 border border-rose-200 text-stone-700 rounded-full font-semibold hover:bg-rose-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="flex-1 bg-gradient-to-r from-rose-400 to-amber-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Subiendo...' : editingProduct ? 'Guardar Cambios' : 'Crear Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}