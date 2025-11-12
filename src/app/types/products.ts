// src/types/product.ts or app/types/product.ts

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: string;
  inStock?: boolean;
  rating?: number;
}
