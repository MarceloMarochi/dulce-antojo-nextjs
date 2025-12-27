import { CartItem } from '@/types';
import { WHATSAPP_NUMBER } from '@/utils/constants';

export const sendWhatsAppOrder = (cart: CartItem[]): void => {
  const message = cart.map(item => 
    `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`
  ).join('%0A');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me gustaría realizar el siguiente pedido:%0A%0A${message}%0A%0ATotal: $${total}`;
  
  window.open(whatsappUrl, '_blank');
};