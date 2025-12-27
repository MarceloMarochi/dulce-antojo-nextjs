import React from "react";
import { Trash2 } from "lucide-react";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartItemProps = {
  item: CartItemType;
  onUpdateQuantity: (id: number, change: number) => void;
  onRemove: (id: number) => void;
};

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center space-x-4 bg-rose-50 p-4 rounded-2xl">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />

      <div className="flex-1">
        <h3 className="font-semibold text-stone-800">{item.name}</h3>
        <p className="text-rose-500 font-bold">${item.price}</p>

        <div className="flex items-center space-x-2 mt-2">
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, -1)}
            className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-stone-600 hover:bg-rose-100"
            aria-label="Disminuir cantidad"
          >
            -
          </button>

          <span className="font-semibold">{item.quantity}</span>

          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, 1)}
            className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-stone-600 hover:bg-rose-100"
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
        aria-label="Eliminar item"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
