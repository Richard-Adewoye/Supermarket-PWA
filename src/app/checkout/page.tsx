'use client';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, remove, clear, total } = useCart();

  const handleConfirmOrder = () => {
    // Prepare order summary message
    const summary = cart.map(item => `${item.name} x${item.quantity}`).join(', ');
    const whatsappURL = `https://wa.me/?text=Order: ${encodeURIComponent(summary)}`;
    window.open(whatsappURL, '_blank');
  };

  if (cart.length === 0) return <p className="p-8 text-center">Your cart is empty.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <button
              className="text-red-500"
              onClick={() => remove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="font-bold text-lg">Total: ${total.toFixed(2)}</span>
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md"
            onClick={clear}
          >
            Clear Cart
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
