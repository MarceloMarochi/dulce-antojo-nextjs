import React, { useEffect, useState } from "react";

export type ProductCategory = "cookies" | "bread" | "pastries" | "cakes" | "desserts";

export type Product = {
  id?: number;
  name: string;
  category: ProductCategory;
  price: number; // consistente para el modelo final
  image: string;
  description: string;
  active: boolean;
};

type ProductFormData = Omit<Product, "price"> & { price: string };

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  editingProduct: Product | null;
};

const emptyForm: ProductFormData = {
  name: "",
  category: "cookies",
  price: "",
  image: "",
  description: "",
  active: true,
};

export default function ProductModal({
  isOpen,
  onClose,
  onSave,
  editingProduct,
}: ProductModalProps) {
  const [formData, setFormData] = useState<ProductFormData>(emptyForm);

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        ...editingProduct,
        price: String(editingProduct.price ?? ""),
      });
    } else {
      setFormData(emptyForm);
    }
  }, [editingProduct, isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedPrice = Number(formData.price);

    // si querés permitir vacío, sacá este guard
    if (!Number.isFinite(parsedPrice) || parsedPrice < 0) {
      alert("Precio inválido");
      return;
    }

    const productToSave: Product = {
      ...(editingProduct?.id ? { id: editingProduct.id } : {}),
      name: formData.name.trim(),
      category: formData.category,
      price: parsedPrice,
      image: formData.image.trim(),
      description: formData.description.trim(),
      active: formData.active,
    };

    onSave(productToSave);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl my-8">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          {editingProduct ? "Editar Producto" : "Nuevo Producto"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-stone-700 font-medium mb-2">
                Nombre del Producto
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-2">Categoría</label>
              <select
                value={formData.category}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    category: e.target.value as ProductCategory,
                  }))
                }
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              >
                <option value="cookies">Galletas</option>
                <option value="bread">Panes</option>
                <option value="pastries">Pastelería</option>
                <option value="cakes">Tartas</option>
                <option value="desserts">Postres</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Precio</label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({ ...prev, price: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">URL de la Imagen</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({ ...prev, image: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="https://ejemplo.com/imagen.jpg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-stone-700 font-medium mb-2">Descripción</label>
            <textarea
              value={formData.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({ ...prev, active: e.target.checked }))
                }
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
              {editingProduct ? "Guardar Cambios" : "Crear Producto"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
