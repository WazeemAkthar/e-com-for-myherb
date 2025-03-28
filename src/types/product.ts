export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  ingredients?: string[];
  howToUse?: string[];
  quantity?: number;
}

export interface CartItem extends Product {
  quantity: number;
}