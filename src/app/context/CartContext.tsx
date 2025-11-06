'use client';
import React, { createContext, useContext, useState } from 'react';
import type { Product } from '../lib/mockProducts';


type CartItem = { product: Product; qty: number };


type CartContextType = {
items: CartItem[];
add: (p: Product) => void;
remove: (id: string) => void;
clear: () => void;
};


const CartContext = createContext<CartContextType | undefined>(undefined);


export function CartProvider({ children }: { children: React.ReactNode }) {
const [items, setItems] = useState<CartItem[]>([]);


function add(product: Product) {
setItems((prev) => {
const found = prev.find((i) => i.product.id === product.id);
if (found) return prev.map((i) => (i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i));
return [...prev, { product, qty: 1 }];
});
}


function remove(id: string) {
setItems((prev) => prev.filter((i) => i.product.id !== id));
}


function clear() {
setItems([]);
}


return <CartContext.Provider value={{ items, add, remove, clear }}>{children}</CartContext.Provider>;
}


export function useCart() {
const ctx = useContext(CartContext);
if (!ctx) throw new Error('useCart must be used inside CartProvider');
return ctx;
}