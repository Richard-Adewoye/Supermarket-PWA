// app/ClientWrapper.tsx
'use client';

import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      {children}
      <AppFooter />
    </CartProvider>
  );
}
