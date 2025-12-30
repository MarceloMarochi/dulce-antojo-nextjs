import { Category, Product, AuthCredentials } from '@/types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Todos los productos' },
  { id: 'budines', name: 'Budines' },
  { id: 'tartas', name: 'Tartas' },
  { id: 'tortas', name: 'Tortas' }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Budines Glaseados',
    category: 'budines',
    price: 10,
    image: '/images/products/budines.jpeg',
    description: 'Deliciosos budines glaseados de harina blanca o integral',
    reviews: 146,
    rating: 5,
    active: true
  },
  {
    id: 2,
    name: 'Budines con nueces',
    category: 'budines',
    price: 10,
    image: '/images/products/budines2.jpeg',
    description: 'Deliciosos budines con nueces de harina blanca o integral',
    reviews: 235,
    rating: 5,
    active: true
  },
  {
    id: 3,
    name: 'Tarta Cabsha',
    category: 'tartas',
    price: 10,
    image: '/images/products/cabsha.jpeg',
    description: 'Tarta cabsha para 10 personas',
    reviews: 380,
    rating: 5,
    active: true
  },
  {
    id: 4,
    name: 'Chocotorta',
    category: 'tortas',
    price: 10,
    image: '/images/products/chocotorta.jpeg',
    description: 'Chocotorta para 25, 40 o 50 personas',
    reviews: 120,
    rating: 5,
    active: true
  },
  {
    id: 5,
    name: 'Lemon Pie',
    category: 'tartas',
    price: 10,
    image: '/images/products/lemonpie.jpeg',
    description: 'Lemon Pie ricaso',
    reviews: 285,
    rating: 5,
    active: true
  },
  {
    id: 6,
    name: 'Pasta Frola',
    category: 'tartas',
    price: 10,
    image: '/images/products/pastafrola.jpeg',
    description: 'Pastafrola muy muy muy rica',
    reviews: 175,
    rating: 5,
    active: true
  },
  {
    id: 7,
    name: 'Tarta de Coco',
    category: 'tartas',
    price: 10,
    image: '/images/products/tartacoco.jpeg',
    description: 'Tarta tradicional de coco',
    reviews: 101,
    rating: 5,
    active: true
  }
];

export const AUTH_CREDENTIALS: AuthCredentials = {
  username: 'admin',
  password: 'admin123'
};

export const WHATSAPP_NUMBER = '5493515147985';