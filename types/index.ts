export interface Product {
  id: number;
  name: string;
  category: 'budines' | 'tartas' | 'tortas';
  price: number;
  image: string;
  description: string;
  reviews: number;
  rating: number;
  active: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}