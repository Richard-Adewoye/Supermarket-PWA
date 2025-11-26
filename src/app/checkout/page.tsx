'use client';
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import OrderSummary from '../components/checkout/OrderSummary';
import { ShoppingBag, Trash2, X, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, remove, clear, total } = useCart();
  const [customerName, setCustomerName] = useState('');
  const shipping = 0.0;

  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Helper to safely get price
  const getPrice = (item: any): number => {
    if (typeof item.price === 'number') return item.price;
    if (typeof item.price === 'string') {
      const cleaned = item.price.replace(/[₦,]/g, '').trim();
      return parseFloat(cleaned) || 0;
    }
    return 0;
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 pt-24 md:pt-28">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600">Add some items to get started!</p>
        </div>
      </div>
    );
  }

  const itemsWithQty = cart.map(item => ({ ...item, quantity: item.quantity }));

  const handleConfirmOrder = () => {
    if (!customerName.trim()) {
      alert('Please enter your name before confirming the order');
      return;
    }

    const items = cart
      .map(item => {
        const price = getPrice(item);
        return `${item.name} x${item.quantity} - ₦${(price * item.quantity).toFixed(2)}`;
      })
      .join('\n');

    const message = `New Order from ${customerName}:\n\n${items}\n\nSubtotal: ₦${total.toFixed(
      2
    )}\nShipping: ₦${shipping.toFixed(2)}\nTotal: ₦${(total + shipping).toFixed(
      2
    )}\n\nPlease confirm this order by clicking the send button.`;

    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Order Sent', {
        body: 'Your order summary has been sent to WhatsApp!',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Checkout
          </h1>
          <p className="text-gray-600">Review your order and complete your purchase</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h2>
              <input
                type="text"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-3 text-lg font-medium text-gray-900 placeholder:text-gray-400 bg-gray-50 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                required
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Your Items ({cart.length})
                </h2>
              </div>

              <div className="p-6 space-y-4">
                {cart.map((item) => {
                  const price = getPrice(item);
                  return (
                    <div
                      key={item.id}
                      className="group relative bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                              Qty: {item.quantity}
                            </span>
                            <span className="text-gray-400">×</span>
                            <span className="font-medium">₦{price.toFixed(2)}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xs text-gray-500 mb-1">Subtotal</p>
                            <p className="text-xl font-bold text-gray-900">
                              ₦{(price * item.quantity).toFixed(2)}
                            </p>
                          </div>

                          <button
                            onClick={() => remove(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-gray-200">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order Total</p>
                  <p className="text-3xl font-bold text-gray-900">₦{(total + shipping).toFixed(2)}</p>
                </div>
                <button
                  onClick={clear}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 border border-gray-300 hover:border-red-300"
                >
                  <X className="w-4 h-4" />
                  Clear Cart
                </button>
              </div>

              <button
                onClick={handleConfirmOrder}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Confirm Order
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                Your order will be sent via WhatsApp
              </p>
            </div>
          </div>

          <div className="lg:w-96">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8">
              <OrderSummary cart={itemsWithQty} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}