import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.product.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
      
      state.total = state.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.product.id !== action.payload);
      
      state.total = state.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.product.id === action.payload.id);
      
      if (item) {
        item.quantity = action.payload.quantity;
      }
      
      state.total = state.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0);
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

