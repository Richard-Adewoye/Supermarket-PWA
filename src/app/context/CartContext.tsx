'use client';
import React, { createContext, useContext, useEffect, useState, useCallback, useSyncExternalStore } from 'react';
import type { Product } from '../lib/mockProducts';

interface CartItem extends Product {
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
}

const CartContext = createContext<CartContextType | null>(null);

// Create a store outside React to manage cart state
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

  // Load cart from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        cartStore = JSON.parse(saved);
        notifyListeners();
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  // Save to localStorage when cart changes
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
    cartStore = cartStore.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    notifyListeners();
  }, []);

  const clear = useCallback(() => {
    cartStore = [];
    notifyListeners();
  }, []);
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, add, remove, updateQuantity, clear, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};