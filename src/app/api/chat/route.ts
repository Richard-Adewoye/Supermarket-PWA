// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { sendToGroq, GroqMessage } from "../../lib/groqClient";
import { mockProducts_2, Product_2 } from "../../lib/mockProducts";
import { addToCart, removeFromCart, getCart, isAvailable, CartItem } from "../../lib/cartManager";

// Helper to find product by ID or name
function findProduct(query: string): Product_2 | undefined {
  return mockProducts_2.find(
    (p) => p.id.toString() === query || p.name.toLowerCase() === query.toLowerCase()
  );
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages?: GroqMessage[] } = await req.json();

    if (!messages) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1]?.content.toLowerCase() || "";

    let cartReply = "";

    // Detect cart commands
    if (lastMessage.startsWith("add ")) {
      const productQuery = lastMessage.replace("add ", "").trim();
      const product = findProduct(productQuery);
      if (product) {
        addToCart({ id: product.id.toString(), name: product.name }, 1);
        cartReply = `✅ Added ${product.name} to your cart!`;
      } else {
        cartReply = `❌ Sorry, we couldn't find "${productQuery}".`;
      }
    } else if (lastMessage.startsWith("remove ")) {
      const productQuery = lastMessage.replace("remove ", "").trim();
      const product = findProduct(productQuery);
      if (product) {
        removeFromCart(product.id.toString());
        cartReply = `🗑️ Removed ${product.name} from your cart.`;
      } else {
        cartReply = `❌ Sorry, we couldn't find "${productQuery}" in your cart.`;
      }
    } else if (lastMessage.includes("available") || lastMessage.includes("stock")) {
      const productQuery = lastMessage.replace(/.*available|stock/g, "").trim();
      const product = findProduct(productQuery);
      if (product && isAvailable(product.id.toString())) {
        cartReply = `Yes! ${product.name} is available for ${product.price}.`;
      } else {
        cartReply = `Sorry, ${productQuery || "that product"} is not available.`;
      }
    }

    // If no cart command, delegate to Groq
    const groqReply = cartReply || (await sendToGroq(messages, mockProducts_2));

    return NextResponse.json({ reply: groqReply, cart: getCart() });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
