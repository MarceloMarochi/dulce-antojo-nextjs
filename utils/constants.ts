import { Category, Product, AuthCredentials } from '@/types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Todos los productos' },
  { id: 'cookies', name: 'Galletas' },
  { id: 'bread', name: 'Panes' },
  { id: 'pastries', name: 'Pastelería' },
  { id: 'cakes', name: 'Tartas' },
  { id: 'desserts', name: 'Postres' }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Galletas de Avena y Pasas',
    category: 'cookies',
    price: 3.84,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
    description: 'Deliciosas galletas caseras con avena y pasas',
    reviews: 146,
    rating: 5,
    active: true
  },
  {
    id: 2,
    name: 'Pretzels Artesanales',
    category: 'bread',
    price: 4.92,
    image: 'https://images.unsplash.com/photo-1590850914015-163c3e1d13b6?w=400&h=400&fit=crop',
    description: 'Pretzels recién horneados con sal gruesa',
    reviews: 235,
    rating: 5,
    active: true
  },
  {
    id: 3,
    name: 'Baguettes Suaves',
    category: 'bread',
    price: 14.96,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop',
    description: 'Pan francés tradicional, crujiente por fuera',
    reviews: 380,
    rating: 5,
    active: true
  },
  {
    id: 4,
    name: 'Cannoli de Chocolate y Avellanas',
    category: 'desserts',
    price: 6.78,
    image: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=400&fit=crop',
    description: 'Cannoli relleno de crema de chocolate',
    reviews: 120,
    rating: 5,
    active: true
  },
  {
    id: 5,
    name: 'Croissant de Almendra',
    category: 'pastries',
    price: 7.54,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
    description: 'Croissant mantecoso con almendras tostadas',
    reviews: 285,
    rating: 5,
    active: true
  },
  {
    id: 6,
    name: 'Waffles con Nueces',
    category: 'desserts',
    price: 9.48,
    image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e83?w=400&h=400&fit=crop',
    description: 'Waffles belgas con jarabe y nueces',
    reviews: 175,
    rating: 5,
    active: true
  },
  {
    id: 7,
    name: 'Tarta de Calabaza',
    category: 'cakes',
    price: 18.47,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop',
    description: 'Tarta tradicional de calabaza con especias',
    reviews: 101,
    rating: 5,
    active: true
  },
  {
    id: 8,
    name: 'Focaccia Genovesa',
    category: 'bread',
    price: 8.32,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e5b80c05?w=400&h=400&fit=crop',
    description: 'Pan italiano con aceite de oliva y romero',
    reviews: 192,
    rating: 5,
    active: true
  }
];

export const AUTH_CREDENTIALS: AuthCredentials = {
  username: 'admin',
  password: 'admin123'
};

export const WHATSAPP_NUMBER = '5493515147985';