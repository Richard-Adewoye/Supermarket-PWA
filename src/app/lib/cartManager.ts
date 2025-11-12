// lib/cartManager.ts

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

let cart: CartItem[] = [];

/**
 * Add a product to the cart.
 * If it exists, increase quantity; otherwise, push new item.
 */
export function addToCart(product: { id: string; name: string }, quantity = 1) {
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  return cart;
}

/**
 * Remove a product from the cart by ID.
 */
export function removeFromCart(productId: string) {
  cart = cart.filter((p) => p.id !== productId);
  return cart;
}

/**
 * Get the current cart contents.
 */
export function getCart() {
  return cart;
}

/**
 * Clear the entire cart.
 */
export function clearCart() {
  cart = [];
  return cart;
}

/**
 * Check if a product is available (for demo/mock purposes).
 * Replace this logic with Groq API query if needed.
 */
export function isAvailable(productId: string) {
  // Example: all products with id starting with 'p' are available
  return productId.startsWith('p');
}
