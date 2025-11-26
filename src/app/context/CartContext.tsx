'use client';
import React, { createContext, useContext, useEffect, useState, useCallback, useSyncExternalStore } from 'react';
import type { Product } from '../lib/mockProducts';
import { mockProducts_2 } from '../lib/mockProducts';

export interface CartItem extends Product {
  quantity: number;
}

interface APICartItem {
  id: string;
  name: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  add: (product: Product) => void;
  remove: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  total: number;
  itemCount: number;
  updateCartFromAPI: (apiCart: APICartItem[]) => void;
}

const CartContext = createContext<CartContextType | null>(null);

let cartStore: CartItem[] = [];
let listeners: Set<() => void> = new Set();

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => cartStore;

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const cart = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        cartStore = JSON.parse(saved);
        notifyListeners();
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient && cart.length >= 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const add = useCallback((product: Product) => {
    const existing = cartStore.find(item => item.id === product.id);
    if (existing) {
      cartStore = cartStore.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cartStore = [...cartStore, { ...product, quantity: 1 }];
    }
    notifyListeners();
  }, []);

  const remove = useCallback((id: string) => {
    cartStore = cartStore.filter(item => item.id !== id);
    notifyListeners();
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      remove(id);
    } else {
      cartStore = cartStore.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      notifyListeners();
    }
  }, []);

  const clear = useCallback(() => {
    cartStore = [];
    notifyListeners();
  }, []);

  const updateCartFromAPI = useCallback((apiCart: APICartItem[]) => {
    console.log('📥 Updating cart from API:', apiCart);
    
    if (!apiCart || apiCart.length === 0) {
      return;
    }

    const updatedCart: CartItem[] = [];

    for (const apiItem of apiCart) {
      const product = mockProducts_2.find(p => p.id.toString() === apiItem.id);
      
      if (product) {
        const existingItem = cartStore.find(item => item.id === product.id.toString());
        
        if (existingItem) {
          updatedCart.push({ ...existingItem, quantity: apiItem.quantity });
        } else {
          updatedCart.push({
            id: product.id.toString(),
            name: product.name,
            category: product.category || 'General',
            categoryTag: product.categoryTag || 'Other',
            price: parseFloat(product.price.replace('₦', '').replace(',', '')),
            rating: 4.5,
            reviewCount: 0,
            imageUrl: product.imageUrl[0] || '/images/placeholder.jpg',
            quantity: apiItem.quantity
          });
        }
      }
    }

    const apiItemIds = apiCart.map(item => item.id);
    const existingItems = cartStore.filter(item => !apiItemIds.includes(item.id));
    
    cartStore = [...existingItems, ...updatedCart];
    notifyListeners();
    
    console.log('✅ Cart updated successfully:', cartStore);
  }, []);
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, add, remove, updateQuantity, clear, total, itemCount, updateCartFromAPI 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};