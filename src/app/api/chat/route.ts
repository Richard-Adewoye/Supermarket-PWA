import { NextResponse } from 'next/server';
import { sendToGroq } from '../../lib/groqClient';
import { addToCart, removeFromCart, isAvailable, getCart } from '../../lib/cartManager';

export async function POST(req: Request) {
  const { messages, command } = await req.json();

  if (command) {
    let reply = '';

    switch (command.type) {
      case 'add_to_cart':
        addToCart({ id: command.productId!, name: command.productName! });
        reply = `Added to cart. Current cart: ${JSON.stringify(getCart())}`;
        break;
      case 'remove_from_cart':
        removeFromCart(command.productId!);
        reply = `Removed from cart. Current cart: ${JSON.stringify(getCart())}`;
        break;
      case 'check_availability':
        reply = isAvailable(command.productId!)
          ? 'Product is available '
          : 'Product is out of stock ';
        break;
      default:
        reply = 'Command not recognized.';
    }

    return NextResponse.json({ reply });
  }

  // Fallback: forward messages to Groq
  const reply = await sendToGroq(messages);
  return NextResponse.json({ reply });
}
